import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';

// Custom Checkbox styles
const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#106ba3',
    },
});

// Customized checkbox component
function BpCheckbox(props) {
    return (
        <Checkbox
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}

const UsageType = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOptions((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((option) => option !== value)
                : [...prevSelected, value]
        );
    };

    return (
        <fieldset className="mb-4">
            <label htmlFor="coupon-type" className="block font-medium text-sm">
                Coupon Type
            </label>
            <p className="text-[#13151680] text-sm">
                Select a coupon type you want to make
            </p>

            <div className="py-6">
                <FormControl component="fieldset" className='space-y-1'>
                    {/* Limit number of times this discount can be used in total */}
                    <div className="flex flex-col gap-1">
                        <FormControlLabel
                            control={
                                <BpCheckbox
                                    checked={selectedOptions.includes('flat-amount')}
                                    onChange={handleChange}
                                    value="flat-amount"
                                />
                            }
                            label={
                                <span className="block font-medium text-sm">Limit number of times this discount can be used in total</span>
                            }
                        />
                        {selectedOptions.includes('flat-amount') && (
                            <input
                                type="text"
                                value={0}
                                className="border-[.5px] text-[#3c4e71] border-[#d2cfcf] ml-6 text-sm h-7 py-1 px-2 flex-1 w-full max-w-[120px] rounded-[3px]"
                            />
                        )}
                    </div>

                    {/* Limit to one use per customer */}
                    <FormControlLabel
                        control={
                            <BpCheckbox
                                checked={selectedOptions.includes('usepercustomer')}
                                onChange={handleChange}
                                value="usepercustomer"
                            />
                        }
                        label={
                            <span className="block font-medium text-sm">Limit to one use per customer</span>
                        }
                    />


                    {/* Make it Public */}
                    <FormControlLabel
                        control={
                            <BpCheckbox
                                checked={selectedOptions.includes('make-public')}
                                onChange={handleChange}
                                value="make-public"
                            />
                        }
                        label={
                            <span className="block font-medium text-sm">Make it Public</span>
                        }
                    />
                </FormControl>
            </div>
        </fieldset>
    );
};

export default UsageType;
