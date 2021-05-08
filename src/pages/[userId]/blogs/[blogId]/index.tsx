import { gql } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { convertFromRaw, EditorState } from 'draft-js'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
// import { useState } from 'react'
import dynamic from 'next/dynamic'

import { addApolloState, initializeApollo } from '@/apollo/client'
import type {
  Blogs,
  GetAllUsersWithBlogsQuery,
  GetAllUsersWithBlogsQueryVariables,
  GetOneBlogWithUserQuery,
  GetOneBlogWithUserQueryVariables,
} from '@/apollo/graphql'
import { GetAllUsersWithBlogsDocument, GetOneBlogWithUserDocument } from '@/apollo/graphql'
import { LayoutWithHead } from '@/components/layout/container'

type Props = {
  blog: Blogs
}

const headingReset = css`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    padding: 8px 0px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 5px 0px;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 3px 0px;
  }

  h4,
  h5 {
    font-size: 1rem;
  }
`

const Editor = dynamic(
  async () => {
    const mod = await import('react-draft-wysiwyg')
    return mod.Editor
  },
  {
    ssr: false,
  }
)

const UserBlogPage: NextPage<Props> = (props: Props) => {
  const contentState = convertFromRaw(props.blog.content)
  const content = EditorState.createWithContent(contentState)
  return (
    <LayoutWithHead title={`${props.blog.user.name}のブログ「${props.blog.title}」`} sideMenu>
      <>
        <p>user: {props.blog.user.name} </p>
        <p>blogTitle: {props.blog.title} </p>
        <Box w="80vw" minH="70vh" bg="gray.100" p="20px" borderRadius="15px" css={headingReset}>
          <Editor
            editorState={content}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            readOnly={true}
            toolbar={{ options: [] }}
          />
        </Box>
      </>
    </LayoutWithHead>
  )
}

export const getStaticProps: GetStaticProps<Props, { userId: string; blogId: string }> = async ({
  params,
}) => {
  const client = initializeApollo()
  const blogId = Number(params?.blogId) ?? 0
  const { data } = await client.query<GetOneBlogWithUserQuery, GetOneBlogWithUserQueryVariables>({
    query: GetOneBlogWithUserDocument,
    variables: {
      blogId: blogId,
    },
  })
  if (data.blogs.length === 0 || data.blogs[0].user.display_id !== params?.userId) {
    return {
      notFound: true,
    }
  }
  return addApolloState(client, { props: { blog: data.blogs[0] }, revalidate: 60 })
}

// pathの作成にはuserのidではなくdisplay_idを使用
export const getStaticPaths: GetStaticPaths<{ userId: string; blogId: string }> = async () => {
  const client = initializeApollo()
  const { data } = await client.query<
    GetAllUsersWithBlogsQuery,
    GetAllUsersWithBlogsQueryVariables
  >({
    query: GetAllUsersWithBlogsDocument,
  })

  const paths = data.users
    .map((user) => {
      return user.blogs.map((blog) => {
        return { params: { userId: user.display_id, blogId: blog.id.toString() } }
      })
    })
    .flat()

  return {
    paths,
    fallback: 'blocking',
  }
}

// eslint-disable-next-line import/no-default-export
export default UserBlogPage

gql`
  query GetAllUsersWithBlogs {
    users {
      id
      display_id
      blogs {
        id
      }
    }
  }
`

gql`
  query GetOneBlogWithUser($blogId: Int!) {
    blogs(where: { id: { _eq: $blogId } }) {
      id
      title
      content
      gender
      created_at
      user {
        id
        display_id
        name
        image
      }
      topics {
        topic {
          id
          name
        }
      }
      brands {
        brand {
          id
          name
        }
      }
    }
  }
`
