import {Component} from "react";
import SongsDataService from "../services/Songs-Service";
import Card from "./Card";

/*
https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs
*/

export default class Song extends Component{
    constructor(props){
        super(props);
        this.retrieveSong = this.retrieveSong.bind(this);
        this.updateSong = this.updateSong.bind(this);
        this.editSong = this.editSong.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

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

    updateSong(){
        const data = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            publishedOn: this.state.publishedOn,
            duration: this.state.duration,
        }
        SongsDataService.update(this.state.id,data).then((response) => {
            console.log("La respuesta de la api:")
            console.log(response.data)
        }).catch((e) => {
            console.log("Valio, no se pudo actualizar")
            console.log(e)
        }).finally(() =>{
            this.retrieveSong(data.id)
            this.setState({
                edit:false
            })
        })

        /*
        
        console.log(event.target[0].value)
        console.log(event.target.elements.title.value)
        console.log(event.target.title.value)
        console.log(this.state.id)
        */
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    
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
               <Card edit={song.edit} song={song} handleInputChange={this.handleInputChange} updateSong={this.updateSong} editFunction={this.editSong} />
           ) : (
               <h2>The song you request doesn't exist!</h2>
           )
        }
        </div>
        );

    }
}