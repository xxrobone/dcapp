import React from 'react'
import {Link} from 'react-router-dom'

const NavItem = ({title, url, icon}) => {
  return (
    <>
       <Link to={url}> {icon} {title}</Link>
    </>
  )
}

export default NavItem