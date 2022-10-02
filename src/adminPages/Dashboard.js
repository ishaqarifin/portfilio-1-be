import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { API } from "../config/api";
import NavbarAdmin from "./NavbarAdmin";

export default function Dashboard() {
  let api = API();

  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const response = await api.get("/transactions");
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  });
  console.log(transactions);

  // -------- Approve Transaction --------

  //   const handleApprove = async (id) => {
  //     try {

  //         const config = {
  //             headers: {
  //                 "Content-type": "application/json"
  //             }
  //         }
  //         const body = JSON.stringify({ status: 'Approved' })

  //         const response = await api.patch('transaction/' + id, body, config)
  //         console.log(response);
  //         getTransactions()

  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  const handleApprove = useMutation(async (id) => {
    try {
      // Data body
      const body = JSON.stringify({ status: "Approved" });

      // Configuration
      const config = {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body,
      };

      // Insert category data
      await api.patch("/transaction/" + id, config);
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <>
      <NavbarAdmin />
      <div className="w-screen">
        <div className="ml-20 mt-10 text-2xl font-bold">Income Transaction</div>
        <div className="mx-20 my-5">
          <table className="w-full table-auto">
            <thead className="text-left bg-stone-200 border-2 border-black uppercase">
              <tr className="border-b">
                <th scope="col" className="px-6 py-3 border-2 border-black">
                  No
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-black">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-black">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-black">
                  Post Code
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-black">
                  Product Order
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-black">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="">
              {transactions?.map((item, index) => (
                <tr className="border-b bg-stone-100">
                  <td className="px-6 py-2 border-2 border-black">{item?.id}</td>
                  <td className="px-6 py-2 border-2 border-black">{item.buyer.name}</td>
                  <td className="px-6 py-2 border-2 border-black">{item.buyer.address}</td>
                  <td className="px-6 py-2 border-2 border-black">{item.buyer.codePost}</td>
                  <td className="px-6 py-2 border-2 border-black">{item?.product?.name}</td>
                  <td className="px-6 py-2 border-2 border-black">{item?.status}</td>
                  <td className="items-center space-x-2 py-2 border-2 border-black">
                    <button
                      // onClick={()=> {
                      //   handleEdit(item.id)
                      // }}
                      className="bg-red-500 text-white ml-4 font-bold hover:bg-red-700 py-1 w-24 rounded-xl focus:outline-none focus:shadow-outline"
                    >
                      Cencel
                    </button>
                    <button onClick={() => handleApprove(item.id)} className="bg-green-400 hover:bg-green-700 text-white font-bold py-1 w-24 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
