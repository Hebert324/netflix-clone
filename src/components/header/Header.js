import React from "react";
import { Header, Black } from './styles'

export default function header() {
  return(
        <Black>
          <Header className="">
            <div className="logo">
            <a href="/" rel="noreferrer"><img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' alt='logo' /></a>
            </div>
            <div className="user">
            <a href="/" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" /></a>
            </div>
          </Header>
        </Black>
  )
}