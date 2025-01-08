


// import { Geist, Geist_Mono } from "next/font/google";
import DefaultLayout from "@/components/layout/DefaulteLayout";
import CreateUser from "@/components/user/CreateUser";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  
    
    return (

    <DefaultLayout>
      <div className="flex flex-col items-center justify-start min-h-screen p-8 h-screen ">
        <h1 className=" text-center py-3 font-semibold text-2xl  capitalize">the best pizza
        </h1>
          <h1 className='text-red-600 text-center py-3 font-semibold text-2xl  capitalize'>
            straight out of the oven straight out to you
          </h1>
      <CreateUser/>
      </div>
    </DefaultLayout>
  );
}
