import React, { FC, useState } from 'react'
import clsx from 'clsx'
import styles from './Lang.module.css'
import { useTranslation } from 'react-i18next';
import { ILanguage } from '../../types/types';


interface ILangProps {
  currentLang: string,
  listLang: any
}

const Lang: FC<ILangProps> = ({ currentLang, listLang }) => {
  const [lang, setLang] = useState<string>(currentLang);
  const [hidden, setHidden] = useState<boolean>(true);  

  const { i18n } = useTranslation();

  let currentLabel = listLang.find( (item: ILanguage) => (item.key === lang))['label'];

  const handleChange = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;    
    const clickedElement = target.getAttribute('value');  

    if (clickedElement) {
      setLang(clickedElement);
      i18n.changeLanguage(clickedElement)      
      setHidden(true);      
    } else {
      setHidden(!hidden);
    } 
  }

  return (
    <div className = {styles.selectLang} onClick = { handleChange }>
      <div className = { styles.currentLang }>{ currentLabel }</div>
      <ul className = { clsx({[styles.listLang]:true, [styles.open]: hidden}) }>
        { listLang.map( (item: ILanguage) => {
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
