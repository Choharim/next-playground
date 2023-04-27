import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
} from 'react'

/**
 * @description
 * 타입이 충돌날 경우, 두번째 제네릭 타입을 우선시합니다.
 */
type CombineType<Type, OverrideType> = OverrideType &
  Omit<Type, keyof OverrideType>

type WithAsProp<E extends ElementType> = {
  as?: E
}

export type PolymorphicComponentProps<
  E extends ElementType,
  Props
> = CombineType<ComponentPropsWithoutRef<E>, Props & WithAsProp<E>>

export type PolymorphicRef<E extends ElementType> =
  ComponentPropsWithRef<E>['ref']

type PolymorphicComponentPropsWithRef<
  E extends ElementType,
  Props
> = PolymorphicComponentProps<E, Props> & { ref?: PolymorphicRef<E> }

type AllElement = keyof HTMLElementTagNameMap

export type PolymorphicForwardRefComponent<Props> = <
  E extends React.ElementType = AllElement
>(
  props: PolymorphicComponentPropsWithRef<E, Props>
) => JSX.Element
