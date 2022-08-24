import React from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function OrderDetails(props) {
  parseInt(props.date);
  const date = new Date(+props.date);
  return (
    <div className="w-3/4 p-2 flex justify-between items-center px-10 mt-2 text-base border-b-2 font-light">
      <div className="w-20 flex justify-center items-center">{props.id}</div>
      <div className="w-74 flex justify-center items-center flex-row">
        <div>{date.toLocaleTimeString("en-US")}</div>
        <div className="pl-10">
          {date.getDate() +
            " " +
            monthNames[date.getMonth()] +
            " " +
            date.getFullYear()}
        </div>
      </div>
      <div className="w-20 flex justify-center items-center">
        {props.user.user_id}
      </div>
      <div className="w-40 flex justify-center items-center">
        {props.user.name}
      </div>
    </div>
  );
}

export default OrderDetails;
