import React from "react";

const Card = props => {
  let { edit, song, editFunction, updateSong, handleInputChange } = props;

  if (!edit) {
    return (
<div className="container mt-3">
        <div className="card text-center">
        <h3 className="card-header lead text-white bg-dark" >
                {song.title}
        </h3>
        <div className="card-body">
        <h5 className="card-title">Lyrics:</h5>
        <p className="card-text">
            <em style={{whiteSpace: "pre-wrap"}}>{song.description}</em>
        </p>
        <p className="card-text">
            <strong>Published on:</strong> {song.publishedOn}
        </p>
        <p className="card-text">
            <strong>Duration:</strong> {song.duration}
        </p>
        </div>
        <div className="card-footer border-secondary">
            <div className="btn-group" role="group" aria-label="Song control">
                <button type="button" className="btn btn-outline-danger">
                    <i className="fas fa-trash fa-2x"></i>                        
                </button>
                <button onClick={editFunction} type="button" className="btn btn-outline-success">
                    <i className="fas fa-edit fa-2x"></i>
                </button>
            </div>
        </div>
    </div>
</div>
  )} else {
    return (
<div className="container mt-3" >
<form className="card text-center">
    <div className="card-header bg-dark">
        <label htmlFor="songTitle" className="text-center text-white lead">Title</label>
        <input className="form-control w-100" placeholder="Introduce the new song's title" 
        value={song.title} style={{ margin:"0 auto"}}
        onChange={handleInputChange}
        id="songTitle" name="title"
        />
    </div>
    <div className="card-body">
        <div className="form-group">
            <label htmlFor="songLyrics" className="card-title">New lyrics:</label>
            <textarea className="form-control card-text w-100"
                value={song.description}
                style={{ margin:"0 auto" }} rows="3"
                placeholder="Add new lyrics or modify the existent!"
                onChange={handleInputChange}
                id="songLyrics" name="description" 
            >
            </textarea>
        </div>
        <div className="input-group w-100" style={{ margin:"0 auto" }}>
            <label htmlFor="publisheOn" className="input-group-text bg-dark text-white" id="label-published">Published on (yyyy-mm)</label>
            <input type="month" className="form-control" 
            placeholder="Update the song release" aria-describedby="label-published"
            id="publishedOn" name="publishedOn" 
            pattern="[0-9]{4}-[0-9]{2}"
            onChange={handleInputChange}
            value={song.publishedOn}
            />
        </div>
        <div className="input-group w-100" style={{ margin:"0 auto" }}>
            <label htmlFor="duration" className="input-group-text bg-dark text-white" id="label-duration">Duration (hh:mm:ss)</label>
            <input type="text" className="form-control" 
            placeholder="Update the song duration" aria-describedby="label-duration"
            id="duration" name="duration"
            pattern="([0-9]{2}:)?[0-9]{2}:[0-9]{2}"
            onChange={handleInputChange}
            value={song.duration}
            />
        </div>

        </div>
        <div className="card-footer border-secondary">
            <div className="btn-group" role="group" aria-label="Song control">
                <button type="button" onClick={editFunction} className="btn btn-outline-danger text-center d-flex fa-1x align-self-center">
                <i className="fas fa-undo d-flex align-self-center p-1"></i>Cancel                        
                </button>
                <button type="button" onClick={updateSong} className="btn btn-outline-primary text-center d-flex fa-1x align-self-center">
                <i className="fas fa-upload d-flex align-self-center p-1"></i>Update                        
                </button>
            </div>
        </div> 
</form>
</div>
  )}
};

export default Card;