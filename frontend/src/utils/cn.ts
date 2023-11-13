import { isString } from "./isString"

/**
 * Helper Function to combine className strings, handles null or
 * undefined values and manages space between the given strings
 */
export default function cn(
  ...args: (string | false | null | undefined)[]
): string {
  return args.map((arg) => (isString(arg) ? arg?.trim() : "")).join(" ")
}
