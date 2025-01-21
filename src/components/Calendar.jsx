import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { IoIosCalendar } from "react-icons/io";

const CalendarDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's `sm` breakpoint is 640px
    };

    // Initialize and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleSelect = (ranges) => {
    setSelectedRange(ranges.selection);
  };

  return (
    <div className="relative">
      {/* Button to show date range */}
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-md text-sm text-[#3c4e71] bg-white"
        onClick={toggleDropdown}
      >
        <IoIosCalendar className="text-lg text-gray-500" />
        {`${format(selectedRange.startDate, "dd MMM yyyy")} - ${format(
          selectedRange.endDate,
          "dd MMM yyyy"
        )}`}
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full  md:right-0 z-10 mt-2 bg-white border border-[#d2cfcf] h-[500px] pb-16s lg:h-auto overflow-y-scroll lg:overflow-y-visible rounded-md shadow-lg w-full sm:w-auto">
          {/* Calendar */}
          <div>
            <DateRangePicker
              ranges={[selectedRange]}
              onChange={handleSelect}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2} // Show one month on mobile
              direction={isMobile ? "vertical" : "horizontal"} // Toggle direction
              rangeColors={["#4CAF50"]}
              className="w-full"
            />
          </div>

          {/* Action buttons */}
          <div className="flex justify-end p-4 gap-2">
            <button
              className="px-4 py-2 text-sm border rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
              onClick={() => setShowDropdown(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-sm border rounded-md bg-green-500 text-white hover:bg-green-600"
              onClick={() => setShowDropdown(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarDropdown;
