import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import Flex from '../Flex'
import CheckChip from '../Chip/CheckChip'

const PAGES: { [key in PageDirection]: string[] } = {
  '': [''],
  components: ['button', 'chip', 'input', 'dropdown', 'modal', 'toast'],
  products: [''],
  recursive: ['folder'],
  shop: ['order', ''],
}

type PageDirection = (typeof PAGE_DIRECTIONS)[number]

const PAGE_DIRECTIONS = [
  '',
  'components',
  'products',
  'recursive',
  'shop',
] as const

const getPath = (direction: string, page: string) => {
  return `/${direction}${!!page ? `/${page}` : ''}`
}

const Navigation = () => {
  const router = useRouter()

  return (
    <LinkContainer as="nav" direction="column" gap="10px">
      {PAGE_DIRECTIONS.map((direction) =>
        PAGES[direction].map((page) => (
          <Link key={page} href={getPath(direction, page)}>
            <CheckChip
              htmlFor="navigationChip"
              typoVariety="body_4"
              checked={router.pathname === getPath(direction, page)}
            >
              {direction} / {page}
            </CheckChip>
          </Link>
        ))
      )}
    </LinkContainer>
  )
}

export default Navigation

const LinkContainer = styled(Flex)`
  padding: 10px;
  height: 100%;
  width: fit-content;

  ${({ theme }) => theme.shadow.dropBox};
`
