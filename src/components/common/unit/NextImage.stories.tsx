import { Box } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { NextImageProps } from './NextImage'
import { NextImage } from './NextImage'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'common/unit/NextImage',
  component: NextImage,
} as Meta

const Template: Story<NextImageProps> = (args) => {
  return (
    <Box w={64} h={64}>
      <NextImage {...args} />
    </Box>
  )
}

// Attention: changes to the value will be ignored to width and height
export const HeaderLogo = Template.bind({})
HeaderLogo.args = {
  src: '/logo.svg',
  alt: 'アプリケーションロゴ',
  width: 172,
  height: 90,
} as NextImageProps

export const FooterLogo = Template.bind({})
FooterLogo.args = {
  src: '/footerLogo.svg',
  alt: 'アプリケーションロゴ',
  width: 120,
  height: 60,
} as NextImageProps

export const NotFound = Template.bind({})
NotFound.args = {
  src: '/Error_404.svg',
  alt: 'NotFound Error 404',
  width: 500,
  height: 315,
} as NextImageProps

export const Post = Template.bind({})
Post.args = {
  src: '/post.svg',
  alt: 'test',
  width: 440,
  height: 400,
} as NextImageProps

export const Blog = Template.bind({})
Blog.args = {
  src: '/blog.svg',
  alt: 'test',
  width: 440,
  height: 400,
} as NextImageProps

export const Show = Template.bind({})
Show.args = {
  src: '/show.svg',
  alt: 'test',
  width: 440,
  height: 400,
} as NextImageProps
