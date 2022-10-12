import React, { useState } from "react";
import "./styles.css";
import AddPostBtnImg from "../../assets/add_post_btn.png";
import { OwnerlessPetPostForm } from "../post-forms/ownerless-pet-post-form/OwnerlessPetPostForm";

function MainMenu() {
	const [isOwnerlessPetPostFormOpen, setIsOwnerlessPetPostFormOpen] = useState(false);

	const handleForm = () => (setIsOwnerlessPetPostFormOpen(!isOwnerlessPetPostFormOpen));

	return (
		<div>
			{isOwnerlessPetPostFormOpen
                && <OwnerlessPetPostForm onClose={handleForm} />}

			<div className="menu-bar">
				<div className="post-ownerless-pet">
					<button onClick={() => handleForm()}>
						<img src={AddPostBtnImg} alt="add_post_btn" />
					</button>
				</div>
			</div>
		</div>
	);
}

export { MainMenu };
