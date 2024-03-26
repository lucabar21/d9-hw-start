import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { MdFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToFavourite } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3} className="d-flex align-items-center justify-content-end">
        <Button
          variant="danger"
          onClick={() => {
            dispatch(addToFavourite(data));
          }}
          className="d-flex align-items-center"
        >
          <MdFavorite />
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
