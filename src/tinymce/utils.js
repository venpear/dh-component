import { AtomicBlockUtils, EditorState } from 'draft-js';
import { MediaBlock } from './component.js'
export const insertImages = (editorState, data) => {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', data);
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
  return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
}

export const MediaBlockRenderer = (block) => {
  if (block.getType() === 'atomic') {
    return {
      component: MediaBlock,
      editable: false,
    }
  }
}
