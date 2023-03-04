export const saveToFile = (fileData: string, fileName: string) => {
  const blob = new Blob([fileData], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = fileName
  link.href = url
  link.click()
}
