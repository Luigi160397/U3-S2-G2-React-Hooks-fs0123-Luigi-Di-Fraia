import { Card } from "react-bootstrap";

const SingleBook = props => {
  return (
    <>
      <Card
        onClick={() => props.changeSelectedBook(props.book.asin)}
        style={{ border: props.selectedBook === props.book.asin ? "3px solid red" : "3px solid #ebebeb" }}
      >
        <Card.Img variant="top" className="carta img-fluid" src={props.book.img} />
        <Card.Body>
          <Card.Title className="text-truncate" style={{ color: "black" }}>
            {props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
