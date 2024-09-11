import { Metadata } from "next";

export default function page() {
  return (
    <>
        <div>about page</div>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "关于 - Morning",
    description: "这是关于页面的描述"
  };
}