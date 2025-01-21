import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';



const DeleteUser = ({ onClose }) => {
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
                <div
                    className={`bg-white max-w-[498px] rounded-[9px] w-full m-auto transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
                        }`}
                >
                    {/* Modal Header */}
                    <header className="border-b border-[#dae0ec] p-4 flex items-center justify-between">
                        <h1 className="text-lg capitalize font-semibold">Delete User</h1>
                        <button
                            onClick={onClose}
                            type="button"
                            aria-label="Close"
                            className="text-lg text-[#869ac0]"
                        >
                            <IoMdClose />
                        </button>
                    </header>

                    {/* Body */}
                    <div className="p-4">
                        <p className='mb-4 text-sm'>
                            Are you sure you want to delete User "Abdoul Dia" ?
                        </p>

                        <div className='flex justify-end gap-2 pt-4'>
                            <button onClick={onClose} className='bg-[#f2f2f2] h-9 border border-[#f2f2f2] text-[#212837] py-1 px-3 text-sm rounded-md'>Cancel</button>
                            <button className='bg-[#ff3b30] h-9 min-w-[115px] border border-[#ff3b30] text-white py-1 px-3 text-sm rounded-md'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;
