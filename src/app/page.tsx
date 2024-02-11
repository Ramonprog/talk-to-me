import Button from "@/components/Button";
import Container from "@/components/Container";
import FormWapper from "@/components/FormWrapper";
import Header from "@/components/Header";
import { Input } from "@/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className=" mx-auto w-full h-full flex-1 flex items-center justify-center ">
        <FormWapper />
      </div>
    </main>
  );
}
