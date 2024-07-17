import React from 'react';
import '../styles.css';

export const Posts = ({ post, RemovePost }) => {
    const {title, description, important, id} = post;
    const removePost = () => RemovePost(id);

    if (important) {
        return (
            <div className="card importantCard" name={title}>
                <div className="card-body">
                    <div className='flex-container'>
                        <h5 className="card-title textBold">{title}</h5>
                        <button className='btn cross' onClick={removePost}><i className="bi bi-x-lg"></i></button>
                    </div>
                    <p className="card-text font">{description}</p>
                </div>
            </div>
        );

    } else {
        return (
            <div className="card normalCard">
                <div className="card-body">
                    <div className='flex-container'>
                        <h5 className="card-title textBold">{title}</h5>
                        <button className='btn cross' onClick={removePost}><i className="bi bi-x-lg"></i></button>
                    </div>
                    <p className="card-text font">{description}</p>
                </div>
            </div>
        );
    };
};