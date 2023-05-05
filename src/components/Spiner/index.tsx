import { ColorKey } from '@/theme/type'
import { useSpinerTheme } from './useSpinerTheme'

export interface SpinerTheme {
  spinerColor: ColorKey
  spinerSize: number
}

const Spiner = ({
  spinerColor = 'primary400',
  spinerSize = 22,
}: Partial<SpinerTheme>) => {
  const theme = useSpinerTheme({ spinerColor, spinerSize })

  return <span role="status" className={theme} />
}

export default Spiner
