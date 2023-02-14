import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/Product.module.css'
import axios from 'axios'
import { addProduct } from 'redux/cartSlice'
import { useDispatch } from "react-redux";

// const Product = ({ pizza }) => {

//     // const pizza = {
//     //     id: 1,
//     //     img: '/img/pizza.png',
//     //     name: 'sdfsd',
//     //     price: [19.9, 23.9, 27.9],
//     //     desc: 'lorem sdfghj werhewrgth ergwergh ewre thwert'
//     // }
//     const [size, setSize] = useState(0)
//     const [price, setPrice] = useState(pizza.prices[0])
//     const [extras, setExtras] = useState([])
//     const [quantity, setQuantity] = useState(1)
//     const dispatch = useDispatch();

//     const changePrice = (number) => {
//         setPrice(price + number)
//     }
    
//     const handleSize = (sizeIndex) => {
//         const diference = pizza.prices[sizeIndex] - pizza.prices[size]
//         setSize(sizeIndex)
//         changePrice(diference)

//     }
    
//     const handleChange = (e, option) => {
//         const checked = e.target.checked

//         if(checked){
//             changePrice(option.price)
//             setExtras((prev)=> [...prev, option])
//         }else{
//             changePrice(-option.price)
//             setExtras(extras.filter((extras) => extras._id !== option._id))
//         }
//     }

//     const handleClick = () => {
//         dispatch(addProduct({...pizza, extras, price, quantity}));
//       };
    

//     return (
//         <div className={styles.container}>
//             <div className={styles.left}>
//                 <div className={styles.imgContainer}>
//                     <Image src={pizza.img} layout='fill' objectFit='contain' alt='' />
//                 </div>
//             </div>
//             <div className={styles.right}>
//                 <h1 className={styles.title}>{pizza.title}</h1>
//                 <span className={styles.price}>${price}</span>
//                 <p className={styles.desc}>{pizza.desc}</p>
//                 <h3 className={styles.choose}>Choose the size</h3>
//                 <div className={styles.sizes}>
//                     <div className={styles.size} onClick={() => { handleSize(0) }}>
//                         <Image src='/img/size.png' alt='' layout='fill' />
//                         <span className={styles.number}>Small</span>
//                     </div>
//                     <div className={styles.size} onClick={() => handleSize(1)}>
//                         <Image src='/img/size.png' alt='' layout='fill' />
//                         <span className={styles.number}>Medium</span>
//                     </div>
//                     <div className={styles.size} onClick={() => handleSize(2)}>
//                         <Image src='/img/size.png' alt='' layout='fill' />
//                         <span className={styles.number}>Large</span>
//                     </div>
//                 </div>
//                 <h3 className={styles.choose}>Choose additional ingredients</h3>
//                 <div className={styles.ingredients}>

//                     {   
//                         pizza.extraOptions.map((option) => (
//                             <div className={styles.option} key={option._id}>
//                                 <input
//                                     type="checkbox"
//                                     id='double'
//                                     name='double'
//                                     className={styles.checkbox}
//                                     onClick={(e)=>handleChange(e, option)}
//                                 />
//                                 <label htmlFor="double">Double Ingredients</label>
//                             </div>
//                         ))
//                     }


//                 </div>
//                 <div className={styles.add}>
//                     <input type="number" onClick={(e) => setQuantity(e.target.value)} min={0} defaultValue={1} className={styles.quantity} />
//                     <button className={styles.button} onClick={handleClick}>Add to Cart</button>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Product


// export const getServerSideProps = async ({ params }) => {
//     const res = await axios.get(`http://localhost:3000//api/products/${params.id}`)
//     return {
//         props: {
//             pizza: res.data,
//         },
//     }
// }


// import styles from "../../styles/Product.module.css";
// import Image from "next/image";
// import { useState } from "react";

const Product = ({ pizza }) => {

    // const pizza = {
    //     id: 1,
    //     img: '/img/pizza.png',
    //     name: 'sdfsd',
    //     price: [19.9, 23.9, 27.9],
    //     desc: 'lorem sdfghj werhewrgth ergwergh ewre thwert'
    // }
    const [size, setSize] = useState(0)
    const [price, setPrice] = useState(pizza.prices[0])
    const [extras, setExtras] = useState([])
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

    const changePrice = (number) => {
        setPrice(price + number)
    }
    
    const handleSize = (sizeIndex) => {
        const diference = pizza.prices[sizeIndex] - pizza.prices[size]
        setSize(sizeIndex)
        changePrice(diference)

    }
    
    const handleChange = (e, option) => {
        const checked = e.target.checked

        if(checked){
            changePrice(option.price)
            setExtras((prev)=> [...prev, option])
        }else{
            changePrice(-option.price)
            setExtras(extras.filter((extras) => extras._id !== option._id))
        }
    }

    const handleClick = () => {
        dispatch(addProduct({...pizza, extras, price, quantity}));
      };
    

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} layout='fill' objectFit='contain' alt='' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.price}>${price}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => { handleSize(0) }}>
                        <Image src='/img/size.png' alt='' layout='fill' />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src='/img/size.png' alt='' layout='fill' />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src='/img/size.png' alt='' layout='fill' />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>

                    {   
                        pizza.extraOptions.map((option) => (
                            <div className={styles.option} key={option._id}>
                                <input
                                    type="checkbox"
                                    id='double'
                                    name='double'
                                    className={styles.checkbox}
                                    onClick={(e)=>handleChange(e, option)}
                                />
                                <label htmlFor="double">Double Ingredients</label>
                            </div>
                        ))
                    }


                </div>
                <div className={styles.add}>
                    <input type="number" onChange={(e) => setQuantity(e.target.value)} min={0} defaultValue={1} className={styles.quantity} />
                    <button className={styles.button} onClick={handleClick}>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}
export default Product;



export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000//api/products/${params.id}`)
    return {
        props: {
            pizza: res.data,
        },
    }
}