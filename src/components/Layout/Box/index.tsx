import { cn } from '@/libs'
import { ComponentPropsWithRef, forwardRef } from 'react'

export type BoxProps = ComponentPropsWithRef<'div'>

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ className, ...props }, ref) => {
    return <div className={cn(className)} {...props} ref={ref} />
  },
)

Box.displayName = 'Box'
