import { Text } from '@consta/uikit/Text'
import styles from './styles.module.css'
import {
  DECLINE_ACTION_MAC,
  DECLINE_ACTION_WIN,
  DECLINE_TEXT,
  DELETE,
  DELETE_ELEMENT_MAC,
  DELETE_ELEMENT_WIN,
  HIDE_SHOW_PANELS,
  HIDE_SHOW_PANELS_MAC,
  HIDE_SHOW_PANELS_WIN,
} from './content'

export const HotKeyPaneNote = () => {
  return (
    <div className={styles.hotKeyPane}>
      <div className={styles.hotKeyPaneMac}>
        <Text size={'l'}>Mac</Text>
        <Text>
          {DECLINE_TEXT} - {DECLINE_ACTION_MAC}
        </Text>
        <Text>
          {HIDE_SHOW_PANELS} - {HIDE_SHOW_PANELS_MAC}
        </Text>
        <Text>
          {DELETE} - {DELETE_ELEMENT_MAC}
        </Text>
      </div>
      <div className={styles.hotKeyPaneWin}>
        <Text size={'l'}>Windows/Linux</Text>
        <Text>
          {DECLINE_TEXT} - {DECLINE_ACTION_WIN}
        </Text>
        <Text>
          {HIDE_SHOW_PANELS} - {HIDE_SHOW_PANELS_WIN}
        </Text>
        <Text>
          {DELETE} - {DELETE_ELEMENT_WIN}
        </Text>
      </div>
    </div>
  )
}

