import React from 'react'
import Gridview from "../components/Gridview"
import Listview from "../components/Listview"
import { useFilterContext } from '../context/filter_context';

const ProductList = () => {
    const { filter_products , grid_view } = useFilterContext();
        if (grid_view){
            return <Gridview products={filter_products} />
        }
        else{
            return <Listview products={filter_products} />
        }

  return (
    <div>ProductList</div>
  )
}

export default ProductList