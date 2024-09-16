import React from 'react'
import { IconSearchStroked } from '@consta/icons/IconSearchStroked'
import { TextField } from '@consta/uikit/TextField'

import { ComponentCard } from './ComponentCard'
import { componentCards } from './content'

import styles from './styles.module.css'

interface ComponentItemsProps {
  onSearch: (value: string | null) => void
  searchValue: string
}
export const ComponentItems: React.FC<ComponentItemsProps> = ({ onSearch, searchValue }) => {
  const filteredCards = componentCards.filter(component =>
    component.name.toLowerCase().includes(searchValue.toLowerCase()),
  )
  return (
    <>
      <TextField
        value={searchValue}
        size="xs"
        leftSide={IconSearchStroked}
        placeholder="component name"
        className="m-b-xs "
        onChange={onSearch}
      />
      <div className={styles.componentItems}>
        {filteredCards.map(cc => {
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
