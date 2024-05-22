import axios from 'axios'
import React from 'react'

export const  axiosCommon=axios.create({

baseURL:import.meta.env.VITE_API_URL


})


const UseAxiosCommon = () => {
  return axiosCommon

}

export default UseAxiosCommon
