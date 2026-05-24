import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SEVER_URL}/destinations`);
  const desArr = await res.json();
  console.log("destination of cards", desArr);

  return (
    <section>
      <h3>All Destination</h3>
      <div className="grid grid-cols-3 gap-2">
        {desArr.map((des) => (
          <DestinationCard key={des._id} des={des}></DestinationCard>
        ))}
      </div>
    </section>
  );
};

export default DestinationPage;
