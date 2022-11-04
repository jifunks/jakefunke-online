import Link from "next/link";

export default function AboutMe({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <>
      dangerosly cheesy<br></br>
      <Link href="/">← Back to home</Link>
    </>
  );
}
