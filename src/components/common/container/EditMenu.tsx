import { gql } from '@apollo/client'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'

import { initializeApollo } from '@/apollo/client'
import type { DeletePostOneMutation, DeletePostOneMutationVariables } from '@/apollo/graphql'
import { DeletePostOneDocument } from '@/apollo/graphql'
import { deletePostImage } from '@/utils/methods/Post'

type Props = {
  postId?: number
  blogId?: number
}

const EditMenu: VFC<Props> = (props: Props) => {
  const client = initializeApollo()
  const router = useRouter()

  const handleEdit = async () => {
    if (props.postId) {
      alert(props.postId)
    } else if (props.blogId) {
      // blog編集ページへ
    }
  }

  const handleDelete = async () => {
    if (props.postId) {
      if (confirm('本当にこの投稿を削除しますか？')) {
        const result = await client.mutate<DeletePostOneMutation, DeletePostOneMutationVariables>({
          mutation: DeletePostOneDocument,
          variables: {
            postId: props.postId,
          },
        })
        const deletedPost = result.data?.delete_posts_by_pk
        // 削除した投稿に画像が登録されていればfirebase上の画像も削除
        if (deletedPost?.image && deletedPost.image_id) {
          deletePostImage(deletedPost.user_id, deletedPost.image_id)
        }
        router.push('/')
      }
    } else if (props.blogId) {
      // blog削除へ
    }
  }

  return (
    <>
      <Menu>
        <MenuButton px="4px" borderRadius="5px" _hover={{ bg: 'gray.100' }}>
          {/* <Box p="4px" borderRadius="5px" _hover={{ bg: 'gray.100' }}> */}
          <HamburgerIcon color="gray.600" />
          {/* </Box> */}
        </MenuButton>
        <MenuList boxShadow="1px 1px 8px rgba(50,50,50,0.15)">
          <MenuItem onClick={handleEdit}>編集</MenuItem>
          <MenuItem onClick={handleDelete}>削除</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export { EditMenu }

gql`
  mutation DeletePostOne($postId: Int!) {
    delete_posts_by_pk(id: $postId) {
      id
      image
      image_id
      user_id
    }
  }
`

gql`
  mutation DeleteBlogOne($blogId: Int!) {
    delete_blogs_by_pk(id: $blogId) {
      id
    }
  }
`
