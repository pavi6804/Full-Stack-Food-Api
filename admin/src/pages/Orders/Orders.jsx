import React from 'react'
import './Orders.css'
import { useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"
import { useEffect } from 'react'

const Orders = (url) => {
 
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
     const response = await axios.get(url+"/api/order/list");
     if(response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data);
     }
     else{
      toast.error("Error")
     }
  }

  useEffect(()=>{
      fetchAllOrders();
  },[])

  return (
    <div>
      Orders
    </div>
  )
}

export default Orders
