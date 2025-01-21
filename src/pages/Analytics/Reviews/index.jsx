import React, { useState } from 'react';
import FullStar from "../../../assets/full-star.svg";
import EmptyStar from "../../../assets/empty-star.svg";
import DeleteIcon from "../../../assets/delete-icon.svg";

import Layout from '../../../components/Layout';
import OrderDetails from './OrderDetails/OrderDetails';
import CalendarDropdown from '../../../components/Calendar';
import Toggle from '../../../components/Toggle';

const reviewsData = [
    {
        id: 1,
        rating: 5,
        comment: "Excellent!",
        orderId: 1047,
        customerName: "John Doe",
        merchantName: "donald-foods-products",
        dateTime: "Mon 25 Nov, 4:56 PM",
    },
    {
        id: 2,
        rating: 3,
        comment: "Good, but could be better.",
        orderId: 1048,
        customerName: "Jane Smith",
        merchantName: "burger-heaven",
        dateTime: "Tue 26 Nov, 2:15 PM",
    },

    {
        id: 3,
        rating: 4,
        comment: "Bon produit",
        orderId: 1048,
        customerName: "Jane Smith",
        merchantName: "Donald",
        dateTime: "Tue 26 Nov, 2:15 PM",
    },

    {
        id: 4,
        rating: 2,
        comment: "Nice product",
        orderId: 1048,
        customerName: "Test",
        merchantName: "burger-heaven",
        dateTime: "Tue 26 Nov, 2:15 PM",
    },
];

const Reviews = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <Layout>
            <section className='pt-[60px] pb-32'>
                {/* header */}
                <div className='py-[10px] px-5 lg:px-[50px] w-full z-30 sticky top-[60px] left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>
                    <h1 className='text-xl font-medium capitalize'>Reviews</h1>

                    <CalendarDropdown />
                </div>

                <div className='px-5 lg:px-[50px]'>
                    <div className='max-w-[1200px] w-full mx-auto'>
                        <div>
                            <div className='flex justify-between flex-col sm:flex-row gap-4 mb-4'>
                                <div className='flex gap-2 flex-1'>
                                    {/* Search Input */}
                                    <input
                                        type="text"
                                        placeholder='Search Reviews'
                                        className='bg-white border border-[#d2cfcf] text-sm rounded-md w-full  max-w-[330px] px-3 py-[6px] h-9 text-[#3c4e71]'
                                    />

                                    <button className='bg-[#212837] py-[.375rem] text-white px-3 rounded-md text-sm font-normal hover:bg-[#13171f] transition-all duration-200'>
                                        Search
                                    </button>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <p className='text-[#4D6593] text-sm'>Enable Order Review</p>

                                    <Toggle
                                        enabled={isEnabled}
                                        onChange={() => setIsEnabled(!isEnabled)}
                                    />
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto w-full block bg-white rounded-xl border">
                                {reviewsData.length > 0 ? (
                                    <table className="w-full border-collapse">
                                        <thead className="bg-[#F9FAFB]">
                                            <tr>
                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                                    Rating & Reviews
                                                </th>
                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                                    Order Id
                                                </th>
                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                                    Customer Name
                                                </th>
                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                                    Merchant Name
                                                </th>
                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                                    Date & Time
                                                </th>
                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {reviewsData.map((review) => (
                                                <tr key={review.id} onClick={toggleModal} className="hover:bg-tr-hover-bg cursor-pointer">
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm whitespace-nowrap">
                                                        <div>
                                                            <div className='flex items-center mb-2'>
                                                                {Array.from({ length: 5 }).map((_, index) => (
                                                                    <img
                                                                        key={index}
                                                                        src={index < review.rating ? FullStar : EmptyStar}
                                                                        alt={index < review.rating ? "FullStar" : "EmptyStar"}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <span>{review.comment}</span>
                                                        </div>
                                                    </td>
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-[#212837] text-sm">
                                                        {review.orderId}
                                                    </td>
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-[#212837] text-sm">
                                                        {review.customerName}
                                                    </td>
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm text-left whitespace-nowrap">
                                                        {review.merchantName}
                                                    </td>
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-[#212837] text-sm text-left whitespace-nowrap">
                                                        {review.dateTime}
                                                    </td>
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-[#212837] text-sm text-left whitespace-nowrap">
                                                        <div className="flex gap-2 justify-center">
                                                            <button
                                                                title="Delete"
                                                                className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                                                            >
                                                                <img src={DeleteIcon} alt="Delete Icon" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <div className="p-5 text-center text-gray-500">No reviews available</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Component */}
            <OrderDetails isOpen={isModalOpen} onClose={toggleModal} />
        </Layout>
    );
};

export default Reviews;
