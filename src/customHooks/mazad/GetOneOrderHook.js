import React, { useEffect } from 'react'
import { getOneOrder } from '../../redux/actions/payAction';
import { useDispatch, useSelector } from 'react-redux';

const GetOneOrderHook = () => {

  const dispatch = useDispatch()

  const run = async () => {
    await dispatch(getOneOrder(localStorage.productId));
  };

  useEffect(() => {
    run();
  }, []);

  const response = useSelector(state=>state.pay.getOneOrder)
  
  let isPaid = false
  if(response && response.status==200){
    if(response.data.data!==null){
      isPaid = true
    }
  }

  return [isPaid]

}

export default GetOneOrderHook