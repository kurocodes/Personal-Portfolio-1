import React from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Deepak_vaishnav_resume.pdf";
    link.setAttribute("download", "Deepak_vaishnav_resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white relative py-10 rounded-2xl flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-2 font-[Raleway] mb-10 ">
      <div className="flex flex-col items-center gap-2 justify-center">
        <div className="sm:mt-0 lg:mt-[-150px]">
          <img
            className="w-[170px] rounded-md"
            src={assets.profile_picture}
            alt=""
          />
        </div>
        <h2 className="font-bold text-2xl">@kuro.codes</h2>
        <p className="text-[rgba(11,9,9,0.5)] text-sm">
          FullStack Web Developer
        </p>

        {/* ----- Social Media Links ----- */}
        <div className="flex gap-3 mt-2">
          <div className="p-5 bg-[#F2F7FC] rounded-lg cursor-pointer">
            <a
              href="https://www.linkedin.com/in/kuro-codes-541199375"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin} alt="Linkedin" className="w-5 h-5" />
            </a>
          </div>
          <div className="p-5 bg-[#F2F7FC] rounded-lg cursor-pointer">
            <a
              href="https://www.instagram.com/kuro.codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.instagram} alt="Instagram" className="w-5 h-5" />
            </a>
          </div>
          <div className="p-5 bg-[#F2F7FC] rounded-lg cursor-pointer">
            <a
              href="https://github.com/kurocodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.github} alt="Github" className="w-5 h-5" />
            </a>
          </div>
          <div className="p-5 bg-[#F2F7FC] rounded-lg cursor-pointer">
            <a
              href="https://www.fiverr.com/s/pdg2w8E"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.fiverr} alt="Fiverr" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-[#F2F7FC] px-5 py-8 rounded-lg mx-5 mt-5 sm:mt-0 lg:mt-5">
        <div className="flex gap-5 border-b pb-5">
          <div className="flex w-3 flex-none">
            <img className="" src={assets.phone_icon} alt="" />
          </div>
          <div className="flex-grow">
            <p className="text-[rgba(26,16,3,0.5)] text-sm font-semibold">
              Phone
            </p>
            <p className="font-semibold font-[poppins] text-xs overflow-hidden text-ellipsis">
              +91 9887236064
            </p>
          </div>
        </div>

        <div className="flex gap-5 border-b pb-5">
          <div className="flex w-4 flex-none">
            <img className="" src={assets.email_icon} alt="" />
          </div>
          <div className="flex-grow ml-[-4px]">
            <p className="text-[rgba(26,16,3,0.5)] text-sm font-semibold">
              Email
            </p>
            <p className="font-semibold font-[poppins] text-xs overflow-hidden text-ellipsis">
              kurocodes@outlook.com
            </p>
          </div>
        </div>

        <div className="flex gap-5 pb-5">
          <div className="flex w-4 flex-none">
            <img className="" src={assets.location_icon} alt="" />
          </div>
          <div className="flex-grow">
            <p className="text-[rgba(26,16,3,0.5)] text-sm font-semibold">
              Location
            </p>
            <p className="font-semibold font-[poppins] text-xs overflow-hidden text-ellipsis">
              Rajasthan, India
            </p>
          </div>
        </div>

        {/* <div className='m-auto'>
                    <button onClick={handleDownload} className='gradient-btn flex gap-3 px-5 py-3 items-center rounded-full transition-all'>
                        <img src={assets.download_icon} alt="" />
                        <p className='text-white text-xs font-semibold'>Download Resume</p>
                    </button>
                </div> */}
      </div>
    </div>
  );
};

export default Profile;
