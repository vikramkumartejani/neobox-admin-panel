import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

const CustomerExportModal = ({ onClose }) => {
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
                    <header className="border-b border-[#dae0ec] p-4 flex items-center justify-end">
                        <button
                            onClick={handleClose}
                            type="button"
                            aria-label="Close"
                            className="text-lg text-[#869ac0]"
                        >
                            <IoMdClose />
                        </button>
                    </header>


                    {/* Modal Body */}
                    <div className="p-4">
                        <div className="mb-6">
                            <p className='text-center text-sm'> Do You Want to Export All <span className='font-semibold'>3</span> products? </p>
                        </div>


                        {/* Footer Buttons */}
                        <div className="flex justify-end gap-2">
                            <button onClick={handleClose} className="bg-[#ff3b30] text-white px-3 text-sm py-[6px] h-9 rounded-md hover:opacity-90 transition-all duration-300">
                                No
                            </button>

                            <button className="bg-[#f2f2f2] text-black px-3 text-sm py-[6px] h-9 rounded-md hover:opacity-90 transition-all duration-300">
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerExportModal;