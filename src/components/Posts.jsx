import React from 'react';
import '../styles.css';

export const Posts = ({ post, RemovePost }) => {
    const {title, description, important, id} = post;
    const removePost = () => RemovePost(id);

    function Rotate(rot) {
        const ALEATORIO = Math.random();
        return rot[Math.floor(ALEATORIO * rot.length)];
    };

    const RotationCard1 = [
        'card importantCard rotation-1', 
        'card importantCard rotation-2', 
        'card importantCard rotation-3'
    ];

    const RotationCard2 = [
        'card normalCard rotation-1', 
        'card normalCard rotation-2', 
        'card normalCard rotation-3'
    ];

    if (important) {
        return (
            <div className={Rotate(RotationCard1)} name={title}>
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
            <div className={Rotate(RotationCard2)}>
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