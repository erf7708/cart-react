import React from 'react';
import { Shorten } from '../helper/function';

function Product({data}) {
    return (
        <div>
            <img src={data.image} alt="product" style={{width:"200px"}} />
            <h3>{Shorten(data.title)}</h3>
            <p>{data.price}</p>
            <div>
                <a href="#">Deatail</a>
            
                <div>
                    <button>Add to Card</button>
                </div>
            </div>
        </div>
    );
}

export default Product;