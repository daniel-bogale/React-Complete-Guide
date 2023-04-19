import "./card.css";

const Card = (props) => {
  const classNm = "card " + props.className;
  return <div className={classNm}> {props.children} </div>;
};

export default Card;
