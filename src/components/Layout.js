import React from 'react';
import styles from '../styles/Layout.module.css';
import Nav from './Nav';
const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <main className={styles.main}>
                <div className={styles.container}>
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;