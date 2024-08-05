import jsonBeautify from 'json-beautify'

import { saveToFile } from '../utils'

import type { SaveProjectIntent } from './types'
import { ProjectSaveWays } from './types'

export const saveProject = (saveIntent: SaveProjectIntent) => {
  switch (saveIntent.saveWay) {
    case ProjectSaveWays.STORAGE:
      saveToStorage(saveIntent)
      break
    case ProjectSaveWays.FILE:
      saveFile(saveIntent)
      break
    case ProjectSaveWays.HTML:
      saveProjectToHtml(saveIntent)
      break
  }
}

const saveToStorage = (data: SaveProjectIntent) => {
  localStorage.setItem(data.name, JSON.stringify(data))
}

const saveFile = (projData: SaveProjectIntent) => {
  // @ts-expect-error неправильная анотация типов в библиотеке beautify
  const fileData = jsonBeautify(projData, null, 2)
  saveToFile(fileData, `${projData.name}_ConstaConstructor.json`)
}
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
          <script async defer src='${document.scripts[0].src}'></script>
        </head>
        <body>
        <div class='Theme Theme_color_gpnDefault Theme_control_gpnDefault Theme_font_gpnDefault Theme_size_gpnDefault Theme_space_gpnDefault Theme_shadow_gpnDefault'>
          <div id='root'></div>
        </div>
        <div style='display: none' id='loaded_data'>${JSON.stringify(projData)}</div>
        </body>
        </html>`
  Promise.all([css, js]).then(([cssText]) => {
    const blob = new Blob([html, `<style>${cssText}</style> `], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const tagA = document.createElement('a')
    tagA.href = url
    tagA.download = 'webpage.html'
    tagA.click()
  })
}
