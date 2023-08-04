import { FC } from 'react'
import { FormConstructorFormBlockConfigure } from './FormConstructorFormBlockConfigure'
import css from './styles.module.css'

export const FormConstructor: FC = () => {
  return (
    <div className={css.formConstructor}>
      <FormConstructorFormBlockConfigure>
        <FormConstructorFormBlockConfigure.Header />
        <div className={`${css.formConstructorMain} container-row flex-grow-1`}>
          <FormConstructorFormBlockConfigure.ComponentsStructure />
          <FormConstructorFormBlockConfigure.WhiteFormBlock />
          <FormConstructorFormBlockConfigure.Settings />
        </div>
      </FormConstructorFormBlockConfigure>
    </div>
  )
}
