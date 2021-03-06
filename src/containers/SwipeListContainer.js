import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SwipeList from '../components/SwipeList';
import {addToQueue, addToPlaylist} from '../actions/playerState';

class SwipeListContainer extends React.Component {
  render() {
    return (
      <SwipeList
        data={this.props.data}
        addToPlaylist={this.props.addToPlaylist}
        addToQueue={this.props.addToQueue}
        refreshing={false}
        fetchData={this.fetchData}
      />
    );
  }
}

SwipeListContainer.propTypes = {
  data: PropTypes.array,
};

export default connect(
  null,
  {addToQueue, addToPlaylist},
)(SwipeListContainer);
