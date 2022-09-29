import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import NavbarLogin from "../navbar/NavbarLogin";

export default function DetailProduct() {
  // let navigate = useNavigate()
  let api = API();
  let { id } = useParams();

  let { data: product } = useQuery("Cache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get("/product/" + id, config);
    return response.data;
  });

  return (
    <>
      <NavbarLogin />
      <div className="flex justify-center mt-16">
        <div className="mr-8">
          <div className="h-96">
            <img className="object-fill h-full" src={product?.image} alt="" />
          </div>
        </div>
        <div className="">
          <div className="w-96">
            <h5 className="text-red-500 text-3xl font-bold">{product?.name}</h5>
            <p className=" text-base mb-3">Stock : {product?.qty}</p>
            <p className="h-32 bg-slate-300  overflow-hidden text-sm text-justify my-6">{product?.desc}</p>
            <br />
            <p className="text-red-500 text-xl text-right font-bold mb-3">Rp. {product?.price}</p>
          </div>
          <div
            // onClick={(e) => handleBuy.mutate(e)}
            className="bg-yellow-500 text-center w-full py-1 mt-5 cursor-pointer font-bold rounded-sm"
          >
            Add To Cart
          </div>
        </div>
      </div>
    </>
  );
}
