import getBillboards from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import React from 'react'

export const revalidate = 0;

export default async function page() {
  const billboards = await getBillboards("307ab173-b4d1-4049-8422-bba7886ac9da");

  const products = await getProducts({isFeatured:true});


  return (
    
    <Container>
      <div>
        <Billboard data={billboards}/>
        </div>
      <div>
        <ProductList title={"Featured Products"} items={products}/>
      </div>
      
    </Container>
   
  )
}
