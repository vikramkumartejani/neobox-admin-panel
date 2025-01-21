import React, { useState, useEffect, useRef } from "react";
import Layout from "../../../components/Layout";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import SiteSettings from "./SiteSettings";
import SearchEngineOptimization from "./SearchEngineOptimization";
import SiteContactSettings from "./SiteContactDetails";
import TimeZone from "./TimeZone";
import CurrencySetting from "./CurrencySetting";
import DistanceUnit from "./DistanceUnit";
import MobileAppLinks from "./MobileAppLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const General = () => {
    const [activeLink, setActiveLink] = useState("site-settings");

    // References for each section
    const siteSettingsRef = useRef(null);
    const searchEngineOptimizationRef = useRef(null);
    const siteContactSettingsRef = useRef(null);
    const timeZoneRef = useRef(null);
    const currencySettingRef = useRef(null);
    const distanceUnitRef = useRef(null);
    const mobileAppLinksRef = useRef(null);
    const socialMediaLinksRef = useRef(null);

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
            siteSettingsRef.current,
            searchEngineOptimizationRef.current,
            siteContactSettingsRef.current,
            timeZoneRef.current,
            currencySettingRef.current,
            distanceUnitRef.current,
            mobileAppLinksRef.current,
            socialMediaLinksRef.current,
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
                        <h1 className='text-xl font-medium capitalize'>General</h1>
                    </div>

                    <button className="bg-[#0671E3] text-white py-[6px] max-w-[70px] md:max-w-[110px] w-full px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                        Save
                    </button>
                </div>

                <div className="px-4 xl:px-[50px] flex gap-5 max-w-[1280px] w-full mx-auto">
                    <div className="flex-1">

                        {/* Rendered Components */}
                        <div className="space-y-16">
                            <section id="site-settings" ref={siteSettingsRef}>
                                <SiteSettings />
                            </section>
                            <section id="site-seo-settings" ref={searchEngineOptimizationRef}>
                                <SearchEngineOptimization />
                            </section>
                            <section id="site-contact-details" ref={siteContactSettingsRef}>
                                <SiteContactSettings />
                            </section>
                            <section id="timezone-setting" ref={timeZoneRef}>
                                <TimeZone />
                            </section>
                            <section id="currency-setting" ref={currencySettingRef}>
                                <CurrencySetting />
                            </section>
                            <section id="distance-unit" ref={distanceUnitRef}>
                                <DistanceUnit />
                            </section>
                            <section id="mobile-app-links" ref={mobileAppLinksRef}>
                                <MobileAppLinks />
                            </section>
                            <section id="social-app-links" ref={socialMediaLinksRef}>
                                <SocialMediaLinks />
                            </section>
                        </div>
                    </div>

                    {/* Sticky Links */}
                    <div className="max-w-[200px] border-l h-fit border-[c9d2e3] hidden md:flex flex-col items-start sticky top-40">
                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "site-settings" ? "underline" : ""}`}
                            onClick={() => scrollToSection(siteSettingsRef)}
                        >
                            Site Settings
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "site-seo-settings" ? "underline" : ""}`}
                            onClick={() => scrollToSection(searchEngineOptimizationRef)}
                        >
                            Site SEO Settings
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "site-contact-details" ? "underline" : ""}`}
                            onClick={() => scrollToSection(siteContactSettingsRef)}
                        >
                            Site Contact Details
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "timezone-setting" ? "underline" : ""}`}
                            onClick={() => scrollToSection(timeZoneRef)}
                        >
                            TimeZone Setting
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "currency-setting" ? "underline" : ""}`}
                            onClick={() => scrollToSection(currencySettingRef)}
                        >
                            Currency Setting
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "distance-unit" ? "underline" : ""}`}
                            onClick={() => scrollToSection(distanceUnitRef)}
                        >
                            Distance Unit
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "mobile-app-links" ? "underline" : ""}`}
                            onClick={() => scrollToSection(mobileAppLinksRef)}
                        >
                            Mobile App Links
                        </button>

                        <button
                            className={`text-[#0671e3] py-[3px] pl-5 pr-1 text-sm ${activeLink === "social-app-links" ? "underline" : ""}`}
                            onClick={() => scrollToSection(socialMediaLinksRef)}
                        >
                            Social Media Links
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default General;
