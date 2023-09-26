import { FC } from 'react'

import styles from './popup.module.scss'

interface Props {
  onClose?: () => void
}

export const Popup: FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.parent}>
      <button onClick={onClose}>Close</button>
    </div>
  )
}
