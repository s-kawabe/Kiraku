import type { Users } from '@/apollo/graphql'

export const SIGNUP_API = 'https://us-central1-kiraku-7ea19.cloudfunctions.net/accountSignup'

export type LoginUser = Pick<
  Users,
  'id' | 'display_id' | 'name' | 'profile' | 'gender' | 'email' | 'image' | 'created_at'
> | null
