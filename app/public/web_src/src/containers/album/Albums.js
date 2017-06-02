import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Albums from '../../components/album/Albums';
import Album from '../../components/album/album';
import {fetch_ajax_create_albums,fetch_ajax_get_albums,fetch_ajax_uploadPhotos,change_current_page,fetch_ajax_get_one_album} from '../../actions/album';
import AlbumCreateAlbumAndUpdatePhotosModal from "../../components/album/AlbumCreateAlbumAndUpdatePhotosModal";
class AlbumApp extends React.Component{
    constructor(props) {
        super(props);
        this.createAlbum = this.createAlbum.bind(this);
        this.deleteAlbum = this.deleteAlbum.bind(this);
        this.updateAlbum = this.updateAlbum.bind(this);
        this.uploadPhotos = this.uploadPhotos.bind(this);
        this.deletePhoto = this.deletePhoto.bind(this);
        this.showUpLoadPhotosModal = this.showUpLoadPhotosModal.bind(this);
        this.showCreateAlbumModal = this.showCreateAlbumModal.bind(this);
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.getOneAlbum = this.getOneAlbum.bind(this);
        this.props.dispatch(fetch_ajax_get_albums(props.albums));
    }
    showCreateAlbumModal(){
        $('.albumAuthority').dropdown();
        $('.ui.radio.albumTopic').checkbox();
        $('.createAlbumModal').modal('show');
    }
    showUpLoadPhotosModal(){
        
        //$('.selectAlbum').dropdown();
        $(".updatePhotosModal").modal('show');
        
    }
    componentDidMount(){
        
    }
    createAlbum(album){
        this.props.dispatch(fetch_ajax_create_albums(album));
    }
    deleteAlbum(){
      alert("delete alubm");
    }
    updateAlbum(){
      alert("update album");
    }
    deletePhoto(photoId){
        console.log(photoId);
        // this.props.dispatch(fetch_ajax_uploadPhotos(albumId,photos));
    }
    uploadPhotos(albumId,photos){
        this.props.dispatch(fetch_ajax_uploadPhotos(albumId,photos));
    }
    getOneAlbum(albumId){
        this.props.dispatch(fetch_ajax_get_one_album(albumId))
    }
    changeCurrentPage(albumId,currentPage){
        this.props.dispatch(change_current_page(albumId,currentPage));
    }
    render(){
        const {currentPage} = this.props;
        if(currentPage === "albums"){
            return(
                <div className="ui">
                    <div className="toolbar">
                        <div className="ui buttons">
                            <button onClick={(e)=> this.showUpLoadPhotosModal(e)} className="ui red basic button">上传照片</button>
                            <button onClick={(e)=> this.showCreateAlbumModal(e)} className="ui green basic button">创建相册</button>
                        </div>
                    </div>
                    <Albums albums={this.props.albums} changeCurrentPage={this.changeCurrentPage} />
                    <AlbumCreateAlbumAndUpdatePhotosModal albums={this.props.albums}  updateAlbum={this.updateAlbum} deleteAlbum={this.deleteAlbum} createAlbum={this.createAlbum} uploadPhotos = {this.uploadPhotos} />
                </div>
            );
        }else{
            return (
                <div>
                    <div className="toolbar">
                        <div className="ui buttons">
                            <button onClick={(e)=> this.showUpLoadPhotosModal(e)} className="ui red basic button">上传照片</button>
                            <button onClick={(e)=> this.showCreateAlbumModal(e)} className="ui green basic button">创建相册</button>
                        </div>
                    </div>
                    <Album getOneAlbum={this.getOneAlbum} album={this.props.album} albumId={this.props.albumId} deletePhoto={this.deletePhoto}></Album>
                    <AlbumCreateAlbumAndUpdatePhotosModal albums={this.props.albums}  updateAlbum={this.updateAlbum} deleteAlbum={this.deleteAlbum} createAlbum={this.createAlbum} uploadPhotos = {this.uploadPhotos} />
                </div>
            )
        }
    }

}
AlbumApp.propTypes = {
    albums: PropTypes.array.isRequired,
    album:PropTypes.object.isRequired,
    currentPage:PropTypes.string.isRequired
}


function mapStateToProps(state) {
  return {
    albums:state.albums,
    albumId:state.albumId,
    currentPage:state.currentPage,
    album:state.album
  }
}
export default connect(
 mapStateToProps
)(AlbumApp)