// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const fs = require('fs')

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

  window.fs={
    /**
     * @param {string} filePath
     * @param {ArrayBuffer} buffer
     */
    save:(filePath,buffer)=>{
      fs.writeFile(filePath, Buffer.from(buffer),()=>{console.log('ok')})
      console.log('kkk')
    }
  }
})
