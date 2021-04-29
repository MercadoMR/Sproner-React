import {Component} from "react";
import SongsDataService from "../services/Songs-Service";
import Card from "./Card";

export default class Song extends Component{
    constructor(props){
        super(props);
        this.retrieveSong = this.retrieveSong.bind(this);
        this.updateSong = this.updateSong.bind(this);
        this.editSong = this.editSong.bind(this);

        this.state = {
            id: props.match.params.id,
            title: null,
            description: null,
            publishedOn: null,
            duration: null,

            edit:false,
        }
    }
    
    componentDidMount(){
        this.retrieveSong(this.state.id);
    }

    updateSong(id){

    }

    editSong(){
        this.state.edit ? (
            this.setState({
                edit: false
            })
        ) : (
            this.setState({
                edit: true
            })
        )
    }

    retrieveSong(id){
        SongsDataService.get(id).then( response => {
            this.setState({
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                publishedOn: response.data.publishedOn,
                duration: response.data.duration
            });
        }).catch(e => {
            console.log(e);
            console.log("No se encontro xd, poner a null lo demas");
            this.setState({
                id: this.props.match.params.id,
                title: null,
                description: null,
                publishedOn: null,
                duration: null,

                edit: false,
            });
        });
    }

    render(){
        let song = this.state;
        return (
        <div>
        {
           (song.title !== null) ? (
               <Card edit={song.edit} song={song} editFunction={this.editSong} />
           ) : (
               <h2>No existe la rola</h2>
           )
        }
        </div>
        );

    }
}