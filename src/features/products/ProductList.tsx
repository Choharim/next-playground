import React, { useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'

import { Product } from '@/domain/product/type'
import { useInfiniteProducts } from '@/services/reactQuery/product/query'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import {
  useChoicedCategory,
  useSearchedKeyword,
} from './context/fillterProvider'

export const PRODUCTS_DEFAULT_COUNT = 20

const ProductList = () => {
  const fetchTriggerRef = useRef<HTMLDivElement>(null)
  const choicedCategory = useChoicedCategory()
  const searchedSearch = useSearchedKeyword()

  const {
    isLoading,
    isSuccess,
    data: productList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteProducts({
    limit: PRODUCTS_DEFAULT_COUNT,
    skip: 0,
    category: choicedCategory,
    q: searchedSearch || undefined,
  })

  useIntersectionObserver({
    targetRef: fetchTriggerRef,
    onCallback: useCallback(
      ([target]) => {
        if (target.isIntersecting && hasNextPage) {
          fetchNextPage()
        }
      },
      [fetchNextPage, hasNextPage]
    ),
  })

  return (
    <>
      {isSuccess &&
        (!productList.pages[0].total ? (
          <div>검색 결과가 없습니다.</div>
        ) : (
          productList.pages.map((page) =>
            page.products.map((item) => (
              <Link key={item.id} href={`products/${item.id}`}>
                <ProductCard product={item} />
              </Link>
            ))
          )
        ))}
      <div ref={fetchTriggerRef} />
      {(isFetchingNextPage || isLoading) && <div>로딩 중</div>}
    </>
  )
}

export default ProductList

type ProductCardProps = {
  product: Product
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image
          src={product.thumbnail}
          alt={`${product.description}`}
          width={250}
          height={200}
        />
      </ImageWrapper>
    </CardWrapper>
  )
}

const CardWrapper = styled.div``

const ImageWrapper = styled.div``
