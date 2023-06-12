import React from 'react'
import "./Home.css"
import Product from './Product' 

function Home() {
  return (
    <div className='home'>
       <div className='home__container'>
           <img className='home__image' src='https://m.media-amazon.com/images/I/71OHM0jRA6L._SX3000_.jpg'
           />
       </div>
       <div className="home__row">
         <Product 
         id={121}
         title={"The lean startup- This books helps a lot for the begginers"}
         price={29.99}
         image="https://rukminim1.flixcart.com/image/312/312/kkbh8cw0/regionalbooks/q/n/n/the-lean-startup-original-imafzp3tdmyfzvzp.jpeg?q=70"
         rating={4} />

         <Product 
         id={221}
         title={"The premium i-pad/256gb-RAM with 512Mb SSd-and that's all i can come up with right at this moment!"}
         price={250.25}
         image="	https://m.media-amazon.com/images/I/31jUKdJdjHL._AC_SY400_.jpg"
         rating={3} />
       </div>

       <div className="home__row">
       <Product 
       id={321}
       title={"Sony Premium Headphones and Speakers offer with No cost EMI."}
       price={23.45}
       image="https://m.media-amazon.com/images/I/31yQxnMLbKL._AC_UF452,452_FMjpg_.jpg"
       rating={4}/>

       <Product 
       id={421}
       title={"Noise ColorFit Pulse Grand Smart Watch with 1.69' HD Display, 60 Sports Mode"}
       price={250}
       image="https://m.media-amazon.com/images/I/41Coma77U+L._AC_SR400,600_.jpg"
       rating={3}/>

       <Product
       id={521}
       title={"Front Loads starting 16,490 / Up to 24 months No Cost EMI"}
       price={140}
       image="	https://m.media-amazon.com/images/I/41OSm89f6hL._AC_UF452,452_FMjpg_.jpg"
       rating={4} />

       </div>
       
       <div className="home__row">
       <Product 
       id={621}
       title={"Samsung 108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA43AUE65AKXXL (Black"}
       price={300}
       image="https://m.media-amazon.com/images/I/41Tz1YnJkoL._AC_SY580_FMwebp_.jpg"
       rating={5}/>

       </div>

    </div>
  )
}

export default Home