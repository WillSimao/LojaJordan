import React from "react";
import styles from './header.module.css';


const Header = (props) => {
    
    return (
        <header className={styles['header-container']}>
            <div className={styles['wrapper-topbar']}>
                <span className={styles['title-topbar']} >{props.topBar}</span>
            </div>
            <div className={styles['wrapper-headerTitle']}>
                <h1 className={styles['title-page']}>{props.title}</h1>
            </div>
            <div className={styles['container-bg']} style={props.background}>
                <h1 className={styles['title-bg']}>{props.titleBg}</h1>
                <p className={styles['pragraph-bg']}>{props.paragraphBg}</p>
                <p className={styles['pragraph-bg']}>{props.paragraphBg2}</p>
            </div>
        </header>
    )
}

export default Header;