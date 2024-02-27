import React from 'react';
import style from '../../styles/Icon.module.css';

const Icon = ({ img, text }) => {
  function background(text) {
    console.log(text);
    if (text === 'Livros') return '#0C4447,#1F6064';
    if (text === 'Editoras') return '#201E67,#3E3C94';
    if (text === 'Autores') return '#810D37,#9F2651';
  }

  return (
    <li className={style.icon}>
      <div
        className={style.img}
        style={{ background: `linear-gradient(${background(text)})` }}
      >
        <img src={img} alt="" />
      </div>
      <p>{text}</p>
    </li>
  );
};

export default Icon;
