import React from 'react';
import * as S from './index.style';

const Button = (props: any) => {
  return <S.Button {...props}>{props.title}</S.Button>
};

export default Button;
