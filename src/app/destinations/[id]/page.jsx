import DestinationDetails from "@/components/DestinationDetails";
import { DeleteDesModal } from "@/components/modals/DeleteDesModal";
import EditDesModal from "@/components/modals/EditDesModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import React from "react";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers()
  })

  // console.log(token);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SEVER_URL}/destinations/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
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
