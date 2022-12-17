import { FC, ReactNode, useState } from 'react'
import { useSelector } from 'react-redux'
import { DEFAULT_CONTEXT_ICON } from '../../constants/default'
import Icon from '../Icon/Icon'
import { Popup } from '../Popup/Popup'
import styles from './IconPicker.module.css'

export const IconPicker: FC = () => {

  const icons: string[]  = useSelector((state: any) => state.diary.sprite)
  const openElement = <Icon name={DEFAULT_CONTEXT_ICON} />

  return (
      <Popup
        openElement={openElement}
        classOpenElement={styles.iconEditButton}>
          <div className={styles.wrapper}>
            {icons.map((item: string) =>
              <div className={styles.icon} key={item}>
                <Icon name={item}/>
              </div>
            )}
          </div>
      </Popup>
  )
}