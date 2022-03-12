import React from "react";
import BallGroup from "./BallGroup";

const CategoryArticle = React.forwardRef((props, ref) => {
  return (
    <article
      className={`category-article-${props.category.toLowerCase()}`}
      ref={ref}
    >
      <section className="article-content">
        <div className="article-top-center">
          <BallGroup
            ballAlign="mid"
            ballRowAlign="center"
            ballSize={20}
            static={true}
            ref={props.refsArray}
            selected={props.category}
          />
          <h1 className="article-title">{props.category}</h1>
        </div>
        {props.children}
      </section>
    </article>
  );
});

export default CategoryArticle;
