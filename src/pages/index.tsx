import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import styled from '@emotion/styled'
import { dehydrate, QueryClient } from '@tanstack/react-query'

import { NextPageWithLayout } from '@/types/app'
import {
  useCategories,
  useInfiniteProducts,
} from '@/services/reactQuery/product/query'
import { productKey } from '@/services/reactQuery/product/key'
import { getCategories } from '@/services/axios/product'
import Category from '@/features/index/Category'
import ProductCard from '@/features/index/ProductCard'

import { getLayout } from '@/components/layouts/Layout'
import { useCallback, useRef } from 'react'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const DEFAULT_COUNT = 20

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(productKey.categories(), getCategories)
  // await queryClient.prefetchInfiniteQuery(
  //   productKey.list({ skip: 0, limit: DEFAULT_COUNT }),
  //   ({ queryKey }) => getProducts(queryKey[0])
  // )

  return {
    props: {
      title: '상품 리스트',
      description: '상품 리스트',
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
    isFetching,
    hasNextPage,
  } = useInfiniteProducts({ defaultCount: DEFAULT_COUNT })

  const fetchMore = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries

      if (target.isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    },

    [fetchNextPage, hasNextPage]
  )

  useIntersectionObserver({
    target: fetchTriggerRef.current,
    onCallback: fetchMore,
  })

  return (
    <Wrapper>
      {categories && <Category categories={categories} />}
      {productList?.pages.map((page) =>
        page.products.map((item) => (
          <Link key={item.id} href={`products/${item.id}`}>
            <ProductCard product={item} />
          </Link>
        ))
      )}
      {isFetching && <div>더 불러오는 중---------</div>}
      <div style={{ border: '1px solid red' }} ref={fetchTriggerRef} />
    </Wrapper>
  )
}

HomePage.getLayout = getLayout

export default HomePage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
