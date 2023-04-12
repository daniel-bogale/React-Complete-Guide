import { useRouter } from "next/router";
import { useEffect } from "react";

const MeetupDetails = () => {
  const router = useRouter();
  console.log(router.query.meetupId);

  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Erie_County_Hall_2012.jpg"
        alt="first meetup detail"
      />
      <h1> A First Meetup</h1>
      <address>Street 5,Lorem, ipsum dolor</address>
      <p>The meetup description</p>
    </>
  );
};

export default MeetupDetails;
