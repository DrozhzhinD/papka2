import React from 'react';
import styles from './Main.module.css';
import poster1 from './img/Breezy Summer Style.svg';
import poster2 from './img/High coziness.svg';
import p1 from './img/Rectangle 202.png'
import p2 from './img/Rectangle 21 (1).png'
import p3 from './img/Rectangle 22.png'
import p4 from './img/Rectangle 22 (1).png'
import p5 from './img/Rectangle 20.png'
import p6 from './img/Rectangle 21 (2).png'
import p7 from './img/Rectangle 22 (2).png'
import p8 from './img/Rectangle 22 (3).png'


const Main = () => {
  return (
    <>
        <main className={styles.main}>
          <div className={styles.posters}>
            <img src={poster1}></img>
            <img src={poster2}></img>
          </div>
        
          <div className={styles.men}>

            <div className={styles.MenTitle}>
              Categories For Men
            </div>

            <div className={styles.cards}>

              <div className={styles.card}>
                <img src={p1}></img>
                <span>Shirts</span>
                <br></br>
                <a href='#'>Explore Now!</a>
              </div>

              <div className={styles.card}>
                <img src={p2}></img>
                <span>Printed T-Shirts</span>
                <br></br>
                <a href='#'>Explore Now!</a>
              </div>

              <div className={styles.card}>
                <img src={p3}></img>
                <span>Plain T-Shirt</span>
                <br></br>
                <a href='#'>Explore Now!</a>
              </div>

              <div className={styles.card}>
                <img src={p4}></img>
                <span>Polo T-Shirt</span>
                <br></br>
                <a href='#'>Explore Now!</a>
              </div>

              <div className={styles.card}>
                <img src={p5}></img>
                <span>Hoodies</span>
                <br></br>
                <a href='#'>Explore Now!</a>
              </div>

              <div className={styles.card}>
                <img src={p6}></img>
                <span>Jeans</span>
                <br></br>
                <a href='#'>Explore Now!</a>
              </div>

              <div className={styles.card}>
                <img src={p7}></img>
                <span>Activewear</span>
                <br></br>
                <a href='#'>Explore Now!</a>
              </div>

              <div className={styles.card}>
                <img src={p8}></img>
                <span>Boxers</span>
                <br></br>
                <a href='#'>Explore Now!</a>
              </div>

            </div>
          </div>
        </main>
    </>
  )
}

export default Main