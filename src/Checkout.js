import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket ,user}, dispatch] = useStateValue ();

  return (
    <div className='checkout'>
        <div className="checkouot__left">
            <img className='checkout__ad'
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
            
            <div className="checkout__title">

             <h3>{user ? "Hello, "+user.email:''}</h3>
             {/* <h3>{user?.email}</h3> */}

            <h1>Shopping Cart</h1>
            {basket.map(item => (
                <CheckoutProduct
                id= {item.id}
                title= {item.title}
                image= {item.image}
                price = {item.price}
                rating = {item.rating}
                />
            ))}


            </div>
        </div>
        
        <div className="checkout__right">
           <Subtotal />
            

        </div>

    </div>
  )
}

export default Checkout