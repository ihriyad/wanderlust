import DestinationDetails from "@/components/DestinationDetails";
import EditDesModal from "@/components/modals/EditDesModal";

import React from "react";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destinations/${id}`,{cache: "no-store"});

  const destination = await res.json();
  // console.log("destination details", destination);

  return (
    <section className="mx-auto max-w-4xl my-4">
      <h3 className="flex">Destination Details:</h3>
      <EditDesModal destination={destination}></EditDesModal>
      <DestinationDetails destination={destination}></DestinationDetails>
    </section>
  );
};

export default DestinationDetailsPage;
