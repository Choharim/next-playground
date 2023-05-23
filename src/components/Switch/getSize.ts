import { SwitchStyle } from '.'
import { PixelSize } from '@/shared/types/narrow'

const SIZE: Record<SwitchStyle['size'], PixelSize> = {
  small: '16px',
  medium: '20px',
  large: '24px',
}

const getSize = (size: SwitchStyle['size']) => {
  return SIZE[size]
}

export default getSize
