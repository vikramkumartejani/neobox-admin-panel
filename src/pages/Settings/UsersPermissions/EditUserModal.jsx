import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

const PERMISSIONS = {
    Dashboard: ['Dashboard'],
    Orders: ['Orders'],
    Catalog: ['Catalog', 'Category', 'Tags', 'Labels'],
    Coupons: ['Coupons'],
    Review: ['Review'],
    Reports: ['Reports', 'Export Reports'],
    Settings: ['General', 'Users', 'Serviceable Zones', 'Store Timing', 'Upload', 'Payouts'],
    Apps: ['Manage Apps'],
};

const EditUserModal = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Initialize permissions state directly
    const [selectedPermissions, setSelectedPermissions] = useState(
        Object.keys(PERMISSIONS).reduce((acc, category) => {
            acc[category] = {};
            PERMISSIONS[category].forEach((permission) => {
                acc[category][permission] = false;
            });
            return acc;
        }, {})
    );

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

    const handleCategoryToggle = (category) => {
        const updatedPermissions = { ...selectedPermissions };
        const allChecked = PERMISSIONS[category].every(
            (permission) => updatedPermissions[category][permission]
        );

        PERMISSIONS[category].forEach((permission) => {
            updatedPermissions[category][permission] = !allChecked;
        });

        setSelectedPermissions(updatedPermissions);
    };

    const handlePermissionToggle = (category, permission) => {
        const updatedPermissions = { ...selectedPermissions };
        updatedPermissions[category][permission] = !updatedPermissions[category][permission];
        setSelectedPermissions(updatedPermissions);
    };

    const handleSelectAll = () => {
        const allChecked = Object.keys(selectedPermissions).every((category) =>
            PERMISSIONS[category].every((permission) => selectedPermissions[category][permission])
        );

        const updatedPermissions = {};
        Object.keys(PERMISSIONS).forEach((category) => {
            updatedPermissions[category] = {};
            PERMISSIONS[category].forEach((permission) => {
                updatedPermissions[category][permission] = !allChecked;
            });
        });

        setSelectedPermissions(updatedPermissions);
    };

    const isAllChecked = Object.keys(selectedPermissions).every((category) =>
        PERMISSIONS[category].every((permission) => selectedPermissions[category][permission])
    );

    return (
        <div
            id="modal-overlay"
            className="fixed top-0 bottom-0 w-full h-full bg-[#000000b3] z-50 left-0 right-0 transition-opacity duration-150 overflow-y-auto overflow-x-hidden"
            style={{ opacity: isOpen ? 1 : 0 }}
            onClick={handleClickOutside}
        >
            <div className="items-center flex m-4 replace-card">
                <div
                    className={`bg-white max-w-[800px] rounded-[9px] w-full m-auto transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
                        }`}
                >
                    {/* Modal Header */}
                    <header className="border-b border-[#dae0ec] p-4 flex items-center justify-between">
                        <h1 className="text-lg capitalize font-semibold">Edit User</h1>
                        <button
                            onClick={onClose}
                            type="button"
                            aria-label="Close"
                            className="text-lg text-[#869ac0]"
                        >
                            <IoMdClose />
                        </button>
                    </header>

                    {/* Body */}
                    <div className="p-4">
                        <div className='mb-12'>
                            <h3 className='mb-1 text-xl font-semibold'>Edit User</h3>
                            <p className='mb-3 text-[#13151680] text-sm'>Give user access to your store by sending them an invitation.</p>

                            <div>
                                <label htmlFor="enter-email" className='text-sm font-medium mb-[6px] block'>Enter Email*</label>
                                <input type="email" placeholder='Enter Email' value="andrejzarkovic112@gmail.com" className='w-full placeholder:text-[#757575] border border-[#D2CFCF] text-[#3c4e71] px-3 py-[6px] rounded-[5px] max-w-[370px]' />
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="mb-1 text-xl font-semibold">Permissions</h3>
                            <p className="mb-5 text-[#13151680] text-sm">
                                This user member will have following permission
                            </p>

                            <div className='pl-2'>
                                <div className="mb-3">
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={isAllChecked}
                                            onChange={handleSelectAll}
                                            className="mr-2 w-4 h-[18px] cursor-pointer"
                                        />
                                        <span className="font-medium text-sm">SELECT ALL</span>
                                    </label>
                                </div>

                                {Object.keys(PERMISSIONS).map((category) => (
                                    <div key={category} className='pl-4'>
                                        <label className="flex items-center cursor-pointer my-3">
                                            <input
                                                type="checkbox"
                                                checked={PERMISSIONS[category].every(
                                                    (permission) => selectedPermissions[category][permission]
                                                )}
                                                onChange={() => handleCategoryToggle(category)}
                                                className="mr-2 w-4 h-[18px] cursor-pointer"
                                            />
                                            <span className="font-bold text-sm">{category}</span>
                                        </label>

                                        <div>
                                            {PERMISSIONS[category].map((permission) => (
                                                <label key={permission} className="flex items-center cursor-pointer my-3">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedPermissions[category][permission]}
                                                        onChange={() => handlePermissionToggle(category, permission)}
                                                        className="mr-2 w-4 h-[18px] cursor-pointer"
                                                    />
                                                    <span className='font-medium text-sm'>{permission}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-end mt-6'>
                                <button className="bg-[#0671e3] max-w-[110px] w-full py-[6px] px-3 text-sm font-medium text-white rounded transition-all duration-300 hover:opacity-90">Invite</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUserModal;
