import { cn } from '@/libs'
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types'
import { VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'

const textVariants = cva('w-full', {
  variants: {
    emphasis: {
      low: 'text-gray-600 font-light',
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    weight: {
      thin: 'font-thin',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      black: 'font-black',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline underline-offset-2',
    },
  },
  defaultVariants: {
    size: 'base',
    align: 'left',
  },
})

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof textVariants>
>

type TextComponent = <C extends React.ElementType = 'span'>(
  props: TextProps<C>,
) => React.ReactElement | null

// @ts-expect-error - unexpected typing errors
// eslint-disable-next-line react/display-name
export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = 'span'>(
    {
      as,
      align,
      size,
      emphasis,
      italic,
      underline,
      weight,
      className,
      ...props
    }: TextProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as ?? 'span'

    return (
      <Component
        ref={ref}
        className={cn(
          textVariants({
            size,
            weight,
            emphasis,
            italic,
            underline,
            align,
            className,
          }),
        )}
        {...props}
      />
    )
  },
)
