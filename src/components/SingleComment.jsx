import { Badge, Button, Col, ListGroup, Row } from "react-bootstrap";

const SingleComment = props => {
  const deleteComment = async () => {
    const commentId = props._id;
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzOWZmOWM1NmIzNjAwMTMzZmU1NWEiLCJpYXQiOjE2ODA1MDIyMDEsImV4cCI6MTY4MTcxMTgwMX0.fig-8rFCTFRY2yqHXAH6TirDOGQ_4zSo2BeVwq0XAj0",
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        props.request();
        alert("Commento eliminato con successo.");
      } else {
        throw new Error("Error deleting comment");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ListGroup.Item key={props.comment._id} className="d-flex flex-wrap ">
      <Row className="d-flex justify-content-between align-items-center gy-2">
        <Col className="text-truncate" xs={12}>
          <strong>Autore:</strong> {props.comment.author}
        </Col>
        <Col xs={12}>
          <strong>Commento:</strong> {props.comment.comment}
        </Col>
        <Col xs={12}>
          <strong>Rate:</strong> <Badge bg="dark">{props.comment.rate}</Badge>
        </Col>
        <Col xs={12}>
          <Button variant="danger" className="fs-6" onClick={deleteComment}>
            <small>Elimina</small>
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default SingleComment;
