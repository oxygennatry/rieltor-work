import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from '../../Image/Image'; // Импортируйте Image компонент
import { HeaderStyle } from './Header.style';
import styled from "styled-components";


interface HeaderProps {
  logoSrc?: string;
} 

export const Header = ({ logoSrc, ...rest }: HeaderProps) => {

  const navigate = useNavigate();

  const goToNextPage = () => {
      navigate("/registration-page");
  };
 

  return (
    <HeaderStyle>
      <button className='logo' onChange={goToNextPage}><img src="https://cdn.discordapp.com/attachments/1177350237602447390/1303753389959548929/4e7663b79cfa6ae3.png?ex=672ce676&is=672b94f6&hm=43fb7414b9b0b37b456360f1fd6420a6fe1e13aa678311f3704bea853637057d&" alt="" /></button>
      <input type="search" />
      <button className='headerBtn'>Купить</button>
      <button className='headerBtn'>Продать</button>
      <button className='headerBtn'>Аренда</button>
      <button className='headerBtn'>Ипотека</button>
      <button className='headerBtn'>Мой дом</button>
      <button className='headerBtn'>Вход</button>
      <button className='button'><img src="https://banner2.cleanpng.com/20180409/bhq/kisspng-computer-icons-user-profile-clip-art-write-5acbb361786d67.8983795715232991694933.jpg" alt="register" className='icon'/></button>
    </HeaderStyle>
      
      
   
  );
};