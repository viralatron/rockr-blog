import { useEffect, useRef, useState } from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  const baseUrl = "https://stormy-shelf-93141.herokuapp.com/";
  const artLimit = 3;

  const [blogPosts, setPosts] = useState({
    loading: false,
    posts: [],
    page: 0,
    tick: 0,
  });

  const loadingRef = useRef(null);
  const fetchData = async (page) => {
    setPosts((blogPosts) => ({ ...blogPosts, loading: true }));
    const getData = await fetch(
      `${baseUrl}articles?_page=${page}&_limit=${artLimit}`
    );
    const response = await getData.json();
    setPosts((blogPosts) => {
      const posts = [];
      posts.push(...blogPosts.posts);
      posts.push(...response);
      return {
        ...blogPosts,
        posts: posts,
      };
    });

    setPosts((blogPosts) => ({ ...blogPosts, loading: false }));
  };

  const handleObserver = (entities) => {
    const target = entities[0];

    if (target.isIntersecting && !blogPosts.loading) {
      fetchData(blogPosts.page);
      const nextPage = blogPosts.page + 1;
      setPosts({ ...blogPosts, page: nextPage });
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (loadingRef.current) observer.observe(loadingRef.current);
    return () => {
      if (loadingRef.current) observer.unobserve(loadingRef.current);
    };
  }, [options, loadingRef]);

  return (
    <main className="blog">
      {blogPosts &&
        Object.keys(blogPosts.posts).map((key) => (
          <BlogPost
            itemNmbr={Number(key)}
            key={blogPosts.posts[key].id}
            {...blogPosts.posts[key]}
          />
        ))}
      <div ref={loadingRef}>
        <span>Carregando...</span>
      </div>
    </main>
  );
};

export default Blog;
