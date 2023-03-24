import path from 'path'
import { promises as fs } from 'fs'

const getFoodsDirectory = () => {
  const directory = path.join(
    process.cwd(),
    'src/services/db',
    'foods/foods.json'
  )

  return directory
}

export const readFoodsFile = async () => {
  const directory = getFoodsDirectory()
  const contents = await fs.readFile(directory, 'utf8')

  return contents
}
