import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";
import { IoMdChatboxes } from "react-icons/io";
import AddDataForm from "./AddDataForm";

const Centerpart = () => {
  const [showModel, setshowModel ] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);



  // Handle the input value change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle focus and blur events
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setIsFocused(false);
    }
  };

  const [selectedValue, setSelectedValue] = useState("");
  const [isFocuse, setIsFocuse] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleFocused = () => {
    setIsFocuse(true);
  };

  const handleBlured = () => {
    if (selectedValue === "") {
      setIsFocuse(false);
    }
  };



  return (
    <div className="w-full h-[24vh]">
      <div>
        <div className="w-[90%] h-full ml-24 flex gap-10 items-start justify-center py-4">
          
          <div onClick={() => setshowModel(true)} className="w-[10%] h-10 py-2 px-1 bg-blue-400 flex items-center justify-center gap-4 uppercase font-semibold rounded hover:bg-blue-700 text-white cursor-pointer">
            <FaPlus className="text-lg" />
            <h2>add data</h2>
          </div>
          {showModel ? <AddDataForm setshowModel={setshowModel} /> : ""}
          
          
          <div className="w-[18%] h-10 py-2 px-1 bg-red-500 flex items-center justify-center gap-3 uppercase font-semibold rounded hover:bg-red-700 text-white cursor-pointer">
            <GiBackwardTime className="text-lg" />
            <h2>data training status</h2>
          </div>
          <div className="w-[14%] h-10 py-2 px-1 border-[1px] border-red-300 flex items-center justify-center gap-4 uppercase font-semibold rounded hover:border-red-600 text-red-400 cursor-pointer">
            <IoMdChatboxes className="text-lg" />
            <h2>ground truth</h2>
          </div>
        </div>
        <div className="h-[2px] w-[65%] bg-zinc-400 ml-[20%] "></div>
        <div className="flex items-start justify-center gap-4">
          <div className="relative w-64 mt-5 ml-24">
            {/* Label */}
            <label
              className={`absolute left-2 text-grey-500 transition-all duration-300 ease-in-out pointer-events-none
        ${
          isFocused || inputValue
            ? "-top-3 text-sm && text-blue-400"
            : "top-2 text-base"
        }`}
            >
              Search
            </label>

            {/* Input */}
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full px-2 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative w-32 mt-5">
            {/* Label */}
            <label
              className={`absolute left-2 text-gray-500 transition-all duration-300 ease-in-out pointer-events-none
        ${
          isFocused || selectedValue
            ? "-top-3 text-xs && text-blue-500"
            : "top-2 text-base"
        }`}
            >
              Results
            </label>

            {/* Dropdown Box */}
            <select
              value={selectedValue}
              onChange={handleSelectChange}
              onFocus={handleFocused}
              onBlur={handleBlured}
              className="w-full px-2 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-500 appearance-none bg-white"
            >
              {/* <option value="" disabled>Select an option</option> */}
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
              <option value="option3">4</option>
              <option value="option3">5</option>
              <option value="option3">6</option>
              <option value="option3">7</option>
              <option value="option3">8</option>
              <option value="option3">9</option>
              <option value="option3">10</option>
              <option value="option3">20</option>
              <option value="option3">50</option>
            </select>
          </div>

          <div className="h-10 w-32 bg-blue-400 mt-5 rounded flex items-center justify-center text-xl uppercase text-white cursor-pointer ">
            <h2>Search</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centerpart;
