import axios from "axios";
export default async function handler(req, res) {
  if (req.method === "GET") {
    var quantityOfProduct = new Map();
    const response = await axios.get("https://assessment.api.vweb.app/orders");
    response.data.forEach((value, index) => {
      if (quantityOfProduct.get(value.product_id) === undefined) {
        quantityOfProduct.set(value.product_id, 1);
      } else {
        var newOrderCount = quantityOfProduct.get(value.product_id) + 1;
        quantityOfProduct.set(value.product_id, newOrderCount);
      }
    });
    const allPoints = [];
    quantityOfProduct.forEach((value, key) => {
      allPoints.push({ x: key, y: value });
    });
    allPoints.sort((a, b) => (a.x > b.x ? 1 : b.x > a.x ? -1 : 0));
    res.json({ points: allPoints });
  } else {
    res.json({ message: "Invalid Call" });
  }
}
