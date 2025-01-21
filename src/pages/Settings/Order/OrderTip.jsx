import React, { useState } from 'react';
import Toggle from '../../../components/Toggle';
import CustomRadioInput from '../../../components/CustomRadioInput';
import RadioGroup from '@mui/material/RadioGroup';

const OrderTip = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState("tip-percentage");

  const handleChange = (event) => {
    if (isEnabled) {
      setSelectedOption(event.target.value);
    }
  };

  return (
    <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
      <div className="xl:max-w-[33%] w-full">
        <h2 className="text-xl font-medium mb-2 text-wrap">Order Tip</h2>
      </div>

      <div className="w-full xl:max-w-[66%]">
        {/* Toggle for Enable/Disable */}
        <div className="flex items-center gap-4">
          <p
            className={`text-lg font-medium transition-opacity uppercase duration-300 ${isEnabled ? "opacity-50" : "opacity-100"}`}
          >
            Disable
          </p>
          <Toggle
            enabled={isEnabled}
            onChange={() => setIsEnabled(!isEnabled)}
          />
          <p
            className={`text-lg font-medium transition-opacity uppercase duration-300 ${isEnabled ? "opacity-100" : "opacity-50"}`}
          >
            Enable
          </p>
        </div>

        <div className="w-full shadow-6 p-3 md:p-5 bg-white rounded-md mt-6">
          <div className="flex justify-between items-center gap-4 mb-6">
            <p className="text-sm">Order Tip Description</p>

            <select
              className="custom-select w-full border-[0.5px] max-w-[150px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md"
            >
              <option value="true">Select Locale</option>
              <option value="english">English</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Enter Description here"
            className="border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md mb-6"
          />

          <div>
            <h4 className="mb-4 text-lg font-semibold uppercase">Tip Options</h4>

            {/* RadioGroup for Tabs */}
            <RadioGroup
              aria-label="tips-options"
              name="tips-options"
              value={selectedOption}
              onChange={handleChange}
            >
              <div className="grid grid-cols-2 gap-4">
                <CustomRadioInput
                  value="tip-percentage"
                  label="Tip by percentage"
                  selectedValue={selectedOption}
                  onChange={handleChange}
                  disabled={!isEnabled}
                />

                <CustomRadioInput
                  value="tip-fixamount"
                  label="Tip by Fix Amount"
                  selectedValue={selectedOption}
                  onChange={handleChange}
                  disabled={!isEnabled}
                />
              </div>
            </RadioGroup>

            {/* Tab Content */}
            <div className="mt-4 px-4">
              {selectedOption === "tip-percentage" && (
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex items-center font-medium text-base"> % </div>
                  <input
                    type="text"
                    max="100"
                    value="5"
                    className="border-[.5px] border-[#d2cfcf] mx-2 h-[34px] text-base py-1 px-2 w-full rounded sm:max-w-[100px]"
                    disabled={!isEnabled}
                    style={{ backgroundColor: !isEnabled ? "#dae0ec" : "white" }}
                  />
                  <div className="flex items-center font-medium text-base"> % </div>
                  <input
                    type="text"
                    max="100"
                    value="10"
                    className="border-[.5px] border-[#d2cfcf] mx-2 h-[34px] text-base py-1 px-2 w-full rounded sm:max-w-[100px]"
                    disabled={!isEnabled}
                    style={{ backgroundColor: !isEnabled ? "#dae0ec" : "white" }}
                  />
                  <div className="flex items-center font-medium text-base"> % </div>
                  <input
                    type="text"
                    max="100"
                    value="12"
                    className="border-[.5px] border-[#d2cfcf] mx-2 h-[34px] text-base py-1 px-2 w-full rounded sm:max-w-[100px]"
                    disabled={!isEnabled}
                    style={{ backgroundColor: !isEnabled ? "#dae0ec" : "white" }}
                  />
                </div>
              )}

              {selectedOption === "tip-fixamount" && (
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex items-center font-medium text-base"> PKRs </div>
                  <input
                    type="text"
                    max="100"
                    value="5"
                    className="border-[.5px] border-[#d2cfcf] mx-2 h-[34px] text-base py-1 px-2 w-full rounded sm:max-w-[100px]"
                    disabled={!isEnabled}
                    style={{ backgroundColor: !isEnabled ? "#dae0ec" : "white" }}
                  />
                  <div className="flex items-center font-medium text-base"> PKRs </div>
                  <input
                    type="text"
                    max="100"
                    value="10"
                    className="border-[.5px] border-[#d2cfcf] mx-2 h-[34px] text-base py-1 px-2 w-full rounded sm:max-w-[100px]"
                    disabled={!isEnabled}
                    style={{ backgroundColor: !isEnabled ? "#dae0ec" : "white" }}
                  />
                  <div className="flex items-center font-medium text-base"> PKRs </div>
                  <input
                    type="text"
                    max="100"
                    value="12"
                    className="border-[.5px] border-[#d2cfcf] mx-2 h-[34px] text-base py-1 px-2 w-full rounded sm:max-w-[100px]"
                    disabled={!isEnabled}
                    style={{ backgroundColor: !isEnabled ? "#dae0ec" : "white" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTip;
