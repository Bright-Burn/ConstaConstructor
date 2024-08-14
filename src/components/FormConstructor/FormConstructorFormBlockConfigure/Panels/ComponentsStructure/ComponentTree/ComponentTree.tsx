import { getElemIdChildrenSelector, useAppSelector } from '../../../../store'

import { Tree } from './Tree'

import styles from './styles.module.css'

export const ComponentTree = () => {
  return (
    <div className={styles.commentTree}>
      <Tree />
    </div>
  )
}
