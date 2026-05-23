import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DestinationCard = ({ des }) => {
  const { _id, destinationName, price, imageUrl, country, duration } = des;
  return (
    <Card>
      <Image
        alt="Destination Image"
        width={300}
        height={300}
        src={imageUrl}
      ></Image>
      <h1>{destinationName}</h1>
      <p>${price}</p>
      <h3 className="flex items-center gap-2">
        {duration} <span>{country}</span>
      </h3>

      <Link href={`/destinations/${_id}`}>
        {" "}
        <Button variant="secondary">Book Now</Button>
      </Link>
    </Card>
  );
};

export default DestinationCard;
