type CSSImport = Record<string, string>

declare module '*.css' {
  const content: CSSImport
  // eslint-disable-next-line import/no-unused-modules
  export default content
}
