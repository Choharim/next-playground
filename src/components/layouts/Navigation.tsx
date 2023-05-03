import Link from 'next/link'
import { useTheme } from '@emotion/react'
import { css } from '@emotion/css'

import Chip from '../Chip'
import Flex from '../Flex'

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
  const theme = useTheme()

  return (
    <Flex
      as="nav"
      direction="column"
      gap="10px"
      className={css`
        padding: 10px;
        height: 100%;
        width: fit-content;

        ${theme.shadow.dropBox};
      `}
    >
      {PAGE_DIRECTIONS.map((direction) =>
        PAGES[direction].map((page) => (
          <Link key={page} href={getPath(direction, page)}>
            <Chip typoVariety="body_4">
              {direction} / {page}
            </Chip>
          </Link>
        ))
      )}
    </Flex>
  )
}

export default Navigation
