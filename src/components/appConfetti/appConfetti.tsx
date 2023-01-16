import React from 'react';
import ReactDOM from 'react-dom';
import Confetti from 'react-confetti';
import { useWindowWidth } from '@react-hook/window-size';

// сыпем конфетти на весь экран
const modalRoot = document.getElementById('modals') as HTMLElement;

const AppConfetti = () => {
  // берем ширину окна и отнимаем немного, что бы полоса прокрутки не вызывала горизонтальный скролл
  const width = useWindowWidth();
  return ReactDOM.createPortal(
    <Confetti numberOfPieces={300} recycle={false} width={width - 16} />,
    modalRoot
  );
};

export default AppConfetti;
