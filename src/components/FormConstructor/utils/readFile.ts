export function readFile(file: File) {
  return new Promise((resolve, reject) => {
    let fr = new FileReader()
    fr.onload = x => resolve(fr.result)
    fr.readAsText(file)
  })
}
