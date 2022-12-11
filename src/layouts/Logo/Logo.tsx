import React from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as ReactLogo} from '../../media/svg-logo.svg';

export default function Logo() {
  return (
    <Link to="/">
      <ReactLogo />
    </Link>
  )
}