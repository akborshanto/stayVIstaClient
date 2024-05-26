import { Helmet } from "react-helmet-async";
import useAuth from "./../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import RoomDataRow from "./RoomDataRow";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { toast } from 'react-hot-toast';

const MyListings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();














  const {
    data: myListing = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["my-listing", user?.email],
    queryFn: async (id) => {
      /* user axios secure hook */
      //const {data}=await axiosSecure.get(`/my-listings/${user?.email}`)
      const { data } = await axiosSecure.get(`/my-listings/${user?.email}`);

      return data;
    },
  });


  /* DELETE MY LIST ITEM WITH TENSTACK QUERY */

  const  {mutateAsync}=useMutation({
  mutationKey:['My-List'],
  mutationFn:async (id)=>{
  
  const {data}=await axiosSecure.delete(`/my-List/${id}`)
  return data
  },
  onSuccess:async(data)=>{
  toast.success("successfulley deelted")
  refetch()
  console.log(data)
  }
  
  })
  
  const handleDelete=async(id)=>{
console.log(id)
    try{

      await mutateAsync(id)

    }catch(err){
      console.log(err)
    }
 
  
  
  }
  

const handleUpdate=(id)=>{


console.log(id)

}














  
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;


  return (
    <>
      <Helmet>
        <title>My Listings</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      To
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Delete
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Room row data */}

                  {myListing?.map((room) => (
                    <RoomDataRow
                      room={room}
                      refatch={refetch}
                      handleDelete={handleDelete}
                      key={Math.random()}
                    ></RoomDataRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyListings;
