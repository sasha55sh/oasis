import type { Metadata } from "next";
import ArticleSection from "@/app/(pages)/news/[articleHandle]/_components/ArticleSection";

export const metadata: Metadata = {
  title: "Oasis - Стаття",
  description: "Ця новина містить найсвіжішу інформацію!",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = async ({ params }: { params: Promise<{ articleHandle: string }> }) => {
  const { articleHandle } = await params;

  return (
    <>
      <ArticleSection articleHandle={articleHandle} />
    </>
  );
};

export default Page;
