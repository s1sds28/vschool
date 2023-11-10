import React, { useState } from 'react';

import AddMovieForm from './AddMovieForm';

export default function Movie(props){
    const { title, genre, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className='movie'>
            { !editToggle ?
                <>
                    <h1>Title: { title }</h1>
                    <p>Genre: { genre }</p>
                    <button 
                        className='delete-btn'
                        onClick={()=> props.deleteMovie(_id)}>
                        Delete
                    </button>
                    <button
                        className='edit-btn'
                        onClick={() => setEditToggle(prev => !prev)}>
                        Edit
                        </button>
                </>
                :
                <>
                    <AddMovieForm 
                        title={title}
                        genre={genre}
                        _id={_id}
                        btnText="submit Edit"
                        submit={props.editMovie}
                    />
                    <button className='edit-btn'
                        onClick={()=> setEditToggle(prev => !prev)}>
                        Cancel
                    </button>
                </>
            }
        </div>
    )
}