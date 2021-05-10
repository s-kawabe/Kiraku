import { gql } from '@apollo/client'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import type { VFC } from 'react'

import { initializeApollo } from '@/apollo/client'
import type { Blogs, Posts } from '@/apollo/graphql'
import type {
  DeleteBlogOneMutation,
  DeleteBlogOneMutationVariables,
  DeletePostOneMutation,
  DeletePostOneMutationVariables,
} from '@/apollo/graphql'
import { DeleteBlogOneDocument, DeletePostOneDocument } from '@/apollo/graphql'
import { PostModal } from '@/components/post/container'
import { deletePostImage } from '@/utils/methods/Post'

type Props = {
  post?: Posts
  blog?: Blogs
}

const EditMenu: VFC<Props> = (props: Props) => {
  const client = initializeApollo()
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleEdit = async () => {
    if (props.post) {
      onOpen()
    } else if (props.blog) {
      // blog編集ページへ
      router.push({
        pathname: '/[userId]/blogs/[blogId]/edit',
        query: {
          userId: props.blog.user.display_id,
          blogId: props.blog.id,
        },
      })
    }
  }

  const handleDelete = async () => {
    if (props.post) {
      if (confirm('本当にこの投稿を削除しますか？')) {
        const result = await client.mutate<DeletePostOneMutation, DeletePostOneMutationVariables>({
          mutation: DeletePostOneDocument,
          variables: {
            postId: props.post.id,
          },
        })
        const deletedPost = result.data?.delete_posts_by_pk
        // 削除した投稿に画像が登録されていればfirebase上の画像も削除
        if (deletedPost?.image && deletedPost.image_id) {
          deletePostImage(deletedPost.user_id, deletedPost.image_id)
        }
        router.push('/')
      }
    } else if (props.blog) {
      // blog削除へ
      if (confirm('本当にこの投稿を削除しますか？')) {
        await client.mutate<DeleteBlogOneMutation, DeleteBlogOneMutationVariables>({
          mutation: DeleteBlogOneDocument,
          variables: {
            blogId: props.blog.id,
          },
        })
        router.push('/')
      }
    }
  }

  return (
    <>
      <Menu>
        <MenuButton px="6px" borderRadius="5px" _hover={{ bg: 'gray.100' }}>
          {/* <Box p="4px" borderRadius="5px" _hover={{ bg: 'gray.100' }}> */}
          <HamburgerIcon color="gray.600" w="26px" h="26px" />
          {/* </Box> */}
        </MenuButton>
        <MenuList boxShadow="1px 1px 8px rgba(50,50,50,0.15)">
          <MenuItem onClick={handleEdit}>投稿を編集</MenuItem>
          <MenuItem onClick={handleDelete}>投稿を削除</MenuItem>
        </MenuList>
      </Menu>
      {/* postデータを注入する */}
      {props.post && <PostModal isOpen={isOpen} onClose={onClose} postData={props.post} />}
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
