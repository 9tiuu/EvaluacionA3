import React from 'react';
import '../styles.css';
import { Posts } from './Posts';

export const PostControl = () => {
    const POSTS = [ // Testing object
        {title: 'Post Normal', description: "Esto es un Post Normal", important: false},
        {title: 'Post Importante', description: 'Esto es un Post Importante', important: true}
    ];

    return (
        <div className="container mt-5">
            <h1 className="title textBold">Post It Simulator!</h1>
            <div className="d-flex align-item-center gap-4">
                
                <input type="text" className="form-control py-2" placeholder="Titulo"  />
                <input type="text" className="form-control" placeholder="Descripcion" />

                <div className='form-check mt-2'>
                    <input className='form-check-input' type='checkbox' />
                    <label className='form-check-label me-5' style={{color: '#fff'}}>Importante!</label>
                </div>

                <button className="btn btn-dark">AGREGAR</button>

            </div>
            <div className="d-flex gap-4 mt-5">
                {
                    // <Posts important={false}/>
                    POSTS.map((post) => <Posts title={post.title} description={post.description} important={post.important}/>)
                }
            </div>
        </div>
    );
};