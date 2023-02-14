import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../src/styles/PizzaCard.module.css'

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`}>
      <Image src={pizza.img} alt='' width='200' height='200'/>
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  )
}

export default PizzaCard


// import Image from "next/image";
// import styles from "../src/styles/PizzaCard.module.css";

// const PizzaCard = () => {
//   return (
//     <div className={styles.container}>
//       <Image src="/img/pizza.png" alt="" width="500" height="500" />
//       <h1 className={styles.title}>FIORI DI ZUCCA</h1>
//       <span className={styles.price}>$19.90</span>
//       <p className={styles.desc}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p>
//     </div>
//   );
// };

// export default PizzaCard;
