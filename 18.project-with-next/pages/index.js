import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/View_of_Buffalo_City_Hall_%28cropped%29.jpg",
    address: "some address 5, 12234 some City",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quasi!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Erie_County_Hall_2012.jpg",
    address: "some address 3, 12233 some City",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quasi!",
  },
];

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        ></meta>
      </Head>
      <MeetupList meetups={DUMMY_MEETUPS} />;
    </>
  );
};
export default HomePage;
