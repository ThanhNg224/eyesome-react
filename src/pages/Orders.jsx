import React, { useEffect } from "react";
import orderSuccess from "../assets/success-order.gif";
import { useLocation, useNavigate } from "react-router";
import { useCartContext } from "../contexts";


const Orders = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCartContext();

useEffect(() => {
  const query = new URLSearchParams(location.search);
  const vnpTxn = query.get("vnp_TxnRef");

  if (vnpTxn) {
    clearCart(); // optional
    setTimeout(() => {
      navigate("/products");
    }, 3000);
  } else if (location?.state !== "orderSuccess") {
    navigate("/");
  }
}, []);

  return (
    <div className="min-h-[80vh] flex justify-center items-center py-3 ">
      <div className="bg-white h-1/2 w-96 m-auto  rounded-md flex flex-col items-center justify-center p-5 modalShadow">
        <div className=" w-64  flex items-center justify-center ">
          <img
            src={orderSuccess}
            alt="order-successfull"
            className="w-full object-fit"
          />
        </div>
        <p className="text-3xl py-2 font-semibold text-gray-700">
          Order Successful
        </p>
        <p className="text-sm text-gray-400">
          Thank you for ordering with us :)
        </p>
      </div>
    </div>
  );
};

export default Orders;
