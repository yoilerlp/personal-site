'use client'
import React from 'react'

import * as IconsObject from './Icons'
export type IconName = keyof typeof IconsObject

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number
  color?: string
  iconName?: IconName
  strokeWidth?: number
}

type IconWrapperProps = IconProps & {
  iconName: IconName
}

export const Icon = ({
  iconName,
  size,
  color = 'black',
  ...restProps
}: IconWrapperProps) => {
  const IconComponent = IconsObject[iconName]
  if (!IconComponent) return null
  return (
    <IconComponent
      {...restProps}
      size={size}
      color={color}
      className={`${restProps.className} icon-component`}
    />
  )
}

export default Icon
