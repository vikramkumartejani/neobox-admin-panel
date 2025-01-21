import React, { useState, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io';
import { BsUpload } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


const CreateCategory = ({ onClose }) => {
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


    const [coverImage, setCoverImage] = useState(null);

    const handleFileUpload = (e, setImage) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const deleteImage = (setImage) => {
        setImage(null);
    };


    return (
        <div
            id="modal-overlay"
            className="fixed top-0 bottom-0 w-full h-full bg-[#000000b3] z-50 left-0 right-0 transition-opacity duration-150 overflow-y-auto overflow-x-hidden"
            style={{ opacity: isOpen ? 1 : 0 }}
            onClick={handleClickOutside}
        >
            <div className='flex mx-3 replace-card'>
                <div className={`bg-white max-w-[800px] rounded-[9px] w-full h-fit mx-auto mt-3 md:mt-8 mb-3 transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    {/* Modal Header */}
                    <header className="border-b border-[#dae0ec] p-4 flex items-center justify-between">
                        <h1 className="text-lg capitalize font-semibold">Create Category</h1>
                        <button
                            onClick={onClose}
                            type="button"
                            aria-label="Close"
                            className="text-lg text-[#869ac0]"
                        >
                            <IoMdClose />
                        </button>
                    </header>

                    {/* body  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 my-3 gap-5 md:gap-0'>
                        {/* Left Side  */}
                        <div className='px-4'>
                            <fieldset className='mb-4'>
                                <label htmlFor="select-language" className='pb-2 block font-medium text-sm'>Select Language</label>
                                <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md">
                                    <option value="true">-- Select Language --</option>
                                    <option value="true">English</option>
                                    <option value="false">French</option>
                                </select>
                            </fieldset>

                            <fieldset className='mb-4'>
                                <label htmlFor="category-name" className='pb-2 block font-medium text-sm'>Name*</label>
                                <input type="text" placeholder='Enter Category Name' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                            </fieldset>

                            <fieldset className='mb-4'>
                                <label htmlFor="select-order" className='pb-2 block font-medium text-sm'>Sort Order*</label>
                                <input type="number" value={1} placeholder='Enter Sort Order' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                            </fieldset>

                            <fieldset className='mb-4'>
                                <label htmlFor="status*" className='pb-2 block font-medium text-sm'>Status*</label>
                                <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md">
                                    <option value="true">Active</option>
                                    <option value="true">InActive</option>
                                </select>
                            </fieldset>
                        </div>

                        {/* Right Side - Select Category image  */}
                        <div className='px-4'>
                            <div className='flex justify-center flex-col items-center w-full'>
                                <h4 className='text-sm font-medium text-center'>
                                    Upload Image
                                </h4>

                                <div className='my-3 w-full'>
                                    {!coverImage ? (
                                        <div className='border border-[#a8b6d1] rounded-[7px] h-[200px] mx-auto w-full max-w-[200px] text-[#131516] text-center flex flex-col justify-center items-center'>
                                            <BsUpload size={25} className='text-center mx-auto my-4' />
                                            <p className='text-sm'>Drag And Drop File</p>
                                            <p className='text-sm my-1'>or</p>
                                            <label className='bg-[#c9d2e3] border border-[#c9d2e3] text-[#212837] rounded-md py-[6px] px-3 text-sm cursor-pointer'>
                                                Browse
                                                <input
                                                    type='file'
                                                    className='hidden'
                                                    accept='image/*'
                                                    onChange={(e) => handleFileUpload(e, setCoverImage)}
                                                />
                                            </label>
                                        </div>
                                    ) : (
                                        <div className='max-w-[200px] w-full max-h-[200px] h-[200px] relative mx-auto'>
                                            <img src={coverImage} alt='Cover' className='h-full w-full object-cover rounded-md' />
                                            <button
                                                className='absolute top-0 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-black text-white'
                                                onClick={() => deleteImage(setCoverImage)}
                                            >
                                                <IoCloseSharp size={12} />
                                            </button>

                                            <label className='w-6 h-6 bg-[#0671e3] flex items-center justify-center text-white absolute bottom-0 right-0 rounded-full cursor-pointer'>
                                                <FaEdit size={12} />
                                                <input
                                                    type='file'
                                                    className='hidden'
                                                    accept='image/*'
                                                    onChange={(e) => handleFileUpload(e, setCoverImage)}
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* footer  */}
                    <div className='p-4 flex justify-end'>
                        <button className="bg-[#0671E3] text-white py-[6px] max-w-[115px] w-full px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                            Save
                        </button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default CreateCategory