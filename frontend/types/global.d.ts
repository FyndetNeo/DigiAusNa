export type CSSProps = Record<`--${string}`, number | string>

declare module "react" {
  interface CSSProperties extends CSS.Properties<string | number>, CSSProps {}
}
