/**
 * Адаптер для поля classname
 * @param className Classname
 * @returns
 */
export const classNameAdapter = (className: string) => {
  // В прошлой версии в classname попадали строки Null
  const newClassName = className.replaceAll('Null', '')
  const re = /[a-z]/
  // В прошлой версии в результате бага можго было получить classname только из пробелов
  if (re.test(newClassName)) {
    return newClassName
  }

  console.log('Empty classname found')
  return ''
}
