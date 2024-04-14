// Your component
"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const Form = (submit: any) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [file, setFile] = useState("");
  const [emoji, setEmoji] = useState("null");
  const [backgroundE, setBackground] = useState(false);
  const [backgroundM, setBackgroundM] = useState(false);
  const [backgroundB, setBackgroundB] = useState(false);

  useEffect(() => {
    const checkTrueState = () => {
      if (backgroundE === true) {
        setEmoji("/goodEx.png");
      } else if (backgroundM === true) {
        setEmoji("/mediumEx.png");
      } else if (backgroundB === true) {
        setEmoji("/badEx.png");
      } else {
        setEmoji("/goodEx.png");
      }
    };
    checkTrueState();
  }, [backgroundB, backgroundE, backgroundM]);
  const [formData, setFormData] = useState({
    companyName: "",
    situation: "",
    jobPosition: "",
    linkedinUrl: "",
    moroccanCities: "",
    workLocation: "",
    feedback: "",
    contracttype: "",
    emojistatus: "",
    image: "https://localhost/uploads/1706121089168-675727346.png",
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    // Use checked for checkbox, otherwise use the value
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
console.log('file',file)
    setFile(file);
  };

  const handleupload = async (id: any) => {
    const formData = new FormData();
    formData.append("image", file);

    if (formData) {
      try {
        const response = await axios.post(
          `http://localhost:8000/42/upload/?id=${id}`,
          formData
        );

        if (response) {
          console.log("Image uploaded successfully");
        } else {
          console.error("Failed to upload image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  const routeur = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = new FormData();
    form.append("companyName", formData.companyName);
    // ... append other form fields
    form.append("image", formData.image);

    try {
      // ... your fetch logic
    } catch (error) {
      console.error("Error uploading image:", error);
    }
    // Check if companyName is empty
    if (
      formData.companyName.trim() === "" ||
      formData.jobPosition.trim() === "" ||
      formData.moroccanCities.trim() === "" ||
      formData.workLocation.trim() === "" ||
      formData.contracttype.trim() === ""
    ) {
      // Display an error message, prevent submission, or take any other action
      console.error("Company Name is required");
      notify();

      return;
    }

    e.preventDefault();

    // Create an object with all the form data
    const formDataObject = {
      companyName: formData.companyName,
      situation: formData.situation,
      jobPosition: formData.jobPosition,
      linkedinUrl: formData.linkedinUrl,
      moroccanCities: formData.moroccanCities,
      workLocation: formData.workLocation,
      feedback: formData.feedback,
      contracttype: formData.contracttype,
      image: formData.image,
      emojistatus: emoji,
    };

    var response;
    const CreatCompnys = async () => {
      try {
        const token = Cookies.get("token");
        const headers = {
          "Content-Type": "application/json", 
          Authorization: `Bearer ${token}`,
        };
        response = await axios.post(
          `http://localhost:8000/42/companys/`,
          formDataObject,
          { headers }
        );
        toast.success(" Created ... ", {
          position: "top-center",
        });

        handleupload(response.data);

        routeur.push(`/Engagement?id=${response.data}`);
      } catch (error) {
        routeur.push("/login");
        console.error("Error fetching data:", error);
      }
    };
    CreatCompnys();
    closeModal();
  };

  const workLocations = [
    "Remote",
    "On-site",
    "Hybird",
    // Add more options as needed
  ];
  const moroccanCities = [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Fes",
    "Agadir",
    "Benguerir",
    "Khouribga",
    "Safi",
    "Tanger",
    // Add more cities as needed
  ];
  const jobPosition = [
    "Internship",
    "CDD",
    "CDI",
    "Freelance",
    // Add more job positions as needed
  ];

  const customStyle = {
    // backgroundImage: 'url("/form.png")',
    backgroundSize: "cover",
  };

  const notify = () => {
    toast.error(" Please Fill Required Inputs !", {
      position: "top-center",
    });
  };
  return (
    <div className="flex justify-center items-center max-w-[1440px]  text-white rounded-md bg-primary cursor-pointer ml-20">
      <button
        onClick={openModal}
        className="flex items-center justify-center w-[250px] whitespace-nowrap py-2 gap-3"
      >
        <Image src="/plus.svg" alt="" width={30} height={30} />
        <span className="font-semibold text-white">Share Your Experience</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "900px",
            height: "970px",
            maxWidth: "900px",
            margin: "auto",
          },
        }}
      >
        {/* <div
          style={customStyle}
          className="flex flex-col items-center justify-center w-98 border-black bg-red-700"
        > */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col m-5 bg-whi text-quaternary w-98 rounded-md p-7"
        >
          <div className="font-bold mb-7 p-2 rounded-lg text-xl text-white bg-primary">
            Share Your Experience
          </div>
          <label className="flex flex-col">
            <div className="font-semibold">Company Name</div>
            <input
              type="text"
              color="black"
              name="companyName"
              value={formData.companyName}
              placeholder="Company Name"
              className="border border-black rounded-md w-72 h-9 pl-3"
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="flex flex-col mt-5">
            <div className="font-semibold">Job Status</div>
            <input
              type="text"
              color="black"
              name="jobPosition"
              value={formData.jobPosition}
              placeholder="Job Status"
              className="border border-black rounded-md w-72 h-9 pl-3"
              onChange={handleInputChange}
              required
            />
          </label>

          <div className="flex flex-col items-center mt-5">
            <div className="font-semibold">
              How You Rate Your Experience in this Company?
            </div>
            <div className="flex w-full items-center gap-5 h-full justify-between">
              <div
                className={`flex justify-center items-center border w-36 rounded-md
                  ${
                    backgroundE ? "bg-lime-300" : ""
                  } border-black md:w-[32%]   gap-2`}
                onClick={() => {
                  setBackground(!backgroundE);
                  setBackgroundM(false);
                  setBackgroundB(false);
                }}
              >
                <div className=" h-7 ">
                  <Image
                    src={"/goodEx.png"}
                    alt=""
                    width={30}
                    height={10}
                    className=" h-full"
                  />
                </div>
                <p className="font-light">Excellent</p>
              </div>
              <div
                className={`flex border border-black justify-center items-center w-36 rounded-md ${
                  backgroundM ? "bg-amber-400" : ""
                } md:w-[32%] w-full gap-2`}
                onClick={() => {
                  setBackgroundM(!backgroundM);
                  setBackgroundB(false);
                  setBackground(false);
                }}
              >
                <div className="w-7 h-7">
                  <Image
                    src={"/mediumEx.png"}
                    alt=""
                    width={30}
                    height={10}
                    className="w-full h-full"
                  />
                </div>
                <p className="font-light">Medium</p>
              </div>
              <div
                className={`flex items-center justify-center border w-36 rounded-md ${
                  backgroundB ? "bg-red-500" : ""
                } border-black md:w-[32%] w-full gap-2`}
                onClick={() => {
                  setBackgroundB(!backgroundB);
                  setBackground(false);
                  setBackgroundM(false);
                }}
              >
                <div className="w-7 h-7">
                  <Image
                    src={"/badEx.png"}
                    alt=""
                    width={30}
                    height={10}
                    className="w-full h-full"
                  />
                </div>
                <p className="font-light">Bad</p>
              </div>
            </div>
          </div>
          <label className="flex gap-2 mt-5">
            <div className="font-semibold">You Still Possed this job</div>
            <input
              type="checkbox"
              name="situation"
              value={formData.situation}
              className="border border-black"
              onChange={handleInputChange}
              placeholder="Type here"
            />
          </label>
          <label className="flex gap-2 mt-5">
            <div className="font-semibold">Company Location:</div>
            <select
              name="moroccanCities"
              value={formData.moroccanCities}
              onChange={handleInputChange}
              required
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
          <label className="flex gap-2 mt-5">
            <div className="font-semibold">Contract Type:</div>
            <select
              name="contracttype"
              value={formData.contracttype}
              onChange={handleInputChange}
              required
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
          <label className="flex gap-2 mt-5">
            <div className="font-semibold">Work Location:</div>
            <select
              name="workLocation"
              value={formData.workLocation}
              onChange={handleInputChange}
              required
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

          <label className="flex items-center gap-2 mt-5">
            <div className="font-semibold">Company LinkedIn URL:</div>
            <input
              type="text"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleInputChange}
              className="border border-black rounded-md p-1"
              placeholder="Company LinkedIn"
            />
          </label>

          <div className="mt-5">
            <p className="font-semibold">Your Feedback (Optional)</p>
            <div className="h-[150px] w-96 overflow-y-scroll mt-2">
              <textarea
                id="feedback"
                onChange={handleInputChange}
                placeholder="Write your Feedback"
                name="feedback"
                className="w-full h-full rounded-md p-3"
              ></textarea>
            </div>
          </div>
          <label className="flex gap-2 mt-5">
            <div className="font-semibold">Company Image:</div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-quaternary text-white px-4 py-2 mt-5 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
        {/* </div> */}
      </Modal>
    </div>
  );
};

export default Form;
