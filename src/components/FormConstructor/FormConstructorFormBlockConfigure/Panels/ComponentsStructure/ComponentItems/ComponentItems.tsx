import { useState } from 'react'
import { IconSearchStroked } from '@consta/icons/IconSearchStroked'
import { TextField } from '@consta/uikit/TextField'

import { ComponentCard } from './ComponentCard'
import { componentCards } from './content'

import styles from './styles.module.css'

export const ComponentItems = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const onSearch = (value: string | null) => {
    setSearchValue(value ?? '')
  }
  return (
    <>
      <TextField
        value={searchValue}
        size="xs"
        leftSide={IconSearchStroked}
        placeholder="component name"
        className="m-b-xs p-l-xs p-r-xs"
        onChange={onSearch}
      />
      <div className={styles.componentItems}>
        {componentCards
          .filter(component => component.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map(cc => {
            return (
              <ComponentCard
                key={cc.id}
                id={cc.id}
                name={cc.name}
                formElementType={cc.formElementType}
                groupElementType={cc.groupElementType}
                isOuter={cc.isOuter}
              />
            )
          })}
      </div>
    </>
  )
}
