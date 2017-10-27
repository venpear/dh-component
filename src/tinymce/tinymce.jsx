import React from 'react';
import PropTypes from 'prop-types'
import Upload from 'rc-upload'
import Icon from '../icon'
import { stateFromHTML } from 'draft-js-import-html';
import { stateToHTML } from 'draft-js-export-html'
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw
} from 'draft-js';

import { insertImages, MediaBlockRenderer } from './utils'
export default class Tinymce extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.handleChange = this._onChange.bind(this)
    this.handleClickImages = this._insertImage.bind(this)
    this.handleClickSave = this._handleClickSave.bind(this)
    this._imagesUploadSuccess = this._imagesUploadSuccess.bind(this)
  }
  componentWillMount() {
    if (this.props.rawContent) {
      let _editorState = this.state.editorState
      let contentState = stateFromHTML(this.props.rawContent)  
      let editorState = EditorState.push(_editorState, contentState, 'change-block-data')
      this.setState({ editorState })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.rawContent && nextProps.rawContent !== this.props.rawContent) {
      let _editorState = this.state.editorState
      let contentState = stateFromHTML(nextProps.rawContent)  
      let editorState = EditorState.push(_editorState, contentState, 'change-block-data')
      this.setState({ editorState })
    }
  }
  _onChange(editorState) {
    this.setState({ editorState })
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
  getHtmlContent() {
    let _editorState = this.state.editorState.getCurrentContent()
    return stateToHTML(_editorState)
  }
  _handleClickSave() {
    let _html = this.getHtmlContent()
    if (this.props.onSave) {
      this.props.onSave(_html)
    }
  }
  render() {
    const { uploadConfig, footer, footerText, innerElement } = this.props
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
        { innerElement }
        <div className="dh-tinymce-edit">
          <Editor
            blockRendererFn={MediaBlockRenderer}
            editorState={this.state.editorState}
            onChange={this.handleChange}
          />
        </div>
        <div className="dh-tinymce-footer">
        {
          footer === true ? (
            <div className="dh-tinymce-footer">
              <span onClick={this.handleClickSave}>{ footerText || '保存' }</span>
          </div>) : null
        }
        </div>
      </div>
    )
  }
}
