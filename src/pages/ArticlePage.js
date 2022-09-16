import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles";
import NotFound from "./NotFoundPage";

const ArticlePage = () => {
	const { articleId } = useParams();
	const article = articles.find((article) => article.name === articleId);
	if (!article) {
		return <NotFound />;
	}

	return (
		<div className="container">
			<h2>{article.title}</h2>
			{article.content.map((p, i) => (
				<p key={i}>{p}</p>
			))}
		</div>
	);
};

export default ArticlePage;
