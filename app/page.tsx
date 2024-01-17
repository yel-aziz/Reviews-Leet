import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-full  min-h-screen min-w-[280px]  flex-col bg-[#F1F3F5]">
      <div className="flex  flex-col items-center  w-[90%]  h-full mt-10">
        <div className="flex w-[70%] justify-end ml-auto">
          <Form />
        </div>

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
