import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserSales } from "../../redux/actions/mySalesAction";

const GetLoggedUserSales = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getLoggedUserSales("limit=1"));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);


  // set pagination
  const handleChangePagination = async pageNum => {
    setLoading(true)
    setIsPress(true)
    await dispatch(getLoggedUserSales(`limit=1&page=${pageNum}`))
    setLoading(false)
    setIsPress(false)
  }


  const response = useSelector((state) => state.sales.getLoggedUserSales);

  let products = [];
  if (response && response.status === 200) {
    products = response.data.data.map((item) => item.product);
    localStorage.salesPagePagination = JSON.stringify(response.data.pagination);
  }
  return [loading, isPress, products, handleChangePagination];
};

export default GetLoggedUserSales;
