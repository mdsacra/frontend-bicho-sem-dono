import React, { useState } from "react";
import "./styles.css";
import AddPostBtnImg from "../../assets/add_post_btn.png";
import { OwnerlessPetPostForm } from "../post-forms/ownerless-pet-post-form/OwnerlessPetPostForm";
import PropTypes from "prop-types";

const MainMenu = ({ setPosts }) => {
	const [isOwnerlessPetPostFormOpen, setIsOwnerlessPetPostFormOpen] = useState(false);

	const handleForm = () => {
		setIsOwnerlessPetPostFormOpen(!isOwnerlessPetPostFormOpen);
	};

	return (
		<>
			{isOwnerlessPetPostFormOpen
                && <OwnerlessPetPostForm onClose={handleForm} setPosts={setPosts} />}
			
			<div className="menu-bar" />
			<div className="main-menu-container">
				<div className="post-ownerless-pet">
					<button onClick={() => handleForm()}>
						<img src={AddPostBtnImg} alt="add_post_btn" />
					</button>
				</div>
			</div>
		</>
		
	);
};

export { MainMenu };

MainMenu.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object),
	setPosts: PropTypes.func
};