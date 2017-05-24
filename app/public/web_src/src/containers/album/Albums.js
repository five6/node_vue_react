import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Albums from '../../components/album/Albums';

class AlbumApp extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        
    }
    render(){
    	return(
            <Albums  albums={this.props.albums} />
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