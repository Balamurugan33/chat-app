import { Spinner } from "react-bootstrap";
import "./index.scss";

const Loader = () => {
  return (
    <div className="loader-container">
    <div className="loader">
      <Spinner animation="border" role="status">
      </Spinner>
      <div>Loading...</div>
    </div>
    </div>
  );
};

export default Loader;
