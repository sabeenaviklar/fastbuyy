import Stripe from 'stripe';

import  { NextApiRequest, NextApiResponse } from 'next'

const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);




// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const params = {
//         submit_type: 'pay',
//         mode: 'payment',
//         payment_method_types: ['card'],
//         billing_addredd_collection: 'auto',
//         shipping_options: [
//             { shipping_rate: 'shr_1MXbJPSDadvcK6tf0nKjWfkL'},
//             { shipping_rate: 'shr_1MXbNmSDadvcK6tfpoq4Nd3r'},
//         ],
//         line_items: req.body.map((item) => {
//           const img = item.image[0].asset._ref;
//            const newImage = img.replace('image-', 'https://cdn.sanity.io/images/cciu3dcd/production/').replace('-webp', '.webp')
//           console.log('Image', newImage)

//           return {
//             price_data: { 
//               currency: 'inr',
//               product_data: { 
//                 name: item.name,
//                 images: [newImage],
//               },
//               unit_amount: item.price * 100,
//             },
//             adjustable_quantity: {
//               enabled:true,
//               minimum: 1,
//             },
//             quantity: item.quantity
//           }

//         }),
       
//         mode: 'payment',
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       }
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create();
//        res.status(200).json(session);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }

// import Stripe from "stripe";

// const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

// import React from 'react'

// export default async function handler(req ,res) {

//   if (req.method === 'POST') {
//     try {
//       const session = await stripe.checkout.sessions.create({
//         mode: 'payment',
//         payment_method_types: ['card'],
//         line_items: req?.body?.items ?? [],
//         success_url: `${req.headers.origin}/?success?session_id` = {CHECKOUT_SESSION_ID},
//         cancel_url: `${req.headers.origin}/cart`,
//       });
//     } catch (err) {
//       res.status(500).json({ statusCode: 500, message: err.message});
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }
