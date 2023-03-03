import { InferGetStaticPropsType } from 'next'

import { NextPageWithLayout } from '@/types/app'

import { getLayout } from '@/components/layouts/Layout'

export async function getStaticProps() {
  return {
    props: {
      title: 'home 페이지',
      description: 'test',
    },
  }
}

const HomePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <div>home</div>
}

HomePage.getLayout = getLayout

export default HomePage
