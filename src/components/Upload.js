import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFile, deleteFile, renameFile } from '../actions/Actions';

import Dropzone from 'react-dropzone';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: -1,
      rename: false
    }
  }
  updateFileName(key, event) {
    this.props.dispatch(renameFile(key, event.currentTarget.value))
  }

  deleteFile(key) {
    this.props.dispatch(deleteFile(key));
  }

  renderFiles(files) {
    return files.map((file, index) => {
      return (
        <div key={index}>
          <div>
            {this.state.renameTitle && this.state.index === index ?
              <input
                onBlur={() => this.setState({renameTitle: false, index: -1})}
                onChange={this.updateFileName.bind(this, index)}
                value={file.rename || file.name}
              />
              :
              <h4
                onClick={() => this.setState({renameTitle: true, index: index})}
              >{file.rename || file.name}</h4>
            }
            <div
              className="close"
              onClick={this.deleteFile.bind(this, index)}
            >x</div>
          </div>
          <div>
            {file.type === 'application/pdf' ?
              <embed
                className="preview"
                src={file.preview}
                type={file.type}
              />
              :
              <img
                className="preview"
                src={file.preview}
              />
            }
          </div>
          <br />
        </div>
      )
    });
  }

	render() {
    let filesDOM = this.renderFiles(this.props.files);
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
    this.props.dispatch(addFile(files));
  }
}

function mapStateToProps(state) {
  return {
    files: state.files
  }
}

export default connect(mapStateToProps)(Upload);
