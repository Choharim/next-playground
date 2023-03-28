import { NextPageWithLayout } from '@/types/app'
import { getLayout } from '@/components/layouts/Layout'

const IndexPage: NextPageWithLayout = () => {
  return <div>Index</div>
}

export default IndexPage

IndexPage.getLayout = getLayout
