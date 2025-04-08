import type { ComponentPropsWithoutRef } from "react"
import s from "./Button.module.css"
import clsx from "clsx"
import { Slot } from "@radix-ui/react-slot"


type Props = {
  variant?: "primary" | "secondary" | "outlined"
  asChild?:boolean
} & ComponentPropsWithoutRef<"button">


export const Button = (props: Props) => {

  const { children, className,asChild, variant='primary', ...rest } = props

  const classNames = clsx(s.button,s[variant],className);
  const Component = asChild ? Slot : 'button'
  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  )
}
