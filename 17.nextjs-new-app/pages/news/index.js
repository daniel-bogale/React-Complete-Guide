import Link from "next/link";
function News() {
  return (
    <>
      <h2>This is News</h2>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-greate-framework">
            NextJs Is A Great Framework
          </Link>
        </li>
        <li>
          <Link href="/news/Something-Else">Something Else</Link>
        </li>
      </ul>
    </>
  );
}
export default News;
