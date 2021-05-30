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
  const dateData = new Date()
  dateData.setDate(dateData.getDate() - 30)

  const year = dateData.getFullYear()
  const oneBeforeMonth = dateData.getMonth() + 1
  const date = dateData.getDate()
  return `${year}-${oneBeforeMonth}-${date}`
}
