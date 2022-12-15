import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { daysOfWeek } from '../../constants/week'
import styles from './Footer.module.css'


const Footer: FC = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date])

  const addZero = (num: number): string => {
    return num < 10 ? '0' + num.toString() : num.toString();
  }

  return (
    <div className={styles.footer}>
      <div className={styles.version}>Diary 0.1.0</div>
      <div className={styles.date}>
        {`
          ${t(daysOfWeek[date.getDay()])}
          ${addZero(date.getHours())}:
          ${addZero(date.getMinutes())}:
          ${addZero(date.getSeconds())}
          ${date.getDate()}/
          ${date.getMonth() + 1}/
          ${date.getFullYear()}
        `}
      </div>
    </div>
  )
}

export default Footer
