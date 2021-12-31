import React from 'react'
import { useDispatch } from 'react-redux';
import  addToCart  from '../actions/cartActions';
import { useEffect } from 'react'
export default function CartScreen(props) {
    const productid = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
   /* const dispatch = useDispatch();
    useEffect(() => {
        if (productid) {
            dispatch(addToCart(productid, qty));
        }
    }, [dispatch, productid, qty]);*/
    return (
        <div>
            <h2>Cart Screen </h2>
            <p>
                Add to cart: Product Id:{productid} Qty:{qty}
            </p>
        </div>
    )
}
