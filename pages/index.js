import React from "react";
import LineChart from "react-linechart";
import axios from "axios";
import { useRouter } from "next/router";

function Home(props) {
  const route = useRouter();
  const data = [
    {
      color: "steelblue",
      points: props.points,
    },
  ];
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="flex justify-center items-center">
        <div className="text-4xl mt-10 pt-4">Total Sales Console</div>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <div className="text-2xl p-2">
          <LineChart
            xLabel="Product Id"
            yLabel="Quantity Sold"
            width={1300}
            height={600}
            data={data}
            onPointClick={(event, point) => {
              route.push(`product/${point.y}`);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const response = await axios.get(
    "http://localhost:3000/api/getPlotCoordinates"
  );
  return {
    props: { ...response.data },
  };
}
