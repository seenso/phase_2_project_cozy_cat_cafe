import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';

function BookSpec({ checkout, clickedBook, backToBooks }) {
  const [bookDetail, setBookDetail] = useState({});
  const { id } = useParams();
  const history = useNavigate();

  function handleBack() {
    history.goBack();
  }


  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((r) => r.json())
      .then((book) => {
        setBookDetail(book);
      });
  }, [id]);


  return (
    <div className="parentContainer">
      <Link onClick={handleBack}>
            Go Back
      </Link>
      <div className="twoColumnCenteredGrid">
        <div className="row">
          <div className="bookCoverContainer">
            <img className="bookCover" src={bookDetail.image} alt="" />
            <div>{bookDetail.title}</div>
            <div>by {bookDetail.author}</div>
            <div>Category: {bookDetail.category}</div>
            <div>Length: {bookDetail.pages} pages</div>
            <p>Plot: {bookDetail.plot}</p>
          </div>
          <div className="bookInfo">
            <button onClick={() => checkout(bookDetail)}>Check out</button>
            <button onClick={() => backToBooks()}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSpec;

//title, author, plot, category, pages, cover
