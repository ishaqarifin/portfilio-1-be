import React from "react";
import NavbarAdmin from "./NavbarAdmin";

export default function AddProduct() {
  // const [preview, setPreview] = useState(null); //For image preview
  return (
    <>
      <NavbarAdmin />
      <div className="flex justify-center">
        <div className="w-80">
        <div className="font-bold text-orange-900">Add Product</div>
          <form
          // onSubmit={(e) => handleSubmit.mutate(e)}
          >
            {/* {preview && (
              <div>
                <img
                  src={preview}
                  style={{
                    maxWidth: "150px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                  alt={preview}
                />
              </div>
            )} */}
            <div className="">
              <div className="mb-10 my-5">
                <input
                  type="text"
                  placeholder="Name"
                  name="title"
                  // onChange={handleChange}
                  className="shadow appearance-none border-2 rounded w-full py-2 px-3 border-amber-900 bg-orange-100 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="number"
                  placeholder="Stock"
                  name="qty"
                  // onChange={handleChange}
                  className="my-3 shadow appearance-none border-2 rounded w-full py-2 px-3 border-amber-900 bg-orange-100 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  // onChange={handleChange}
                  className="shadow appearance-none border-2 rounded w-full py-2 px-3 border-amber-900 bg-orange-100 leading-tight focus:outline-none focus:shadow-outline"
                />
                {/* <input
                  type="textarea"
                  name="desc"
                  placeholder="description"
                  onChange={handleChange}
                  className="shadow appearance-none border-2 rounded w-full py-2 px-3 border-amber-900 bg-orange-100 leading-tight focus:outline-none focus:shadow-outline"
                /> */}
                <textarea 
                  className="my-3 border-2 rounded resize-none w-full h-full py-2 px-3 border-amber-900 bg-orange-100 "
                  placeholder="Description Product"
                  name="desc"
                  >
                  </textarea>

                <label 
                className="w-40 text-slate-400 font-semibold flex shadow border-2 rounded py-2 px-3 border-amber-900 bg-orange-100"
                >Photo Product
                <img src="./assets/upload.png" alt=""
                  className="w-4 ml-2" 
                />
                <input
                  className=" mt-5 form-control w-full px-3 text-base font-normal border-none rounded transition ease-in-out focus:text-red-700 focus:bg-none focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="file"
                  name="image"
                  hidden
                  // onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex items-center justify-center">
              <button className="bg-amber-900 hover:bg-orange-900 text-white px-4 font-semibold font-md rounded focus:outline-none focus:shadow-outline w-1/2" type="submit">
                Add Product
              </button>
              </div>
            </div>
          </form>
        </div>

        <div className="ml-8">
          <div className="h-96">
            <img className="object-fill h-full" src="./assets/product1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
