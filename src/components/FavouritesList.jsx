import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

import { useSelector } from "react-redux";

const FavouritesList = () => {
  const FavouritesLength = useSelector((state) => {
    return state.favourites.content.length;
  });

  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-end my-4">
      <Button variant="danger" onClick={() => navigate("/favourites")} className="d-flex align-items-center">
        <MdFavorite />
        <span className="ms-2">{FavouritesLength}</span>
      </Button>
    </div>
  );
};

export default FavouritesList;
