import FilterButton from '@/features/shop/FilterButton'
import Foods from '@/features/shop/Foods'
import useFilter from '@/features/shop/useFilter'
import styled from '@emotion/styled'

const Shop = () => {
  const { choicedFilter, setChoicedFilter, foods } = useFilter()
  return (
    <Frame>
      <Wrapper>
        <FilterButton chioiced={choicedFilter} setChoiced={setChoicedFilter} />
        {foods && <Foods foods={foods} />}
      </Wrapper>
    </Frame>
  )
}

export default Shop

const Frame = styled.div`
  padding: 32px 48px 48px;
  min-height: 100%;
  background-color: ${({ theme }) => theme.color.grey100};
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1444px;
`
