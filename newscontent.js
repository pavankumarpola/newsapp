import React, { useEffect, useState } from "react";
import pavan from "axios";
import "./newscontent.css";
import InfiniteScroll from "react-infinite-scroll-component";
function Newscontent({ category, setProgress }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [a, b] = useState(1)


  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await pavan.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=4b02a02735b546088edd0435ea2c5809&pageSize=10`
        );
        setArticles(response.data.articles);b(response.data.totalResults);

        setProgress(100); 
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }
    fetchArticles();
  }, [category, setProgress]);

  async function fetchNextPage() {
    try {
      const nextPage = page + 1;
      const response = await pavan.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=4b02a02735b546088edd0435ea2c5809&page=${nextPage}&pageSize=10`
      );
      setArticles((prevArticles) => [...prevArticles, ...response.data.articles]);
      setPage(nextPage);
    } catch (error) {
      console.error("Error fetching next page:", error);
    }
  }
  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 3000);
  }, [setProgress]);



  return (
    <div>
      <h3 className="mt-3 text-center newscontent-header fs-2 fw-bolder">NEWSWEB - {category} HEADLINES</h3>
      <div className="container-fluid mb-5">
        <InfiniteScroll
          style={{ textAlign: "center", overflowX: "hidden" }}
          dataLength={articles.length}
          next={fetchNextPage}
          hasMore={articles.length<a}
          loader={<img src="https://i.gifer.com/ZKZg.gif" style={{ width: "5%" }} />}
        >
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-lg-3 col-md-6 mt-5" key={index} id="mainbody">
                <div className="card d-flex" style={{ width: "18rem", height: "100%" }} id="pavan">
                  <span className="badge bg-danger" style={{ position: "absolute", right: "0px", color: "white" }}>
                    {!article.source.name ? 'pavan' : article.source.name}
                  </span>
                  <img src={!article.urlToImage ? 'https://www.hindustantimes.com/ht-img/img/2024/02/16/550x309/ntrjr_1708084252252_1708084252607.jpg' : article.urlToImage} className="p-4" alt="News" id="newscontent-img" style={{ height: "35%" }} />
                  <div className="card-body">
                    <h5 className="card-title">{article.title.slice(0, 40)}</h5>
                    <p className="card-text">{!article.description ? 'Click the button and read more About the Article' : article.description.slice(0, 50)}</p>
                    <p className="card-text"> By...... {article.publishedAt} GMT</p>
                    <a
                      className="pt-1 pb-1 ps-2 pe-2 text-decoration-none bg-primary text-light"
                      target="_blank"
                      href={article.url}
                      rel="noopener noreferrer"
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Newscontent;
