declare namespace Tailwind {
  type ValueType =
    | "any"
    | "color"
    | "url"
    | "image"
    | "length"
    | "percentage"
    | "position"
    | "lookup"
    | "generic-name"
    | "family-name"
    | "number"
    | "line-width"
    | "absolute-size"
    | "relative-size"
    | "shadow"

  interface AddOption {
    respectPrefix?: boolean
    respectImportant?: boolean
  }

  interface MatchOption {
    values?: ConfigObject
    type?: ValueType | ValueType[]
    supportsNegativeValues?: boolean
    filterDefault?: boolean
    respectPrefix?: boolean
    respectImportant?: boolean
  }

  type VariantFunc = (options: {
    container: import("postcss").Root
    separator: string
    // Private API
    wrap?(node: import("postcss").AtRule): void
    format?(selectorFormat: string): void
    modifySelectors?(
      modifierFunction: (payload: {
        get className(): string
        selector: string
      }) => string,
    ): import("postcss").Root
  }) => string | string[]

  type MatchVariantFunc = (options: { value: string }) => string | string[]

  interface UserPluginOptions {
    addDefaults(
      group: string,
      declarations: Record<string, string | string[]>,
    ): void

    /** Register new base styles. */
    addBase(bases: Styles | Styles[]): void

    /** Register new utilities. */
    addUtilities(utilities: Styles | Styles[], options?: AddOption): void

    /** Register new components. */
    addComponents(components: Styles | Styles[], options?: AddOption): void

    /** Register new utilities. */
    matchUtilities(
      utilities: Record<string, (value: CSSValue) => Styles | Styles[]>,
      options?: MatchOption,
    ): void

    /** Register new components. */
    matchComponents(
      components: Record<string, (value: CSSValue) => Styles | Styles[]>,
      options?: MatchOption,
    ): void

    /** Register a custom variant. */
    addVariant(
      variantName: string,
      variantFunc: string | VariantFunc | (string | VariantFunc)[],
      options?: Record<string, unknown>,
    ): void

    /**
     * Register an arbitrary variant.
     *
     * `config.experimental.matchVariant = true`
     * @experimental
     */
    matchVariant(
      variantName: string,
      variantFunc: MatchVariantFunc,
      options?: { values?: ConfigObject },
    ): void

    /** Look up values in the user's theme configuration. */
    theme: ResolvePath

    /** Look up values in the user's Tailwind configuration. */
    config: ResolvePath

    /** Escape strings meant to be used in class names. */
    e(classname: string): string

    /** Apply the user's configured prefix to parts of a selector. */
    prefix(selector: string): string

    /** @deprecated */
    variants(corePlugin: string): string[]

    // Check if a core plugin is enabled.
    corePlugins(feature: keyof CorePluginFeatures): boolean

    /** low-level manipulation with PostCSS directly */
    postcss: import("postcss").Postcss
  }

  type UserPluginFunction = (options: UserPluginOptions) => void

  interface UserPluginObject {
    handler?: UserPluginFunction
    config?: ConfigJS
    name?: string
    [key: string | symbol]: ConfigEntry
  }

  type UserPluginFunctionWithOption<Options = unknown> = (
    options?: Options,
  ) => UserPluginObject

  type Plugin = UserPluginObject | UserPluginFunction

  type PluginFunction<Options> = (options: Options) => UserPluginFunction
  type ConfigFunction<Options> = (options: Options) => ConfigJS

  /** Create a tailwind plugin with options. */
  type CreatePluginWithOptions = <Options = unknown>(
    pluginFunction: PluginFunction<Options>,
    configFunction?: ConfigFunction<Options>,
  ) => UserPluginFunctionWithOption<Options>

  interface CreatePlugin {
    (handler: UserPluginFunction, config?: ConfigJS): Plugin
    /** Create a tailwind plugin with options. */
    withOptions: CreatePluginWithOptions
  }
}
