import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

const ShowsFavouriteCompanies = () => {
  const FavouriteCompaniesList = useSelector((state) => {
    return state.favourites.content;
  });

  const dispatch = useDispatch();
  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {FavouriteCompaniesList.map((book, i) => (
            <li key={i} className="my-4">
              <Button variant="danger" onClick={() => {}}>
                <BsFillTrashFill />
              </Button>
              <img className="book-cover-small" src={book.imageUrl} alt="book selected" />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};
export default ShowsFavouriteCompanies;
