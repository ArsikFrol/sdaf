import React from "react";
import styles from './header.module.scss'

import logo from '../../image/logo.svg'
import shoppingCart from '../../image/shopping-cart.svg'

type Props = {}

const Header = (props: Props) => {
    return(
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <img src={logo} alt="" />
                <div className={styles.Text}>
                    <div className={styles.logoText}>REACT PIZZA</div>
                    <div className={styles.descrip}>самая вкусная пицца во вселенной</div>
                </div>
            </div>
            <div className={styles.rigthContent}>
                <div className={styles.content}>
                    <span className={styles.size}>520 ₽</span> <img src={shoppingCart} alt="shoppingCart" /> <span>5</span>
                </div>
            </div>
        </div>
    )
}

export default Header;