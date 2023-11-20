import * as React from 'react'
import { forwardRef } from 'react'

import Link from 'next/link'
import s from './LinkBase.module.scss'


type ElementProps = Omit<JSX.IntrinsicElements['a'], 'ref'>

export interface LinkBaseProps extends ElementProps {}

export const LinkBase = forwardRef<HTMLAnchorElement, LinkBaseProps>(
  ({ className, children, href = '', ...rest }, ref) => {
    return (
      <Link className={`button, ${className}`} ref={ref} href={href} {...rest}>
        {children}
      </Link>
    )
  }
)

LinkBase.displayName = 'LinkBase'
