import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { BsUpload, BsArrowLeft, BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import File from "../../assets/file.png";




const CustomerEmport = () => {
    const importData = [
        {
            id: 1,
            date: "2024-12-19 17:07:23",
            satus: "Completed",
            importid: " 6764991b2b8b5b0dbc0dab92"
        }
    ];

    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setUploadProgress(0);
            setIsUploaded(false);
            uploadFile(uploadedFile);
        }
    };

    const uploadFile = (file) => {
        setIsUploading(true);

        // Simulate file upload progress
        const interval = setInterval(() => {
            setUploadProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    setIsUploading(false);
                    setIsUploaded(true);
                    return 100;
                }
                return prevProgress + 10; // Increase progress
            });
        }, 300); // Simulate upload speed
    };



    return (
        <Layout>
            <section className='md:pt-[60px] pb-32'>
                {/* header */}
                <div className='py-[10px] px-5 lg:px-[50px] w-full sticky top-0 md:top-[60px] left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>
                    <div className='flex items-center gap-4'>
                        <Link to="/customers" className='bg-[#E5E5E5] rounded-md w-11 h-10 flex items-center justify-center text-[#C2C2C2]'>
                            <BsArrowLeft size={22} />
                        </Link>
                        <h1 className='text-xl font-medium capitalize'>Customers Import</h1>
                    </div>
                </div>

                <div className='px-5 lg:px-[50px]'>
                    <div className='mb-16 max-w-[1200px] mx-auto w-full'>
                        <div className="w-full shadow-md my-4 p-3 md:p-5 bg-white rounded-md mb-20">
                            <p className="text-sm mb-4 flex flex-wrap gap-1">
                                <span className="mr-2 text-[#0671e3] pb-1">1</span>
                                Download reference CSV file.{' '}
                                <span className="text-[#0671e3] flex items-center cursor-pointer">
                                    <BsFillFileEarmarkSpreadsheetFill /> Download
                                </span>
                            </p>

                            <p className="text-sm pb-4">
                                <span className="mr-2 text-[#0671e3] pb-1">2</span>
                                Map your entries according to the reference CSV file downloaded above. <br />
                                NOTE: Any mismatch might result in failure or incorrect upload of your data. Please make sure all the data is entered correctly and according to the reference CSV.
                            </p>

                            <p className="text-sm pb-4">
                                <span className="mr-2 text-[#0671e3] pb-1">3</span>
                                Select your language.
                            </p>

                            <div className="border-[3px] border-dashed border-[#eee] py-6 rounded-md w-full flex-col flex items-center justify-center">
                                <BsUpload size={25} className="text-center mx-auto my-4" />
                                <p className="text-sm">Drag And Drop File</p>
                                <p className="text-sm my-1">or</p>
                                <label className="bg-[#c9d2e3] border border-[#c9d2e3] text-[#212837] rounded-md py-[6px] px-3 text-sm cursor-pointer">
                                    Browse
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>

                            {file && (
                                <div className="mt-5 flex items-center gap-4">
                                    <div>
                                        <img src={File} alt="File" className='w-10' />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex items-center justify-between gap-2 text-sm pb-2'>
                                            <p>{file.name}</p>
                                            <p>{uploadProgress}%</p>
                                        </div>
                                        <div className="w-full bg-[##dae0ec] rounded-md h-[7px] overflow-hidden">
                                            <div
                                                className={`${uploadProgress === 100 ? 'bg-[#0671e3]' : 'bg-[#0671e3]'
                                                    } h-full rounded-full`}
                                                style={{ width: `${uploadProgress}%` }}
                                            ></div>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>


                        {/* Table */}
                        <div className="overflow-x-auto w-full block bg-white rounded-xl border">
                            <table className="w-full border-collapse">
                                <thead className="bg-[#F9FAFB]">
                                    <tr>
                                        <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            Date
                                        </th>
                                        <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            Status
                                        </th>

                                        <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            Import ID
                                        </th>

                                        <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                            Download Import File
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {importData.length > 0 ? (
                                        importData.map((importproduct) => (
                                            <tr key={importproduct.id} className="hover:bg-tr-hover-bg cursor-pointer">
                                                <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm whitespace-nowrap">
                                                    {importproduct.date}
                                                </td>

                                                <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm text-left whitespace-nowrap">
                                                    <p className='bg-[#1abd36] w-fit text-white font-bold text-[10px] py-[2px] px-1 rounded-[6px]'>{importproduct.satus}</p>
                                                </td>

                                                <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-[#212837] text-sm">
                                                    {importproduct.importid}
                                                </td>

                                                <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-center whitespace-nowrap">
                                                    <FaDownload size={16} className='text-[#0671e3] cursor-pointer mx-auto' />
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="border-t border-[#f2f2f2] px-[.9rem] py-5 text-center text-[#212837] text-sm"
                                            >
                                                There are no records to show
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CustomerEmport;