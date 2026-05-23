"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteBookingAlert({ id }) {
  const handleCancelBooking = async () => {
    const res = await fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data);
    redirect("/my-bookings")
  };

  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleCancelBooking}
                slot="close"
                variant="danger"
              >
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
