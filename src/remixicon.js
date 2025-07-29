const path = require('node:path')
const fs = require('fs')

function copyFiles() {
   const remix = path.resolve('.', 'node_modules', 'remixicon', 'fonts')
   const dist = path.resolve('.', 'package', 'dist')

   const fonts = ['remixicon.ttf', 'remixicon.woff']

   fonts.forEach((file) => {
      fs.copyFile(`${remix}/${file}`, `${dist}/${file}`, (err) => {
         if (err) {
            console.log('Error:', err)
         } else {
            console.log(file, 'copied')
         }
      })
   })

   const src = path.resolve('.', 'src')
   const file = 'remixicon.css'
   fs.copyFile(`${src}/${file}`, `${dist}/${file}`, (err) => {
      if (err) {
         console.log('Error:', err)
      } else {
         console.log(file, 'copied')
      }
   })
}

copyFiles()
