import { useCallback, useRef } from 'react'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import styled from '@emotion/styled'
import { dehydrate, InfiniteData, QueryClient } from '@tanstack/react-query'

import { NextPageWithLayout } from '@/types/app'
import {
  useCategories,
  useInfiniteProducts,
} from '@/services/reactQuery/product/query'
import { productKey } from '@/services/reactQuery/product/key'
import { getCategories, getProducts } from '@/services/axios/product'
import Category from '@/features/index/Category'
import ProductCard from '@/features/index/ProductCard'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import { ProductList } from '@/services/axios/product/type'
import { queryClient } from '@/services/reactQuery/queryClient'

import { getLayout } from '@/components/layouts/Layout'

const DEFAULT_COUNT = 20
const OPTION: IntersectionObserverInit = {
  root: null,
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(productKey.categories(), getCategories)
  await queryClient.prefetchInfiniteQuery(
    productKey.list({ limit: DEFAULT_COUNT, skip: 0 }),
    ({ queryKey }) => getProducts(queryKey[0])
  )

  return {
    props: {
      title: '상품 리스트',
      description: '상품 리스트',
      /**
       * @description
       * prefetchInfiniteQuery에서 pageParams에 첫번째 인자가 null이라 seralize 에러가 발생한다.
       */
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  }
}

const HomePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const fetchTriggerRef = useRef<HTMLDivElement>(null)
  const { data: categories } = useCategories()
  const {
    data: productList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteProducts({ defaultCount: DEFAULT_COUNT })

  /**
   * @description
   * hydration 에러 해결
   */
  queryClient.setQueryData<InfiniteData<ProductList>>(
    productKey.list({ limit: DEFAULT_COUNT, skip: 0 }),
    (older) => (older ? { ...older, pageParams: [0] } : older)
  )

  useIntersectionObserver({
    target: fetchTriggerRef.current,
    onCallback: useCallback(
      ([target]) => {
        if (target.isIntersecting && hasNextPage) {
          fetchNextPage()
        }
      },
      [fetchNextPage, hasNextPage]
    ),
    options: OPTION,
  })

  return (
    <>
      <Wrapper>
        {categories && <Category categories={categories} />}
        {productList?.pages?.map((page) =>
          page.products.map((item) => (
            <Link key={item.id} href={`products/${item.id}`}>
              <ProductCard product={item} />
            </Link>
          ))
        )}
        <div ref={fetchTriggerRef} />
        {isFetchingNextPage && <div>로딩 중</div>}
      </Wrapper>
    </>
  )
}

HomePage.getLayout = getLayout

export default HomePage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
