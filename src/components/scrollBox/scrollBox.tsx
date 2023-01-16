import React, { ReactNode } from 'react';
import styles from './scrollBox.module.css';

interface IPropsScrollBox {
  children: ReactNode;
}

function ScrollBox({ children }: IPropsScrollBox) {
  return <div className={styles.scrollBox}>{children}</div>;
}

export default ScrollBox;
