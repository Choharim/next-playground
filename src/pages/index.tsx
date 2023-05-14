import { getLayout } from '@/components/Layout'
import { NextPageWithLayout } from '@/shared/types/layout'

const IndexPage: NextPageWithLayout = () => {
  return <div>Index</div>
}

export default IndexPage

IndexPage.getLayout = getLayout
