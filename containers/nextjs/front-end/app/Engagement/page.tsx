"use client";
import Card from "@/components/Card";
import Comment from "@/components/Comment";
import axios from "axios";
import { Federant } from "next/font/google";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Engagment() {
  const [feedback, setFeedback] = useState("");
  const [refresh, setRefreach] = useState(false);
  const [avatar, setAvatar] = useState("");
  const routeur = useRouter()
  const [isPublishing, setIsPublishing] = useState(false);
  const [loading, setLoading] = useState(true);



  interface CompanyData {
    id: number;
    Conatract: string;
    Positon: string;
    progress: string;
    name: string;
    YourStatus: string; // Adjust the type accordingly
    city: string;
    comments: [];
    // Add other properties as needed
  }

  const param = useSearchParams();
  const id = param?.get("id");
  const [comments, setComments] = useState([]);
  const [data, setData] = useState<CompanyData | any>([]);
  var commentsLength = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('token')

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          // other headers...
        };
        const user = await axios.get('http://localhost:8000/42/me', { headers })
        setAvatar(user.data.avatar)
        const url = `http://localhost:8000/42/getComments/?id=${id}`;
        const response = await axios.get(url);
        setComments(response.data.comments);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally {
        setLoading(false); // Set loading to false when API call completes
      }
    };

    fetchData();
  }, [id, refresh]);

  const handlePublish = async () => {
    if (isPublishing || feedback.trim().length === 0) {
      return;
    }

    try {
      setIsPublishing(true);

      const token = Cookies.get('token')
      console.log('token engagment', token)
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // other headers...
      };

      const url = `http://localhost:8000/42/comments/?id=${id}`;
      console.log('comment going', feedback)
      const status = await axios.post(url, { feedback }, { headers });
      //  Refresh comments after posting

      const refreshedData = await axios.get(
        `http://localhost:8000/42/getComments/?id=${id}`
      );
      setComments(refreshedData.data.comments);
      console.log('comments', refreshedData.data)
    } catch (error) {

      routeur.push('/login')
      console.error("Error fetching data:", error);
    }
    finally {
      setIsPublishing(false);
      setTimeout(() => {
        setIsPublishing(false);
      }, 5000);
    }

    // Clear feedback after posting
    setFeedback("");
  };

  const handleTextareaChange = (event: any) => {
    setFeedback(event.target.value);
    console.log("comment to send", feedback);
  };


  return (
    <div className="flex flex-col items-center mt-10  min-w-[280px] bg-[#F1F3F5] md:h-screen h-full   w-full">
      <div className="flex flex-col w-[90%]  justify-between items-center ">
        <Card
          id={data.id}
          key={data.id}
          contractType={data.Conatract}
          position={data.Positon}
          mission={data.progress}
          name={data.name}
          status={data.YourStatus}
          city={data.city}
          avatar={data.avatar}
          emoji={data.emojistatus}
        />
        <div className=" w-[100%] lg:w-[900px]   h-[90px] mt-5 ">
          <div className="flex w-full gap-2 h-full">
            <div>
              <Image
                src={avatar}
                alt=""
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="overflow-y-auto w-full h-full">
              <textarea
                name="feedback"
                onChange={handleTextareaChange}
                value={feedback}
                id=""
                placeholder="Type your Feedback Here..."
                className="h-full w-full rounded-2xl p-2"
              ></textarea>
            </div>
          </div>
          <div onClick={handlePublish} className="flex justify-end items-end mt-5">
            <button className={`bg-orange-500 rounded-full w-24 h-7 ${isPublishing ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isPublishing}>
              Publish
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:w-[900px] w-[90%] h-full  mt-16  ">
        <div className="flex justify-between">
          <p>{`Total:  ${comments?.length}`}</p>
          <div className="flex" onClick={() => setRefreach(!refresh)}>
            <Image src={"/reload.png"} width={25} height={30} alt="" />
            <button>Refresh</button>
          </div>
        </div>
        <div className="w-[100%] h-full  ">
          {loading? (<p>
            Loading...
          </p>) : comments.map((company: any, index) => (
            <Comment
              key={index}
              avatar={company.user.avatar}
              comment={company.text}
              login={company.user.login}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
