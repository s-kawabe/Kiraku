import 'draft-js/dist/Draft.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { EditorState } from 'draft-js'
import dynamic from 'next/dynamic'
import type { Dispatch, SetStateAction, VFC } from 'react'

import { uploadBlogImage } from '@/utils/methods/blog'

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

type EditorImage = {
  data: {
    link: string
  }
}

const uploadImage = async (file: any): Promise<EditorImage> => {
  const imageUrl = await uploadBlogImage(file)

  return new Promise((resolve, _) => {
    resolve({
      data: {
        link: imageUrl,
      },
    })
  })
}

const Editor = dynamic(
  async () => {
    const mod = await import('react-draft-wysiwyg')
    return mod.Editor
  },
  {
    ssr: false,
  }
)

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
      boxShadow="0 6px 18px rgba(100,100,100,0.1)"
      p="30px"
      borderRadius="10px"
      fontSize={['18px', '20px']}
      lineHeight="1.8"
      color="gray.700"
      pb="250px"
      css={headingReset}
    >
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        placeholder="本文を入力"
        toolbar={{
          options: [
            'inline',
            'blockType',
            'fontSize',
            'fontFamily',
            'list',
            'colorPicker',
            'link',
            'embedded',
            'image',
          ],
          image: {
            uploadCallback: uploadImage,
            previewImage: true,
          },
        }}
      />
    </Box>
  )
}

export { BlogEditor }
