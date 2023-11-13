import * as postcss from "postcss"
import * as postcssJs from "postcss-js"
import { readFileSync } from "fs"

export const cssToPlugin =
  (filepath: string) =>
  ({ addBase, addComponents, addUtilities }: Tailwind.UserPluginOptions) => {
    const css = readFileSync(filepath, "utf8")
    if (!css) return
    const root = postcss.parse(css)
    const jss = postcssJs.objectify(root)

    if ("@layer base" in jss) {
      addBase(jss["@layer base"] as postcssJs.CssInJs)
    }
    if ("@layer components" in jss) {
      addComponents(jss["@layer components"] as postcssJs.CssInJs)
    }
    if ("@layer utilities" in jss) {
      addUtilities(jss["@layer utilities"] as postcssJs.CssInJs)
    } else {
      addComponents(jss)
    }
  }
