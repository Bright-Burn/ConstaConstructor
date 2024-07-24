export type LinkCountType = 'INC' | 'DEC'
export type ChangeElementLinkCountPayload = {
  id: string
  type: LinkCountType
}
