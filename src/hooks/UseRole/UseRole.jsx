import React from "react";
import useAuth from "../useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";

const UseRole = () => {
  const { user, loading } = useAuth() || {};
  const axiosSecure = useAxiosSecure();
  const email = user?.email;
  /* Tenstack querry */
  const { data: role = [], isLoading } = useQuery({
    queryKey: ["role"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
     
      return data.role;
    },
  });

  return [role, isLoading];
};

export default UseRole;
