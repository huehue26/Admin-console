import axios from "axios";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const productId = req.body.id;
    const users = (await axios.get("https://assessment.api.vweb.app/users"))
      .data;
    const products = (
      await axios.get("https://assessment.api.vweb.app/products")
    ).data;
    const orders = (await axios.get("https://assessment.api.vweb.app/orders"))
      .data;
    const allProductDetails = [];
    orders.forEach((value, index) => {
      if (value.product_id == productId) {
        allProductDetails.push({
          id: value.order_id,
          quantity: value.quantity,
          date: value.order_date,
          user: users[value.user_id - 1],
          product: products[value.product_id - 1],
        });
      }
    });
    res.json({ ...allProductDetails });
  } else {
    res.json({ message: "Invalid Call" });
  }
}
