import React from 'react';
import PropTypes from 'prop-types';
import Upload from 'rc-upload';
import Icon from '../icon';
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { insertImages, MediaBlockRenderer } from './utils'
export default class Tinymce extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.handleChange = this._onChange.bind(this)
    this.handleClickSave = this.handleClickSave.bind(this)
    this.handleClickImages = this._insertImage.bind(this)
    this._imagesUploadSuccess = this._imagesUploadSuccess.bind(this)
  }

  _onChange(editorState) {
    this.setState({ editorState }, () => {
      // console.log(convertToRaw(editorState.getCurrentContent()))
    })
  }
  _insertImage(src, description) {
   this.handleChange(insertImages(this.state.editorState, {
     src,
     description
   }))
  }
  /**
   * image 上传
   */

  _imagesUploadSuccess(res) {
    const { uploadConfig } = this.props;
    if ('formatResult' in uploadConfig) {
      let result = uploadConfig.formatResult(res)
      this._insertImage(result.url, result.name)
    } else {
      throw("必须配置formatResult， 便于Tinymce接受上传后的图片")
    }
  }
  handleClickSave() {
    const editorState = this.state.editorState
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const hashConfig = {
      trigger: '#',
      separator: ' ',
    }
    let b = draftToHtml(rawContentState, hashConfig, true, (rc) => {
      return `<p><img src=${rc.data.src}/></p>`
    })
    if (this.props.onSave) {
      this.props.onSave(b)
    }
  }
  render() {
    const { uploadConfig, footer, footerText } = this.props
    const uploadProps = {
      prefixCls: "dh-upload",
      className: 'dh-tinymce-ctr',
      ...uploadConfig,
      start: (file) => console.log('onStart', file, file.name),
      onSuccess: this._imagesUploadSuccess,
      onError: () => console.error('onError', err)
    }
    return (
      <div className="dh-tinymce">
        <div className="dh-tinymce-btns dh-tinymce-btns-barLine">
          <Upload {...uploadProps}><Icon type="picture"/> </Upload>
        </div>
        <div className="dh-tinymce-edit">
          <Editor
            blockRendererFn={MediaBlockRenderer}
            editorState={this.state.editorState}
            onChange={this.handleChange}
          />
        </div>
        {
          footer === true ? (
            <div className="dh-tinymce-footer">
              <span onClick={this.handleClickSave}>{ footerText || '保存' }</span>
          </div>) : null
        }

      </div>
    )
  }
}
