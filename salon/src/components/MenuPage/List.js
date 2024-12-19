import { useState } from "react";
import { menus } from "../constant/Data";

const List = () => {
  const [openDropdown, setOpenDropdown] = useState({});

  const toggleDropdown = (subCategory) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [subCategory]: !prevState[subCategory],
    }));
  };

  return (
    <div className="px-20 w-full py-24">
      {menus.map((menu) => (
        <div key={menu.id}>
          <div className="text-6xl font-custom1 text-center w-full pt-8">{menu.category}</div>
          {menu.sub_category.map((sub) => (
            <div key={sub.sub_category} className="ml-6 mb-4">
              <div
                className="text-2xl text-custom2 my-4 cursor-pointer flex items-center justify-between"
                onClick={() => toggleDropdown(sub.sub_category)}
              >
                <span className="font-custom1">{sub.sub_category}</span>
                <img
                  src={
                    openDropdown[sub.sub_category]
                      ? "/img/MenuPage/minus.png"
                      : "/img/MenuPage/add.png"
                  }
                  alt="Toggle Dropdown"
                  className="w-4 h-4"
                />
              </div>
              <div className="w-full border border-black mx-auto"></div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
                  openDropdown[sub.sub_category]
                    ? "max-h-[500px] translate-y-0" 
                    : "max-h-0 translate-y-4 opacity-0" 
                }`}
              >
                <ul className="mx-4 pt-4 px-4">
                    {sub.services.map((service, index) => (
                        <li key={index} className="flex justify-between items-center text-lg text-black font-custom2">
                        <span className="mr-2">{service.name}</span>
                        <span>{`$${service.price}`}</span>
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default List;
