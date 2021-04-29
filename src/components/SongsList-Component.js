import { Component } from "react";
import SongsDataService from "../services/Songs-Service";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

/*
https://bezkoder.com/react-material-ui-examples-crud/
https://bezkoder.com/react-crud-web-api/
https://bezkoder.com/react-table-example-hooks-crud/

*/

export default class SongsList extends Component{
    
    constructor(props){
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveSongs = this.retrieveSongs.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.deleteSong = this.deleteSong.bind(this);
        this.state = {
            songs: [],
            searchTitle: ""
        };
    }

    componentDidMount(){
        this.retrieveSongs();
    }

    deleteSong(id){
        SongsDataService.delete(id)
        .then( response => {
            console.log(response.data);
            this.refreshList();
        }).catch(e => {
            console.log(e);
        })
    }

    retrieveSongs(){
        SongsDataService.getAll()
        .then(response => {
          console.log("Se invoco de nuevo el obtener los songs");
          this.setState({
            songs: response.data
          });
          console.log(response.data);
          console.log("Esos fueron los datos de los songs");
        })
        .catch(e => {
          console.log(e);
        });
    }

    refreshList(){
        this.retrieveSongs();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
        this.setState({
          searchTitle: searchTitle
        });
    }

    searchTitle() {
        SongsDataService.findByTitle(this.state.searchTitle)
          .then(response => {
            this.setState({
              songs: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    render(){

        const { searchTitle, songs} = this.state;
        
        return (
        <div>
            <div className="input-group mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTitle}
                onChange={this.onChangeSearchTitle}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={this.searchTitle}
                    >
                        Search
                    </button>
                </div>
            </div>
            <h4>Songs List</h4>
            {

            this.state.songs ? (
                <div className="table-responsive"> 
                <table className="table table-dark table-hover" style={{tableLayout:"fixed"}} >
                <thead>
                    <tr>
                        <th scope="col" style={{width:"5%"}}>#</th>
                        <th scope="col">Song</th>
                        <th scope="col" style={{width:"35%"}}>Description</th>
                        <th scope="col">Published on</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {songs &&
                songs.map((song, index) => (
                    <tr key={index}> 
                        <th scope="row"> {index + 1} </th>
                            <td>{song.title}</td>
                            <td className="text-truncate">{song.description}</td>
                            <td>{song.publishedOn}</td>
                            <td>{song.duration}</td>
                            <td>
                            <Link to={"/songs/"+song.id} >
                                <i className="fas fa-eye fa-2x" style={{color: "white"}} ></i>
                            </Link>
                            <button className="btn" onClick={() => this.deleteSong(song.id)}><i className="fa fa-trash fa-2x" style={{color: "white"}}></i></button>
                            </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            ) : (
                <div>
                <h5>Content not found :( </h5>
                <p>You can add more content using add+</p>
                </div>
            )
        }
 
        </div>

        )
    }
}