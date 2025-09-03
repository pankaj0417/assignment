import React from "react";
import avatar from "../assets/avatar.jpg";
import { FaCamera } from "react-icons/fa";

function Account() {
  return (
    <div className="flex w-full flex-col min-h-screen  items-center ">
      <h1 className="text-3xl font-semibold text-gray-900  my-12 text-center">
        Account Settings
      </h1>
      <div className="w-full max-w-sm bg-gray-100 flex-row p-8">
        <div className="flex flex-row w-full">
          <div className="mr-4 relative">
            <img
              src={avatar}
              className=" w-32 h-32 rounded-full"
              alt="avatar_img"
            />
            <div className="absolute top-20 left-26 bg-purple-500 text-white rounded-full p-2">
              <FaCamera />
            </div>
          </div>
          <div>
            <h1>Merry Doe</h1>
            <h3>Marry@Gmail.com</h3>
          </div>
        </div>
        <p className="mt-4 text-gray-600 spacing-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis iure, labore provident sed fugiat itaque commodi 
      </p>
      </div>
    </div>
  );
}

export default Account;
