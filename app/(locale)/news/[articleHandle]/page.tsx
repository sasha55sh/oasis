import type { Metadata } from "next";
import ArticleSection from "@/app/sections/article-page/ArticleSection";

export const metadata: Metadata = {
  title: "Oasis - Article",
  description: "This article has the latest information!",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = ({ params }: { params: any }) => {
  const articleHandle = params.articleHandle;

  return (
    <>
    <ArticleSection articleHandle={articleHandle}/>
    </>
  );
};

export default Page;
