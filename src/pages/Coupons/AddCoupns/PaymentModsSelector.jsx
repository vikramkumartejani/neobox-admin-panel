import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoClose } from "react-icons/io5";


const PaymentModsSelector = () => {
    const [isPaymentDropdownOpen, setPaymentDropdownOpen] = useState(false);
    const [selectedMods, setSelectedMods] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const selectMod = (mod) => {
        if (selectedMods.includes(mod)) {
            setSelectedMods((prev) => prev.filter(m => m !== mod));
        } else {
            setSelectedMods((prev) => [...prev, mod]);
            setPaymentDropdownOpen(false);
            setSearchTerm('');
        }
    };

    const removeSelectedMod = (mod) => {
        setSelectedMods((prev) => prev.filter(m => m !== mod));
    };

    return (
        <div className='pb-4'>
            <label htmlFor="payment-mode" className="pb-2 block font-medium text-sm">
                Payment Modes
            </label>

            <div className='relative'>
                <div onClick={() => setPaymentDropdownOpen(!isPaymentDropdownOpen)} className='border border-[#d2cfcf] px-2 min-h-10 rounded-md text-[#35495e] flex items-center justify-between gap-2 text-sm'>
                    {selectedMods.length > 0 ? (
                        <div className='flex items-center gap-1 flex-wrap'>
                            {selectedMods.map((mod, index) => (
                                <div key={index} className='flex items-center justify-between bg-[#212837] px-2 text-xs py-1 rounded-[5px] text-white gap-1'>
                                    <span>{mod}</span>
                                    <button onClick={() => removeSelectedMod(mod)}><IoClose size={14} /></button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <input
                            type="text"
                            placeholder='Search Payment Mods'
                            className='h-full border-none outline-none bg-transparent'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    )}
                    <IoMdArrowDropdown size={20} className={`${isPaymentDropdownOpen ? "rotate-180" : ""}`} />
                </div>

                {isPaymentDropdownOpen && (
                    <ul className='absolute w-full z-40 border border-[#e8e8e8] border-t-0 bg-white rounded-b-md max-h-[300px]'>
                        <li
                            className={`py-[6px] px-3 max-h-9 text-[#35495e] text-sm transition-all duration-300 cursor-pointer flex items-center justify-between ${selectedMods.includes('stripe') ? 'bg-gray-100 font-medium' : 'hover:bg-black hover:text-white'}`}
                            onClick={() => selectMod('stripe')}
                        >
                            stripe

                            {selectedMods.includes('stripe') && <span className='font-semibold opacity-70'>selected</span>}
                        </li>
                        <li
                            className={`py-[6px] px-3 max-h-9 text-[#35495e] text-sm transition-all duration-300 cursor-pointer flex items-center justify-between ${selectedMods.includes('cod') ? 'bg-gray-100 font-medium' : 'hover:bg-black hover:text-white'}`}
                            onClick={() => selectMod('cod')}
                        >
                            cod

                            {selectedMods.includes('cod') && <span className='font-semibold opacity-70'>selected</span>}
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default PaymentModsSelector;
