import React from 'react';
import styles from './Header.module.css';
import logo from './img/Logo.svg'
import like from './img/Component 1.svg'
import person from './img/Component 2.svg'
import basket from './img/Component 3.svg'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo}></img>
        <navbar>
          <a href='#'>Shop</a>
          <a href='#'>Man</a>
          <a href='#'>Women</a>
          <a href='#'>Combos</a>
          <a href='#'>Joggers</a>
        </navbar>
        <div className={styles.buttons}>
          <button><img src={like}></img></button>
          <button><img src={person}></img></button>
          <button><img src={basket}></img></button>
        </div>
      </header>
    </>
  )
};

export default Header;