import Stripe from "stripe";

export async function getServerSideProps() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2020-08-27"
    });
  
    const prices = await stripe.prices.list({
      active: true,
      expand: ["data.product"],
    })
  
    return {props: {prices: prices.data } };
}