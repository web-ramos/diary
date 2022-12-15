import { FC } from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as ReactLogo} from '../../media/svg-logo.svg';

export const Logo: FC = () => {
  return (
    <Link to="/">
      <ReactLogo />
    </Link>
  )
}