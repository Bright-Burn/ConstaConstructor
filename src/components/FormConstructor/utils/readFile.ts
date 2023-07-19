export function readFile(file: File) {
  return new Promise((resolve: (value: string) => void, reject) => {
    let fr = new FileReader()
    fr.onload = e => {
      if(typeof e.target?.result === 'string')
      resolve(e.target.result)
      else {
        reject('при чтении файла ожидается получение строки')
      }
    }
    fr.readAsText(file)
  })
}
