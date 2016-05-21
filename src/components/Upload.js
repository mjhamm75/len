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

  updateFileName(key, event) {
    let files = this.state.files;
    files[key].rename = event.currentTarget.value;
    this.setState({
      files
    })
  }

  deleteFile(key) {
    let files = this.state.files;
    files.splice(key, 1);
    this.setState({
      files
    })
  }

  renderFiles(files) {
    return files.map((file, index) => {
      return (
        <div key={index}>
          <div>
            {this.state.renameTitle ?
              <input
                onBlur={() => this.setState({renameTitle: false})}
                onChange={this.updateFileName.bind(this, index)}
                value={file.rename || file.name}
              />
              :
              <h4
                onClick={() => this.setState({renameTitle: true})}
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
    let savedFiles = this.state.files.concat(files)
    this.setState({
      files: savedFiles
    });
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Upload);
