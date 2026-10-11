
import CategoryBody from '@/app/components/categoryPagebody';
import React from 'react'

async function Categorypage({ params }) {
    let { categoryid } = await params;
    let products = [];
    try {
        let dataFetch = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryid}`);
        let convertDeta = await dataFetch.json();
        products = Array.isArray(convertDeta) ? convertDeta : [];
    } catch {
        products = [];
    }

    

    return (
        <>
            <CategoryBody products={products}/>
        </>
    )
}

export default Categorypage
