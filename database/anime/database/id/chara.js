const cheerio = require('cheerio')
const { default: Axios } = require('axios')
     
     /* Chara Game */
     //Function
     async function charaCheck(query) {
          return new Promise((resolve, reject) => {
               const char = query
               Axios.get('https://myanimelist.net/character.php?cat=character&q=' + char)
                    .then(({ data }) => {
                         // resolve(data)
                         const $ = cheerio.load(data)
                         const selector = 'tr:nth-child(1) > td > a'
                         const small = $('tr:nth-child(1) > td:nth-child(2) > small').text()
                         const name = $(selector).text() + ' ' + small
                         const url = $(selector).attr('href')
                         resolve({
                              status: 200,
                              name: name,
                              message: `Found chara ${name} and added to database!`
                         })

                    }).catch(e => reject({
                         status: 404,
                         message: `Character ${query} was not found!`
                    }))
          })
     }

     async function chara(query) {
          return new Promise((resolve, reject) => {
               const char = query
               Axios.get('https://myanimelist.net/character.php?cat=character&q=' + char)
                    .then(({ data }) => {
                         const $ = cheerio.load(data)
                         const selector = 'tr:nth-child(1) > td > a'
                         const small = $('tr:nth-child(1) > td:nth-child(2) > small').text()
                         const name = $(selector).text() + ' ' + small
                         const url = $(selector).attr('href')
                         let manga = []
                         selector_mov = 'tr > td:nth-child(3) > small > a'
                         let serial = []
                         $(selector_mov).get().map((res) => {
                              const name = $(res).text()
                              const url = 'https://myanimelist.net' + $(res).attr('href')
                              serial.push({
                                   Anime: name,
                                   url: url
                              })
                         })
                         // console.log(name)
                         let grab_frinst = $('tr:nth-child(1) > td > small > div > a')
                         if ($(`${grab_frinst}`).attr('href') === undefined) {
                         } else {
                              manga.push({
                                   name: $(grab_frinst).text(),
                                   url: 'https://myanimelist.net' + $(`${grab_frinst}`).attr('href')
                              })
                         }

                         Axios.get(url)
                              .then(({ data }) => {
                                   let imgs = []
                                   const $ = cheerio.load(data)
                                   const res_desc = $('tr > td:nth-child(2)').text().split('\n\n\n\n\n\t  ')[1].split('            \n        \n')[0].replace(')', ')\n')
                                   $('tr > td.borderClass > div > a > img').get().map((rest) => {
                                        imgs.push($(rest).attr('data-src'))
                                   })
                                   const elseimg = ['https://mrhrtz-wabot.000webhostapp.com/cooltext372748737425114.png']
                                   const sendImg = imgs.length > 0 ? imgs : elseimg
                                   const result = {
                                        status: 200,
                                        name: name,
                                        image: sendImg,
                                        full_desc: res_desc,
                                        url: url,
                                        anime: serial,
                                        manga: manga
                                   }
                                   resolve(result)
                              }).catch(reject)
                    }).catch(e => reject({
                         status: 404,
                         message: `Character ${query} was not found!`
                    }))
          })
     }

// charaCheck('naruto')
// .then(console.log)
// .catch(console.log)
module.exports.charaCheck = charaCheck
module.exports.chara = chara