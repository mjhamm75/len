import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dropzone from 'react-dropzone';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }

  renderFiles(files) {
    return files.map((file, index) => {
      return <div><img key={index} src={file.preview} /> )}</div>
    });
  }

	render() {
    let filesDOM = this.renderFiles(this.state.files);
    return (
      <div>
          <div>
            <div className="drop-container">
              <Dropzone onDrop={this.onDrop.bind(this)}>
                <div className="text">Drop file or click to add</div>
              </Dropzone>
            </div>
          </div>
          {filesDOM}
      </div>
    )
  }

  onDrop(files) {
    this.setState({
      files: files
    });
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Upload);
