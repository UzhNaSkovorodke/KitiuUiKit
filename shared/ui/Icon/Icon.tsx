//import ThemeDark from './icons/theme-dark.svg?react' for vite
import ThemeDark from './icons/theme-dark.svg'
import ThemeLight from './icons/theme-light.svg'
import ShowEye from './icons/eye.svg'
import MenuHamburger from './icons/mune_hamburger.svg'
import Image from "next/image";

interface IconProps {
  name?: IconName
  width?: string
  height?: string
  alt?: string
  onClick: () => void
  className?: string
}

export const Icon = ({ name, width, height,alt, ...rest }: IconProps) => {
  if (!name) {
    return null
  }
  //const Component = ICON_TYPE_MAP[name]
  //return <Component width={width ?? ''} height={height ?? ''} {...rest} />
  return <Image src={ThemeDark} alt={alt ?? ''} {...rest} />
}

export type IconName = keyof typeof ICON_TYPE_MAP

export const ICON_TYPE_MAP = {
  ThemeDark: ThemeDark,
  ThemeLight: ThemeLight,
  ShowEye: ShowEye,
  MenuHamburger: MenuHamburger,
} as const
