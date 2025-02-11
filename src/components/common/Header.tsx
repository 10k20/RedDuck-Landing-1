import React from 'react';
import { Texture } from './../shared/Texture';
import './Header.scss';
 
export const Header = () => {
  return (
    <header>
      <Texture textureStyles={{left: '-552px', top: '-670px'}}/>
      <nav>
        <li>Expertise</li>
        <li>Services</li>
        <li>cases</li>
        <li>Career</li>
        <li>Education</li>
        <li>Blog</li>
        <li>Contact us</li>
        <li>About us</li>
        <li className='lang-changer'>En</li>
      </nav>
    </header>
  )
}