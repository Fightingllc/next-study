import { Twig } from "@react-symbols/icons";
import { Metadata } from "next";

export default function page() {
  return (
    <>
        <div className= '	flex justify-center items-center h-screen'>
          <Twig width={600} height={600}/>
        </div>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "关于 - Morning",
    description: "这是关于页面的描述"
  };
}