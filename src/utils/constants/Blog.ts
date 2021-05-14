export type BlogContentJson = {
  blocks: {
    key: string
    data: { [key: string]: any }
    text: string
    type: string
    deps: number
    entityRanges: any[]
    inlineStyleRanges: any[]
  }[]
  entityMap: {
    [key: string]: {
      data: {
        src: string
        width: string
        height: string
        alignment: string
      }
      type: string
      mutability: string
    }
  }
}
