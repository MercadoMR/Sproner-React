import React, { Component } from "react";
import SongsDataService from "../services/Songs-Service";

/*

https://programacion.net/articulo/bootstrap_datetimepicker-_o_como_anadir_un_calendario_a_un_campo_input_1796

*/

export default class AddSong extends Component{
    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePublishedOn = this.onChangePublishedOn.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.anotherSong = this.anotherSong.bind(this);
        this.saveSong = this.saveSong.bind(this);

        this.state = {
            id: null,
            title: "",
            description: "",
            publishedOn: "",
            duration: "",

            submitted: false
        }
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangePublishedOn(e){
        this.setState({
            publishedOn: e.target.value
        })
    }

    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        })
    }

    anotherSong(){
        this.setState({
            id: null,
            title: "",
            description: "",
            publishedOn: "",
            duration: "",
            
            submitted: false
        })
    }

    saveSong(){
        var data ={
            title: this.state.title,
            description: this.state.description,
            publishedOn: this.state.publishedOn,
            duration: this.state.duration
        }
        SongsDataService.create(data).then( response =>{
            this.setState({
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                publishedOn: response.data.publishedOn,
                duration: response.data.duration,

                submitted:true
            })
            console.log(response.data)
        }).catch( e =>{
            console.log(e)
        })
    }

    render(){
        return (
            <div className="submit-form">
                {
                    this.state.submitted ? (
                    <div>
                        <h4> You have submitted succesfully!</h4>
                        <button className="btn btn-success" onClick={this.anotherSong}>
                            Add another
                        </button>
                    </div>
                    ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title of the song:</label>
                            <input type="text" className="form-control"
                            id="title" required value={this.state.title}
                            onChange={this.onChangeTitle}
                            placeholder="Write the song's title"
                            name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Lyrics:</label>
                            <textarea className="form-control" id="descripcion"
                             required value={this.state.description}
                             onChange={this.onChangeDescription}
                             name="description" rows="3"
                             placeholder="Write the song's lyrics"
                            >
                            </textarea>
                        </div>
                
                        <div className="form-group">
                            <label htmlFor="publishedOn">Published on (yyyy-mm):</label>
                            <input className="form-control" type="month" 
                            id="publishedOn" name="publishedOn" 
                            pattern="[0-9]{4}-[0-9]{2}"
                            value={this.state.publishedOn}
                            onChange={this.onChangePublishedOn}
                            placeholder="2012-10"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="duration">Duration (hh:mm:ss):</label>
                            <input className="form-control" type="text" 
                            id="duration" name="duration" 
                            pattern="([0-9]{2}:)?[0-9]{2}:[0-9]{2}"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                            placeholder="00:03:30"
                            />
                        </div>

                        <button className="btn btn-success" onClick={this.saveSong}>
                            Submit
                        </button>
                    </div>
                    )
                }
            </div>
        )
    }
}