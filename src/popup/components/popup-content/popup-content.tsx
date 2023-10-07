import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import classNames from 'classnames'

import { withProviders } from 'app/hoks'

import { Button, Tabs } from 'common/components'
import { useTheme } from 'common/hooks'

import styles from './popup-content.module.scss'

interface Props {
  onClose?: () => void
}

const PopupContent: FC<Props> = ({ onClose }) => {
  const { theme, toggleTheme } = useTheme()
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()
  console.log(language, t('result', {}))
  return (
    <div className={classNames(styles.parent, [theme])}>
      <Tabs
        items={[
          { title: t('result'), component: <p>{t('result')}</p> },
          { title: t('history'), component: <p>{t('history')}</p> },
          { title: t('settings'), component: <p>{t('settings')}</p> },
        ]}
      />
      <Button onClick={toggleTheme}>Switch Theme</Button>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default withProviders(PopupContent)
