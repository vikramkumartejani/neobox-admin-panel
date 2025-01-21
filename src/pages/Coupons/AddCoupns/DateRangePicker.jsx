import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";

const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // Handle Start Date Selection
    const handleStartDateChange = (date) => {
        setStartDate(date);
        setEndDate(null);
    };

    // Handle End Date Selection
    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    return (
        <div className="pb-6">
            <label htmlFor="set-date-range" className="pb-4 block font-medium text-sm">
                Set Date Range
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
                {/* Start Date */}
                <div>
                    <label className="block font-medium text-sm text-[#869ac0] ml-2 mb-1">
                        Start Date
                    </label>
                    <div className="relative w-full">
                        <DatePicker
                            selected={startDate}
                            onChange={handleStartDateChange}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            placeholderText="Select start date"
                            className="w-full border border-[#d2cfcf] rounded-md px-2 py-[6px] pl-10 text-[#869ac0]"
                            calendarClassName="rounded-md"
                            popperPlacement="bottom-start"
                        />
                        {/* Conditional Icon Color */}
                        <FiCalendar
                            className={`absolute left-3 top-0 bottom-0 my-auto ${startDate ? "text-black" : "text-gray-500"}`}
                            size={20}
                        />
                    </div>
                </div>

                {/* End Date */}
                <div>
                    <label className="block font-medium text-sm text-[#869ac0] ml-2 mb-1">
                        End Date
                    </label>

                    <div className="relative">
                        <DatePicker
                            selected={endDate}
                            onChange={handleEndDateChange}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            disabled={!startDate}
                            placeholderText="Select end date"
                            className={`w-full rounded-md px-2 py-[6px] pl-10 text-[#869ac0] ${!startDate
                                    ? "cursor-not-allowed bg-gray-100"
                                    : "border border-[#d2cfcf]"
                                }`}
                            calendarClassName="rounded-md shadow-md"
                            popperPlacement="bottom-start"
                        />
                        <FiCalendar
                            className={`absolute left-3 top-0 bottom-0 my-auto ${endDate ? "text-black" : !startDate ? "text-gray-400" : "text-gray-500"
                                }`}
                            size={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateRangePicker;
