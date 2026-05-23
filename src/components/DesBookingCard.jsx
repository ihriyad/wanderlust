"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";

const DesBookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  // console.log(user);
  const { _id, destinationName, price, imageUrl, country } = destination;

  const [date, setDate] = useState(null);
  const handleBooking = async () => {
    const user = session?.user;
    const bookingsData = {
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(date),
    };
    // console.log("bookings data", bookingsData);
    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookingsData),
    });
    const data = await res.json();
    console.log("data form bookings", data);
  };

  //   console.log(date);
  return (
    <Card className="my-3">
      <h1 className="text-center text-2xl">Book Now</h1>
      <p className="text-muted text-sm">Starting With</p>
      <h2 className="text-2xl text-cyan-500 font-bold">
        ${price}
        <span className="text-muted text-sm">/per person</span>
      </h2>
      <DateField onChange={setDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <div>
        <Button onClick={handleBooking} variant="tertiary" className={"w-full"}>
          Proceed
        </Button>
      </div>
    </Card>
  );
};

export default DesBookingCard;
