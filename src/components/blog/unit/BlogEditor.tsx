import 'draft-js/dist/Draft.css'

import { Box } from '@chakra-ui/react'
import { Editor, EditorState } from 'draft-js'
import type { VFC } from 'react'
import { useState } from 'react'

const BlogEditor: VFC = () => {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty()
  })

  // console.log({ editorState })
  // console.log({ setEditorState })

  return (
    <Box
      w="100%"
      minH="300px"
      bg="gray.50"
      p="30px"
      borderRadius="10px"
      fontSize="18px"
      lineHeight="2"
      color="gray.700"
      pb="150px"
    >
      <Editor editorState={editorState} onChange={setEditorState} placeholder="本文を入力" />
    </Box>
  )
}

export { BlogEditor }
