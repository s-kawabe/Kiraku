import type { BlogComments } from '@/apollo/graphql'

export const chapeCommentData = (data: BlogComments[] | undefined) => {
  if (data) {
    return data.map((comment) => {
      return {
        userIcon: comment.user.image,
        userName: comment.user.name,
        userId: comment.user.display_id,
        comment: comment.comment,
      }
    })
  }
  return []
}

export const getOneMonthBeforeDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const oneBeforeMonth = today.getMonth()
  const date = today.getDate()
  return `${year}-${oneBeforeMonth}-${date}`
}
