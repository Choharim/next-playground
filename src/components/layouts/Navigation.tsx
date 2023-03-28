import styled from '@emotion/styled'
import Link from 'next/link'

import Chip from '../chip/Chip'

const PAGES: { [key in PageDirection]: string[] } = {
  '': [''],
  components: ['button', 'input', 'modal', 'select'],
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

const Navigation = () => {
  return (
    <HorizontalBox>
      {PAGE_DIRECTIONS.map((direction) =>
        PAGES[direction].map((page) => (
          <Link key={page} href={`/${direction}/${page}`}>
            <CustomChip>
              {direction} / {page}
            </CustomChip>
          </Link>
        ))
      )}
    </HorizontalBox>
  )
}

export default Navigation

const HorizontalBox = styled.nav`
  padding: 10px;
  height: 100%;
  width: fit-content;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.shadow.dropBox};
`

const CustomChip = styled(Chip)`
  white-space: nowrap;
  margin: 10px 0;
`
