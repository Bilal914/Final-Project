import React from 'react'

export default function CartScreen(props) {
    const productid=props.match.params.id;
    const qty=props.location.search?Number(props.location.search.split('=')[1]):1;
    return (
        <div>
            <h2>Cart Screen </h2>
            <p>
                Add to cart: Product Id:{productid} Qty:{qty}
            </p>
        </div>
    )
}
