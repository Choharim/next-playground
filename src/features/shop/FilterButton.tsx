import styled from '@emotion/styled'

import { Filter, FILTER } from './useFilter'

import ShopButton from './ShopButton'
import { Dispatch, SetStateAction } from 'react'

const FILTER_TEXT: Record<Filter, string> = {
  all: '전체',
  new: 'New',
  normal: 'Basic',
}

type Props = {
  chioiced: Filter
  setChoiced: Dispatch<SetStateAction<Filter>>
}
const FilterButton = ({ chioiced, setChoiced }: Props) => {
  const clickFilter = (filter: Filter) => () => {
    setChoiced(filter)
  }

  return (
    <Container>
      {FILTER.map((filter) => (
        <ShopButton
          onClick={clickFilter(filter)}
          key={filter}
          variety={chioiced === filter ? 'contain-secondary' : 'text'}
        >
          {FILTER_TEXT[filter]}
        </ShopButton>
      ))}
    </Container>
  )
}

export default FilterButton

const Container = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-right: 16px;
  }
`
