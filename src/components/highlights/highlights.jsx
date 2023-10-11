import React from 'react'
import styles from './highlights.module.css'

import product1 from '../../assets/img/1.png'
import product2 from '../../assets/img/2.png'
import product3 from '../../assets/img/3.png'
import product4 from '../../assets/img/4.png'
import product5 from '../../assets/img/5.png'
import product6 from '../../assets/img/6.png'
import product7 from '../../assets/img/7.png'
import product8 from '../../assets/img/8.png'

const Highlights = () => {
    return (
        <main className={styles['container']}>
            <section className={styles['container-title']}>
                <h1 className={styles['title-highlights']}>Destaques</h1>
                <span className={styles['paragraph-hghlights']}>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</span>
            </section>
            <section className={styles['container-product']} >
                <div className={styles['wrapper-product']}>
                    <img className={styles['img-product']} src={product1} alt="Produto 1" />
                    <span className={styles['span-product']} >Air Jordan 1 Mid SE Wmns "Dutch Greenz"</span>
                </div>
                <div className={styles['wrapper-product']} >
                    <img className={styles['img-product']} src={product2} alt="Produto 2" />
                    <span className={styles['span-product']} >Air Jordan 1 High Zoom Air CMFT "White Daybreak/Tropical Twist"</span>
                </div>
                <div className={styles['wrapper-product']}>
                    <img className={styles['img-product']} src={product3} alt="Produto 3" />
                    <span className={styles['span-product']} >Air Jordan 1 Court Purple 2.0</span>
                </div>
                <div className={styles['wrapper-product']}>
                    <img className={styles['img-product']} src={product4} alt="Produto 4" />
                    <span className={styles['span-product']} >Air Jordan 1 Retro Mid Light Smoke Gray Black White</span>
                </div>
                <div className={styles['wrapper-product']}>
                    <img className={styles['img-product']} src={product5} alt="Produto 5" />
                    <span className={styles['span-product']}>Air Jordan 1 Mid Black Noble Red</span>
                </div>
                <div className={styles['wrapper-product']}> 
                    <img className={styles['img-product']} src={product6} alt="Produto 6" />
                    <span className={styles['span-product']}>Air Jordan 1 Mid SE Bright Citrus</span>
                </div>
                <div className={styles['wrapper-product']}>
                    <img className={styles['img-product']} src={product7} alt="Produto 7" />
                    <span className={styles['span-product']}>Air Jordan 1 Low White Camo</span>
                </div>
                <div className={styles['wrapper-product']}>
                    <img className={styles['img-product']} src={product8} alt="Produto 8" />
                    <span className={styles['span-product']}>Air Jordan 1 Retro High Og "Black/White" </span>
                </div>
            </section>
        </main>
    )
}

export default Highlights;