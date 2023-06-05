import Classes from "./MeetupDetail.module.css";
const MeetupDetail = (props) => {
  return (
    <section className={Classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
