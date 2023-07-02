import React from 'react';
import styles from './Footer.module.css';
import p1 from './img/Group 43.png';
import p2 from './img/Group 45.png';
import p3 from './img/Group 46.png';
import p4 from './img/Group 47.png';

const Footer = () => {
  return (
    <>
        <footer className={styles.footer}>
          <div className={styles.title}>
            <span>Top Brands Deal</span>
          </div>
          <div className={styles.brands}>
            <span>Up To 60% off on brands</span>
          </div>
          <div className={styles.pictures}>
            <div className={styles.p1}>
            <a href='#'><img src={p1}></img></a>
            </div>
            <div className={styles.p2}>
            <a href='#'><img src={p2}></img></a>
            </div>
            <div className={styles.p3}>
              <a href='#'><img src={p3}></img></a>
            </div>
            <div className={styles.p4}>
              <a href='#'><img src={p4}></img></a>
            </div>
          </div> 
          <span className={styles.end}>Copyright © 2023 Euphoria Folks Pvt Ltd. — All righs reserved</span>
        </footer>
    </>
  )
}

export default Footer