export function readFile(file: File) {
  return new Promise((resolve: (value: string | ArrayBuffer | null) => void, reject) => {
    let fr = new FileReader()
    fr.onload = x => resolve(fr.result as string)
    fr.readAsText(file)
  })
}
