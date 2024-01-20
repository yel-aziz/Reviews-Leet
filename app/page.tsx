import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";

export default function Home() {

  /*function getCard(){
   axios.get('https://192.168.1.104:8000/42/getcompanys').then(response=>{
    const data = response.data
    console.log(data)
   })
  }
  getCard()*/

  return (
    <main className="flex items-center h-full  min-h-screen min-w-[280px] border border-black max-w-[1440px] mx-auto  flex-col bg-[#F1F3F5]">
      <div className="flex  flex-col items-center  w-[90%]  h-full mt-10">
        <div className="flex  justify-end border w-[90%]  ml-auto">
          <Form />
        </div>

        <div className="border w-[90%] lg:w-[70%] mt-10">Total : 15</div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
