const Stripe = require("stripe");
const Products = require("./products");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

(async ()=>{
    for(const product of Products){
        const stripeProduct = await stripe.products.create({
            name: product.name,
            default_price_data: {
                currency: product.currency,
                unit_amount_decimal: product.price
            },
            images: [product.image]
        });
    }
})()
