import Link from 'next/link'
import { css, useTheme } from '@emotion/react'
import { useRouter } from 'next/router'

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
  const theme = useTheme()

  return (
    <Flex
      as="nav"
      direction="column"
      gap="10px"
      css={css`
        padding: 10px;
        height: 100%;
        width: fit-content;

        ${theme.shadow.dropBox};
      `}
    >
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
    </Flex>
  )
}

export default Navigation
