import { useEffect, useRef, useState } from "react";
import Article from "./Article";
import CardPost from "./CardPost";
import Contact from "./Contact";
import Menu from "./Menu";

const Blog = () => {
  const baseUrl = "https://stormy-shelf-93141.herokuapp.com/";
  const artLimit = 3;

  const [blogOptions, setOptions] = useState({
    loading: false,
    posts: [],
    page: 0,
    tick: 0,
  });
  const [article, setArticle] = useState({
    data: {},
    isOpen: false,
  });
  const [contact, setContact] = useState({
    open: false,
  });

  const loadingRef = useRef(null);
  const fetchData = async (page) => {
    setOptions((blogOptions) => ({ ...blogOptions, loading: true }));
    const getData = await fetch(
      `${baseUrl}articles?_page=${page}&_limit=${artLimit}`
    );
    const response = await getData.json();
    setOptions((blogOptions) => {
      const posts = [];
      posts.push(...blogOptions.posts);
      posts.push(...response);
      return {
        ...blogOptions,
        posts: posts,
      };
    });

    setOptions((blogOptions) => ({ ...blogOptions, loading: false }));
  };

  const handleObserver = (entities) => {
    const target = entities[0];

    if (target.isIntersecting && !blogOptions.loading) {
      fetchData(blogOptions.page);
      const nextPage = blogOptions.page + 1;
      setOptions({ ...blogOptions, page: nextPage });
    }
  };

  const openArticle = async (id) => {
    const getData = await fetch(`${baseUrl}articles/${id}`);
    const response = await getData.json();
    setArticle({
      data: response,
      isOpen: true,
    });
    console.log(response, article);
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const openContact = () => {
    setContact({ open: true });
  };
  const contactClose = () => {
    setContact({ open: false });
  };
  const showPosts = () => {
    setArticle({
      data: {},
      isOpen: false,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (loadingRef.current) observer.observe(loadingRef.current);
    return () => {
      if (loadingRef.current) observer.unobserve(loadingRef.current);
    };
  }, [options, loadingRef]);

  return (
    <div className="App">
      <Menu showPosts={showPosts} openContact={openContact} />
      <Contact open={contact.open} contactClose={contactClose} />
      {contact.open && <div className="App--blocked" />}
      {article.isOpen && (
        <main className="blog blog--single">
          {article.isOpen && <Article {...article.data} />}
        </main>
      )}
      {!article.isOpen && (
        <main className="blog">
          {Object.keys(blogOptions.posts).map((key) => (
            <CardPost
              openArticle={openArticle}
              itemNmbr={Number(key)}
              key={blogOptions.posts[key].id}
              {...blogOptions.posts[key]}
            />
          ))}
          <div ref={loadingRef}>
            <span>Carregando...</span>
          </div>
        </main>
      )}
    </div>
  );
};

export default Blog;
