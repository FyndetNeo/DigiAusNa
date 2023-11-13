import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import cn from "../../utils/cn"

interface TextInputProps {
  hint?: string
  label?: string
  id?: string
  required?: boolean
  readonly?: boolean
  type?: "text" | "password" | "email"
  tooltip?: {
    className?: string
    id?: string
    show?: boolean
    text: string
  }
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
  dataTestId?: string
  onEnter?: () => void
  showInvalid?: boolean
  className?: string
  onChange?: (text: string) => void
  value?: string | undefined
}
/**
 * Component for TextInput fields
 */

const TextInput = ({
  hint,
  label,
  id,
  required = false,
  readonly = false,
  type = "text",
  inputProps,
  dataTestId = "text-input",
  tooltip,
  onEnter,
  className,
  onChange,
  showInvalid = true,
  value,
}: TextInputProps) => {
  return (
    <div className="relative typo-text flex w-full flex-col gap-1">
      <input
        required={required}
        readOnly={readonly}
        aria-label={"input"}
        data-testid={dataTestId}
        id={id}
        {...inputProps}
        className={cn(
          "h-10 w-full order-2 peer rounded border bg-white/5 text-white border-white p-2",
          showInvalid &&
            "invalid:border-2 invalid:bg-red-200/20 invalid:text-white",
          className,
        )}
        type={type}
        value={value}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onEnter?.()
          }
        }}
        placeholder={hint}
        onChange={(e) => onChange?.call(this, e.target.value)}
      />
      {tooltip?.show && (
        <p
          id={tooltip?.id}
          className={cn(
            "order-3 absolute ml-4 mr-[-2rem] -translate-y-2 rounded-md bg-gray-800 px-2 py-1 text-sm text-white  transition-opacity duration-500 xs:ml-20 md:mr-[-4rem]",
            tooltip?.className,
          )}
        >
          {tooltip?.text}
        </p>
      )}
      {label && (
        <label
          htmlFor={id}
          className="peer-group inline-flex order-1 text-white"
        >
          {label}
          <span className=" ml-1 block peer-group-valid:hidden text-red-400">
            {required && "*"}
          </span>
        </label>
      )}
    </div>
  )
}

export default TextInput
