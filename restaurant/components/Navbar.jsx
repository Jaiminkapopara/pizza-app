import Image from 'next/image'
import React from 'react'
import styles from '../src/styles/Navbar.module.css'
import { useSelector } from "react-redux";
import Link from 'next/link';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt='' width='32' height='32' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>01234 56789</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
        <Link href='/'>
          <li className={styles.listItem}>Hom Page</li>
        </Link>
          <li className={styles.listItem}>Product</li>
          <li className={styles.listItem}>Menu</li>
          <div className={styles.logo}>HOT PIZZA</div>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href='/cart'>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/img/cart.png' alt='' width='30' height='30' />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Navbar
