const fs = require('fs')
let settings = JSON.parse(fs.readFileSync('./database/setting/settings.json'))
const checkTutor = (fiture, prefix) => {
  if (fiture === "menugroup" || fiture === "menugc" || fiture === "menugrup") {
    return {
      id: `Name : ${fiture}\nAlias : [menugroup,menugc,menugrup]\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "menufun") {
    return {
      id: `Name : ${fiture}\nAlias : [menufun]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "menumaker") {
    return {
      id: `Name : ${fiture}\nAlias : [menumaker]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "menuother") {
    return {
      id: `Name : ${fiture}\nAlias : [menuother]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "menuother2") {
    return {
      id: `Name : ${fiture}\nAlias : [menuother]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "menunsfw") {
    return {
      id: `Name : ${fiture}\nAlias : [menunsfw]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "menuanonymous") {
    return {
      id: `Name : ${fiture}\nAlias : [menuanonymous]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "menupremium") {
    return {
      id: `Name : ${fiture}\nAlias : [menupremium]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "menuowner") {
    return {
      id: `Name : ${fiture}\nAlias : [menuowner]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "changelog") {
    return {
      id: `Name : ${fiture}\nAlias : [changelog]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "infoevent") {
    return {
      id: `Name : ${fiture}\nAlias : [infoevent]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "infopremium") {
    return {
      id: `Name : ${fiture}\nAlias : [infopremium]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "infobot") {
    return {
      id: `Name : ${fiture}\nAlias : [infobot]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "rules") {
    return {
      id: `Name : ${fiture}\nAlias : [rules]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "donate" || fiture === "donasi") {
    return {
      id: `Name : ${fiture}\nAlias : [donate,donasi]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "linkgcyanz" || fiture === "linkgrupyanz" || fiture === "linkgroupyanz") {
    return {
      id: `Name : ${fiture}\nAlias : [linkgcyanz,linkgrupyanz,linkgroupyanz]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "bugreport") {
    return {
      id: `Name : ${fiture}\nAlias : [bugreport]\nGroup : ❌\nContoh : ${prefix}${fiture} [text]`
    }
  } else if (fiture === "saran") {
    return {
      id: `Name : ${fiture}\nAlias : [saran]\nGroup : ❌\nContoh : ${prefix}${fiture} [text]`
    }
  } else if (fiture === "topmoney") {
    return {
      id: `Name : ${fiture}\nAlias : [top money]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "top level") {
    return {
      id: `Name : ${fiture}\nAlias : [top level]\nGroup : ❌\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "kick") {
    return {
      id: `Name : ${fiture}\nAlias : [kick]\nGroup : ✅\nContoh : ${prefix}${fiture} [tag]`
    }
  } else if (fiture === "promote") {
    return {
      id: `Name : ${fiture}\nAlias : [promote]\nGroup : ✅\nContoh : ${prefix}${fiture} [tag]`
    }
  } else if (fiture === "add") {
    return {
      id: `Name : ${fiture}\nAlias : [add]\nGroup : ✅\nContoh : ${prefix}${fiture} [nomor]`
    }
  } else if (fiture === "demote") {
    return {
      id: `Name : ${fiture}\nAlias : [demote]\nGroup : ✅\nContoh : ${prefix}${fiture} [tag]`
    }
  } else if (fiture === "infogrup" || fiture === "infogc" || fiture === "infogroup") {
    return {
      id: `Name : ${fiture}\nAlias : [infogrup,infogc,infogroup]\nGroup : ✅\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "opengrup" || fiture === "opengc" || fiture === "opengroup") {
    return {
      id: `Name : ${fiture}\nAlias : [opengrup,opengc,opengroup]\nGroup : ✅\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "closegrup" || fiture === "closegc" || fiture === "closegroup") {
    return {
      id: `Name : ${fiture}\nAlias : [closegrup,closegc,closegroup]\nGroup : ✅\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "setdesc") {
    return {
      id: `Name : ${fiture}\nAlias : [setdesc]\nGroup : ✅\nContoh : ${prefix}${fiture} [text]`
    }
  } else if (fiture === "setname") {
    return {
      id: `Name : ${fiture}\nAlias : [setname]\nGroup : ✅\nContoh : ${prefix}${fiture} [text]`
    }
  } else if (fiture === "linkgrup" || fiture === "linkgc" || fiture === "linkgroup") {
    return {
      id: `Name : ${fiture}\nAlias : [linkgrup,linkgc,linkgroup]\nGroup : ✅\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "leave") {
    return {
      id: `Name : ${fiture}\nAlias : [leave]\nGroup : ✅\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "setppgrup" || fiture === "setppgc" || fiture === "setppgroup") {
    return {
      id: `Name : ${fiture}\nAlias : [setppgrup,setppgc,setppgroup]\nGroup : ✅\nContoh : ${prefix}${fiture} [replay image]`
    }
  } else if (fiture === "tagall") {
    return {
      id: `Name : ${fiture}\nAlias : [tagall]\nGroup : ✅\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "hidetag") {
    return {
      id: `Name : ${fiture}\nAlias : [hidetag]\nGroup : ✅\nContoh : ${prefix}${fiture}`
    }
  } else if (fiture === "sider") {
    return {
      id: `Name : ${fiture}\nAlias : [sider]\nGroup : ✅\nContoh : ${prefix}${fiture} [replay pesan]`
    }
  } else if (fiture === "giveaway") {
    return {
      id: `Name : ${fiture}\nAlias : [giveaway]\nGroup : ✅\nContoh : ${prefix}${fiture} [jumlah.waktu]`
    }
  } else if (fiture === "afk") {
    return {
      id: `Name : ${fiture}\nAlias : [afk]\nGroup : ✅\nContoh : ${prefix}${fiture} [text]`
    }
  } else if (fiture === "slap") {
    return {
      id: `Name : ${fiture}\nAlias : [slap]\nGroup : ✅\nContoh : ${prefix}${fiture} [tag + text]`
    }
  }
}
module.exports.checkTutor = checkTutor
exports.ww = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ MENU
  •├──────────────────
  •├❍ ${prefix}ww create
  •├❍ ${prefix}ww delete
  •├❍ ${prefix}ww exit
  •├❍ ${prefix}ww join
  •├❍ ${prefix}ww player
  •├──────────────────
  •├❍ SKILL
  •├──────────────────
  •├❍ ${prefix}ww kill < id >
  •├❍ ${prefix}ww deff < id >
  •├❍ ${prefix}ww dreamy < id >
  •├❍ ${prefix}ww sorcerer < id >
  •├──────────────────
  •├❍ WAREWOLF
  •├──────────────────
  •├❍ Warga
  •├❍ Guardian
  •├❍ Seer
  •├❍ Warewolf
  •├❍ Sorcerer
   ╰───────────────────`
}
exports.help = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ MENU
  •├──────────────────
  •├❍ ${prefix}menushop
  •├❍ ${prefix}menugroup
  •├❍ ${prefix}menufun
  •├❍ ${prefix}menumaker
  •├❍ ${prefix}menuother
  •├❍ ${prefix}menuother2
  •├❍ ${prefix}menunsfw
  •├❍ ${prefix}menuanonymous
  •├❍ ${prefix}menupremium
  •├❍ ${prefix}menuowner
  •├❍ ${prefix}changelog
  •├──────────────────
  •├❍ INFO
  •├──────────────────
  •├❍ ${prefix}infoevent
  •├❍ ${prefix}infopremium
  •├❍ ${prefix}infobot
  •├❍ ${prefix}rules
  •├❍ ${prefix}donate
  •├❍ ${prefix}linkgcyanz
  •├──────────────────
  •├❍ REPORT
  •├──────────────────
  •├❍ ${prefix}bugreport < teks >
  •├❍ ${prefix}saran < teks >
  •├──────────────────
  •├❍ LEADERBOARD
  •├──────────────────
  •├❍ ${prefix}top money
  •├❍ ${prefix}top level
   ╰───────────────────`
}
exports.anoy = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ ANONYMOUS
  •├──────────────────
  •├❍ ${prefix}start
  •├❍ ${prefix}skip
  •├❍ ${prefix}stop
  •├❍ ${prefix}sendprofile
   ╰───────────────────`
}
exports.donate = (id, nickname, time, tampilTanggal, prefix) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ DONATE
  •├──────────────────
  •├ *PULSA* : 6281511362495
  •├ *SAWERIA* : bit.ly/YanzTip
  •├ *GOPAY* : 0895617056310
  •├ *DANA* : 0895617056310
   ╰───────────────────`
}
exports.nsfw = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ NSFW
  •├──────────────────
  •├❍ ${prefix}linkdoujin
  •├❍ ${prefix}nhdl < code >
  •├❍ ${prefix}doujindesu < text >
  •├❍ ${prefix}cersex
  •├❍ ${prefix}nsfwhentai
  •├❍ ${prefix}nsfwass
  •├❍ ${prefix}nsfwbdsm
  •├❍ ${prefix}nsfwcum
  •├❍ ${prefix}nsfwfemdom
  •├❍ ${prefix}nsfwglasses
  •├❍ ${prefix}nsfwthighs
  •├❍ ${prefix}nsfworgy
  •├❍ ${prefix}nsfwpanties
  •├❍ ${prefix}nsfwzettairyouiki
  •├❍ ${prefix}nsfwschool
  •├❍ ${prefix}nsfwmaid
  •├❍ ${prefix}nsfwblowjob
  •├❍ ${prefix}nsfwpussy
  •├❍ ${prefix}nsfwuniform
  •├❍ ${prefix}nsfwmasturbation
  •├❍ ${prefix}nsfwfeet
  •├❍ ${prefix}nsfwnetorare
  •├❍ ${prefix}wallpaper-hp-nsfw
  •├❍ ${prefix}wallpaper-pc-nsfw
   ╰───────────────────`
}
exports.other = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ TEXTS
  •├──────────────────
  •├❍ ${prefix}katabijak
  •├❍ ${prefix}katabucin
  •├❍ ${prefix}katasenja
  •├❍ ${prefix}fakta
  •├❍ ${prefix}pantun
  •├❍ ${prefix}randomnama
  •├❍ ${prefix}nickff
  •├──────────────────
  •├❍ STICKERS
  •├──────────────────
  •├❍ ${prefix}sticker
  •├❍ ${prefix}gif
  •├──────────────────
  •├❍ CERITA
  •├──────────────────
  •├❍ ${prefix}cerpen
  •├❍ ${prefix}ceritahoror
  •├──────────────────
  •├❍ MUSIC
  •├──────────────────
  •├❍ ${prefix}lirik < lagu >
  •├❍ ${prefix}chord < lagu >
  •├❍ ${prefix}slowsong
  •├❍ ${prefix}basssong
  •├❍ ${prefix}nightcoresong
  •├❍ ${prefix}ghostsong
  •├❍ ${prefix}gemuksong
  •├❍ ${prefix}tupaisong
  •├──────────────────
  •├❍ INFO
  •├──────────────────
  •├❍ ${prefix}zodiakmingguan < zodiak >
  •├❍ ${prefix}zodiakharian < zodiak >
  •├❍ ${prefix}ramalanjadian <tanggal.bulan.tahun>
  •├❍ ${prefix}gempabumi
  •├❍ ${prefix}jadwalsholat < tempat >
  •├❍ ${prefix}jadwaltv < channel >
  •├❍ ${prefix}cuaca < tempat >
  •├❍ ${prefix}growtopiawotd
  •├❍ ${prefix}cnnnews
  •├❍ ${prefix}detikcom
  •├❍ ${prefix}coronanews
  •├❍ ${prefix}antaranews
  •├❍ ${prefix}youwatchnews < text >
  •├──────────────────
  •├❍ EDUKASI
  •├──────────────────
  •├❍ ${prefix}wiki < text >
  •├❍ ${prefix}brainly < text >
  •├❍ ${prefix}translate < kode text >
  •├❍ ${prefix}nulis < text >
  •├❍ ${prefix}bitly < link >
   ╰───────────────────`
}
exports.other2 = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ SEARCHS
  •├──────────────────
  •├❍ ${prefix}pinterest < text >
  •├❍ ${prefix}igprofile < username >
  •├❍ ${prefix}igphoto < username >
  •├❍ ${prefix}tiktokprofile < username >
  •├❍ ${prefix}otakudesu < anime >
  •├❍ ${prefix}appstore < apk >
  •├❍ ${prefix}ytsearch < judul >
  •├❍ ${prefix}userroblox < id >
  •├❍ ${prefix}friendroblox < id >
  •├❍ ${prefix}badgeroblox < id >
  •├❍ ${prefix}growtopiaitem < item >
  •├❍ ${prefix}growtopiainfo < item >
  •├❍ ${prefix}dewabatch < judul >
  •├❍ ${prefix}sfilesearch < apk >
  •├──────────────────
  •├❍ IMAGES
  •├──────────────────
  •├❍ ${prefix}randomanime
  •├❍ ${prefix}memeindo
  •├❍ ${prefix}darkjoke
  •├❍ ${prefix}pic cowo
  •├❍ ${prefix}pic cewe
  •├❍ ${prefix}husbu
  •├❍ ${prefix}waifu
  •├❍ ${prefix}loli
  •├❍ ${prefix}shota
  •├❍ ${prefix}cat
  •├❍ ${prefix}nekonime
  •├❍ ${prefix}wallpaper-hp
  •├❍ ${prefix}wallpaper-pc
  •├──────────────────
  •├❍ SCREEN SHOT
  •├──────────────────
  •├❍ ${prefix}sswebphone < link >
  •├❍ ${prefix}sswebdesktop < link >
  •├❍ ${prefix}sswebtablet < link >
  •├──────────────────
  •├❍ QUOTES
  •├──────────────────
  •├❍ ${prefix}quotes
  •├❍ ${prefix}islamquotes
  •├❍ ${prefix}dilanquotes
  •├❍ ${prefix}animequotes
  •├❍ ${prefix}enquotes
  •├❍ ${prefix}motivasi
  •├──────────────────
  •├❍ TO MEDIA
  •├──────────────────
  •├❍ ${prefix}emoji < emoji >
  •├❍ ${prefix}tomedia
  •├❍ ${prefix}toimage
  •├❍ ${prefix}tomp3
  •├──────────────────
  •├❍ FUN
  •├──────────────────
  •├❍ ${prefix}dare / ${prefix}en-dare
  •├❍ ${prefix}truth / ${prefix}en-truth
  •├❍ ${prefix}tod / ${prefix}en-tod
  •├❍ ${prefix}say < text >
  •├❍ ${prefix}pedocheck
  •├❍ ${prefix}wibucheck
  •├❍ ${prefix}bucincheck
  •├❍ ${prefix}gantengcheck
  •├❍ ${prefix}cantikcheck
  •├❍ ${prefix}lesbicheck
  •├❍ ${prefix}gaycheck
  •├❍ ${prefix}sangecheck
  •├❍ ${prefix}jadian
  •├❍ ${prefix}apakah < teks >
  •├❍ ${prefix}bisakah < teks >
  •├❍ ${prefix}siapakah < teks >
  •├❍ ${prefix}kapankah < teks >
   ╰───────────────────`
}
exports.menuowner = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ ADMIN
  •├──────────────────
  •├❍ ${prefix}ojoin < link >
  •├❍ ${prefix}odel
  •├❍ ${prefix}ohidetag
  •├❍ ${prefix}addcode < katogory code.jumlah >
  •├❍ ${prefix}clearpc
  •├❍ ${prefix}cleargc
  •├❍ ${prefix}setppbot
  •├❍ ${prefix}clone < @tag >
  •├❍ ${prefix}bc < teks >
  •├❍ ${prefix}premiumadd < @tag >
  •├❍ ${prefix}unpremium < @tag >
  •├❍ ${prefix}banadd < @tag.alasan >
  •├❍ ${prefix}unban < @tag >
   ╰───────────────────`
}
exports.menuprem = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ DOWNLOADER
  •├──────────────────
  •├❍ ${prefix}ytmp3 < link >
  •├❍ ${prefix}ytmp4 < link >
  •├❍ ${prefix}play < text >
  •├❍ ${prefix}fbdownload < link >
  •├❍ ${prefix}igdownload < link >
  •├❍ ${prefix}ighightlight < link >
  •├❍ ${prefix}igtv < link >
  •├❍ ${prefix}igreels < link >
  •├❍ ${prefix}igstory < link >
  •├❍ ${prefix}tiktoknowmdownload < link >
  •├❍ ${prefix}tiktokdownload < link >
  •├❍ ${prefix}westmanga < manga >
  •├❍ ${prefix}kiryuu < manga >
  •├──────────────────
  •├❍ STICKERS
  •├──────────────────
  •├❍ ${prefix}stiker wm < text1.text2 >
  •├❍ ${prefix}gif wm < text1.text2 >
  •├❍ ${prefix}takestiker < text1.text2 >
  •├❍ ${prefix}trigger
   ╰───────────────────`
}
exports.mium = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ INFO PREMIUM
  •├──────────────────
  •├ Rob Lebih Cepat
  •├ Batas Judi Naik
  •├ Set PP Avatar
  •├ Private Account
  •├ Unlimited Limit
  •├ Akses Menu Premium
  •├ Harga : 5k / 30 Days
  •├ Ingin Premium ?
  •├   => ketik ${prefix}owner
  •├───────────────────
  •├❍ INFO PREMIUM PRO
  •├──────────────────
  •├ Rob Lebih Cepat
  •├ Batas Judi Naik
  •├ Set PP Avatar
  •├ Private Account
  •├ Unlimited Limit
  •├ Akses Menu Premium
  •├ Harga : 50k / Permanen
  •├ Ingin Premium ?
  •├   => ketik ${prefix}owner
  •├───────────────────
  •├❍ INFO GROUPS
  •├──────────────────
  •├ Masukin Bot Ke Group
  •├ Akses All Fiture Group
  •├ Harga : 10k / 30 Days
  •├ Ingin Masukin Group ?
  •├   => ketik ${prefix}owner
  •├───────────────────
  •├❍ INFO JADI BOT
  •├──────────────────
  •├ Bisa Menjadi Bot
  •├ Boleh Menyewakan Botnya
  •├ Harga : 75k / 30 Days
  •├ Ingin Jadi Bot ?
  •├   => ketik ${prefix}owner
   ╰───────────────────`
}
exports.rules = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ RULES
  •├──────────────────
  •├ Telpon/VC = BAN/BLOKIR
  •├ Spam = BAN/BLOCKIR
  •├ Mines = Tannggung Sendiri
  •├ Duit Ilang = Tannggung Sendiri
  •├ Ingin Donasi ?
  •├    => ketik ${prefix}donate
   ╰───────────────────`
}
exports.shop = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ SHOPS
  •├──────────────────
  •├❍ ${prefix}shop sell < id.harga.jumlah >
  •├❍ ${prefix}shop search < id >
  •├❍ ${prefix}shop restock < id.jumlah >
  •├❍ ${prefix}shop cancel < id >
  •├❍ ${prefix}shop bio < text >
  •├❍ ${prefix}shop nama < text >
  •├❍ ${prefix}shop profile
   ╰───────────────────`
}
exports.textmaker = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ ${prefix}blackpink < text >
  •├❍ ${prefix}holographic < text >
  •├❍ ${prefix}sandengraved < text >
  •├❍ ${prefix}summerysand < text >
  •├❍ ${prefix}gluetext < text >
  •├❍ ${prefix}styletext < text >
  •├❍ ${prefix}cloudtext < text >
  •├❍ ${prefix}beartext < text > 
  •├❍ ${prefix}thunder < text > 
  •├❍ ${prefix}rustymetal < text >  
  •├❍ ${prefix}minion < text >  
  •├❍ ${prefix}retro < text1.text2.text3 >  
  •├❍ ${prefix}space < text1.text2 >  
  •├❍ ${prefix}pornhub < text1.text2 >  
  •├❍ ${prefix}neonlight < text >  
  •├❍ ${prefix}harta < text >  
  •├❍ ${prefix}glowtext < text >  
  •├❍ ${prefix}robottext < text >
  •├❍ ${prefix}neontext < text >    
  •├❍ ${prefix}glitch < text1.text2 >  
  •├❍ ${prefix}vintage < text1.text2 >  
  •├❍ ${prefix}coolgraffiti < text1.text2 >  
  •├❍ ${prefix}wonderfulgraffiti < text >  
  •├❍ ${prefix}gradienttext < text >  
  •├❍ ${prefix}stonetext < text1.text2 >  
  •├❍ ${prefix}marvellogo < text1.text2 >  
  •├❍ ${prefix}avengerslogo < text1.text2 >  
  •├❍ ${prefix}pubglogo < text1.text2 >  
  •├❍ ${prefix}freefirelogo < char.text >
  •├❍ ${prefix}freefirebanner < char.text >    
  •├❍ ${prefix}mllogo < char.text >  
  •├❍ ${prefix}valorantbanner < char.t1.t2.t3 >  
  •├❍ ${prefix}neondeviltext < text1 >  
  •├❍ ${prefix}glasstext < text1 >  
  •├❍ ${prefix}brokenglasstext < text1 >  
  •├❍ ${prefix}gradientext < text1 >  
  •├❍ ${prefix}cutegirltext < text1 >  
  •├❍ ${prefix}multicoloredtext < text1 >  
  •├❍ ${prefix}bynametext < text1 >  
  •├❍ ${prefix}gaminglogo < text1 >  
  •├❍ ${prefix}jokerlogo < text1 >  
  •├❍ ${prefix}greenneontext < text1 >  
  •├❍ ${prefix}metalliclogo < text1 >  
  •├❍ ${prefix}lovetext < text1 >  
  •├❍ ${prefix}metaltext < text1 >  
   ╰───────────────────`
}
exports.grup = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ ADMIN GROUPS
  •├──────────────────
  •├❍ ${prefix}kick < @tag >
  •├❍ ${prefix}add < 628956170xx >
  •├❍ ${prefix}promote < @tag >
  •├❍ ${prefix}demote < @tag >
  •├❍ ${prefix}infogrup
  •├❍ ${prefix}closegc
  •├❍ ${prefix}opengc
  •├❍ ${prefix}setdesc < text >
  •├❍ ${prefix}setname < text >
  •├❍ ${prefix}linkgc
  •├❍ ${prefix}leave
  •├❍ ${prefix}setppgrup
  •├❍ ${prefix}tagall
  •├❍ ${prefix}hidetag
  •├❍ ${prefix}sider
  •├──────────────────
  •├❍ FUN
  •├──────────────────
  •├❍ ${prefix}giveaway < jumlah >
  •├❍ ${prefix}afk < alasan >
  •├❍ ${prefix}slap < tag + text >
  •├❍ ${prefix}hug < tag + text >
  •├❍ ${prefix}kiss < tag + text >
  •├❍ ${prefix}poke < tag + text >
  •├❍ ${prefix}wave < tag + text >
  •├──────────────────
  •├❍ FITURES
  •├──────────────────
  •├❍ ${prefix}join < link >
  •├❍ ${prefix}welcome < enable / disable >
  •├❍ ${prefix}anime < enable / disable >
  •├❍ ${prefix}pokedex < enable / disable >
  •├❍ ${prefix}antilink < enable / disable >
  •├❍ ${prefix}antivirtex < enable / disable >
  •├❍ ${prefix}autostiker < enable / disable >
  •├❍ ${prefix}antidelete < enable / disable >
  •├❍ ${prefix}antibadword < enable / disable >
   ╰───────────────────`
}
exports.games = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ MONEY
  •├──────────────────
  •├❍ ${prefix}dep < jumlah >
  •├❍ ${prefix}with < jumlah >
  •├❍ ${prefix}transfer < tag.jumlah >
  •├❍ ${prefix}daily
  •├──────────────────
  •├❍ PROFILE
  •├──────────────────
  •├❍ ${prefix}changename < name >
  •├❍ ${prefix}profile bank
  •├❍ ${prefix}profile mancing
  •├❍ ${prefix}profile hunt
  •├❍ ${prefix}profile user
  •├❍ ${prefix}hunt status
  •├❍ ${prefix}hunt item
  •├❍ ${prefix}hunt weapon
  •├❍ ${prefix}avatar
  •├❍ ${prefix}gallery
  •├❍ ${prefix}gallerypokedex
  •├──────────────────
  •├❍ FUN
  •├──────────────────
  •├❍ ${prefix}hangman
  •├❍ ${prefix}minesweeper
  •├❍ ${prefix}tebakgambar
  •├❍ ${prefix}tebakbendera
  •├❍ ${prefix}asahotak
  •├❍ ${prefix}tebaklagu
  •├❍ ${prefix}tebakmath
  •├❍ ${prefix}tebakunsurkimia
  •├❍ ${prefix}sambungkata
  •├❍ ${prefix}susunkata
  •├❍ ${prefix}caklontong
  •├❍ ${prefix}family100
  •├❍ ${prefix}tictactoe < tag >
  •├❍ ${prefix}delttc 
  •├❍ ${prefix}drop / ${prefix}take
  •├──────────────────
  •├❍ GAMBLING
  •├──────────────────
  •├❍ ${prefix}multics < tag.jumlah >
  •├❍ ${prefix}slot < jumlah >
  •├❍ ${prefix}dadu < dadu.jumlah >
  •├❍ ${prefix}casino < jumlah >
  •├❍ ${prefix}blackjack < jumlah >
  •├❍ ${prefix}lottery < jumlah >
  •├❍ ${prefix}flip < head/tail.jumlah >
  •├❍ ${prefix}suit < batu,gunting,kertas.jumlah >
  •├──────────────────
  •├❍ OTHERS
  •├──────────────────
  •├❍ ${prefix}claim < code >
  •├❍ ${prefix}crate 
  •├❍ ${prefix}quest
  •├❍ ${prefix}hunt
  •├❍ ${prefix}mancing
  •├──────────────────
  •├❍ ITEMS
  •├──────────────────
  •├❍ ${prefix}use < id.jumlah >
  •├❍ ${prefix}unuse item
  •├──────────────────
  •├❍ CARNIVALS
  •├──────────────────
  •├❍ ${prefix}gachalimit
  •├❍ ${prefix}gachaikan
  •├❍ ${prefix}gachazoo
   ╰───────────────────`
}
exports.epen = (id, prefix, nickname, time, tampilTanggal) => {
  return `> ONLINE <                
 
╭❍ WELCOME TO USE
├──────────────────┐
├❍ Nama : ${nickname}
├❍ Waktu : ${time}
├❍ Tanggal : ${tampilTanggal}
╰───────────────────┘
  •├❍ Perintah BOT : 「 ${prefix} 」
  •├──────────────────
  •├❍ INFO EVENT
  •├──────────────────
  •├ Event Carnival = Senin
  •├ Event WorkUp = Selasa
  •├ Event Diskon Sell = Rabu
  •├ Event Diskon Xp Boost = Kamis
  •├ Event Diskon Buy = Sabtu
  •├ Ingin Donasi ?
  •├    => ketik ${prefix}donate
   ╰───────────────────`
}








