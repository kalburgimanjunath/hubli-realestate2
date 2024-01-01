import React, { Component } from "react";

export default class ImageUpload extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles(e) {
    e.preventDefault();
    console.log(this.state.file);
  }

  render() {
    return (
      <form>
        <div className="multi-preview">
          {(this.fileArray || []).map((url, index) => (
            <img key={index} width={100} height={100} src={url} alt="..." />
          ))}
        </div>

        <div className="flex relative">
          <input type="file" onChange={this.uploadMultipleFiles} multiple />
        </div>
      </form>
    );
  }
}
