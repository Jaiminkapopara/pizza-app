import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Cart.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { reset } from "../../redux/cartSlice.js";
import OrderDetail from 'components/OrderDetail';
import axios from 'axios';

// const cart = () => {
//     const [open, setOpen] = useState(false)
//     const [cash, setCash] = useState(false);

//     const cart = useSelector((state) => state.cart);
//     const dispatch = useDispatch();
//     const router = useRouter();

//     // This values are the props in the UI
//     const amount = cart.total;
//     const currency = "USD";
//     const style = { "layout": "vertical" };


//     const createOrder = async (data) => {
//         try {
//             const res = await axios.post("http://localhost:3000/api/orders", data);
//             if (res.status === 201) {
//               dispatch(reset());
//               router.push(`/orders/${res.data._id}`);
//             }
//           } catch (err) {
//             console.log(err);
//           }
//       };

//     // Custom component to wrap the PayPalButtons and handle currency changes
//     const ButtonWrapper = ({ currency, showSpinner }) => {
//         // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
//         // This is the main reason to wrap the PayPalButtons in a new component
//         const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

//         useEffect(() => {
//             dispatch({
//                 type: "resetOptions",
//                 value: {
//                     ...options,
//                     currency: currency,
//                 },
//             });
//         }, [currency, showSpinner]);


//         return (<>
//             {(showSpinner && isPending) && <div className="spinner" />}
//             <PayPalButtons
//                 style={style}
//                 disabled={false}
//                 forceReRender={[amount, currency, style]}
//                 fundingSource={undefined}
//                 createOrder={(data, actions) => {
//                     return actions.order
//                         .create({
//                             purchase_units: [
//                                 {
//                                     amount: {
//                                         currency_code: currency,
//                                         value: amount,
//                                     },
//                                 },
//                             ],
//                         })
//                         .then((orderId) => {
//                             // Your code here after create the order
//                             return orderId;
//                         });
//                 }}
//                 onApprove={function (data, actions) {
//                     return actions.order.capture().then(function (details) {
//                         // Your code here after capture the order
//                         const shipping = details.purchase_units[0].shipping
//                         createOrder({
//                             customer: shipping.name.full_name,
//                             address: shipping.address.address_line_1,
//                             total: cart.total,
//                             method: 1,
//                           });
//                     });
//                 }}
//             />
//         </>
//         );
//     }

//     return (
//         <div className={styles.container}>
//             <div className={styles.left}>
//                 <table className={styles.table}>
//                     <tbody>
//                         <tr className={styles.trTitle}>
//                             <th>Product</th>
//                             <th>Name</th>
//                             <th>Extras</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Total</th>
//                         </tr>
//                         {
//                             cart.products.map((product) => (

//                                 <tr className={styles.tr} key={product._id}>
//                                     <td>
//                                         <div className={styles.imgContainer}>
//                                             <Image src={product.img} alt='' layout='fill' objectFit='contain' />
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <span className={styles.name}>{product.title}</span>
//                                     </td>
//                                     <td>
//                                         <span className={styles.extras}>
//                                             {product.extras.map((extra) => (
//                                                 <span key={extra._id}>{extra.text}, </span>
//                                             ))}
//                                         </span>
//                                     </td>
//                                     <td>
//                                         <span className={styles.price}>${product.price}</span>
//                                     </td>
//                                     <td>
//                                         <span className={styles.quantity}>{product.quantity}</span>
//                                     </td>
//                                     <td>
//                                         <span className={styles.total}>${product.price * product.quantity}</span>
//                                     </td>
//                                 </tr>
//                             ))}
//                     </tbody>
//                 </table>
//             </div>
//             <div className={styles.right}>
//                 <div className={styles.wrapper}>
//                     <h2 className={styles
//                         .title}>CART TOTAL</h2>
//                     <div className={styles.totalText}>
//                         <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
//                     </div>
//                     <div className={styles.totalText}>
//                         <b className={styles.totalTextTitle}>Dicount:</b>$0.00
//                     </div>
//                     <div className={styles.totalText}>
//                         <b className={styles.totalTextTitle}>Total:</b>$79.60
//                     </div>
//                     {open ? (
//                         <div className={styles.paymentMethods}>
//                             <button className={styles.payButton} onClick={() => setCash(true)}>CASH ON DELIVERY</button>
//                             <PayPalScriptProvider
//                             options={{
//                                 "client-id": "test",
//                                 components: "buttons",
//                                 currency: "USD",
//                                 "disable-funding": "credit,card,p24",
//                             }}
//                         >
//                             <ButtonWrapper
//                                 currency={currency}
//                                 showSpinner={false}
//                             />
//                         </PayPalScriptProvider>
//                         </div>) : (<button className={styles.button} onClick={() => setOpen(true)}>CHECKOUT NOW!</button>)}


//                 </div>
//             </div>
//             {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}

//         </div>
//     )
// }

// export default cart


// import styles from "../styles/Cart.module.css";
// import Image from "next/image";

const Cart = () => {
  const [open, setOpen] = useState(false)
    const [cash, setCash] = useState(false);

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const router = useRouter();

    // This values are the props in the UI
    const amount = cart.total;
    const currency = "USD";
    const style = { "layout": "vertical" };

    
    const createOrder = async (data) => {
        try {
          const res = await axios.post("http://localhost:3000/api/orders", data);
          if (res.status === 201) {
            dispatch(reset());
            router.push(`/orders/${res.data._id}`);
          }
        } catch (err) {
          console.log(err);
        }
      };

    // // Custom component to wrap the PayPalButtons and handle currency changes
    // const ButtonWrapper = ({ currency, showSpinner }) => {
    //     // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    //     // This is the main reason to wrap the PayPalButtons in a new component
    //     const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    //     useEffect(() => {
    //         dispatch({
    //             type: "resetOptions",
    //             value: {
    //                 ...options,
    //                 currency: currency,
    //             },
    //         });
    //     }, [currency, showSpinner]);


    //     return (<>
    //         {(showSpinner && isPending) && <div className="spinner" />}
    //         <PayPalButtons
    //             style={style}
    //             disabled={false}
    //             forceReRender={[amount, currency, style]}
    //             fundingSource={undefined}
    //             createOrder={(data, actions) => {
    //                 return actions.order
    //                     .create({
    //                         purchase_units: [
    //                             {
    //                                 amount: {
    //                                     currency_code: currency,
    //                                     value: amount,
    //                                 },
    //                             },
    //                         ],
    //                     })
    //                     .then((orderId) => {
    //                         // Your code here after create the order
    //                         return orderId;
    //                     });
    //             }}
    //             onApprove={function (data, actions) {
    //                 return actions.order.capture().then(function (details) {
    //                     // Your code here after capture the order
    //                     const shipping = details.purchase_units[0].shipping
    //                     createOrder({
    //                         customer: shipping.name.full_name,
    //                         address: shipping.address.address_line_1,
    //                         total: cart.total,
    //                         method: 1,
    //                       });
    //                 });
    //             }}
    //         />
    //     </>
    //     );
    // }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
        <tbody>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {
                            cart.products.map((product) => (

                                <tr className={styles.tr} key={`${product._id}`}>
                                    <td>
                                        <div className={styles.imgContainer}>
                                            <Image src={product.img} alt='' layout='fill' objectFit='contain' />
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.name}>{product.title}</span>
                                    </td>
                                    <td>
                                        <span className={styles.extras}>
                                            {product.extras.map((extra) => (
                                                <span key={extra._id}>{extra.text}, </span>
                                            ))}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={styles.price}>${product.price}</span>
                                    </td>
                                    <td>
                                        <span className={styles.quantity}>{product.quantity}</span>
                                    </td>
                                    <td>
                                        <span className={styles.total}>${product.price * product.quantity}</span>
                                    </td>
                                </tr>
                            ))}
         
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          {open ? (
                        <div className={styles.paymentMethods}>
                            <button className={styles.payButton} onClick={() => setCash(true)}>CASH ON DELIVERY</button>
                            {/* <PayPalScriptProvider
                            options={{
                                "client-id": "test",
                                components: "buttons",
                                currency: "USD",
                                "disable-funding": "credit,card,p24",
                            }}
                        >
                            <ButtonWrapper
                                currency={currency}
                                showSpinner={false}
                            />
                        </PayPalScriptProvider> */}
                        </div>) : (<button className={styles.button} onClick={() => setOpen(true)}>CHECKOUT NOW!</button>)}

          
        </div>
      </div>
      {
        cash && (<OrderDetail total={cart.total} createOrder={createOrder}/>)
      }
    </div>
  );
};

export default Cart;



// const cart = () => {
//     const [open, setOpen] = useState(false)
//     const [cash, setCash] = useState(false);

//     const cart = useSelector((state) => state.cart);
//     const dispatch = useDispatch();
//     const router = useRouter();

//     // This values are the props in the UI
//     const amount = cart.total;
//     const currency = "USD";
//     const style = { "layout": "vertical" };


//     const createOrder = async (data) => {
//         try {
//             const res = await axios.post("http://localhost:3000/api/orders", data);
//             if (res.status === 201) {
//               dispatch(reset());
//               router.push(`/orders/${res.data._id}`);
//             }
//           } catch (err) {
//             console.log(err);
//           }
//       };

//     // Custom component to wrap the PayPalButtons and handle currency changes
//     const ButtonWrapper = ({ currency, showSpinner }) => {
//         // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
//         // This is the main reason to wrap the PayPalButtons in a new component
//         const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

//         useEffect(() => {
//             dispatch({
//                 type: "resetOptions",
//                 value: {
//                     ...options,
//                     currency: currency,
//                 },
//             });
//         }, [currency, showSpinner]);


//         return (<>
//             {(showSpinner && isPending) && <div className="spinner" />}
//             <PayPalButtons
//                 style={style}
//                 disabled={false}
//                 forceReRender={[amount, currency, style]}
//                 fundingSource={undefined}
//                 createOrder={(data, actions) => {
//                     return actions.order
//                         .create({
//                             purchase_units: [
//                                 {
//                                     amount: {
//                                         currency_code: currency,
//                                         value: amount,
//                                     },
//                                 },
//                             ],
//                         })
//                         .then((orderId) => {
//                             // Your code here after create the order
//                             return orderId;
//                         });
//                 }}
//                 onApprove={function (data, actions) {
//                     return actions.order.capture().then(function (details) {
//                         // Your code here after capture the order
//                         const shipping = details.purchase_units[0].shipping
//                         createOrder({
//                             customer: shipping.name.full_name,
//                             address: shipping.address.address_line_1,
//                             total: cart.total,
//                             method: 1,
//                           });
//                     });
//                 }}
//             />
//         </>
//         );
//     }

//     return (
//         <div className={styles.container}>
//             <div className={styles.left}>
//                 <table className={styles.table}>
//                     <tbody>
//                         <tr className={styles.trTitle}>
//                             <th>Product</th>
//                             <th>Name</th>
//                             <th>Extras</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Total</th>
//                         </tr>
//                         {
//                             cart.products.map((product) => (

//                                 <tr className={styles.tr} key={product._id}>
//                                     <td>
//                                         <div className={styles.imgContainer}>
//                                             <Image src={product.img} alt='' layout='fill' objectFit='contain' />
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <span className={styles.name}>{product.title}</span>
//                                     </td>
//                                     <td>
//                                         <span className={styles.extras}>
//                                             {product.extras.map((extra) => (
//                                                 <span key={extra._id}>{extra.text}, </span>
//                                             ))}
//                                         </span>
//                                     </td>
//                                     <td>
//                                         <span className={styles.price}>${product.price}</span>
//                                     </td>
//                                     <td>
//                                         <span className={styles.quantity}>{product.quantity}</span>
//                                     </td>
//                                     <td>
//                                         <span className={styles.total}>${product.price * product.quantity}</span>
//                                     </td>
//                                 </tr>
//                             ))}
//                     </tbody>
//                 </table>
//             </div>
//             <div className={styles.right}>
//                 <div className={styles.wrapper}>
//                     <h2 className={styles
//                         .title}>CART TOTAL</h2>
//                     <div className={styles.totalText}>
//                         <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
//                     </div>
//                     <div className={styles.totalText}>
//                         <b className={styles.totalTextTitle}>Dicount:</b>$0.00
//                     </div>
//                     <div className={styles.totalText}>
//                         <b className={styles.totalTextTitle}>Total:</b>$79.60
//                     </div>
//                     {open ? (
//                         <div className={styles.paymentMethods}>
//                             <button className={styles.payButton} onClick={() => setCash(true)}>CASH ON DELIVERY</button>
//                             <PayPalScriptProvider
//                             options={{
//                                 "client-id": "test",
//                                 components: "buttons",
//                                 currency: "USD",
//                                 "disable-funding": "credit,card,p24",
//                             }}
//                         >
//                             <ButtonWrapper
//                                 currency={currency}
//                                 showSpinner={false}
//                             />
//                         </PayPalScriptProvider>
//                         </div>) : (<button className={styles.button} onClick={() => setOpen(true)}>CHECKOUT NOW!</button>)}


//                 </div>
//             </div>
//             {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}

//         </div>
//     )
// }

// export default cart