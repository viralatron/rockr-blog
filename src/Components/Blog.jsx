import { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  const baseUrl = "https://stormy-shelf-93141.herokuapp.com/";
  const artLimit = 11;

  const [blogPosts, setPosts] = useState();
  const fetchData = async (page, limit) => {
    const getData = await fetch(
      `${baseUrl}articles?_page=${page}&_limit=${limit}`
    );
    const response = await getData.json();
    setPosts(response);
    console.log(blogPosts);
  };

  useEffect(() => {
    fetchData(0, artLimit);
  }, []);

  return (
    <main className="blog">
      {blogPosts &&
        Object.keys(blogPosts).map((key) => <BlogPost {...blogPosts[key]} />)}
    </main>
  );
};

export default Blog;
