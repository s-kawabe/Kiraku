import 'draft-js/dist/Draft.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { EditorState } from 'draft-js'
import type { Dispatch, SetStateAction, VFC } from 'react'
import { Editor } from 'react-draft-wysiwyg'

type Props = {
  editorState: EditorState
  setEditorState: Dispatch<SetStateAction<EditorState>>
}

const headingReset = css`
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  h4,
  h5 {
    font-size: 1rem;
  }
`

const BlogEditor: VFC<Props> = (props: Props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { editorState, setEditorState } = props

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
      fontSize={['18px', '20px']}
      lineHeight="1.8"
      color="gray.700"
      pb="150px"
      css={headingReset}
    >
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        placeholder="本文を入力"
      />
    </Box>
  )
}

export { BlogEditor }
