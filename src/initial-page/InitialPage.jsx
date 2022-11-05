import React from "react";
import { MainMenu } from "./main-menu/MainMenu";
import { Map } from "./map/Map";
import { usePosts } from "../hooks/use-posts/usePosts";

const InitialPage = () => {
	const { posts, setPosts } = usePosts();
	
	return (
		<div className="initial-page">
			<Map posts={posts} />
			<MainMenu setPosts={setPosts} />
		</div>
	);
};

export { InitialPage };
