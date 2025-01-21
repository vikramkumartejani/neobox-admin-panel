import React from 'react';

const Toggle = ({ enabled, onChange, disabled = false }) => {
    return (
        <label className="flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={enabled}
                onChange={onChange}
                className="hidden"
                disabled={disabled}
            />
            <div
                className={`w-7 h-4 flex items-center mx-auto rounded-full p-[2px] cursor-pointer transition-all duration-300 border ${enabled ? "bg-[#0671E3] border-transparent" : "border-[#869AC0]"
                    }`}
            >
                <div
                    className={`w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${enabled ? "translate-x-3 bg-white" : "bg-[#869AC0]"
                        }`}
                ></div>
            </div>
        </label>
    );
};

export default Toggle;
