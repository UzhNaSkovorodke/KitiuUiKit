type Mods = Record<string, boolean | string>

// ВАРИАНТ С MODS
// export function classNames(cls: string[] | string, mods: Mods, additional: string[]): string {
//   return [
//     Array.isArray(cls) ? cls.join(' ') : cls,
//     ...additional,
//     ...Object.entries(mods)
//       .filter(([value]) => Boolean(value))
//       .map(([className]) => className),
//   ].join(' ')
// }
export function classNames(cls: string[] | string, additional: string[]): string {
  return [Array.isArray(cls) ? cls.join(' ') : cls, ...additional].join(' ')
}
