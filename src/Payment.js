import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";


function Payment() {
    const [{user, basket}, dispatch] = useStateValue();


    return (
        <div className='payment'>
            <div className='payment__container'>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Niedzwiedzia 12542</p>
                        <p>WWA, Poland</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => 
                            <CheckoutProduct
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />)}
                    </div>

                </div>
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Mathod</h3>

                    </div>
                    <div className='payment__details'>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Payment
