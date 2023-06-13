import { stripe } from "src/utils/stripe";

export default function index({ products }) {
  console.log(products);

  return <div>home</div>;
}

export async function getStaticProps() {
  const inventory = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 8,
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

  return {
    props: {
      products,
    },
  };
}
