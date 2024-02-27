import React from 'react';
import book from '../../img/book.svg';
import editora from '../../img/editora.svg';
import escritora from '../../img/escritora.svg';
import Icon from './Icon';
import style from '../../styles/Icons.module.css';

const Icons = () => {
  const iconsArray = [
    {
      icon: book,
      text: 'Livros',
    },
    {
      icon: editora,
      text: 'Editoras',
    },
    {
      icon: escritora,
      text: 'Autores',
    },
  ];

  return (
    <ul className={style.icons}>
      {iconsArray.map((icon, id) => {
        return <Icon key={id} text={icon.text} img={icon.icon} />;
      })}
    </ul>
  );
};

export default Icons;
