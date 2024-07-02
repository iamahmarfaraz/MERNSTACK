import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';

import './ProductItem.css'

function ProductItem(props){
    const date = props.date;
    // const title = props.title;

    
  const [title, setTitle] =  useState(props.title);  //here const working even though we're changing value at line 18 it still working cause
//   The reference to the state remains constant, even though the value can change


  function clickHandler() {
    //title = "Popcorn";
    setTitle("Popcorn");
    console.log("button clicked");
  }
    return (
        <Card className='product-item'>
          <ProductDate date={date} />
          <div className='product-item__description'>
            <h2>{title}</h2>
          </div>
          <button onClick={clickHandler}>Add to Cart</button>
        </Card>
      );
}

export default ProductItem;

