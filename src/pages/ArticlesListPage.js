import React from "react";
import { Link } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";

import articles from "../data/articles";

const ArticlesListPage = () => {
	return (
		<div className="container">
			<h2 style={{ textAlign: "center" }}>Articles </h2>
			<ArticlesList articles={articles} />
		</div>
	);
};

export default ArticlesListPage;
