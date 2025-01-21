import React, { useState, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import CustomRadioInput from '../../../components/CustomRadioInput';

const AddZoneModal = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('radius');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };



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
            className="fixed top-0 bottom-0 w-full h-full bg-[#000000b3] z-50 left-0 right-0 transition-opacity duration-150 overflow-y-auto overflow-x-hidden"
            style={{ opacity: isOpen ? 1 : 0 }}
            onClick={handleClickOutside}
        >
            <div className='items-center flex m-2 replace-card'>
                <div className={`bg-white max-w-[1400px] rounded-[9px] w-full m-auto transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    {/* Modal Header */}
                    <header className="border-b border-[#dae0ec] p-4 flex items-center justify-between">
                        <h1 className="text-lg capitalize font-semibold">Add Zone</h1>
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

                    <div className='flex flex-col md:flex-row'>
                        <div className='w-full md:w-[70%] h-[90vh] order-2 md:order-1'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28946.63894877198!2d67.1254896848877!3d24.92083008664803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1734346602329!5m2!1sen!2s" style={{ border: '0', width: "100%", height: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className='w-full md:w-[30%] p-4 space-y-4 order-1 md:order-2'>
                            <div>
                                <label htmlFor="address" className='text-sm block mb-2 font-medium'>Address</label>
                                <input type="text" placeholder='Search Location' className='w-full placeholder:text-[#757575] border border-[#D2CFCF] px-3 py-[6px] rounded-[5px]' />
                            </div>

                            <div>
                                <label htmlFor="zone-name" className='text-sm block mb-2 font-medium'>Zone Name*</label>
                                <input type="text" placeholder='Enter Zone name' className='w-full placeholder:text-[#757575] border border-[#D2CFCF] px-3 py-[6px] rounded-[5px]' />
                            </div>

                            <div className="serviceable-zone w-full pb-5">
                                <FormControl component="fieldset">
                                    <RadioGroup
                                        aria-label="serviceable-zone"
                                        name="serviceable-zone"
                                        value={selectedOption}
                                        onChange={handleChange}
                                    >
                                        {/* Row of radio buttons */}
                                        <div className="flex justify-between items-start flex-wrap w-full">
                                            <CustomRadioInput
                                                value="radius"
                                                label="Radius"
                                                selectedValue={selectedOption}
                                                onChange={handleChange}
                                            />
                                            <CustomRadioInput
                                                value="geofence"
                                                label="Geofence"
                                                selectedValue={selectedOption}
                                                onChange={handleChange}
                                            />
                                            <CustomRadioInput
                                                value="set-country"
                                                label="Set Country"
                                                selectedValue={selectedOption}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* Conditionally rendered content */}
                                        {selectedOption === 'radius' && (
                                            <div className="radius-options">
                                                <div className="flex gap-2 items-center">
                                                    <p className="text-sm">
                                                        Set Radius
                                                    </p>

                                                    <div className='flex'>
                                                        <input type="text" placeholder='Radius' className='border border-[#D2CFCF] rounded-l-md w-[110px] text-sm min-h-10 p-2' />
                                                        <select className="custom-select w-[200px] border-[0.5px] border-[#d2cfcf] inline-block min-h-10 py-[6px] pl-2 pr-7 text-[#3c4e71] rounded-r-md">
                                                            <option value="true">KM</option>
                                                            <option value="false">Mi</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <button className='bg-black text-white py-2 mt-5 w-full px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200'>
                                Add
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default AddZoneModal