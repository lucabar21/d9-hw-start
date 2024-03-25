import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ShowsFavouriteCompanies = () => {
  const FavouriteCompaniesList = useSelector((state) => {
    return state.favourites.content;
  });

  const dispatch = useDispatch();
  return (
    <Row className="justify-content-center">
      <Col className="d-flex justify-content-center">
        <h1 className="display-1">Le tue aziende preferite:</h1>
      </Col>
      <Col sm={12} className="d-flex justify-content-center">
        <ul style={{ listStyle: "none" }}>
          {FavouriteCompaniesList.map((company, i) => (
            <li
              key={i}
              style={{ border: "1px solid #00000033", borderRadius: 4 }}
              className="my-4 gap-5 px-5 py-2 d-flex justify-content-between align-items-baseline"
            >
              <Link to={`/${company}`}>{company}</Link>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: `REMOVE_TO_LIST`,
                    payload: i,
                  });
                }}
              >
                <BsFillTrashFill />
              </Button>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};
export default ShowsFavouriteCompanies;
