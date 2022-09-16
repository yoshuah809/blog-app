import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles";

const ArticlePage = () => {
	const { articleId } = useParams();
	const article = articles.find((article) => article.name === articleId);
	return (
		<div className="container">
			<h2>{article.title}</h2>
			{article.content.map((p) => (
				<p>{p}</p>
			))}
		</div>
	);
};

export default ArticlePage;
