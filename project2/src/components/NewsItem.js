import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" 
            style={{zIndex : '1', left: "79%!important"}}>
                {source}
                <span className="visually-hidden">unread messages</span>
            </span>
          <img
            className="card-img-top"
            src={
              imageurl
                ? imageurl
                : "https://images.news18.com/ibnlive/uploads/2021/08/mumbai-162913082716x9.jpg"
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title.length > 45 ? title.slice(0, 45) + "..." : title}
            </h5>
            <p className="card-text">
              {description.length > 88
                ? description.slice(0, 88) + "..."
                : description}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
