import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


const SearchEngineOptimization = () => {
    const [isopenEditAccordin, setIsOpenEditAccordin] = useState(false);
    const [pageTitle, setPageTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [coverImage, setCoverImage] = useState(null);


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
        <div>
            <div className="flex gap-5 items-center justify-between flex-col xl:flex-row">
                <div className='max-w-[33%] w-full'>
                    <h2 className="text-xl font-medium mb-2 text-wrap">Search Engine Optimization (SEO)</h2>
                </div>

                <div className="w-full flex-1 shadow-6 p-3 md:p-5 bg-white rounded-md xl:max-w-[66%]">
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
        </div >
    );
};

export default SearchEngineOptimization;
