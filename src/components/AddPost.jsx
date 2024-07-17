import React from 'react';
import '../styles.css';
import { Posts } from './Posts';
import { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';

export const PostControl = () => {
    const postID = uuid();
    const titleRef = useRef();
    const descripRef = useRef();
    const importatRef = useRef();
    const [ALERT, setAlert] = useState('');

    function CleanInpts(title, description, important) {
        title.current.value = '';
        description.current.value = '';
        important.current.checked = false;
    };

    function AddPost() {    
        const titlePost = titleRef.current.value;
        const descripPost = descripRef.current.value;
        const importantPost = importatRef.current.checked;
        
        if (titlePost.trim() === '' || descripPost.trim() === '' ) {
            setAlert('Campos vacios...');
            setTimeout(() => { setAlert('') }, 3000);
            return;
            
        } else {

            const Post = {
                id: postID,
                title: titlePost,
                description: descripPost,
                important: importantPost
            };

            const NEWPOSTS = [...POSTS, Post];
            setPOSTS(NEWPOSTS);
            
            CleanInpts(titleRef, descripRef, importatRef);
            alert('¡Post Agregado!');
        };
    };

    function RemovePost(id) {   
        const filetID = POSTS.filter(post => id !== post.id);
        setPOSTS(filetID);  
        console.log(filetID);   
    };
    
    const [POSTS, setPOSTS] = useState([ 
        // {title: 'Post Normal', description: "Esto es un Post Normal", important: false},
        // {title: 'Post Importante', description: 'Esto es un Post Importante', important: true}
    ]);

    return (
        <div className="container mt-5">
            <h1 className="title textBold">Post It Simulator!</h1>
            <div className="d-flex align-item-center gap-4">
                
                <input type="text" ref={titleRef} className="form-control title py-2" placeholder="Titulo"  />
                <input type="text" ref={descripRef} className="form-control description py-2" placeholder="Descripcion" />

                <div className='form-check mt-2'>
                    <input className='form-check-input' ref={importatRef} type='checkbox' />
                    <label className='form-check-label me-5' style={{color: '#fff'}}>Importante!</label>
                </div>

                <button className="btn btn-dark" onClick={AddPost}>AGREGAR</button>

            </div>

            <div class="alert alert-danger mt-2" role="alert" hidden={!ALERT}>{ALERT}</div>

            <div className="posts-container gap-4 mt-5">
                {   
                    // <Posts important={false}/>
                    // POSTS.map((post) => <Posts title={post.title} description={post.description} important={post.important} />)
                    POSTS.map((post) => <Posts post={post} RemovePost={RemovePost} key={post.id}/>)                  
                }
            </div>
        </div>
    );
};