import { FC, useState } from 'react'
import clsx from 'clsx'
import styles from './Lang.module.css'
import { useTranslation } from 'react-i18next';


interface IProps {
  currentLang: string,
  listLang: any
}

interface Ilanguage {
  label: string,
  locale: string,
  key: string
}

const Lang: FC<IProps> = ({ currentLang, listLang }) => {
  const [lang, setLang] = useState(currentLang);
  const [hidden, setHidden] = useState(true);  

  const { t, i18n } = useTranslation();

  let currentLabel = listLang.find( (item: Ilanguage) => (item.key === lang))['label'];

  const handleChange = (event: any) => {
    const clickedElement = event.target.getAttribute('value');
    if (clickedElement) {
      setLang(clickedElement);
      i18n.changeLanguage(clickedElement)      
      setHidden(true);      
    } else {
      setHidden(!hidden);
    } 
    console.log(clickedElement);
  }

  return (
    <div className = {styles.selectLang} onClick = { handleChange }>
      <div className = { styles.currentLang }>{ currentLabel }</div>
      <ul className = { clsx({[styles.listLang]:true, [styles.open]: hidden}) }>
        { listLang.map( (item: Ilanguage) => {
          return (
            <li
              key = { item.key }
              value = { item.key }
              className = { clsx( styles.itemLang, lang === item.key ? `${styles.active}` : '' ) }
            >
              { item.label }
            </li>
          );
        }) }
      </ul>
    </div>
  )
}

export default Lang
