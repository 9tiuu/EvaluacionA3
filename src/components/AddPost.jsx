import React from 'react';
import '../styles.css';
import { Posts } from './Posts';
import { useState, useRef } from 'react';

export const PostControl = () => {
    const titleRef = useRef();
    const descripRef = useRef();
    const [alert, setAlert] = useState('');

    function AddPost() {    
        const titlePost = titleRef.current.value;
        const descripPost = descripRef.current.value;
        
        if (titlePost.trim() === '' || descripPost.trim() === '' ) {
            setAlert('Campos vacios...');
            setTimeout(() => { setAlert('') }, 3000);
            return;
        };
    };
    
    const POSTS = [ 
        // {title: 'Post Normal', description: "Esto es un Post Normal", important: false},
        // {title: 'Post Importante', description: 'Esto es un Post Importante', important: true}
    ];

    return (
        <div className="container mt-5">
            <h1 className="title textBold">Post It Simulator!</h1>
            <div className="d-flex align-item-center gap-4">
                
                <input type="text" ref={titleRef} className="form-control title py-2" placeholder="Titulo"  />
                <input type="text" ref={descripRef} className="form-control description" placeholder="Descripcion" />

                <div className='form-check mt-2'>
                    <input className='form-check-input' type='checkbox' />
                    <label className='form-check-label me-5' style={{color: '#fff'}}>Importante!</label>
                </div>

                <button className="btn btn-dark" onClick={AddPost}>AGREGAR</button>

            </div>

            <div class="alert alert-danger mt-2" role="alert" hidden={!alert}>{alert}</div>

            <div className="d-flex gap-4 mt-5">
                {
                    // <Posts important={false}/>
                    POSTS.map((post) => <Posts title={post.title} description={post.description} important={post.important}/>)
                }
            </div>
        </div>
    );
};