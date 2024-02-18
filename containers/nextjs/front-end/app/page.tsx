"use client";
import Card from "@/components/Card";
import Form from "@/components/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  const [formCompleted, setFormCompleted] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [data, setData] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem("searchTerm");
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }


    // Listen for the custom event
    const handleStorageChange = async (event: any) => {
      // Read the 'token' cookie
const tokenCookie = document.cookie
.split('; ')
.find(row => row.startsWith('token='));

// Extract the token value
const token = tokenCookie ? tokenCookie.split('=')[1] : null;

      if (event.detail) {
        setSearchTerm(event.detail);
      } else if (event.detail === "") {
        try {
          const headers = {
            "Content-Type": "application/json", // Adjust the content type as needed
            
          };
          const response = await axios.get(
            "http://localhost:8000/42/getCompanys",
            { headers }
          );
          setData(response.data);
        
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        console.log("event detail", event);
      }
    };

    window.addEventListener("searchTermChange", handleStorageChange);

    const sortByNameWithKeyword = () => {
      // If there is a search term, filter and sort the data
      const filteredData = data.filter((item: any) =>
        item.name.includes(searchTerm)
      );
      const sortedData = filteredData.sort((a: any, b: any) =>
        a.name.localeCompare(b.name)
      );
      setData(sortedData);
    };
    sortByNameWithKeyword();

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("searchTermChange", handleStorageChange);
    };
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          "Content-Type": "application/json", // Adjust the content type as needed
          
        };
        const response = await axios.get(
          "http://localhost:8000/42/getCompanys",
          { headers }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally {
        setLoading(false); // Set loading to false when API call completes
      }
    };

    fetchData();
  }, [formCompleted]); // The

  const Dataform = (company: any) => {
    const date = new Date(company.createdAt);

    // Extract year, month, and day
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const day = date.getDate();
    return `${year}: ${month} : ${day}`;
  };
  return (
<main className="flex items-center h-full min-h-screen min-w-[280px] max-w-[1440px] mt-10 mx-auto p-1 flex-col bg-[#F1F3F5]" style={{ backgroundImage: "url('/backk.jpg')" }}>
      <div className="flex  flex-col items-center  w-[90%]  h-full mt-10">
        <div className="flex  justify-end  w-[90%]  ml-auto">
          <Form value={submit} />
        </div>


        <div className=" w-[90%] lg:w-[900px] mt-10">Total : {data.length}</div>

        {loading ?  (
          // Show Skeleton only when loading
          
          <p className="text-black">loading...</p>
        ) : (
          // Render actual data when not loading
          data.map((company: any) => (
            <Card
              id={company.id}
              key={company.id}
              contractType={company.Conatract}
              position={company.Positon}
              mission={company.progress}
              name={company.name}
              status={company.YourStatus}
              city={company.city}
              creationDate={Dataform(company)}
              avatar={company.avatar}
              linkding={company.linkding}
              emoji={company.emojistatus}
              creatorid={company.creatorId}
            />
          ))
        )}

      </div>
      
    </main>
  );
}
