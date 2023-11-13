declare namespace Tailwind {
  type CSSValue = string | number

  type CSSTYPE = import("csstype").Properties<CSSValue>

  interface DefinedCSSProperties extends ConfigObject, CSSTYPE {}

  interface CSSProperties extends ConfigObject {
    [key: string | symbol]: CSSProperties | DefinedCSSProperties | CSSValue
  }

  type Styles = CSSProperties | import("postcss").Node

  type Primitive =
    | string
    | bigint
    | number
    | boolean
    | symbol
    | null
    | undefined

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Func = (...args: any) => any

  type ConfigValue = Func | Primitive

  type ConfigObject = Record<string, ConfigEntry>

  type ConfigArray = ConfigEntry[]

  type ConfigEntry = ConfigValue | ConfigArray | Record<string, ConfigEntry>
}
