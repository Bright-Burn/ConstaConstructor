import React from 'react'
import FormConstructorFormBlockConfigure from './FormConstructorFormBlockConfigure'
import css from './styles.module.css'

export const FormConstructor = () => {
  return (
    <div className={css.formConstructor}>
      <FormConstructorFormBlockConfigure>
        <FormConstructorFormBlockConfigure.ConpomonentStructure />
        <FormConstructorFormBlockConfigure.WhiteFormBlock />
        <FormConstructorFormBlockConfigure.Settings />
      </FormConstructorFormBlockConfigure>
    </div>
  )
}
