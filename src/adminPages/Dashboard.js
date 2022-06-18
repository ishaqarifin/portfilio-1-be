import React from 'react'
import NavbarAdmin from './NavbarAdmin'

export default function Dashboard() {
  return (
    <>
      <NavbarAdmin />
      <div className="w-screen">
        {/* <NavbarAdmin /> */}
        <div className="ml-20 mt-5 font-bold">Product</div>
        {/* {show && <Modal 
          setConfirmDelete={setConfirmDelete}
          show={show}
          handleClose={handleClose}
        />} */}
        <div className="mx-20 my-5">
          <button className="hover:bg-gray-800 mb-5 font-bold border py-2 px-4 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {/* <path strokelinecap="round" strokelinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /> */}
            </svg>
            {/* <NavLink to="#"> */}
              <span>Add Product</span>
            {/* </NavLink> */}
          </button>
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
              {/* {products?.map((item, index) => ( */}
                <tr className="border-b bg-stone-100">
                  <td className="px-6 py-2 border-2 border-black">isi1</td>
                  <td className="px-6 py-2 border-2 border-black">isi2</td>
                  <td className="px-6 py-2 border-2 border-black">isi3</td>
                  <td className="px-6 py-2 border-2 border-black">isi4</td>
                  <td className="px-6 py-2 border-2 border-black">isi5</td>
                  <td className="px-6 py-2 border-2 border-black">isi6</td>
                  <td className="px-6 py-2 border-2 border-black">
                      <button
                        // onClick={()=> {
                        //   handleEdit(item.id)
                        // }}
                        className="bg-green-500 hover:bg-green-700 py-1 w-16 rounded focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                    <button 
                    // onClick={()=> {
                    //   handleDelete(item.id)
                    // }}
                    className="bg-red-500 hover:bg-red-700 py-1 w-16 rounded focus:outline-none focus:shadow-outline ml-2" type="button">
                      Delete
                    </button>
                  </td>
                </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
