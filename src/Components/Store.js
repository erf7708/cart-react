import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContextProvider';
import Product from './Shared/Product';
function Store(props) {
    const products = useContext(ProductContext)
    return (
        <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-between"}}>
            {
                products.map(item=><Product key={item.id} data={item} />)
            }
        </div>
    );
}

export default Store;