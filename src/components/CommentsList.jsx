import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = props => (
  <ListGroup>
    {props.comments.map(comment => (
      <SingleComment request={props.request} _id={comment._id} key={comment._id} comment={comment} />
    ))}
  </ListGroup>
);

export default CommentsList;
