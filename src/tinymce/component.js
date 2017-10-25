import React , { Component } from 'react'

export const MediaBlock = class MediaBlock extends  Component {
  render() {
    const { contentState, block } = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const type = entity.getType();
    const { src, description } = entity.getData();
    if (type === 'image') {
      return (
        <div>
          <img src={src} alt={description} style={{maxWidth: '100%'}} />
        </div>
        )
    } else if (type === 'video') {
      return (<div>This is a Video</div>)
    }
  }
}
