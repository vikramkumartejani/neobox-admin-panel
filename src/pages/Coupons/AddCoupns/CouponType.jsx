import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import CustomRadioInput from '../../../components/CustomRadioInput';

const CouponType = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <fieldset className="mb-4">
            <label htmlFor="coupon-type" className="block font-medium text-sm">
                Coupon Type
            </label>
            <p className="text-[#13151680] text-sm">
                Select a coupon type you want to make
            </p>

            <div className="py-6 pl-6">
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="coupon-type"
                        name="coupon-type"
                        value={selectedOption}
                        onChange={handleChange}
                    >
                        {/* Flat Amount */}
                        <CustomRadioInput
                            value="flat-amount"
                            label="Flat Amount"
                            selectedValue={selectedOption}
                            onChange={handleChange}
                        >
                            <div className="flex">
                                <p className="py-1 px-2 bg-[#dae0ec] text-sm -mr-[1px] text-[#3c4e71] rounded-l-[3px]">
                                    Amount
                                </p>
                                <input
                                    type="text"
                                    className="border-[.5px] border-[#d2cfcf] text-sm h-7 py-1 px-2 flex-1 w-full rounded-r-[3px]"
                                />
                            </div>
                        </CustomRadioInput>

                        {/* Percentage */}
                        <CustomRadioInput
                            value="percentage"
                            label="Percentage"
                            selectedValue={selectedOption}
                            onChange={handleChange}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="flex">
                                    <p className="py-1 px-2 bg-[#dae0ec] text-sm -mr-[1px] text-[#3c4e71] rounded-l-[3px]">
                                        Percentage
                                    </p>
                                    <input
                                        type="text"
                                        className="border-[.5px] border-[#d2cfcf] text-sm h-7 py-1 px-2 flex-1 w-full rounded-r-[3px]"
                                    />
                                </div>
                                <div className="flex">
                                    <p className="py-1 px-2 bg-[#dae0ec] text-sm -mr-[1px] text-[#3c4e71] rounded-l-[3px]">
                                        Max Amount
                                    </p>
                                    <input
                                        type="text"
                                        className="border-[.5px] border-[#d2cfcf] text-sm h-7 py-1 px-2 flex-1 w-full rounded-r-[3px]"
                                    />
                                </div>
                            </div>
                        </CustomRadioInput>

                        {/* Free Delivery */}
                        <CustomRadioInput
                            value="free-delivery"
                            label="Free Delivery"
                            selectedValue={selectedOption}
                            onChange={handleChange}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </fieldset>
    );
};

export default CouponType;
