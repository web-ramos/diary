import { FC } from 'react'
import Icons from '../../media/icons.svg'
import './Icon.css'


interface PropsIcon {
  name: string,
  color?: string,
  size?: number
}

const Icon: FC<PropsIcon> = ({ name, color = 'currenColor', size = 24 }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);


export default Icon;