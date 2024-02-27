import React from 'react';
import Icons from './micros/Icons';
import style from '../styles/Menu.module.css'
import { Router, Switch } from 'express';
import { Route } from 'react-router-dom';
const Menu = () => {
  return (
    <section className={style.menu}>
        <h1>Livros</h1>
        <Icons />
    </section>
  );
};

export default Menu;
