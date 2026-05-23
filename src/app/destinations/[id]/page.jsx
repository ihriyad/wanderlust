import Image from "next/image";
import React from "react";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destinations/${id}`);
  
  const destination = await res.json();
  console.log("destination details", destination);
  const { description, destinationName, price, imageUrl, country, duration } =
    destination;
  return (
    <section className="mx-auto max-w-4xl my-4">
      <h3>Destination Details:</h3>
      <div>
        <figure>
          <Image
            src={imageUrl}
            alt="details image"
            height={400}
            width={500}
          ></Image>
        </figure>
        <h2>{destinationName}</h2>
        <p>${price}</p>
        <p className="font-bold text-3xl">OverView</p>
        <h3>{description}</h3>
      </div>
    </section>
  );
};

export default DestinationDetailsPage;
