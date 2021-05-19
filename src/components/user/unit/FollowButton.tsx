import { gql } from '@apollo/client'
import { Button } from '@chakra-ui/react'
import type { VFC } from 'react'
import { Fragment, useEffect, useState } from 'react'

import { initializeApollo } from '@/apollo/client'
import type {
  AddFollowMutation,
  AddFollowMutationVariables,
  RemoveFollowMutation,
  RemoveFollowMutationVariables,
} from '@/apollo/graphql'
import { AddFollowDocument, RemoveFollowDocument, useIsFollowUserLazyQuery } from '@/apollo/graphql'

type Props = {
  fromUserId: string
  toUserId: string
}

const FollowButton: VFC<Props> = (props: Props) => {
  const client = initializeApollo()
  const [isFollowed, setIsFollowed] = useState(false)
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [getIsFollow, { loading, data }] = useIsFollowUserLazyQuery()

  const variables = {
    fromUserId: props.fromUserId,
    toUserId: props.toUserId,
  }

  const checkFollowed = () => {
    getIsFollow({
      variables,
    })
  }

  const handleFollow = async () => {
    await client.mutate<AddFollowMutation, AddFollowMutationVariables>({
      mutation: AddFollowDocument,
      variables,
    })
    setIsFollowed(true)
    setIsMouseOver(false)
  }

  const handleUnFollow = async () => {
    await client.mutate<RemoveFollowMutation, RemoveFollowMutationVariables>({
      mutation: RemoveFollowDocument,
      variables,
    })
    setIsFollowed(false)
  }

  useEffect(() => {
    checkFollowed()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (data) {
      const isFollow = data.relationships.length !== 0
      setIsFollowed(isFollow)
    }
  }, [data])

  if (props.fromUserId === props.toUserId) {
    return <></>
  }

  return (
    <>
      {!loading &&
        (isFollowed ? (
          <Button
            colorScheme="blue"
            size="sm"
            w="90px"
            ml="30px"
            _hover={{ bg: 'red.500' }}
            onMouseOver={() => {
              setIsMouseOver(true)
            }}
            onMouseLeave={() => {
              setIsMouseOver(false)
            }}
            onClick={handleUnFollow}
          >
            {isMouseOver ? <Fragment>解除</Fragment> : <Fragment>フォロー中</Fragment>}
          </Button>
        ) : (
          <Button colorScheme="blue" variant="outline" size="sm" ml="30px" onClick={handleFollow}>
            フォロー
          </Button>
        ))}
    </>
  )
}

// フォロー中であれば初期状態はoutlineではないボタン

export { FollowButton }

gql`
  query IsFollowUser($fromUserId: String!, $toUserId: String!) {
    relationships(where: { user_id: { _eq: $fromUserId }, follow_id: { _eq: $toUserId } }) {
      id
      user_id
      follow_id
    }
  }
`

gql`
  mutation AddFollow($fromUserId: String!, $toUserId: String!) {
    insert_relationships_one(object: { user_id: $fromUserId, follow_id: $toUserId }) {
      id
      user_id
      follow_id
    }
  }
`

gql`
  mutation RemoveFollow($fromUserId: String!, $toUserId: String!) {
    delete_relationships(where: { user_id: { _eq: $fromUserId }, follow_id: { _eq: $toUserId } }) {
      affected_rows
    }
  }
`
