import React from "react";
import axios from "axios";
import OrderDetails from "../../components/OrderDetails";

function Date(props) {
  const productDetails = [];
  for (const key in props) {
    productDetails.push(<OrderDetails {...props[key]} key={key} />);
  }
  return (
    <div className="flex justify-center items-center flex-col text-4xl mt-6">
      <div>Product Details </div>
      {props[0] ? (
        <div className="w-3/4 flex justify-between items-center text-lg mt-10">
          <div>Id : {props[0].product.product_id}</div>
          <div>Name : {props[0].product.name}</div>
          <div>Selling Price : {props[0].product.selling_price}</div>
          <div>Stock : {props[0].product.stock}</div>
        </div>
      ) : (
        ""
      )}
      <div className="w-3/4 flex justify-between items-center px-10 mt-10 text-xl border-b-4 p-2">
        <div className="flex justify-center items-center w-20">Order Id</div>
        <div className="flex justify-center items-center w-40">Time</div>
        <div className="flex justify-center items-center w-28">Customer Id</div>
        <div className="flex justify-center items-center w-40">
          Customer Name
        </div>
      </div>
      {productDetails}
    </div>
  );
}

export default Date;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const response = await axios.post(
    "http://localhost:3000/api/getProductOrderDetails",
    {
      id: context.params.id,
    }
  );
  return {
    props: { ...response.data },
  };
}
