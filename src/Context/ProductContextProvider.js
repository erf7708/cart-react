import React, { useEffect, useState } from 'react';
import { getProducts } from '../Services/api';
 export const ProductContext = React.createContext();
function ProductContextProvider(props) {

    const [products,setProducts] =useState([]);

    useEffect(()=>{
        const fetchApi = async()=>{
            setProducts(await getProducts())
        }

        fetchApi();
    },[])

    return (
       <ProductContext.Provider value={products}>
            {props.children}
       </ProductContext.Provider>
    );
}

export default ProductContextProvider;