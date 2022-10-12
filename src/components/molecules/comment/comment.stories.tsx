import React from "react";
import Comment from "./Comment";

export const CommentExample = () => (
  <Comment authorName="Linda Lynn" votingCounter={0} createdAt={1664667193}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quibusdam
    qui autem libero consequuntur tenetur eveniet recusandae aliquam obcaecati.
    Consequatur perferendis id, dolorem quae unde recusandae ad deleniti
    obcaecati similique?
  </Comment>
);

export default {
  title: "Molecules/Comment",
  component: Comment,
};
