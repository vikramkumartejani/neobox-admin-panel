import React, { useState } from 'react';
import Toggle from '../../../components/Toggle';

import Stripe from "../../../assets/payment-logos/stripe-logo.svg"
import Paypal from "../../../assets/payment-logos/paypal.svg"
import BankDeposit from "../../../assets/payment-logos/bank-deposit.svg"
import Cash from "../../../assets/payment-logos/code.svg"

const PaymentSettings = () => {
    const [onlinePaymentEnabled, setOnlinePaymentEnabled] = useState(false);
    const [manualPaymentEnabled, setManualPaymentEnabled] = useState(false);
    const [activeTab, setActiveTab] = useState("onlinepayment");

    const [onlinePaymentMethods, setOnlinePaymentMethods] = useState([
        { name: 'Stripe', logo: Stripe, active: true },
        { name: 'Paypal', logo: Paypal, active: false },
    ]);

    const [manualPaymentMethods, setManualPaymentMethods] = useState([
        { name: 'Bank Transfer', logo: BankDeposit, active: true },
        { name: 'Cash', logo: Cash, active: false },
    ]);

    const PaymentTable = ({ methods, setMethods }) => (
        <div className="shadow-9 border border-black/20 rounded-[5px] overflow-hidden flex-1 w-full">
            <table className="border-collapse w-full">
                <thead className='bg-[#131516] border border-[#131516] text-white'>
                    <tr>
                        <th className="px-[.9rem] py-[.7rem] text-left text-white font-semibold text-sm uppercase">Name</th>
                        <th className="px-[.9rem] py-[.7rem] text-center text-white font-semibold text-sm uppercase">Active</th>
                        <th className="px-[.9rem] py-[.7rem] text-center text-white font-semibold text-sm uppercase">Settings</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {methods.map((method, index) => (
                        <tr key={index}>
                            <td className="border-t border-[#f2f2f2] py-[.7rem] px-[.9rem]">
                                {method.logo && <img src={method.logo} alt={method.name} loading='lazy' className='h-10' />}
                                <span className='pt-4 pb-2 text-base font-semibold text-[#212837]'>{method.name}</span>
                            </td>
                            <td className="border-t border-[#f2f2f2] py-[.7rem] px-[.9rem]">
                                <Toggle
                                    enabled={method.active}
                                    onChange={() => {
                                        const updatedMethods = [...methods];
                                        updatedMethods[index].active = !updatedMethods[index].active;
                                        setMethods(updatedMethods);
                                    }}
                                />
                            </td>
                            <td className="border-t border-[#f2f2f2] py-[.7rem] px-[.9rem] text-center">
                                {method.active && (
                                    <button className="bg-[#0671e3] mx-auto py-[6px] px-3 text-white rounded text-sm font-medium">
                                        Configure
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-2">
                    <span>Override online payment methods</span>
                    <Toggle
                        enabled={onlinePaymentEnabled}
                        onChange={() => setOnlinePaymentEnabled(!onlinePaymentEnabled)}
                    />
                </label>
                <label className="flex items-center gap-2">
                    <span>Override manual payment methods</span>
                    <Toggle
                        enabled={manualPaymentEnabled}
                        onChange={() => setManualPaymentEnabled(!manualPaymentEnabled)}
                    />
                </label>
            </div>

            {(onlinePaymentEnabled || manualPaymentEnabled) && (
                <div className="flex bg-white rounded-[10px] overflow-hidden w-fit border border-[#c4c4c4] my-7">
                    {onlinePaymentEnabled && (
                        <button
                            onClick={() => setActiveTab("onlinepayment")}
                            className={`min-w-[150px] md:min-w-[180px] p-2 rounded-[10px] border border-transparent text-sm ${activeTab === "onlinepayment" ? "bg-[#131516] text-white" : "bg-transparent text-black"}`}
                        >
                            Online Payment
                        </button>
                    )}

                    {manualPaymentEnabled && (
                        <button
                            onClick={() => setActiveTab("manualpayment")}
                            className={`min-w-[150px] md:min-w-[180px] p-2 rounded-[10px] border border-transparent text-sm ${activeTab === "manualpayment" ? "bg-[#131516] text-white" : "bg-transparent text-black"}`}
                        >
                            Manual Payment
                        </button>
                    )}
                </div>
            )}

            {activeTab === "onlinepayment" && onlinePaymentEnabled && (
                <PaymentTable methods={onlinePaymentMethods} setMethods={setOnlinePaymentMethods} />
            )}
            {activeTab === "manualpayment" && manualPaymentEnabled && (
                <PaymentTable methods={manualPaymentMethods} setMethods={setManualPaymentMethods} />
            )}
        </div>
    );
};

export default PaymentSettings;
