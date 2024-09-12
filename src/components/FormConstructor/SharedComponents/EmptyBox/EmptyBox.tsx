import React from 'react'
import { ResponsesEmptyBox } from '@consta/uikit/ResponsesEmptyBox'

export const EmptyBox = ({ title, description }: { title: string; description: string }) => {
  return <ResponsesEmptyBox title={title} description={description} size="m" actions={<div />} />
}
