import { UnionProps } from '../../../../coreTypes'

export type BuildedCode = {
  jsxCode: string
  cssCode: string
}

export type CodeBuilder = (props: UnionProps) => BuildedCode
