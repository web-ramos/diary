import { FC } from 'react'
import clsx from 'clsx'
import Icon from '../Icon/Icon'
import styles from './ListItem.module.css'

interface PropsListItem {
  deleteHandler: (text: string) => void,
  item: any,
  children?: React.ReactNode
}

export const ListItem: FC<PropsListItem> = ({ item, deleteHandler, children}) => {
  return (
    <li className={clsx({
      [styles.item] : true,
      [styles.deleted] : item.deleted
    })}>
      <div className={styles.short}>
        <div className={styles.name}>{item.name}</div>
        <div className={clsx(styles.action, styles.remove)} onClick={() => deleteHandler(item.id)}>
          <Icon name="icon-remove" />
        </div>
        <div className={clsx(styles.action, styles.edit)}>
          <Icon name="icon-edit" />
        </div>
      </div>
      <div className={styles.desc}>
        <div className="description">{item.description}</div>
      </div>
      {children}
    </li>
  );
}