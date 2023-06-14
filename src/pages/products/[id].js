import { stripe } from "src/utils/stripe"

export default function ProductPage({product}) {
    console.log(product)
  return (
    <div>ProductPage</div>
  )
}

export async function getStaticPaths(){
    const inventory = await stripe.products.list()
    const paths = inventory.data.map((products) => ({
        params: {id: products.id}
    }))

    return{
        paths,
        fallback: "blocking"
    }

}

export async function getStaticProps({params}){
    const inventory = await stripe.products.list({
        expand: ["data.default_price"],
      });
    
      const products = inventory.data.map((product) => {
        const price = product.default_price;
        const image = product.images.length > 0 ? product.images[0] : null;
    
        return {
          currency: price.currency,
          id: product.id,
          name: product.name,
          price: price.unit_amount,
          image: image,
        };
      });
      const product = products.find(product => product.id === params.id)

    return{
        props: {
            products,
        }
    }

}



// import stripe from "src/utils/stripe";

// export default function ProductPage({ product }) {
//   console.log(product);
//   return (
//     <div>ProductPage</div>
//   );
// }

// export async function getStaticPaths() {
//   const inventory = await stripe.products.list();
//   const paths = inventory.data.map((product) => ({
//     params: { id: product.id }
//   }));

//   return {
//     paths,
//     fallback: "blocking"
//   };
// }

// export async function getStaticProps({ params }) {
//   const inventory = await stripe.product.list({
//     expand: ["data.default_price"]
//   });

//   const products = inventory.data.map((product) => {
//     const price = product.default_price;
//     const image = product.images.length > 0 ? product.images[0] : null;

//     return {
//       currency: price.currency,
//       id: product.id,
//       name: product.name,
//       price: price.unit_amount,
//       image: image
//     };
//   });

//   const product = products.find((product) => product.id === params.id);

//   return {
//     props: {
//       product
//     }
//   };
// }
