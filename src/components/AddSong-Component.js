import React, { Component } from "react";
import SongsDataService from "../services/Songs-Service";


export default class AddSong extends Component{
    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.anotherSong = this.anotherSong.bind(this);
        this.saveSong = this.saveSong.bind(this);

        this.state = {
            id: null,
            title: "",
            description: "",

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

    anotherSong(){
        this.setState({
            id: null,
            title: "",
            description: "",

            submitted: false

        })
    }

    saveSong(){
        var data ={
            title: this.state.title,
            description: this.state.description
        }
        SongsDataService.create(data).then( response =>{
            this.setState({
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,

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
                            name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text" className="form-control"
                            id="description" required value={this.state.description}
                            onChange={this.onChangeDescription}
                            name="description"
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