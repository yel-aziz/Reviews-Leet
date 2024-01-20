// Your component
"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";

const Form = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    city: "",
    situation: "",
    jobPosition: "",
    linkedinUrl: "",
    image: null,
    moroccanCities: "",
    workLocation: "",
    feedback: "",
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Use checked for checkbox, otherwise use the value
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Create an object with all the form data
    const formDataObject = {
      city: formData.city,
      situation: formData.situation,
      jobPosition: formData.jobPosition,
      linkedinUrl: formData.linkedinUrl,
      image: formData.image,
      moroccanCities: formData.moroccanCities,
      workLocation: formData.workLocation,
      feedback: formData.feedback,
    };

    console.log("Form submitted with data:", formDataObject);

    closeModal();
  };

  const workLocations = [
    "Remote",
    "On-site",
    // Add more options as needed
  ];
  const moroccanCities = [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Fes",
    "Agadir",
    "Buengrire",
    "Khouribga",
    "Asafi",
    // Add more cities as needed
  ];
  const jobPosition = [
    "Internship",
    "CDD",
    "CDI",
    "Freelance",
    // Add more cities as needed
  ];

  const customStyle = {
    backgroundImage: 'url("/form.png")',
    backgroundSize: "cover",
  };

  return (
    <div className="flex justify-center items-center max-w-[1440px]  text-white rounded-md bg-blue-700 cursor-pointer">
      <button
        onClick={openModal}
        className="flex items-center justify-center w-[250px]   whitespace-nowrap"
      >
        <Image src="/plus.png" alt="" width={50} height={30} />
        <span className="ml-2">Share your Experience</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "auto",
            maxWidth: "900px",
            margin: "auto",
            padding: "5px",
          },
        }}
      >
        <div
          style={customStyle}
          className="flex  flex-col items-center justify-center w-full gap-5  lg:h-auto md:h-full h-auto border-black "
        >
          <form
            onSubmit={handleSubmit}
            className="mt-2 w-full md:w-[50%]  "
          >
            <label className="flex flex-col gap-2  ">
              Company Name:
              <input
                type="text"
                color="black"
                name="city"
                value={formData.city}
                placeholder="Type here"
                className="border border-black"
                onChange={handleInputChange}
              />
            </label>
            <label className="flex flex-col gap-2 mt-5">
              Company City:
              <select
                name="moroccanCities"
                value={formData.moroccanCities}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select a city
                </option>
                {moroccanCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex  gap-2 mt-5">
              You Still Possed this job:
              <input
                type="checkbox"
                name="situation"
                value={formData.situation}
                className="border border-black"
                onChange={handleInputChange}
                placeholder="Type here"
              />
            </label>
            <label className="flex flex-col gap-2 mt-5">
              Contract Type:
              <select
                name="jobPosition"
                value={formData.jobPosition}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select a Position
                </option>

                {jobPosition.map((job) => (
                  <option key={job} value={job}>
                    {job}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 mt-5">
              Work Location:
              <select
                name="workLocation"
                value={formData.workLocation}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select a Work Location
                </option>
                {workLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 mt-5">
              Company LinkedIn URL:
              <input
                type="text"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleInputChange}
                className="border border-black"
                placeholder="Type here"
              />
            </label>

            <div className="mt-5  ">
              <p>YOUR Feedback (Optional)</p>
              <div className="h-[100px] overflow-y-scroll mt-2">
                <textarea
                  id="textareaInput"
                  placeholder="Write your Feedback"
                  name="textareaInput"
                  className="w-full h-full"
                ></textarea>
              </div>
            </div>
            <label className="flex flex-col gap-2 mt-5">
              Company Image:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 mt-5 "
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Form;
