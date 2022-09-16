import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";

function App() {
	return (
		<>
			<Navbar />
			<h1> Blog</h1>
			<Routes>
				<Route>
					<Route index="/" element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="articles" element={<ArticlesListPage />} />
					<Route path="articles/:articleId" element={<ArticlePage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
