import React, { useState, useEffect, useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";


import Layout from "../../../components/Layout";
import OrderScheduling from "./OrderScheduling";
import OrderTip from "./OrderTip";
import AcceptOrders from "./AcceptOrders";
import DeliveryInstructions from "./DeliveryInstructions";
import OrderTypes from "./OrderTypes";
import CustomFields from "./CustomFields";
import CustomCharges from "./CustomCharges";

const Order = () => {
    const [activeLink, setActiveLink] = useState("order-schedulings");

    // References for each section
    const orderSchedulingsRef = useRef(null);
    const orderTipRef = useRef(null);
    const acceptOrdersRef = useRef(null);
    const deliveryInstructionsRef = useRef(null);
    const orderTypesRef = useRef(null);
    const customFieldsRef = useRef(null);
    const customChargesRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, observerOptions);

        // Observe each section
        const sections = [
            orderSchedulingsRef.current,
            orderTipRef.current,
            acceptOrdersRef.current,
            deliveryInstructionsRef.current,
            orderTypesRef.current,
            customFieldsRef.current,
            customChargesRef.current,
        ];

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <Layout>
            <section className='pt-[60px] pb-32'>
                {/* Header */}
                <div className='py-[10px] px-4 xl:px-[50px] w-full sticky top-[60px] z-30 left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>
                    <div className='flex items-center gap-4'>
                        <Link to="/settings" className='bg-[#E5E5E5] rounded-md w-11 h-10 flex items-center justify-center text-[#C2C2C2]'>
                            <BsArrowLeft size={22} />
                        </Link>
                        <h1 className='text-xl font-medium capitalize'>Order</h1>
                    </div>

                    <button className="bg-[#0671E3] text-white py-[6px] max-w-[70px] md:max-w-[110px] w-full px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                        Save
                    </button>
                </div>

                <div className="px-4 xl:px-[50px] flex gap-5 max-w-[1280px] w-full mx-auto">
                    <div className="flex-1">

                        {/* Rendered Components */}
                        <div className="space-y-16">
                            <section id="order-schedulings" ref={orderSchedulingsRef}>
                                <OrderScheduling />
                            </section>
                            <section id="order-tips" ref={orderTipRef}>
                                <OrderTip />
                            </section>
                            <section id="accept-orders" ref={acceptOrdersRef}>
                                <AcceptOrders />
                            </section>
                            <section id="delivery-instruction" ref={deliveryInstructionsRef}>
                                <DeliveryInstructions />
                            </section>
                            <section id="order-types" ref={orderTypesRef}>
                                <OrderTypes />
                            </section>
                            <section id="custom-fields" ref={customFieldsRef}>
                                <CustomFields />
                            </section>
                            <section id="custom-charges" ref={customChargesRef}>
                                <CustomCharges />
                            </section>
                        </div>
                    </div>

                    {/* Sticky Links */}
                    <div className="max-w-[200px] border-l h-fit border-[c9d2e3] hidden md:flex flex-col items-start sticky top-40">
                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "order-schedulings" ? "underline" : ""}`}
                            onClick={() => scrollToSection(orderSchedulingsRef)}
                        >
                            Order Scheduling
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "order-tip" ? "underline" : ""}`}
                            onClick={() => scrollToSection(orderTipRef)}
                        >
                           Order Tip
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "accept-orders" ? "underline" : ""}`}
                            onClick={() => scrollToSection(acceptOrdersRef)}
                        >
                            Accept Orders
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "delivery-instruction" ? "underline" : ""}`}
                            onClick={() => scrollToSection(deliveryInstructionsRef)}
                        >
                           Delivery Instructions
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "order-types" ? "underline" : ""}`}
                            onClick={() => scrollToSection(orderTypesRef)}
                        >
                           Order Types
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "custom-fields" ? "underline" : ""}`}
                            onClick={() => scrollToSection(customFieldsRef)}
                        >
                           Custom Fields
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "custom-charges" ? "underline" : ""}`}
                            onClick={() => scrollToSection(customChargesRef)}
                        >
                            Custom Charges
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Order;
