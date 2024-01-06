import getBillboards from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/container';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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


      <div className=' flex justify-evenly py-32'>
        <div className='max-w-md'>
          <Image src={'/about.png'} alt={''} width={'550'} height={'500'}/>
        </div>
        <div className='max-w-md'>
        Selamat datang di Kratone Petshop, tempat di mana cinta dan perawatan untuk hewan peliharaan menjadi prioritas utama! Kami telah berkomitmen untuk menyediakan produk dan layanan terbaik untuk memenuhi kebutuhan unik setiap hewan peliharaan dan pemiliknya.
        </div>
      </div>


      
    </Container>
   
  )
}
