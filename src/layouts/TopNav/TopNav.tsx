import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './TopNav.module.css'
import Logo from '../Logo/Logo'
import Lang from '../Lang/Lang';
import { useTranslation } from 'react-i18next';

interface Ilanguage {
  label: string,
  locale: string,
  key: string
}

const languages: Ilanguage[] = [
  {
    label: 'ENG',
    locale: 'EN_en',
    key: 'en'
  },
  {
    label: 'RUS',    
    locale: 'RU_ru',
    key: 'ru'
  }
]


const TopNav: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.mainMenu}>
          <ul>
            <li>
              <Link to="/">{t('Home')}</Link>
            </li>
            <li>
              <Link to="/projects">{t('Projects')}</Link>
            </li>          
            <li>
              <Link to="/contexts">{t('Contexts')}</Link>
            </li>
          </ul>      
        </nav>
        <div className={styles.lang}>
            <Lang currentLang = 'en' listLang = { languages } />
        </div>
    </div>
  )
}

export default TopNav
