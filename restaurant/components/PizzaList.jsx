import React from 'react'
import styles from '../src/styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'


const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia aperiam quo culpa ipsum nemo at, iste ex unde sed reprehenderit blanditiis voluptas corrupti cum molestias. Expedita nesciunt aperiam veniam.</p>
      <div className={styles.wrapper}>
      {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
        
       
      </div>
    </div>
  )
}

export default PizzaList


// import styles from "../src/styles/PizzaList.module.css";
// import PizzaCard from "./PizzaCard"

// const PizzaList = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
//       <p className={styles.desc}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
//         in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
//         sit amet, consectetur adipiscing elit.
//       </p>
//       <div className={styles.wrapper}>
//           <PizzaCard/>
//           <PizzaCard/>
//           <PizzaCard/>
//           <PizzaCard/>
//           <PizzaCard/>
//           <PizzaCard/>
//           <PizzaCard/>
//           <PizzaCard/>
//       </div>
//     </div>
//   );
// };

// export default PizzaList;
