const _0x3ce298=_0x52a9;(function(_0x16a747,_0x210363){const _0x3c4d69=_0x52a9,_0x3c71ad=_0x16a747();while(!![]){try{const _0x55021a=-parseInt(_0x3c4d69(0xc2))/0x1+-parseInt(_0x3c4d69(0xb3))/0x2*(parseInt(_0x3c4d69(0xa6))/0x3)+parseInt(_0x3c4d69(0xc1))/0x4+parseInt(_0x3c4d69(0xae))/0x5*(-parseInt(_0x3c4d69(0xad))/0x6)+-parseInt(_0x3c4d69(0xc6))/0x7+parseInt(_0x3c4d69(0xb1))/0x8*(-parseInt(_0x3c4d69(0xa8))/0x9)+parseInt(_0x3c4d69(0xbd))/0xa;if(_0x55021a===_0x210363)break;else _0x3c71ad['push'](_0x3c71ad['shift']());}catch(_0xed00b2){_0x3c71ad['push'](_0x3c71ad['shift']());}}}(_0x4b33,0x7e47a));const puppeter=require('puppeteer'),request=require(_0x3ce298(0xb9)),cheerio=require(_0x3ce298(0xa7)),fs=require('fs');let settings=JSON['parse'](fs['readFileSync'](_0x3ce298(0xc3)));function _0x4b33(){const _0x14872a=['launch','chrome','#text-0','30970410sdGhFb','attr','img.bg-image','dispose','3464224qTeLuX','833216MuItCU','./database/setting/settings.json','newPage','evaluate','1344945VaieRK','2726709FeWTwi','cheerio','666aiKaMu','innerHTML','div.btn-group\x20>\x20a','application/x-www-from-urlencoded','https://photooxy.com/manga-and-anime/make-one-piece-wanted-poster-online-129.html','6IaYUPQ','4597265UXKVKZ','exports','load','64016hmAOlg','waitForTimeout','2ZZepTU','pWanted','body','goto','src','type','request'];_0x4b33=function(){return _0x14872a;};return _0x4b33();}function ephoto1(_0x4942ce,_0x30147a){return new Promise(async(_0x4d7b28,_0x5cca2b)=>{const _0x6b85b7=_0x52a9;try{const _0xa0552d=await puppeter[_0x6b85b7(0xba)]({'headless':!![],'executablePath':settings[_0x6b85b7(0xbb)],'defaultViewport':null}),_0x12c83a=await _0xa0552d[_0x6b85b7(0xc4)]();await _0x12c83a[_0x6b85b7(0xb6)](_0x4942ce),await _0x12c83a[_0x6b85b7(0xb8)](_0x6b85b7(0xbc),_0x30147a),await _0x12c83a['click']('#submit'),await _0x12c83a[_0x6b85b7(0xb2)](0x1806);const _0x4f8a36=await _0x12c83a['$'](_0x6b85b7(0xb5)),_0x1bdb43=await _0x12c83a[_0x6b85b7(0xc5)](_0x20ee97=>_0x20ee97[_0x6b85b7(0xa9)],_0x4f8a36);await _0x4f8a36[_0x6b85b7(0xc0)]();const _0x4bd0bd=cheerio[_0x6b85b7(0xb0)](_0x1bdb43);let _0x38025a=_0x4bd0bd(_0x6b85b7(0xbf))[_0x6b85b7(0xbe)](_0x6b85b7(0xb7));await _0xa0552d['close'](),_0x4d7b28(_0x38025a);}catch(_0x278331){_0x5cca2b({'status':![],'message':_0x278331});}});}function pWanted(_0x27e4bb,_0x586f53,_0x1ff270){return new Promise((_0x5253ae,_0xca859)=>{const _0x38a018=_0x52a9,_0x317384={'method':'POST','url':_0x38a018(0xac),'headers':{'content-type':_0x38a018(0xab)},'formData':{'image_1':_0x27e4bb,'text_3':_0x586f53,'text_4':_0x1ff270,'login':'OK'}};request(_0x317384,async function(_0x4934c3,_0x23f058,_0x246825){const _0x414d94=_0x38a018;if(_0x4934c3)throw new Error(_0x4934c3);const _0xb8e7e4=cheerio['load'](_0x246825),_0x51ffda={'url':_0xb8e7e4(_0x414d94(0xaa))[_0x414d94(0xbe)]('href')};_0x5253ae(_0x51ffda);});});}function _0x52a9(_0x31742c,_0x433f8e){const _0x4b337c=_0x4b33();return _0x52a9=function(_0x52a91c,_0x247e6e){_0x52a91c=_0x52a91c-0xa6;let _0xa08fcc=_0x4b337c[_0x52a91c];return _0xa08fcc;},_0x52a9(_0x31742c,_0x433f8e);}module[_0x3ce298(0xaf)]['ephoto1']=ephoto1,module[_0x3ce298(0xaf)][_0x3ce298(0xb4)]=pWanted;