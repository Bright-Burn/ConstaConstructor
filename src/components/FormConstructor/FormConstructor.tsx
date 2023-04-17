import { FC, useEffect } from 'react'
import { FormConstructorFormBlockConfigure } from './FormConstructorFormBlockConfigure'
import css from './styles.module.css'

export const FormConstructor: FC = () => {
  return (
    <div className={css.formConstructor}>
      <FormConstructorFormBlockConfigure>
        <FormConstructorFormBlockConfigure.ComponentsStructure />
        <FormConstructorFormBlockConfigure.WhiteFormBlock />
        <FormConstructorFormBlockConfigure.Settings />
      </FormConstructorFormBlockConfigure>
    </div>
  )
}
