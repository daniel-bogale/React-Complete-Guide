import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Procucts = () => {
  return (
    <section>
      <h1>The Procucts Page</h1>
      <ul>
        <li>
          <Link to="/products/Book">A Book</Link>
        </li>
        <li>
          <Link to="/products/course">An Onlikne Course</Link>
        </li>
        <li>
          <Link to="/products/carpet">A Carpet</Link>
        </li>
      </ul>
    </section>
  );
};

export default Procucts;
