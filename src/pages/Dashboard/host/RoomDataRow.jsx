import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import DeleteModal from "../../../components/Modal/DeleteModal";

const RoomDataRow = ({ room, refetch ,handleDelete}) => {
  /* modal */
  const [isOpen, setIsOpen] = useState(false);

const closeModal=()=>{
    setIsOpen(false)
}


  return (
    <Fragment>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <img
                  alt="profile"
                  src={room?.image}
                  className="mx-auto object-cover rounded h-10 w-15 "
                />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">{room?.title}</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{room?.location}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">${room?.price}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">dsafd</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {(new Date(room?.to), "P")}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>

            {/* modal  */}
            <Button
              onClick={()=>setIsOpen(true)}
              className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              <span className="relative">Delete</span>
            </Button>
      
           
          </span>
          {/* Delete modal */}

          <DeleteModal isOpen={isOpen} closeModal={closeModal} handleDelete={handleDelete} id={room._id}></DeleteModal>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Update</span>
          </span>
          {/* Update Modal */}
        </td>
      </tr>
    </Fragment>
  );
};

export default RoomDataRow;
