import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { DeleteBookingAlert } from "./modals/DeleteBookingAlert";

const MyBooking = ({ d }) => {
  // console.log(data);
  const {_id, destinationName, imageUrl, country, price, departureDate } = d;
  return (
    <div>
      <Card className="flex justify-between gap-4 items center my-6">
        {/* left */}
        <div className="flex gap-4 ">
          <figure>
            <Image
              src={imageUrl}
              width={200}
              height={200}
              alt="destination image"
            ></Image>
          </figure>
          <div>
            <h2 className="font-bold text-2xl">{destinationName}</h2>
            <p>{country}</p>
            <p>${price}</p>
            <p>{departureDate}</p>
          </div>
        </div>
        {/* right */}
        <div>
          <DeleteBookingAlert id={_id}></DeleteBookingAlert>
        </div>
      </Card>
    </div>
  );
};

export default MyBooking;
