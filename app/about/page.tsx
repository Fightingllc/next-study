import { Metadata } from "next";

export default function page() {
  return (
    <>
        <div className= '	flex justify-center items-center h-screen'>
          <span className="w-23 border-2 border-solid p-1 border-amber-300">about page</span>
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