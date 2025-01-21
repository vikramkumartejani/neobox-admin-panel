import React, { useState, useEffect } from 'react'
import { IoMdClose } from "react-icons/io";


const UpdateStatusModal = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        setIsOpen(true);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(onClose, 300);
    };

    const handleClickOutside = (e) => {
        if (e.target.id === 'modal-overlay') {
            handleClose();
        }
    };


    return (
        <div
            id="modal-overlay"
            className="fixed top-0 bottom-0 w-full h-full bg-[#000000b3] z-50 left-0 right-0 p-4 transition-opacity duration-150 overflow-y-auto overflow-x-hidden"
            style={{ opacity: isOpen ? 1 : 0 }}
            onClick={handleClickOutside}
        >
            <div className="mt-4 md:mt-8 replace-card">
                <div className={`bg-white max-w-[498px] rounded-[9px] w-full m-auto transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}>

                    <header className='border-b border-[#dae0ec] p-4 flex items-center justify-between'>
                        <h1 className='text-lg capitalize font-semibold'>Update Status Customer</h1>

                        <button onClick={onClose} type="button" aria-label="Close" className="text-lg text-[#869ac0]">
                            <IoMdClose />
                        </button>
                    </header>

                    <div className='p-4'>
                        <label className='mb-2 text-sm font-medium block'>Status</label>

                        <select className="border border-[#d2cfcf] px-3 py-[6px] rounded-md w-full appearance-none custom-select">
                            <option value="1">Active</option>
                            <option value="0">Block</option>
                        </select>

                        <div className='flex justify-end mt-8'>
                            <button className='bg-[#0671e3] text-white rounded py-[6px] px-3 min-w-[115px] hover:bg-[#0671e3] transition-all duration-300'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateStatusModal