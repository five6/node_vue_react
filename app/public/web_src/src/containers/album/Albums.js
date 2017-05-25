import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Albums from '../../components/album/Albums';

class AlbumApp extends React.Component{
    constructor(props) {
        super(props);
        this.createAlbum = this.createAlbum.bind(this);
        this.deleteAlbum = this.deleteAlbum.bind(this);
        this.updateAlbum = this.updateAlbum.bind(this);
        this.getAlbums = this.getAlbums.bind(this);
    }
    componentDidMount(){
        
    }
    getAlbums(){
      alert("get albums");
    }
    createAlbum(album){
      alert(album);
    }
    deleteAlbum(){
      alert("delete alubm");
    }
    updateAlbum(){
      alert("update album");
    }
    render(){
    	return(
            <Albums updateAlbum={this.updateAlbum} deleteAlbum={this.deleteAlbum} createAlbum={this.createAlbum}  getAlbums={this.getAlbums} albums={this.props.albums} />
		);
    }

}
AlbumApp.propTypes = {
  albums: PropTypes.array.isRequired
}


function mapStateToProps(state) {
  return {
  	albums:state.albums,
  }
}
export default connect(
 mapStateToProps
)(AlbumApp)