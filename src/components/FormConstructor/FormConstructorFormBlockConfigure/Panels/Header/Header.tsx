import { Button } from '@consta/uikit/Button'
import style from './Header.module.css'
import { IconUpload } from '@consta/icons/IconUpload'
import { MainIcon } from '../../../../../Icons'
import { IconQuestion } from '@consta/icons/IconQuestion'
import { IconDownload } from '@consta/icons/IconDownload'
import { FileField } from '@consta/uikit/FileField'
import { useProject } from './headerServices'
import { useEffect, useState } from 'react'
import { Modal } from '@consta/uikit/Modal'
import { HotKeyPaneNote } from './Help'
import { ProjectName } from './ProjectName'

import { getAllFormElements, useAppSelector } from '../../../store'
export const Header: React.FC = () => {
  const { onChangeProjectName, onDownloadProject, onSaveProject, projectName,onDownloadProjectFromDiv } = useProject()
  const formConstructor = useAppSelector(state => state.formConstructor)
  const allElements = useAppSelector(getAllFormElements)
  const [showNotes, setShowNotes] = useState<boolean>(false)
  useEffect(() => {
    const loadedData = document.getElementById('loaded_data')
    
    if(loadedData) {
      //@ts-ignore
      // onDownloadProject({target: {files: [new File([loadedData.innerHTML], 'new')]}})
      onDownloadProjectFromDiv(loadedData.innerHTML)
    }
  }, [])
  const onNotesOpen = () => {
    setShowNotes(true)
  }

  const onNotesClose = () => {
    setShowNotes(false)
  }
  const onSaveProjectToHtml = async (fileHanler: any) => {
    const writebleStream = await fileHanler.createWritable()
    const proj = document.getElementById('formBlock')
    const header = Array.from(document.getElementsByTagName('style'))
    //@ts-ignore
    const styles = header.reduce((acc, curr) =>  curr.innerHTML + acc, '')
  //  const html =  `
  //   <!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //     <meta charset="UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <title>Document</title>
  //     <link rel="stylesheet" href="901a0855826d2cafe0f7.css">
  //     <link rel="stylesheet" href="e108b8fff8995e8228cb.css">
  //     <link rel="stylesheet" href="f9df53db335a2191c5fc.css">
  //     <style>
  //     ${styles}
  //     </style>
  //   </head>
  //   <body >
  //    <div class='Theme Theme_color_gpnDefault Theme_control_gpnDefault Theme_font_gpnDefault Theme_size_gpnDefault Theme_space_gpnDefault Theme_shadow_gpnDefault'>
  //    ${proj?.innerHTML}
  //    </div>
  //   </body>
  //   </html>
  //   `
  const html = `
  <html>
<head>
    <title>Template</title>
</head>
<body>
    <h1>Look at this page.</h1>
    <h1>It's so plain!</h1>
    <a class="btn btn-primary" href='/' download>Click Here to Download</a>
</body>
  `
   await writebleStream.write(html)
   await writebleStream.close()
    
  }
  const saveFile = async () => {
    //@ts-ignore
    const fileHanler = await window.showSaveFilePicker({
      types: [{description: 'html', accept: {'text/html': ['.html']}}]
    })
    const file = await fileHanler.getFile()
    onSaveProjectToHtml(fileHanler)
  }
    return (
    <div className={`${style.headerContainer} container-row`}>
      <div className='container-row align-center '>
        <MainIcon />
        <Button
          label='Справка'
          view='clear'
          iconRight={IconQuestion}
          size='xs'
          onClick={onNotesOpen}
        />
        <FileField id={'loader_project'} onChange={onDownloadProject}>
          {props => (
            <Button
              id={'btn'}
              {...props}
              label='Импортировать'
              view='clear'
              iconLeft={IconDownload}
              size='xs'
            />
          )}
        </FileField>
      </div>
      <ProjectName onChangeProjectName={onChangeProjectName} projectName={projectName} />
      <Button
        label={'Экспортировать'}
        iconLeft={IconUpload}
        view='primary'
        size='xs'
        onClick={onSaveProject}
      />
      <Button
        label={'Экспортировать html'}
        iconLeft={IconUpload}
        view='primary'
        size='xs'
        onClick={saveFile}
      />
      <Button label={'a'} onClick={function saveWebPage() {
        // const html = ReactDOMServer.renderToString(<App/>)

    
      //   var html = `
      //   <html>
      // <head>
      //     <title>Template</title>
      // </head>
      // <body>
      //     <h1>Look at this page.</h1>
      //     <h1>It's so plain!</h1>
      //     <a class="btn btn-primary" href='/' download>Click Here to Download</a>
      // </body>
      //   `
      
   
        var css = Array.from(document.styleSheets)
          .map(styleSheet => Array.from(styleSheet.cssRules)                     
            .map(rule => rule.cssText)
            .join('\n'))
          .join('\n');
        var js = Array.from(document.scripts)
          .map(script => script.src ? fetch(script.src).then(response => response.text()) : Promise.resolve(script.innerText))
          .reduce((accumulator, currentValue) => accumulator.then(accumulatorValue => currentValue.then(currentValueValue => accumulatorValue + currentValueValue)), Promise.resolve(''));
        // js.then(console.log)
        const intent = {
          description: projectName,
          name: projectName,
          saveWay: 'file',
          project: { ...formConstructor, isGridVisible: false, allElements: allElements
          },
        }
        var html =  `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <script async defer src='./main.bundle.js'></script>
        </head>
        <body>
        <div class='Theme Theme_color_gpnDefault Theme_control_gpnDefault Theme_font_gpnDefault Theme_size_gpnDefault Theme_space_gpnDefault Theme_shadow_gpnDefault'>
          <div id='root'></div>
        </div>
        <div style='display: none' id='loaded_data'>${JSON.stringify(intent)}</div>
        </body>
        </html>`
        Promise.all([css, js]).then(([cssText, jsText]) => {
          const script = `<script>${jsText}</script>`
          var blob = new Blob([
            html, `<style>${cssText}</style>`
          ], { type: 'text/html' });
          var url = URL.createObjectURL(blob);
          var a = document.createElement("a");
  a.href = url;
  a.download = "webpage.html";
  a.click();
        });
  // var url = "/"; // replace with the URL of the web page you want to save
  // var a = document.createElement("a");
  // a.href = url;
  // a.download = "webpage.html";
  // a.click();
}}/>
      <Modal isOpen={showNotes} onClickOutside={onNotesClose} onEsc={onNotesClose}>
        <HotKeyPaneNote onClose={onNotesClose} />
      </Modal>
    </div>
  )
}
// var html = document.documentElement.outerHTML;
// var css = Array.from(document.styleSheets)
//   .map(styleSheet => Array.from(styleSheet.cssRules)
//     .map(rule => rule.cssText)
//     .join('\n'))
//   .join('\n');
// var js = Array.from(document.scripts)
//   .map(script => script.src ? fetch(script.src).then(response => response.text()) : Promise.resolve(script.innerText))
//   .reduce((accumulator, currentValue) => accumulator.then(accumulatorValue => currentValue.then(currentValueValue => accumulatorValue + '\n' + currentValueValue)), Promise.resolve(''));

// Promise.all([css, js]).then(([cssText, jsText]) => {
//   var blob = new Blob([html, '\n<style>\n', cssText, '\n</style>\n<script>\n', jsText, '\n</script>\n'], { type: 'text/html' });
//   var url = URL.createObjectURL(blob);
//   chrome.downloads.download({
//     url: url,
//     filename: 'snapshot.html',
//     saveAs: true
//   });
// });