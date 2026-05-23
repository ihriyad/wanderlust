"use client";
import React from "react";
import Image from "next/image";
import DesBookingCard from "./DesBookingCard";

const DestinationDetails = ({ destination }) => {
  const { description, destinationName, price, imageUrl, country } =
    destination;

  return (
    <section className="flex justify-between items-center gap-4">
      <div>
         <figure>
        <Image
          src={imageUrl}
          alt="details image"
          height={400}
          width={500}
        ></Image>
      </figure>
      <p>{country}</p>
      <h2>{destinationName}</h2>
      <p>${price}</p>
      <p className="font-bold text-3xl">OverView</p>
      <h3>{description}</h3>
      </div>
     <div>
      <DesBookingCard destination={destination}></DesBookingCard>
     </div>
    </section>
  );
};

export default DestinationDetails;
