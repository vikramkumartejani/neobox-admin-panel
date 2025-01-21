import { FormControl, RadioGroup } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import CustomRadioInput from '../../components/CustomRadioInput';

const ExportReport = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColumns, setSelectedColumns] = useState([
        'Merchant',
        'Delivery By',
        'Grand Total',
        'Order ID',
        'Date',
        'Time',
        'Delivery Fee',
        'Delivery Tax',
        'Sub Total',
        'Currency Code',
        'Tax Method',
        'Commission',
        'frais administratif',
        'Détaillant',
    ]);
    const [selectedFormat, setSelectedFormat] = useState(true);
    
        const handleChange = (event) => {
            setSelectedFormat(event.target.value);
        };
    
    const [showColumns, setShowColumns] = useState(true);

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

    const toggleColumnSelection = (column) => {
        setSelectedColumns((prev) =>
            prev.includes(column)
                ? prev.filter((c) => c !== column)
                : [...prev, column]
        );
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
                    className={`bg-white max-w-[798px] rounded-[9px] w-full m-auto transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
                        }`}
                >
                    {/* Modal Header */}
                    <header className="border-b border-[#dae0ec] p-4 flex items-center justify-between">
                        <h1 className="text-lg capitalize font-semibold">Export Report</h1>
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
                            <h3 className="font-medium mb-2">Pick Date</h3>
                            <input
                                type="text"
                                placeholder="Select Date Range"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                            />
                        </div>

                        {/* Columns Section */}
                        <div className="mb-6">
                            <label htmlFor="Columns" className='font-medium text-sm mb-2 block'>Columns</label>

                            <div className='flex gap-3 pb-3'>
                                <button className='bg-[#f2f2f2] text-[#212837] py-[6px] px-3 rounded-md text-sm'>
                                    Default (14)
                                </button>

                                <button onClick={() => setShowColumns((prev) => !prev)} className='bg-[#f2f2f2] text-[#212837] py-[6px] px-3 rounded-md text-sm'>
                                    {showColumns ? 'Hide' : 'Show'}
                                </button>
                            </div>

                            {showColumns && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {[
                                        'Merchant',
                                        'Delivery By',
                                        'Grand Total',
                                        'Order ID',
                                        'Date',
                                        'Time',
                                        'Delivery Fee',
                                        'Delivery Tax',
                                        'Sub Total',
                                        'Currency Code',
                                        'Tax Method',
                                        'Commission',
                                        'frais administratif',
                                        'Détaillant',
                                    ].map((column) => (
                                        <label
                                            key={column}
                                            className="flex items-center space-x-2 cursor-pointer text-sm font-medium"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedColumns.includes(column)}
                                                onChange={() => toggleColumnSelection(column)}
                                                className="form-checkbox custom-checkbox"
                                            />
                                            <span>{column}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Format Selection */}
                        <div className="mb-6">
                            <label className="font-medium mb-2 block text-sm">Select Format</label>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="select-formet"
                                    name="serviceable-zone"
                                    value={selectedFormat}
                                    onChange={handleChange}
                                >
                                    {/* CSV or Excel*/}
                                    <div className="flex justify-between items-start flex-wrap w-full">
                                        <CustomRadioInput
                                            value="csvorexcel"
                                            label="CSV or Excel"
                                            selectedValue={selectedFormat}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </RadioGroup>
                            </FormControl>
                        </div>

                        {/* Footer Buttons */}
                        <div className="flex justify-end">
                            <button
                                className="bg-[#212837] text-white px-6 py-[6px] h-9 rounded-md hover:opacity-90 transition-all duration-300"
                                onClick={() => console.log('Exporting')}
                            >
                                Export
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExportReport;
