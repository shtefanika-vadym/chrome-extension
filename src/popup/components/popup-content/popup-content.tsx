import { FC } from 'react'

import classNames from 'classnames'

import { withProviders } from 'app/hoks'

import { Button } from 'common/components'
import { useTheme } from 'common/hooks'

import styles from './popup-content.module.scss'

interface Props {
  onClose?: () => void
}

const PopupContent: FC<Props> = ({ onClose }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames(styles.parent, [theme])}>
      <Button onClick={toggleTheme}>Switch Theme</Button>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default withProviders(PopupContent)
