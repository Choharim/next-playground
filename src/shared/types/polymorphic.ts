import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
} from 'react'
import { CombineType } from './extendable'

type WithAsProp<E extends ElementType> = {
  as?: E
}

export type PolymorphicComponentProps<
  E extends ElementType,
  Props = unknown
> = CombineType<ComponentPropsWithoutRef<E>, Props & WithAsProp<E>>

export type PolymorphicRef<E extends ElementType> =
  ComponentPropsWithRef<E>['ref']

export type PolymorphicComponentPropsWithRef<
  E extends ElementType,
  Props
> = PolymorphicComponentProps<E, Props> & { ref?: PolymorphicRef<E> }
