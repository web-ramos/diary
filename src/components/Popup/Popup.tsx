import { FC, MouseEventHandler, ReactNode, useState } from 'react'
import Icon from '../Icon/Icon';
import styles from './Popup.module.css'

interface PropsPopup {
  openElement: ReactNode,
  classOpenElement: string | undefined,
  children: ReactNode
}

export const Popup: FC<PropsPopup> = ({ openElement, classOpenElement, children }) => {

  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const handleClose:MouseEventHandler<HTMLDivElement> = (event) => {
    console.log(event, event.target);
    setOpenPopup(false)
  }

  const handleOpen:MouseEventHandler<HTMLDivElement> = (event) => {
    console.log(event, event.target);
    setOpenPopup(true)
  }

  return (
    <>
      {openPopup &&
        <div className={styles.wrapperPopup}>
          <div className={styles.containerPopup}>
            <div className={styles.buttonClose} onClick={handleClose}><Icon name="icon-cancel-squared"/></div>
            {children}
          </div>
        </div>
      }
      <div className={classOpenElement} onClick={handleOpen}>
        {openElement}
      </div>
    </>
  )
}