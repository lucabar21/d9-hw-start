import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import FavouritesList from "./FavouritesList";
import { getCompanies } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.apiData.data);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCompanies(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={8} className=" my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={4} className="d-flex justify-content-center align-items-center">
          <FavouritesList />
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
