import React, { useState } from "react";
import { TrashIcon, PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline";
import NavbarLogin from "../navbar/NavbarLogin";
import { API } from "../../config/api";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  // let {id} = useParams()
  let api = API();
  let navigate = useNavigate();

  const [jumlah, setJumlah] = useState(1);
  // const [idDelete, setIdDelete] = useState(null);
  // const [confirmDelete, setConfirmDelete] = useState(null);

  let { data: carts } = useQuery("cartCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get("/cart", config);
    return response.data;
  });
  console.log(carts);

  const handleBuy = useMutation(async () => {
    try {
      // Get data from product
      const data = {
        idProduct: carts?.product?.id,
        idSeller: carts?.product?.user.id,
        price: carts?.product?.price,
      };

      console.log(data);

      // Data body
      const body = JSON.stringify(data);

      // Configuration
      const config = {
        method: "POST",
        headers: {
          Authorization: "Basic " + localStorage.token,
          "Content-type": "application/json",
        },
        body,
      };

      // Insert transaction data
      await api.post("/transaction", config);

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <NavbarLogin />
      <div className="ml-24 font-bold text-orange-900 mt-5">My Cart</div>
      <div className="flex px-24 space-x-6 py-6">
        <div className="basis-8/12">
          <div className="border-orange-900 border-b pb-2 w-full ">
            <p className="text-sm font-medium">preview your order</p>
          </div>

          {carts?.map((item, index) => (
            <>
              <div className="flex w-full justify-between my-3 items-center">
                <div className="flex items-center">
                  <img className="h-20 object-cover" src={item.product.image} alt="" />
                  <div className="flex-col space-y-5 ml-3">
                    <p className="text-sm text-orange-900 font-bold">{item?.product?.name}</p>
                    <div className="flex">
                      <MinusSmIcon onClick={() => jumlah > 1 && setJumlah(jumlah - 1)} className="h-6 cursor-pointer" />
                      <p className="text-md bg-red-100 px-3 font-medium">{jumlah}</p>
                      <PlusSmIcon onClick={() => setJumlah(jumlah + 1)} className="h-6 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="flex-col space-y-5 ">
                  <p className="text-sm text-orange-900 text-right">{item?.product?.price}</p>
                  <TrashIcon
                    // onClick={() => {
                    //   handleDelete(item.id);
                    // }}
                    className="text-xl text-right text-orange-900  h-6 ml-16 cursor-pointer"
                  />
                </div>
              </div>
              <div className="border-orange-900 border-b px-3 w-full">
                <p className="text-sm font-medium"></p>
              </div>
            </>
          ))}
        </div>
        <div className="basis-4/12 relative">
          <div className="flex-col space-y-3">
            <div className="py-2 border-orange-900 border-y mt-8">
              <p className="text-orange-900 text-sm">Sub Tota : Rp.60000</p>
              <p className="text-orange-900 text-sm">Qty : {jumlah}</p>
            </div>
            <p className="text-orange-900 text-sm">Total : Rp.60000</p>
            <button onClick={() => handleBuy.mutate()} className="bg-orange-900 absolute right-0 rounded-md w-44 border-none font-bold text-white">
              <p>Pay</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
