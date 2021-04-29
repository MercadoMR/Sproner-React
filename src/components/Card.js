import React from "react";

const Card = props => {
  let { edit, song, editFunction } = props;

  if (!edit) {
    return (
        <div className="card text-center">
        <h3 className="card-header lead text-white bg-dark" >
                {song.title} No se quiere
        </h3>
        <div className="card-body">
        <h5 className="card-title">Lyrics:</h5>
        <p className="card-text">
            <em>{song.description}</em>
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
  )} else {
    return (

<form className="card text-center">
    <div className="card-header bg-dark">
        <p className="text-center text-white lead">Title</p>
        <input className="form-control w-50" placeholder="Introduce the new song's title" defaultValue={song.title} style={{ margin:"0 auto"}}/>
    </div>
    <div className="card-body">
        <div className="form-group">
            <label htmlFor="songLyrics" className="card-title">New lyrics:</label>
            <textarea className="form-control card-text w-50" id="songLyrics"
                defaultValue={song.description}
                style={{ margin:"0 auto" }}
                placeholder="Add new lyrics or modify the existent!"
                name="description" rows="3"
            >
            </textarea>
        </div>
        <div className="input-group w-50" style={{ margin:"0 auto" }}>
            <label htmlFor="publisheOn" class="input-group-text bg-dark text-white" id="label-published">Published on (yyyy-mm)</label>
            <input type="month" class="form-control" 
            placeholder="Update the song release" aria-describedby="label-published"
            id="publishedOn" name="publishedOn" 
            pattern="[0-9]{4}-[0-9]{2}"
            defaultValue={song.publishedOn}
            />
        </div>
        <div className="input-group w-50" style={{ margin:"0 auto" }}>
            <label htmlFor="duration" class="input-group-text bg-dark text-white" id="label-duration">Duration (hh:mm:ss)</label>
            <input type="text" class="form-control" 
            placeholder="Update the song duration" aria-describedby="label-duration"
            id="duration" name="duration"
            pattern="([0-9]{2}:)?[0-9]{2}:[0-9]{2}"
            defaultValue={song.duration}
            />
        </div>

        </div>
        <div className="card-footer border-secondary">
            <div className="btn-group" role="group" aria-label="Song control">
                <button type="button" onClick={editFunction} className="btn btn-outline-danger text-center d-flex fa-1x align-self-center">
                <i className="fas fa-undo d-flex align-self-center p-1"></i>Cancel                        
                </button>
                <button type="button" className="btn btn-outline-primary text-center d-flex fa-1x align-self-center">
                <i className="fas fa-upload d-flex align-self-center p-1"></i>Update                        
                </button>
            </div>
        </div> 
</form>

  )}
};

export default Card;