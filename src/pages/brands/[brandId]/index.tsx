import { gql } from '@apollo/client'
import { useRouter } from 'next/router'

import { LayoutWithHead } from '@/components/layout/container'

const BrandPage = () => {
  const router = useRouter()
  const { brandId } = router.query
  return (
    <LayoutWithHead title="■■ - ブランド">
      <>
        <p>this is /brands/brandId page brandId:{brandId}</p>
      </>
    </LayoutWithHead>
  )
}

// eslint-disable-next-line import/no-default-export
export default BrandPage

gql`
  query GetAllBrands {
    brands {
      id
      name
    }
  }
`

gql`
  query GetBrandWithPostAndBlog($brandId: Int!, $limit: Int!, $offset: Int!) {
    posts(where: { brands: { brand_id: { _eq: $brandId } } }, limit: $limit, offset: $offset) {
      id
      image
      gender
      content
      created_at
      user {
        id
        display_id
        image
        name
      }
      comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
    blogs(where: { brands: { brand_id: { _eq: $brandId } } }, limit: $limit, offset: $offset) {
      id
      title
      content
      gender
      created_at
      user {
        id
        display_id
        image
        name
      }
      comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
  }
`
