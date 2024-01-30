import { ReactNode } from "react"
import cn from "../../utils/cn"

interface ButtonProps {
  onClick?: () => void
  children?: ReactNode
  customClassName?: string
}
export function Button({ onClick, children, customClassName }: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={cn("bg-blue-500 p-2 rounded text-cyan-50", customClassName)}
      >
        {children}
      </button>
    </>
  )
}
