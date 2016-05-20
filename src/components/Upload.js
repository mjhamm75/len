import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dropzone from 'react-dropzone';

class Upload extends Component {
	render() {
    return (
      <div>
        <div className="drop-container">
          <Dropzone onDrop={this.onDrop}>
            <div className="text">Drop file or click to add</div>
          </Dropzone>
        </div>
      </div>
    )
  }

  onDrop(files) {
    console.log('Received files: ', files);
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Upload);
