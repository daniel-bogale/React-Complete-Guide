import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";
const DetailPage = () => {
  const router = useRouter();

  console.log(router);

  return <h1>this is detail for {router.query.newsId}</h1>;
};

export default DetailPage;
