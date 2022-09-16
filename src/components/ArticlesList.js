import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
	return (
		<>
			{articles.map((article) => (
				<Link
					to={`/articles/${article.name}`}
					key={article.name}
					style={{
						color: "inherit",
					}}
				>
					<h3>{article.title}</h3>
					<p>{article.content[0].substring(0, 50)}...</p>
				</Link>
			))}
		</>
	);
};

export default ArticlesList;
