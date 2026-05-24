"use client";
import {
  Modal,
  Button,
  Input,
  FieldError,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import React from "react";

const EditDesModal = ({ destination }) => {
  const {
    category,
    description,
    destinationName,
    price,
    imageUrl,
    departureDate,
    country,
    duration,
    _id,
  } = destination;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    console.log(" destination data", destination);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SEVER_URL}/destinations/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(destination),
      },
    );

    const data = await res.json();
    console.log("data submit", data);
  };

  return (
    <Modal>
      <Button variant="flat" color="primary">
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Destination</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={onSubmit} className="p-10 space-y-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Destination Name */}
                  <div className="md:col-span-2">
                    <TextField
                      defaultValue={destinationName}
                      name="destinationName"
                      isRequired
                    >
                      <Label>Destination Name</Label>
                      <Input
                        placeholder="Bali Paradise"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Country */}
                  <TextField defaultValue={country} name="country" isRequired>
                    <Label>Country</Label>
                    <Input placeholder="Indonesia" className="rounded-2xl" />
                    <FieldError />
                  </TextField>

                  <div>
                    <Select
                      defaultValue={category}
                      name="category"
                      isRequired
                      className="w-full"
                      placeholder="Select category"
                    >
                      <Label>Category</Label>
                      <Select.Trigger className="rounded-2xl">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Beach" textValue="Beach">
                            Beach
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Mountain" textValue="Mountain">
                            Mountain
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="City" textValue="City">
                            City
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Adventure" textValue="Adventure">
                            Adventure
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Cultural" textValue="Cultural">
                            Cultural
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Luxury" textValue="Luxury">
                            Luxury
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  {/* Price */}
                  <TextField
                    defaultValue={price}
                    name="price"
                    type="number"
                    isRequired
                  >
                    <Label>Price (USD)</Label>
                    <Input
                      type="number"
                      placeholder="1299"
                      className="rounded-2xl"
                    />
                    <FieldError />
                  </TextField>

                  {/* Duration */}
                  <TextField defaultValue={duration} name="duration" isRequired>
                    <Label>Duration</Label>
                    <Input className="rounded-2xl" />
                    <FieldError />
                  </TextField>

                  {/* Departure Date */}
                  <div className="md:col-span-2">
                    <TextField
                      defaultValue={departureDate}
                      name="departureDate"
                      type="date"
                      isRequired
                    >
                      <Label>Departure Date</Label>
                      <Input type="date" className="rounded-2xl" />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Image URL - Removed preview */}
                  <div className="md:col-span-2">
                    <TextField defaultValue={imageUrl} isRequired>
                      <Label>Image URL</Label>
                      <Input type="url" className="rounded-2xl" />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <TextField
                      defaultValue={description}
                      name="description"
                      isRequired
                    >
                      <Label>Description</Label>
                      <TextArea className="rounded-3xl" />
                      <FieldError />
                    </TextField>
                  </div>
                </div>
                <Button type="submit" variant="secondary">
                  Save
                </Button>
              </form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditDesModal;
