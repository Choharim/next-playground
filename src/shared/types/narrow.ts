export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>
  }[Keys]

export type RequiredFields<T, U extends keyof T> = Required<Pick<T, U>> &
  Omit<T, U>

export type RequiredAtLeastOne<T> = {
  [K in keyof T]: { [L in K]: T[L] } & { [L in Exclude<keyof T, K>]?: T[L] }
}[keyof T]

export type PixelSize<T extends number = number> = `${T}px`
