import { Select } from '@consta/uikit/Select'
import React from 'react'
import { useMarginHandlers } from './MarginService'
import { usePaddingHandlers } from './PaddingService'
import { marginBottom, marginLeft, marginRight, marginTop, paddingsBottom, paddingsLeft, paddingsRight, paddingsTop } from './types'
export const BaseSettings = () => {
    const { paddingProps, onChangePaddingBottom, onChangePaddingLeft, onChangePaddingRight, onChangePaddingTop } = usePaddingHandlers()
    const { marginProps, onChangemarginBottom, onChangemarginLeft, onChangemarginRight, onChangemarginTop } = useMarginHandlers()
    return <>
        <Select
            getItemKey={key => key}
            label='left padding'
            getItemLabel={label => label}
            items={paddingsLeft}
            value={`${paddingProps?.paddingLeft || ''}`}
            onChange={onChangePaddingLeft}
        />
        <Select
            getItemKey={key => key}
            label='right padding'
            getItemLabel={label => label}
            items={paddingsRight}
            value={`${paddingProps?.paddingRight || ''}`}
            onChange={onChangePaddingRight}
        />
        <Select
            getItemKey={key => key}
            label='top padding'
            getItemLabel={label => label}
            items={paddingsTop}
            value={`${paddingProps?.paddingTop || ''}`}
            onChange={onChangePaddingTop}
        />
        <Select
            getItemKey={key => key}
            label='bottom padding'
            getItemLabel={label => label}
            items={paddingsBottom}
            value={`${paddingProps?.paddingBottom || ''}`}
            onChange={onChangePaddingBottom}
        />

        <Select
            getItemKey={key => key}
            label='left margin'
            getItemLabel={label => label}
            items={marginLeft}
            value={`${marginProps?.marginLeft || ''}`}
            onChange={onChangemarginLeft}
        />
        <Select
            getItemKey={key => key}
            label='right margin'
            getItemLabel={label => label}
            items={marginRight}
            value={`${marginProps?.marginRight || ''}`}
            onChange={onChangemarginRight}
        />
        <Select
            getItemKey={key => key}
            label='top margin'
            getItemLabel={label => label}
            items={marginTop}
            value={`${marginProps?.marginTop || ''}`}
            onChange={onChangemarginTop}
        />
        <Select
            getItemKey={key => key}
            label='bottom margin'
            getItemLabel={label => label}
            items={marginBottom}
            value={`${marginProps?.marginBottom || ''}`}
            onChange={onChangemarginBottom}
        />
    </>
}