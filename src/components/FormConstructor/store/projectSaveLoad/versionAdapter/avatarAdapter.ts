import { AvatarProps } from '../../../coreTypes'
import { AvatarProps_Deprecated } from './deprecatedTypes'

export type AvatarAdapter = (
  buttonInstanceId: string,
  deprecated: AvatarProps_Deprecated,
) => AvatarProps

export const avatarAdapter: AvatarAdapter = (id, deprecated) => {
  console.log(`Run avatar adapter with id=${id}`)
  const avatarProps: AvatarProps = {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    constaProps: {
      form: deprecated.form,
      monochrome: deprecated.monochrome,
      name: deprecated.name,
      size: deprecated.size,
      url: deprecated.url,
    },
    styles: {},
  }
  return avatarProps
}
