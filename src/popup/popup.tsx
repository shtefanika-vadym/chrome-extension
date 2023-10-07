import { FC } from 'react'

import PopupContent from 'popup/components/popup-content/popup-content'

import 'app/styles/index.scss'

interface Props {
  onClose?: () => void
}
export const Popup: FC<Props> = (props) => {
  return <PopupContent {...props} />
}
