import React, {ReactNode} from 'react';
import Header from "../header/header";
import styles from "./layout.module.css"
import Content from "../content/content";

interface ILayoutProps {
    children: ReactNode
}

const Layout = ({children}: ILayoutProps) => {
    return (
        <div className={styles.test}>
            <Header/>
            <Content>
                {children}
            </Content>
        </div>
    );
};

export default Layout;