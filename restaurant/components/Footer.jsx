import Image from 'next/image'
import React from 'react'
import style from '../src/styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <Image src='/img/bg.png' alt='' layout='fill' objectFit='cover'/>
      </div>
      <div className={style.item}>
        <div className={style.card}>
          <h2 className={style.motto}>OH YES, WE DID. THE HOT PIZZA, <br /> WELL BACKED SLICE OF PIZZA.</h2>
        </div>
        <div className={style.card}>
            <h1 className={style.title}>FIND OUR RESTAURANTS <br /><br /></h1>
            <p className={style.text}>
              pathan d. don road ;098.
              <br /> delhi, 569841
              <br /> 253 125-5014
            </p>
            <br />
            <br />
            <p className={style.text}>
              tiger d. don road ;098.
              <br /> delhi, 569841
              <br /> 253 125-5014
            </p>
            <br />
            <br />
            <p className={style.text}>
              kabir d. don road ;098.
              <br /> delhi, 569841
              <br /> 253 125-5014
            </p>
        </div>
        <div className={style.card}>
        <h1 className={style.title}>WORKING HOURS</h1>
        <p className={style.text}>MONDAY UNTIL FRIDAY 
        <br /> 9:00 - 22:00
        </p>
        <p className={style.text}>SATURDAY - SUNDAY 
        <br /> 12:00 - 24:00
        </p>
        </div>
      </div>
    </div>
    
  )
}

export default Footer
