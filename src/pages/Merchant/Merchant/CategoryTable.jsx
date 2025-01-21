import React, { useState } from "react";

import EditIcon from "../../../assets/edit-icon.svg";

const categoriesData = [
  { id: 1, categoryname: "Promotion", shortorder: "0" },
  { id: 2, categoryname: "Les mieux notés", shortorder: "0" },
  { id: 3, categoryname: "Fruit et Légume", shortorder: "1" },
  { id: 4, categoryname: "Fruits de mer", shortorder: "2" },
  { id: 5, categoryname: "Viande", shortorder: "3" },
  { id: 6, categoryname: "Boulangerie", shortorder: "4" },
  { id: 7, categoryname: "Boisson", shortorder: "4" },
  { id: 8, categoryname: "Saucisse", shortorder: "5" },
  { id: 9, categoryname: "Congelé", shortorder: "22" },
  { id: 10, categoryname: "Dessert", shortorder: "23" },
  { id: 11, categoryname: "Autre Produit", shortorder: "24" },
];


const CategoryTable = () => {
  const [toggleStates, setToggleStates] = useState(
    categoriesData.reduce((acc, category) => {
      acc[category.id] = true;
      return acc;
    }, {})
  );

  const toggleSwitch = (id) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };


  return (
    <div>
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Categories"
          className="bg-white border border-[#d2cfcf] rounded-md w-full min-w-fit max-w-[389px] px-3 py-[6px] h-[38px] text-base text-[#3c4e71]"
        />
      </div>

      <div className="overflow-x-auto w-full block bg-white rounded-lg border">
        <table className="w-full border-collapse">
          <thead className="bg-[#F9FAFB]">
            <tr>
              <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                Name
              </th>
              <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                Sort Order
              </th>
              <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                Status
              </th>
              <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-end whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {categoriesData.length > 0 ? (
              categoriesData.map((category) => (
                <tr
                  key={category.id}
                  className="hover:bg-tr-hover-bg text-center"
                >
                  <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left flex-1">
                    <p className="font-medium flex-1">{category.categoryname}</p>
                  </td>

                  <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 whitespace-nowrap">
                    {category.shortorder}
                  </td>

                  <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 whitespace-nowrap">
                    <div
                      className={`w-7 h-4 flex items-center rounded-full mx-auto p-[2px] cursor-pointer transition-all duration-300 ${toggleStates[category.id]
                        ? "bg-[#0671E3]"
                        : "bg-gray-300"
                        }`}
                      onClick={() => toggleSwitch(category.id)}
                    >
                      <div
                        className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${toggleStates[category.id]
                          ? "translate-x-3"
                          : ""
                          }`}
                      ></div>
                    </div>
                  </td>

                  <td className="border-t border-[#f2f2f2] px-[1.2rem] py-5 whitespace-nowrap">
                    <div className="flex gap-2 justify-end">
                      <button
                        title="Edit"
                        className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                      >
                        <img src={EditIcon} alt="Edit Icon" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="border-t border-[#f2f2f2] px-[.9rem] py-5 text-center text-[#212837] text-sm"
                >
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


    </div >
  );
};

export default CategoryTable;
