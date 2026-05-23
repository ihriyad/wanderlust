import MyBooking from "@/components/MyBooking";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  //   console.log(session);
  const user = session?.user;
  console.log(user);
  const res = await fetch(`http://localhost:5000/bookings/${user.id}`);
  const data = await res.json();
  //   console.log(data, "data form my-bookings page");
  return (
    <div>
      {data.map((d) => (
        <MyBooking key={d._id} d={d}></MyBooking>
      ))}
    </div>
  );
};

export default MyBookingPage;
