import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const AddDataForm = ({ setshowModel }) => {
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    type: "",
    file: null,
  });

  const handleSelectType = (type) => {
    setFormData({
      ...formData,
      type,
    });
    setSelectedType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-[50%] ml-24 absolute z-50 bg-white border-[2px] rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="p-4 rounded-lg">
        <div className="flex items-center justify-between text-xl font-semibold py-4 mb-4 border-b-[1px]">
          <h1>Add Data</h1>
          <IoIosClose
            className="text-4xl"
            onClick={() => setshowModel(false)}
          />
        </div>

        {/* Buttons to select the type */}
        <div className="mb-4 flex gap-2">
          {["text", "pdf", "epub", "link", "csv"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleSelectType(type)}
              className={`px-5 text-lg font-semibold py-3 rounded ${
                selectedType === type
                  ? "bg-blue-500 text-white"
                  : " border-[1px] border-blue-500"
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Title input */}
        <div className="mb-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded mt-1 text-lg"
            placeholder="Title"
          />
        </div>

        {/* Description input */}
        <div className="mb-4">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border h-[15vh] border-gray-300 rounded mt-1 resize-none  text-lg"
            placeholder="Description"
          />
        </div>

        {/* Read More / Source Link input */}
        {selectedType !== "pdf" && (
          <div className="mb-4">
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Read More / Source Link"
            />
            <p className="text-sm text-gray-500 mt-1 border-b-[1px] pb-4">
              The Source or Read More link user gets at the end of the message
            </p>
          </div>
        )}

        {/* PDF upload option */}
        {selectedType === "pdf" && (
          <div className="mb-4">
            <label className="block text-gray-700">Upload PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            className="px-4 py-2  text-red-400 border-[1px] border-red-400 rounded font-semibold text-lg"
            onClick={() => setshowModel(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-500 text-white rounded text-lg font-semibold"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDataForm;
