/** @format */

import { Search, ShoppingCart, Utensils } from "lucide-react";
import UiButton from "../../ui/Button/UiButton";

const Navbar = () => {
  const scehma = [

    {
      id: 1,
      name: "Home"
    }, {
      id: 2,
      name: "Menu"
    }, {
      id: 3,
      name: "Table Reservation"
    },
    {
      id: 4,
      name: "About Us"
    },
  ]
  return (
    <div className="flex justify-between  h-16 items-center px-4   bg-primary/10">
      <div className="flex gap-2">

        <span className="rounded-full p-0.5 ring-1 ring-primary">
          <Utensils className="size-5 text-white bg-primary rounded-full ring-1 p-0.5 " />
        </span>
        <p className="text-primary font-semibold w-24" >Huff & Puff</p>
      </div>
      <div className="flex ">
        <ul className="flex gap-4 text-sm font-medium cursor-pointer  " >

          {scehma?.map((item) => {
            return (
              <li className="hover:text-primary/70" key={item?.id}>{item?.name}</li>
            )
          })}
        </ul>
      </div>
      <div className="flex justify-center items-center  gap-4" >
        {/* <input type="text" className="w-44 rounded-full ring-1 ring-gray-300 text-black text-xs py-1 px-2" placeholder="Search food..." /> */}
        <Search className="size-4 text-black cursor-pointer hover:text-primary/70 " />
        <ShoppingCart className="size-4 text-black cursor-pointer hover:text-primary/70 " />
        <UiButton
          buttonType="primary"
          buttonName="Log in"
          className="!text-xs rounded-lg !w-12 !h-6 !font-medium"

        />
      </div>
    </div>
  );
};

export default Navbar;
