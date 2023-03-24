import path from 'path'
import { promises as fs } from 'fs'
import { Cart } from '@/domain/cart/type'

const getCartDirectory = () => {
  const directory = path.join(
    process.cwd(),
    'src/services/db',
    'cart/cart.json'
  )

  return directory
}

export const readCartFile = async () => {
  const directory = getCartDirectory()
  const contents = await fs.readFile(directory, 'utf8')

  return contents
}

export const writeCartFile = async (cart: Cart[]) => {
  const directory = getCartDirectory()

  fs.writeFile(directory, JSON.stringify({ cart }))
}
