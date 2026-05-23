import DestinationDetails from "@/components/DestinationDetails";
import { DeleteDesModal } from "@/components/modals/DeleteDesModal";
import EditDesModal from "@/components/modals/EditDesModal";

import React from "react";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    cache: "no-store",
  });

  const destination = await res.json();
  // console.log("destination details", destination);

  return (
    <section className="mx-auto max-w-4xl my-4">
      <h3>Destination Details:</h3>

      <DestinationDetails destination={destination}></DestinationDetails>
      <div className="flex items-center justify-end gap-3 my-3">
        <EditDesModal destination={destination}></EditDesModal>
        <DeleteDesModal destination={destination}></DeleteDesModal>
      </div>
    </section>
  );
};

export default DestinationDetailsPage;
