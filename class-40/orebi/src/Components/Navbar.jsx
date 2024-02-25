
import React from 'react'
import Container from './../Layer/Container';
import Imges from '../Layer/Imges';
import LIstItem from './../Layer/LIstItem';
function Navbar() {
  return (
    <nav className=" bg-slate-100 py-8">
      <Container className="flex items-center justify-between p-2">
        <Imges
          src="src/assets/logo.png"
          alt="logo.png"
          href="#"

        />
        <ul className="w-full flex gap-10  justify-center">
          <LIstItem atag="Home" />
          <LIstItem atag="about" />
          <LIstItem atag="service" />
          <LIstItem atag="blog" />
          <LIstItem atag="contact" />
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
