import React from "react";
import './styles.css';
import AddPostBtnImg from '../../assets/add_post_btn.png'
import { useState } from "react";
import { OwnerlessPetPostForm } from "../post-forms/ownerless-pet-post-form/OwnerlessPetPostForm";

const MainMenu = () => {
    const [isOwnerlessPetPostFormOpen, setIsOwnerlessPetPostFormOpen] = useState(false);

    const handleForm = () => (setIsOwnerlessPetPostFormOpen(!isOwnerlessPetPostFormOpen));

    return (
        <div>
            {isOwnerlessPetPostFormOpen && 
                <OwnerlessPetPostForm onClose={handleForm} />}

            <div className="menu-bar">
                <div className="post-ownerless-pet">
                    <button onClick={() => handleForm()}>
                        <img src={AddPostBtnImg} alt="add_post_btn"></img>
                    </button>
                </div>
            </div>
        </div>)
}

export { MainMenu };