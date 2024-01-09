import { cn } from '@/libs'
import { VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'

const stackVariants = cva('flex flex-col items-start')

export type StackProps = BoxProps & VariantProps<typeof stackVariants>

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box className={cn(stackVariants({ className }))} {...props} ref={ref} />
    )
  },
)

Stack.displayName = 'Stack'
