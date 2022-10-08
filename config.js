const fs = require('fs')
const chalk = require('chalk')

// Other
global.sessionName = 'sesi'
global.prefa = ['/', '!', '.', '-', 'y']
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
