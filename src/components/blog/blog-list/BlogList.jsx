import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
// import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPostDataAction } from "../../../redux/actions";

const BlogList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDataAction());
  }, []);

  const posts = useSelector((state) => state.posts)
  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
