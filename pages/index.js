import React from 'react'

import { client } from '@/client';
import { HeroBanner } from '@/HeroBanner';
import { Cart } from '@/Cart';
import { Footer } from '@/Footer';
import { FooterBanner } from '@/FooterBanner';
import { Layout } from '@/Layout';
import { Navbar } from '@/Navbar';
import { Product } from '@/Product';

const home = ( {products , bannerData}) => {
  return (
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
   
    

    <div className='products-heading'>
      <h2>Best Selling Products</h2>

      <p>Furniture of many Variations</p>
    </div>

    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
{/* <FooterBanner /> */}
<FooterBanner footerBanner={bannerData && bannerData[0]}/>

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default home;
