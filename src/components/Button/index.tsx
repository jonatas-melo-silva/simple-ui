import { cn } from '@/libs'
import { ComponentProps } from 'react'
import { ClassNameValue } from 'tailwind-merge'

const base = 'text-sky-500' as ClassNameValue

export type ButtonProps = ComponentProps<'button'>

export function Button({ className, ...props }: ButtonProps) {
  return <button className={cn(base, className)} {...props} />
}
