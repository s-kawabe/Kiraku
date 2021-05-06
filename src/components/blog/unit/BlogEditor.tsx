import 'draft-js/dist/Draft.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { Box } from '@chakra-ui/react'
import { EditorState } from 'draft-js'
import type { VFC } from 'react'
import { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'

const BlogEditor: VFC = () => {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty()
  })

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }

  return (
    <Box
      w="100%"
      minH="350px"
      bg="gray.50"
      p="30px"
      borderRadius="10px"
      fontSize="20px"
      lineHeight="2"
      color="gray.700"
      pb="150px"
    >
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="本文を入力"
      />
    </Box>
  )
}

export { BlogEditor }
