import React from "react";
import { Header } from './styles'

export default function header() {
  return(
    <Header>
      <div className="logo">
      <a href="#"><img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' alt='logo' /></a>
      </div>
      <div class="user">
      <a href="#"><img src='https://avatars.githubusercontent.com/u/70274409?v=4' alt='user' /></a>
      </div>
    </Header>
  )
}