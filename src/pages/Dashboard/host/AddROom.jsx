import React, { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { uploadImage } from "../../../utils";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
//import { Calendar } from 'react-date-range';
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  /* axios sectur */
  const axiosSecure = useAxiosSecure();
  /* loading */
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  /* TENSTAQCK QUERY  USE MUTATION */
  const { mutateAsync, isError, isSuccess, isPending } = useMutation({
    mutationFn: async (roomdData) => {
      const { data } = await axiosSecure.post("/room", roomdData);
      return data;
    },
    onSuccess: () => {
      console.log("data se;; siccefi;e;");
      toast.success("Succesffylly addedd ", isError);
    //  toast.error("Error");
      navigate("/dashboard/my-listings");
      setLoading(true);
    },
  });

  /* image preview in AddRoom  Component */

  const [file, setFile] = useState();
  /*  show preview image  */
  const handlePreviewImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  /* DATE RANGEL CLEANDER */
  const handleDate = (item) => {
    console.log(item);
    setDates(item.selection);
  };

  /* handle submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    /* formn */

    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    /* datae */
    const to = dates.startDate;
    const from = dates.endDate;
    const price = form.price.value;
    const total_guest = form.total_guest.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;

    /* image problem */
    const image = form.image.files[0];
    const imageUpload = await uploadImage(image);
    // console.log(image);
    /* user information */
    const host = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };

    const addRoomInfo = {
      location,
      category,
      title,
      price,
      to,
      from,
      total_guest,
      bathrooms,
      description,
      image: imageUpload,
      host,
    };

    //post method in  card coollection dataabase
    await mutateAsync(addRoomInfo);

    console.log(addRoomInfo);
  };

  /*  */

  return (
    <div>
      ADD ROOM
      {/* FORM */}
      <AddRoomForm
        dates={dates}
        handleDate={handleDate}
        handleSubmit={handleSubmit}
        handlePreviewImage={handlePreviewImage}
        file={file}
        loading={loading}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
