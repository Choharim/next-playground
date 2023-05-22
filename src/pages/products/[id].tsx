import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

import { getProduct } from '@/services/axios/product'
import { productKey } from '@/services/reactQuery/product/key'
import { queryClient } from '@/services/reactQuery/queryClient'
import { NextPageWithLayout } from '@/shared/types/layout'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const product = await queryClient.fetchQuery(
      productKey.detail({ id: Number(context.query.id) }),
      ({ queryKey }) => getProduct(queryKey[0])
    )

    return {
      props: {
        title: product.title,
        description: product.description,
        product,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

const ProductDetailsPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ product }) => {
  return (
    <div>
      <span>이름: {product.title}</span>
      <span>설명: {product.description}</span>
      <span>가격: {product.price}</span>
      <span>남은 수량: {product.stock}</span>
    </div>
  )
}

export default ProductDetailsPage
