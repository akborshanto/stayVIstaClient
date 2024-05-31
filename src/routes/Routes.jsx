import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import { element } from 'prop-types'
import DashboardLayout from '../layouts/DashboardLayout'
import Statistics from '../pages/Dashboard/common/Statistics'
import AddRoom from '../pages/Dashboard/host/AddROom'
import MyListings from '../pages/Dashboard/host/MyListings'
import Profile from '../pages/Dashboard/common/profile/Priofile'
import ManageUsers from '../pages/Dashboard/admin/manageUser/ManageUser'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: 
<PrivateRoute>
        
<RoomDetails />
</PrivateRoute>
,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
/* dashboard */
{
  path:'/dashboard',
  element:<DashboardLayout></DashboardLayout>,
/* dashboard childrem */
children:[

/* statsics */
{
  index:true,
  element:<Statistics></Statistics>
},
{
  path:'add-room',
  element:<AddRoom></AddRoom>
},
{
  path:'my-listings',
  element:<MyListings></MyListings>
},{
  path:'profile',
  element:<Profile></Profile>
}
/* condition */
,{
  path:'manage-users',
  element:<ManageUsers></ManageUsers>
},

]

}


])
