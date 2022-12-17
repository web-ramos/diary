import { FC } from 'react'
import Icons from '../../media/icons.svg'
import './Icon.css'


interface PropsIcon {
  name: string,
  color?: string,
  size?: number
}

const Icon: FC<PropsIcon> = ({ name, color = 'currentColor', size = 24 }) => (
  <svg className={`icon ${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);


export default Icon;