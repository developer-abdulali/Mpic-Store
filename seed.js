const Stripe = require("stripe");
const Products = require("./products");

const stripe = Stripe('sk_test_51NIAyqDYMoQlsKb0hrsJ6ewNV81FRCyJ8VwE1NEDKbujpOq79kgRomTw3zOUkZcUiBgTxeA9qiu5e8Yz0XMpTCtv003ub5bTmB');

(async () => {
    const products = Products.products; // Assign the products array from the Products module

    for (const products of products) {
        const stripeProduct = await stripe.products.create({
            name: product.name,
            default_price_data: {
                currency: product.currency,
                unit_amount_decimal: product.price,
            },
            images: [product.image],
        });

        console.log(stripeProduct.name, ":", stripeProduct.id);
    }
})();
