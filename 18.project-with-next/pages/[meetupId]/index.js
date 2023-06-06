import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  const router = useRouter();

  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/f/fa/Erie_County_Hall_2012.jpg"
      title="A First Meetup"
      location="Street 5,Lorem, ipsum dolor"
      description="The meetup description"
    ></MeetupDetail>
  );
};

export default MeetupDetails;
