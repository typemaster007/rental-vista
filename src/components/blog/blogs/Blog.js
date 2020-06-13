import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spinner, CardColumns } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Blog(props) {

  // console.log(city)
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = (location) => {
    if (location !== "") {
      console.log("WITH LOCATION");
      axios
        .get("https://newsapi.org/v2/everything", {
          params: {
            q: location,
            language: "en",
            sortBy: "popularity",
            apiKey: process.env.REACT_APP_NEWS_API,
          },
        })
        .then((response) => {
          console.log(response.data.articles);
          setLoading(false);
          setArticles(response.data.articles);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("WITH-OUT LOCATION");
      axios
        .get("https://newsapi.org/v2/top-headlines", {
          params: {
            category: "entertainment",
            language: "en",
            sortBy: "popularity",
            apiKey: process.env.REACT_APP_NEWS_API,
          },
        })
        .then((response) => {
          console.log(response.data.articles);
          setLoading(false);
          setArticles(response.data.articles);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (props.city) {
      fetchData(props.city);
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log("IN MAIN");
          console.log("IN LOC");
          fetch(
            `https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?geoit=json`
          )
            .then((response) => response.json())
            .then((response) => {
              console.log(response.city);
              fetchData(response.city);
            })
            .catch((err) => console.log(err));
        },
        (error) => {
          console.log("IN ERROR");
          fetchData("");
          // switch (error.code) {
          //   case error.PERMISSION_DENIED:
          //     console.log("User denied the request for Geolocation.");
          //     break;
          //   case error.POSITION_UNAVAILABLE:
          //     console.log("Location information is unavailable.");
          //     break;
          //   case error.TIMEOUT:
          //     console.log("The request to get user location timed out.");
          //     break;
          //   case error.UNKNOWN_ERROR:
          //     console.log("An unknown error occurred.");
          //     break;
          //   default:
          //     console.log("Some error occured.");
          //     break;
          // }
        },
        { enableHighAccuracy: false }
      );
    }
  }, [props.city]);

  return (
    <>
      {loading ? (
        <center className="m-5">
          <Spinner animation="border" size="xxl" variant="warning" />{" "}
        </center>
      ) : (
        <CardColumns className="container-fluid">
          {articles.map((article, index) => {
            return (
              <Card key={index}>
                <Card.Img variant="top" src={article.urlToImage} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {article.author}
                  </Card.Subtitle>
                  <Card.Text>{article.content}</Card.Text>
                  <Card.Link href={article.url} target="_blank">
                    Read more{" "}
                    <FontAwesomeIcon
                      icon="long-arrow-alt-right"
                      color="#F7A231"
                    />
                  </Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      )}
    </>
  );
}

export default Blog;