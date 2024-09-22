import { SaveProjectIntent } from '../types'

export const saveProjectToHtml = (projData: SaveProjectIntent) => {
  const css = Array.from(document.styleSheets)
    .map(styleSheet =>
      Array.from(styleSheet.cssRules)
        .map(rule => rule.cssText)
        .filter(rule => !rule.includes('border-block'))
        .join('\n'),
    )
    .join('\n')
  const js = Array.from(document.scripts)
    .map(script =>
      script.src
        ? fetch(script.src).then(response => response.text())
        : Promise.resolve(script.innerText),
    )
    .reduce(
      (accumulator, currentValue) =>
        accumulator.then(accumulatorValue =>
          currentValue.then(currentValueValue => accumulatorValue + currentValueValue),
        ),
      Promise.resolve(''),
    )

  const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <script async defer src='./script.js'></script>
        </head>
        <body>
        <div class='Theme Theme_color_gpnDefault Theme_control_gpnDefault Theme_font_gpnDefault Theme_size_gpnDefault Theme_space_gpnDefault Theme_shadow_gpnDefault'>
          <div id='root'></div>
        </div>
        <div style='display: none' id='loaded_data'>${JSON.stringify(projData)}</div>
        </body>
        </html>`

  Promise.all([css, js]).then(([cssText, jsText]) => {
    //@ts-expect-error библиотека подключена через jszip.min.js
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const zip = new JSZip()

    // Добавляем HTML файл
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    zip.file('index.html', `${html}<style>${cssText}</style>`)

    // Добавляем JavaScript файл
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    zip.file('script.js', jsText)

    // Генерируем ZIP файл
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    zip.generateAsync({ type: 'blob' }).then((content: Blob | MediaSource) => {
      // Создаем ссылку для скачивания ZIP файла
      const url = URL.createObjectURL(content)
      const tagA = document.createElement('a')
      tagA.href = url
      tagA.download = `${projData.name}.zip`
      tagA.click()

      // Освобождаем URL
      URL.revokeObjectURL(url)
    })
  })
}
