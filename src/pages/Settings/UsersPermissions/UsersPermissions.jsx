import React, { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../../../components/Layout";

import { BsArrowLeft } from "react-icons/bs";
import DeleteUser from "./DeleteUser";
import EditIcon from "../../../assets/edit-icon.svg";
import DeleteIcon from "../../../assets/delete-icon.svg";
import EditUserModal from "./EditUserModal";

const Users = () => {
  const [isOpenDeleteUser, setIsOpenDeleteUser] = useState(false)
  const [isOpenEditUserModal, setIsOpenEditUserModal] = useState(false)


  const handleOpenEditUserModal = () => {
    setIsOpenEditUserModal(true)
  }

  const handleCloseEditUserModal = () => {
    setIsOpenEditUserModal(false)
  }



  // Function for open & close Delete User Modal 
  const handleOpenDeleteUserModal = () => {
    setIsOpenDeleteUser(true)
  }

  const handleCloseDeleteUserModal = () => {
    setIsOpenDeleteUser(false)
  }


  return (
    <Layout>
      <section className='pt-[60px] pb-32'>
        {/* Header */}
        <div className='py-[10px] px-4 xl:px-[50px] w-full sticky top-[60px] z-30 left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>
          <div className='flex items-center gap-4'>
            <Link to="/settings" className='bg-[#E5E5E5] rounded-md w-11 h-10 flex items-center justify-center text-[#C2C2C2]'>
              <BsArrowLeft size={22} />
            </Link>
            <h1 className='text-xl font-medium capitalize'> Users and permissions </h1>
          </div>
        </div>

        <div className="px-4 xl:px-[50px] max-w-[1280px] w-full mx-auto">
          <div className="max-w-[1012px] w-full">
            <h1 className="mb-1 text-xl font-semibold">Users</h1>
            <p className="text-[#13151680] mb-4 text-sm">
              List of all users getting access to the panel
            </p>

            <div className="flex justify-between items-center gap-4 mb-6">
              <input
                type="text"
                placeholder="Search User"
                className="bg-white border border-[#d2cfcf] rounded-md w-full max-w-[389px] px-3 py-[6px] h-[38px] text-base text-[#3c4e71]"
              />

              <button className="bg-[#131516] py-[6px] px-3 text-sm font-medium text-white rounded transition-all duration-300 hover:opacity-90">Invite</button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto w-full block bg-white rounded-lg border">
              <table className="w-full border-collapse">
                <thead className="bg-[#f9fafb] rounded-2xl">
                  <tr>
                    <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left">
                      Email
                    </th>

                    <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center">
                      Status
                    </th>

                    <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center">
                      Added
                    </th>

                    <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className='cursor-pointer'>
                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm">neobox-adminpanel&gmail.com</td>

                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] font-medium text-[#212837] text-sm text-center">
                      <button className={`px-[10px] py-[2px] rounded-[15px] capitalize text-sm text-center mx-auto bg-[#1ABD364D]`}>
                        Active
                      </button>
                    </td>

                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm text-center whitespace-nowrap">18 Jan 2025</td>
                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm text-center">
                      <div className="flex gap-2 justify-center">
                        <button
                         onClick={handleOpenEditUserModal}
                          title="Edit"
                          className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                        >
                          <img src={EditIcon} alt="Edit Icon" />
                        </button>

                        <button
                          onClick={handleOpenDeleteUserModal}
                          title="Delete"
                          className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                        >
                          <img src={DeleteIcon} alt="Delete Icon" />
                        </button>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>

        {isOpenDeleteUser && (
          <DeleteUser onClose={handleCloseDeleteUserModal} />
        )}
        {isOpenEditUserModal && (
          <EditUserModal onClose={handleCloseEditUserModal} />
        )}
      </section>
    </Layout>
  );
};

export default Users;
