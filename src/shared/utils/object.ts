export const joinKeyValuePayload = (obj: {
  [key in string]: number | string
}) => {
  const result: string[] = []

  for (const key in obj) {
    result.push(`${key}=${obj[key]}`)
  }

  return result.join('&')
}

export const assertField = <
  T extends { [field in Field]?: T[field] },
  Field extends string
>(
  obj: T,
  field: Field
): field is Field & keyof T => {
  if (!obj[field]) false
  return true
}

export const getSameKeyValueObject = <
  T extends Readonly<Array<string | number | symbol>>
>(
  arr: Readonly<T>
) => {
  return arr.reduce((acc, curr) => ({ ...acc, [curr]: curr }), {}) as Readonly<{
    [key in T[number]]: key
  }>
}
