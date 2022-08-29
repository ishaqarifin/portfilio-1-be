import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { API } from '../config/api'
import dateFormat from 'dateformat'
import { UserContext } from '../context/userContext'
import NavbarLogin from './NavbarLogin'

export default function Profile() {
  let api = API()

  const [state] = useContext(UserContext)

  let { data: profile } = useQuery(
    "profileCache",
    async () => {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };
      const response = await api.get("/profile", config);
      return response.data;
    }
    );
    console.log(profile);

    let { data: transaction } = useQuery(
      "transactionCache",
      async () => {
        const config = {
          method: "GET",
          headers: {
            Authorization: "Basic " + localStorage.token,
          },
        };
        const response = await api.get("/transaction", config);
        return response.data;
      }
    );
    console.log(transaction);

  return (
    <>
      <NavbarLogin />
      <div className="flex px-20">
      {/* Profile */}
        <div className="basis-6/12">
          <div className="ml-16 font-bold text-orange-900 mt-5">My Profile</div>
          <div className="flex w-full ml-16 mt-4">
            <div className="flex rounded-lg shadow-lg max-w-sm h-44 mr-4">
              <img className="rounded h-auto object-cover" src="./assets/photo.jpg" alt="" />
            </div>
            <div className="flex-col space-y-5 ">
              <div className="px-3">
                <p className="text-orange-900 text-sm font-medium">Name</p>
                <p className="text-sm">{state.user.name}</p>
              </div>
              <div className="px-3">
                <p className="text-orange-900 text-sm font-medium">Email</p>
                <p className="text-sm">{state.user.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction */}
        <div className="basis-6/12">
          <div className="font-bold text-orange-900 mt-5">My Transaction</div>
          <div className="flex-col mt-4 bg-stone-200 items-center justify-between py-3 px-8">
            {transaction?.map((item, index) => (
            <div className="flex items-center mb-4">
              <div className="rounded-lg w-20 mr-4">
                <img className="rounded" src={item.product.image} alt="" />
              </div>
              <div className="px-3">
                <p className="text-md font-bold">{item.product.name}</p>
                <p className="text-xs">
                {dateFormat(
                    item.createdAt,
                    "dddd, d mmmm yyyy, HH:MM "
                  )}
                </p>
                <p className="text-xs mb-2">Price : Rp. {item.price}</p>
                <p className="text-xs">Qty : 1</p>
                <p className="text-xs font-bold">Sub Total : 500.000</p>
              </div>
              <div className="absolute right-24 w-20">
              <p className="text-ms font-bold">{item.status}</p>
                {/* <img className="" src="./assets/product1.png" alt="" /> */}
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}
