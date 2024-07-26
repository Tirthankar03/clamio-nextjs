import { HotNewproductData, TopDiscountProduct, TopSellingproductData } from '@/constants/data';
import { useParams } from 'next/navigation';
import React from 'react'

const allProducts = [...TopSellingproductData, ...HotNewproductData, ...TopDiscountProduct];

export default function Frequent() {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const products = allProducts.find(p => p.id === parseInt(id));
    return (
        <div className=''>
            <h1 className=''>Frequently bought together</h1>
            <div className='grid grid-cols'>

            </div>
        </div>
    )
}
