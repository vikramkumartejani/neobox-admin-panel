import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';

import { BsArrowLeft } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import EditIcon from "../../../assets/edit-icon.svg";
import DeleteIcon from "../../../assets/delete-icon.svg";



import Layout from '../../../components/Layout'
import SelectCountryNumber from './SelectCountryNumber';
import Toggle from '../../../components/Toggle';
import MerchantCategories from './MerchantCategories';
import SelectOrderType from './SelectOrderType';
import CustomRadioInput from "../../../components/CustomRadioInput"
import PaymentSettings from './PaymentSettings';




const CreateMerchant = () => {
    const [isRequiredEnabled, setIsRequiredEnabled] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [isopenEditAccordin, setIsOpenEditAccordin] = useState(false);
    const [pageTitle, setPageTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [coverImage, setCoverImage] = useState(null);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Toggle accordion
    const toggleAccordion = () => {
        setIsOpenEditAccordin(!isopenEditAccordin);
    };

    // Handle input changes with limits
    const handlePageTitleChange = (e) => {
        if (e.target.value.length <= 60) {
            setPageTitle(e.target.value);
        }
    };

    const handleMetaDescriptionChange = (e) => {
        if (e.target.value.length <= 160) {
            setMetaDescription(e.target.value);
        }
    };

    // Handle file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setCoverImage(imageUrl);
        }
    };

    // Delete cover image
    const deleteImage = () => {
        setCoverImage(null);
    };


    return (
        <Layout>
            <section className='pt-[60px] pb-32 md:pb-40'>
                {/* Header */}
                <div className='py-[10px] px-4 xl:px-[50px] w-full sticky top-[60px] z-30 left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>
                    <div className='flex items-center gap-4'>
                        <Link to="/merchant" className='bg-[#E5E5E5] rounded-md w-11 h-10 flex items-center justify-center text-[#C2C2C2]'>
                            <BsArrowLeft size={22} />
                        </Link>
                        <h1 className='text-xl font-medium capitalize'>Create Merchant</h1>
                    </div>

                    <button className="bg-[#0671E3] text-white py-[6px] max-w-[70px] md:max-w-[110px] w-full px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                        Save
                    </button>
                </div>

                <div className="px-4 xl:px-[50px] flex gap-5 w-full mx-auto">
                    <div className="flex-1">
                        <div className="flex gap-5 items-start justify-between flex-col xl:flex-row mb-8">
                            <div>
                                <h2 className="text-xl font-medium mb-2 text-wrap">Merchant Details</h2>
                                <p className="text-sm text-[#606060] max-w-[350px] w-full">
                                    Customers will use these details to find you and
                                    contact you.
                                </p>
                            </div>

                            <div className="flex-1 shadow-6 p-3 md:p-5 bg-white rounded-md max-w-full xl:max-w-[800px] w-full">
                                <fieldset className='mb-6'>
                                    <label htmlFor="merchant_type" className='font-medium text-sm'>
                                        Merchant Type:
                                    </label>

                                    <span className='pl-2'>Ecommerce</span>
                                </fieldset>

                                <fieldset className='mb-4'>
                                    <label htmlFor="select-language" className='pb-2 block font-medium text-sm'>Select Language</label>
                                    <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md">
                                        <option value="true">-- Select Language --</option>
                                        <option value="true">English</option>
                                        <option value="false">French</option>
                                    </select>
                                </fieldset>

                                <fieldset className='mb-4'>
                                    <label htmlFor="merchant_name" className='pb-2 block font-medium text-sm'>Merchant Name*</label>
                                    <input type="text" placeholder='Enter Merchant Name' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                                </fieldset>

                                <fieldset className='mb-4'>
                                    <label htmlFor="merchant_address" className='pb-2 block font-medium text-sm'>Merchant Address</label>
                                    <input type="text" placeholder='Enter Address' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                                </fieldset>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                    <fieldset>
                                        <label htmlFor="merchant_postal_code" className='pb-2 block font-medium text-sm'>Merchant Postal Code</label>
                                        <input type="text" placeholder='Enter Postal Code' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor="merchant_country" className='pb-2 block font-medium text-sm'>Merchant Country*</label>
                                        <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md" required="required" aria-required="true">
                                            <option disabled="disabled" value="">Select Country</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AX">Åland Islands</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AS">American Samoa</option>
                                            <option value="AD">AndorrA</option>
                                            <option value="AO">Angola</option>
                                            <option value="AI">Anguilla</option>
                                            <option value="AQ">Antarctica</option>
                                            <option value="AG">Antigua and Barbuda</option>
                                            <option value="AR">Argentina</option>
                                            <option value="AM">Armenia</option>
                                            <option value="AW">Aruba</option>
                                            <option value="AU">Australia</option>
                                            <option value="AT">Austria</option>
                                            <option value="AZ">Azerbaijan</option>
                                            <option value="BS">Bahamas</option>
                                        </select>
                                    </fieldset>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                    <fieldset>
                                        <label htmlFor="merchant_state" className='pb-2 block font-medium text-sm'>Merchant State</label>
                                        <input type="text" placeholder='Enter State' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor="merchant_city" className='pb-2 block font-medium text-sm'>Merchant City</label>
                                        <input type="text" placeholder='Enter City' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                                    </fieldset>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                    <fieldset>
                                        <label htmlFor="merchant_contact_number" className='pb-2 block font-medium text-sm'>Merchant Contact Number*</label>

                                        <SelectCountryNumber />
                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor="merchant_contact_email" className='pb-2 block font-medium text-sm'>Merchant Contact Email</label>
                                        <input type="email" placeholder='Enter Email' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                                    </fieldset>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                    <fieldset className='flex items-start justify-between gap-4 pt-2'>
                                        <label htmlFor="merchant_contact" className='block font-medium text-sm'>Show merchant's contact to customer</label>

                                        <Toggle
                                            enabled={isRequiredEnabled}
                                            onChange={() => setIsRequiredEnabled(!isRequiredEnabled)}
                                        />
                                    </fieldset>

                                    <fieldset>
                                        <MerchantCategories />
                                    </fieldset>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                    <fieldset>
                                        <SelectOrderType />
                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor="merchant_contact_email" className='pb-2 block font-medium text-sm'>Default Order Type</label>
                                        <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md" required="required" aria-required="true">
                                            <option disabled="disabled" value="">Select Option</option>
                                            <option value="delivery">Delivery</option>
                                            <option value="pickcup">Pickcup</option>
                                            <option value="custom">Custom</option>
                                        </select>
                                    </fieldset>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                    <fieldset>
                                        <label htmlFor="status" className='pb-2 block font-medium text-sm'>Status*</label>
                                        <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md" required="required" aria-required="true">
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor="merchant_contact_email" className='pb-2 block font-medium text-sm'>Delivery By</label>
                                        <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md" required="required" aria-required="true">
                                            <option value="admin">Admin</option>
                                            <option value="merchant">Merchant</option>
                                        </select>
                                    </fieldset>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                                    <fieldset>
                                        <label htmlFor="status" className='pb-2 block font-medium text-sm'>Delivery Provider</label>
                                        <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md" required="required" aria-required="true">
                                            <option value="autozod">Autozod</option>
                                        </select>
                                    </fieldset>
                                </div>

                                <fieldset className='flex items-start gap-4 pt-2'>
                                    <label htmlFor="merchant_contact" className='block font-medium text-sm'>Share Customer Detail</label>

                                    <Toggle
                                        enabled={isRequiredEnabled}
                                        onChange={() => setIsRequiredEnabled(!isRequiredEnabled)}
                                    />
                                </fieldset>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start justify-between flex-col xl:flex-row mb-8">
                            <div>
                                <h2 className="text-xl font-medium mb-2 text-wrap">Merchant Slug</h2>
                                <p className="text-sm text-[#606060] max-w-[350px] w-full">
                                    Configure merchant slug to be used in url.
                                </p>
                            </div>

                            <div className="flex-1 shadow-6 p-3 md:p-5 bg-white rounded-md max-w-full xl:max-w-[800px] w-full">
                                <fieldset className='mb-4'>
                                    <label htmlFor="slug" className='pb-2 block font-medium text-sm'>Slug*</label>
                                    <input type="text" placeholder='Enter Merchant Slug' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                                </fieldset>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start justify-between flex-col xl:flex-row mb-8">
                            <div>
                                <h2 className="text-xl font-medium mb-2 text-wrap">Commission Configuration</h2>
                                <p className="text-sm text-[#606060] max-w-[350px] w-full">
                                    Set your commission Configuration.
                                </p>
                            </div>

                            <div className="flex-1 shadow-6 p-3 space-y-6 md:p-5 bg-white rounded-md max-w-full xl:max-w-[800px] w-full">
                                <fieldset>
                                    <label htmlFor="commission_type" className="block font-medium text-sm pb-4">
                                        COMMISSION TYPE*
                                    </label>

                                    <div>
                                        <FormControl component="fieldset">
                                            <RadioGroup
                                                aria-label="commission_type"
                                                name="commission_type"
                                                value={selectedOption}
                                                onChange={handleChange}
                                            >
                                                {/* Percentage Amount */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                                    <CustomRadioInput
                                                        value="percentage"
                                                        label="Percentage"
                                                        selectedValue={selectedOption}
                                                        onChange={handleChange}
                                                    />

                                                    {selectedOption === "percentage" && (
                                                        <div>
                                                            <input
                                                                type="text"
                                                                className="border-[.5px] border-[#d2cfcf] h-8 text-base py-[6px] px-3 rounded-md max-w-[110px] w-full"
                                                                value="0"
                                                                placeholder='Value'
                                                            />
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Fixed Amount */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                                    <CustomRadioInput
                                                        value="fixed"
                                                        label="Fixed"
                                                        selectedValue={selectedOption}
                                                        onChange={handleChange}
                                                    />

                                                    {selectedOption === "fixed" && (
                                                        <div>
                                                            <input
                                                                type="text"
                                                                className="border-[.5px] border-[#d2cfcf] h-8 text-base py-[6px] px-3 rounded-md max-w-[110px] w-full"
                                                                value="0"
                                                                placeholder='Value'
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <label htmlFor="calculate_status" className='pb-2 block font-medium text-sm'>Calculate On Status</label>

                                    <select className="custom-select border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md max-w-[364px] w-full" required="required" aria-required="true">
                                        <option value="pending">Pending</option>
                                        <option value="accepted">Accepted</option>
                                        <option value="ready">Ready</option>
                                        <option value="collected">Collected</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </fieldset>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start justify-between flex-col xl:flex-row mb-8">
                            <div>
                                <h2 className="text-xl font-medium mb-2 text-wrap">Taxes</h2>
                                <p className="text-sm text-[#606060] max-w-[350px] w-full">
                                    Manage how taxes are charged and shown in your store.
                                </p>
                            </div>

                            <div className="flex-1 shadow-6 p-3 space-y-6 md:p-5 bg-white rounded-md max-w-full xl:max-w-[800px] w-full">
                                <fieldset>
                                    <label htmlFor="taxes_charged" className="block font-medium text-sm pb-4">
                                        How taxes are charged
                                    </label>

                                    <div className='flex items-center gap-3'>
                                        <input
                                            type="checkbox"
                                            value="featured"
                                            className="cursor-pointer rounded-[6px] custom-checkbox focus:ring-indigo-500"
                                        />
                                        <span className='text-sm block'>Include tax in prices </span>
                                    </div>

                                    <p className='pl-8 pt-1 text-sm text-[#606060]'>
                                        Product prices and delivery charges will include taxes (if any).
                                    </p>
                                </fieldset>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start justify-between flex-col xl:flex-row mb-8">
                            <div>
                                <h2 className="text-xl font-medium mb-2 text-wrap">Custom Text</h2>
                                <p className="text-sm text-[#606060] max-w-[350px] w-full">
                                    Message that you want to showcase on your storefront.
                                </p>
                            </div>

                            <div className="flex-1 shadow-6 p-3 space-y-6 md:p-5 bg-white rounded-md max-w-full xl:max-w-[800px] w-full">
                                <fieldset>
                                    <div className='flex justify-between gap-4 flex-col-reverse md:flex-row mb-2'>
                                        <div className='flex items-center gap-2'>
                                            <label htmlFor="custom_message" className='text-sm'>Custom Message</label>
                                            <span className='text-sm text-[#3C4e71]'>(0/40 Characters)</span>
                                        </div>

                                        <select className="custom-select border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md max-w-[220px] w-full" required="required" aria-required="true">
                                            <option value="">-- Select Language --</option>
                                            <option value="english">English</option>
                                        </select>
                                    </div>

                                    <input type="text" placeholder='Enter Custom Message' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                                </fieldset>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start justify-between flex-col xl:flex-row mb-8">
                            <div>
                                <h2 className="text-xl font-medium mb-2 text-wrap">Search Engine Optimization (SEO)</h2>
                            </div>

                            <div className="flex-1 shadow-6 p-3 space-y-6 md:p-5 bg-white rounded-md max-w-full xl:max-w-[800px] w-full">
                                <fieldset>
                                    <div className="flex items-end justify-between gap-4">
                                    <h2 className="text-[#0671e3] text-base md:text-lg break-all">{pageTitle || "Page Title"}</h2>
                                        <button
                                            onClick={toggleAccordion}
                                            className="bg-[#f2f2f2] text-[#212837] py-2 px-[10px] text-lg rounded"
                                        >
                                            <FaEdit />
                                        </button>
                                    </div>

                                    {isopenEditAccordin && (
                                        <div className="mt-4 py-4 border-t">
                                            {/* Page Title */}
                                            <fieldset className="mb-4">
                                                <label htmlFor="page_title" className="pb-2 block font-medium text-sm">
                                                    Page Title
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Page Title"
                                                    className="border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md"
                                                    value={pageTitle}
                                                    onChange={handlePageTitleChange}
                                                />
                                                <span className="text-[#7d7f7c] text-xs mt-1">{pageTitle.length} / 60</span>
                                            </fieldset>

                                            {/* Meta Description */}
                                            <fieldset className="mb-4">
                                                <label htmlFor="meta_description" className="pb-2 block font-medium text-sm">
                                                    Meta Description
                                                </label>
                                                <textarea
                                                    rows={3}
                                                    placeholder="Meta Description"
                                                    className="border-[.5px] border-[#d2cfcf] text-base py-[6px] px-3 w-full rounded-md"
                                                    value={metaDescription}
                                                    onChange={handleMetaDescriptionChange}
                                                />
                                                <span className="text-[#7d7f7c] text-xs mt-1">
                                                    {metaDescription.length} / 160
                                                </span>
                                            </fieldset>

                                            {/* Meta Keyword */}
                                            <fieldset className="mb-4">
                                                <label htmlFor="meta_keyword" className="pb-2 block font-medium text-sm">
                                                    Meta Keyword
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Meta Keyword"
                                                    className="border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md"
                                                />
                                            </fieldset>

                                            {/* Open Graph Image */}
                                            <div className="my-8">
                                                {!coverImage ? (
                                                    <div>
                                                        <label className="pb-2 block font-medium text-sm">
                                                            Upload Open Graph Image
                                                        </label>
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleFileUpload}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="w-full relative">
                                                        <div className="w-[200px] h-[200px] rounded-[7px] bg-cover overflow-hidden">
                                                            <img
                                                                src={coverImage}
                                                                alt="Upload graph"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>

                                                        <button
                                                            className="absolute top-0 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-black text-white"
                                                            onClick={deleteImage}
                                                        >
                                                            <IoCloseSharp size={12} />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Save Button */}
                                            <div className="mt-4 flex justify-end">
                                                <button className="bg-[#0671E3] text-white py-2 px-8 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </fieldset>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start justify-between flex-col xl:flex-row pt-20">
                            <div>
                                <h2 className="text-xl font-medium mb-2 text-wrap">Checkout Custom Fields</h2>
                                <p className='text-sm text-[#606060]'>
                                    Manage custom fields during checkout for this merchant.
                                </p>
                                <p className='text-xs text-[#606060] italic'>
                                    (Overrides the admin checkout custom feilds)
                                </p>
                            </div>

                            <div className='flex-1 max-w-full xl:max-w-[800px] w-full'>
                                <div className='flex justify-end items-end mb-2'>
                                    <button className="bg-[#212837] text-white py-[6px] max-w-[104px] w-full px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200 flex items-center justify-between gap-3">
                                        Create
                                        <FaPlus />
                                    </button>
                                </div>

                                <div className='shadow-9 border border-black/20 rounded-[5px] overflow-hidden flex-1 w-full'>
                                    <table className='border-collapse w-full'>
                                        <thead className='bg-[#131516] border border-[#131516]'>
                                            <tr>
                                                <th className='p-[14px] text-white font-semibold text-sm uppercase text-left'>
                                                    ID
                                                </th>

                                                <th className='p-[14px] text-white font-semibold text-sm uppercase text-left'>
                                                    Order Type
                                                </th>

                                                <th className='p-[14px] text-white font-semibold text-sm uppercase text-left'>

                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className='py-5 px-[14px]'>
                                                    5974
                                                </td>

                                                <td className='py-5 px-[14px]'>
                                                    Pickup
                                                </td>

                                                <td className="py-5 px-[14px]">
                                                    <div className="flex gap-2 justify-end">
                                                        <button
                                                            title="Edit"
                                                            className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                                                        >
                                                            <img src={EditIcon} alt="Edit Icon" />
                                                        </button>

                                                        <button
                                                            title="Delete"
                                                            className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                                                        >
                                                            <img src={DeleteIcon} alt="Delete Icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start justify-between flex-col xl:flex-row pt-8">
                            <div>
                                <h2 className="text-xl font-medium mb-2 text-wrap">Payment Settings</h2>
                                <p className='text-sm text-[#606060]'>
                                    Override admin payment methods
                                </p>
                            </div>

                            <div className='flex-1 max-w-full xl:max-w-[800px] w-full pt-20'>
                                <PaymentSettings />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default CreateMerchant