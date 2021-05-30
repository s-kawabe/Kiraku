import 'draft-js/dist/Draft.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { EditorState } from 'draft-js'
import dynamic from 'next/dynamic'
import type { Dispatch, SetStateAction, VFC } from 'react'

import { headingReset } from '@/utils/constants/Common'
import { uploadBlogImage } from '@/utils/methods/blog'

type Props = {
  editorState: EditorState
  setEditorState: Dispatch<SetStateAction<EditorState>>
}

type EditorImage = {
  data: {
    link: string
  }
}

const toolbarCss = css`
  .rdw-editor-toolbar,
  .toolbar {
    padding: 8px 8px 0;
    border-radius: 15px;
    display: flex;
    justify-content: flex-start;
    background: #fff2c3;
    z-index: 4;
    flex-wrap: wrap;
    font-size: 15px;
    margin-bottom: 5px;
    user-select: none;
    position: sticky;
    top: 30px;
  }
`

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
      fontSize={['16px', '16px', '18px', '18px']}
      lineHeight="1.8"
      color="gray.700"
      pb="250px"
      css={[toolbarCss, headingReset]}
    >
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar"
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
