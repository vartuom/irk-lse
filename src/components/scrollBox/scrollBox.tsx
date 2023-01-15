import React, {ReactNode} from 'react';
import styles from './scrollBox.module.css'

interface IPropsScrollBox {
    children: ReactNode
}

const ScrollBox = (props: IPropsScrollBox) => {
    return (
        <div className={styles.scrollBox}>
            {props.children}
        </div>
    );
};

export default ScrollBox;