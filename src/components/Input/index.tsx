import { cn } from '@/libs'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentPropsWithRef, forwardRef } from 'react'

const inputVariants = cva(
  'w-full border border-gray-200 p-2 rounded-lg transition-all duration-100 outline-none focus:outline-primary-500 focus:border-transparent placeholder:text-gray-400 placeholder:text-sm',
)

export type InputProps = ComponentPropsWithRef<'input'> &
  VariantProps<typeof inputVariants>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      autoComplete="off"
      className={cn(inputVariants(), className)}
      ref={ref}
      {...props}
    />
  ),
)

Input.displayName = 'Input'
