const _0x220606=_0x4a62;(function(_0x29aa87,_0x18e6f1){const _0x3fddd3=_0x4a62,_0x54d277=_0x29aa87();while(!![]){try{const _0x3af80c=-parseInt(_0x3fddd3(0xcd))/0x1*(-parseInt(_0x3fddd3(0xd0))/0x2)+parseInt(_0x3fddd3(0xb1))/0x3*(parseInt(_0x3fddd3(0xcf))/0x4)+-parseInt(_0x3fddd3(0xb2))/0x5*(parseInt(_0x3fddd3(0xc7))/0x6)+-parseInt(_0x3fddd3(0xb3))/0x7+-parseInt(_0x3fddd3(0xb8))/0x8+-parseInt(_0x3fddd3(0xbc))/0x9*(parseInt(_0x3fddd3(0xbe))/0xa)+parseInt(_0x3fddd3(0xb4))/0xb*(parseInt(_0x3fddd3(0xcb))/0xc);if(_0x3af80c===_0x18e6f1)break;else _0x54d277['push'](_0x54d277['shift']());}catch(_0x232396){_0x54d277['push'](_0x54d277['shift']());}}}(_0x1704,0xdca09));function _0x4a62(_0x2c921f,_0x1b316b){const _0x170443=_0x1704();return _0x4a62=function(_0x4a62a9,_0x3b6d20){_0x4a62a9=_0x4a62a9-0xb1;let _0x1e4ebe=_0x170443[_0x4a62a9];return _0x1e4ebe;},_0x4a62(_0x2c921f,_0x1b316b);}const fs=require('fs'),codepremium=JSON[_0x220606(0xcc)](fs['readFileSync'](_0x220606(0xb9))),codelimit=JSON[_0x220606(0xcc)](fs[_0x220606(0xc4)](_0x220606(0xb7))),codemoney=JSON[_0x220606(0xcc)](fs[_0x220606(0xc4)](_0x220606(0xce))),codecreate=JSON['parse'](fs['readFileSync'](_0x220606(0xc6))),codetitle=JSON[_0x220606(0xcc)](fs['readFileSync'](_0x220606(0xc2))),codelootbox=JSON[_0x220606(0xcc)](fs[_0x220606(0xc4)](_0x220606(0xc3))),addLimitcode=(_0x529712,_0x4481ee)=>{const _0xf04619=_0x220606,_0x5ae244={'code':_0x529712,'jumlah':_0x4481ee};codelimit['push'](_0x5ae244),fs[_0xf04619(0xbd)](_0xf04619(0xb7),JSON['stringify'](codelimit,null,0x2));},addLootcode=(_0x490205,_0xdb7609)=>{const _0x555ae3=_0x220606,_0x591ded={'code':_0x490205,'jumlah':_0xdb7609};codelootbox[_0x555ae3(0xd1)](_0x591ded),fs['writeFileSync'](_0x555ae3(0xc3),JSON[_0x555ae3(0xc8)](codelootbox,null,0x2));},addTitlecode=(_0x36d202,_0x335a96)=>{const _0x10f374=_0x220606,_0x548635={'code':_0x36d202,'title':_0x335a96};codetitle[_0x10f374(0xd1)](_0x548635),fs[_0x10f374(0xbd)](_0x10f374(0xc2),JSON[_0x10f374(0xc8)](codetitle,null,0x2));},addMoneycode=(_0x2b38d5,_0x2daff7)=>{const _0xb859d2=_0x220606,_0x4d92a6={'code':_0x2b38d5,'jumlah':_0x2daff7};codemoney[_0xb859d2(0xd1)](_0x4d92a6),fs[_0xb859d2(0xbd)]('./database/database/code/codemoney.json',JSON[_0xb859d2(0xc8)](codemoney,null,0x2));},addPremcode=(_0x59d9f4,_0x92fbe6,_0x87a082,_0x10dfe6,_0x2e7bdd)=>{const _0x3b7a96=_0x220606,_0x2451ab={'code':_0x59d9f4,'days':_0x92fbe6,'timeAll':_0x87a082,'time':_0x10dfe6,'jumlah':_0x2e7bdd};codepremium[_0x3b7a96(0xd1)](_0x2451ab),fs[_0x3b7a96(0xbd)](_0x3b7a96(0xb9),JSON[_0x3b7a96(0xc8)](codepremium,null,0x2));},addCratecode=(_0x33ecc1,_0x4e9d7e)=>{const _0x1c0a15=_0x220606,_0x2ea7cf={'code':_0x33ecc1,'jumlah':_0x4e9d7e};codecreate['push'](_0x2ea7cf),fs[_0x1c0a15(0xbd)](_0x1c0a15(0xc6),JSON['stringify'](codecreate,null,0x2));},checkLimitcode=_0x288fdb=>{const _0x4846a2=_0x220606;let _0x3ae47a=![];Object[_0x4846a2(0xbb)](codelimit)[_0x4846a2(0xb5)](_0x35501d=>{codelimit[_0x35501d]['code']===_0x288fdb&&(_0x3ae47a=_0x35501d);});if(_0x3ae47a!==![])return codelimit[_0x3ae47a][_0x4846a2(0xc9)];},checkLootcode=_0x1aa846=>{const _0x1ccea7=_0x220606;let _0x22dfa5=![];Object['keys'](codelootbox)[_0x1ccea7(0xb5)](_0x1a53bf=>{const _0x4c065d=_0x1ccea7;codelootbox[_0x1a53bf][_0x4c065d(0xc9)]===_0x1aa846&&(_0x22dfa5=_0x1a53bf);});if(_0x22dfa5!==![])return codelootbox[_0x22dfa5]['code'];},checkLootjumlah=_0x5fbab3=>{const _0x500a68=_0x220606;let _0x1b60b6=![];Object[_0x500a68(0xbb)](codelootbox)[_0x500a68(0xb5)](_0x197613=>{codelootbox[_0x197613]['code']===_0x5fbab3&&(_0x1b60b6=_0x197613);});if(_0x1b60b6!==![])return codelootbox[_0x1b60b6][_0x500a68(0xbf)];},checkTitlecode=_0x25a2c2=>{const _0x16bd8d=_0x220606;let _0x2909db=![];Object[_0x16bd8d(0xbb)](codetitle)[_0x16bd8d(0xb5)](_0x2e1872=>{const _0x482c36=_0x16bd8d;codetitle[_0x2e1872][_0x482c36(0xc9)]===_0x25a2c2&&(_0x2909db=_0x2e1872);});if(_0x2909db!==![])return codetitle[_0x2909db]['code'];},checkTitletitle=_0x34321a=>{const _0x486336=_0x220606;let _0x35821b=![];Object[_0x486336(0xbb)](codetitle)[_0x486336(0xb5)](_0x24d2d2=>{const _0x5cdd21=_0x486336;codetitle[_0x24d2d2][_0x5cdd21(0xc9)]===_0x34321a&&(_0x35821b=_0x24d2d2);});if(_0x35821b!==![])return codetitle[_0x35821b][_0x486336(0xc1)];},checkLimitjumlah=_0x59a1e3=>{const _0x133c41=_0x220606;let _0x250e27=![];Object[_0x133c41(0xbb)](codelimit)[_0x133c41(0xb5)](_0x117e3f=>{const _0x49b0db=_0x133c41;codelimit[_0x117e3f][_0x49b0db(0xc9)]===_0x59a1e3&&(_0x250e27=_0x117e3f);});if(_0x250e27!==![])return codelimit[_0x250e27][_0x133c41(0xbf)];},checkMoneycode=_0x1499ad=>{const _0x472edb=_0x220606;let _0x52edd2=![];Object[_0x472edb(0xbb)](codemoney)[_0x472edb(0xb5)](_0x4d8254=>{codemoney[_0x4d8254]['code']===_0x1499ad&&(_0x52edd2=_0x4d8254);});if(_0x52edd2!==![])return codemoney[_0x52edd2]['code'];},checkMoneyjumlah=_0x4bd308=>{const _0x73abb=_0x220606;let _0x295cb7=![];Object[_0x73abb(0xbb)](codemoney)['forEach'](_0x33c803=>{const _0x35d6ee=_0x73abb;codemoney[_0x33c803][_0x35d6ee(0xc9)]===_0x4bd308&&(_0x295cb7=_0x33c803);});if(_0x295cb7!==![])return codemoney[_0x295cb7][_0x73abb(0xbf)];},checkCratecode=_0x5b0d03=>{const _0x3ca8ef=_0x220606;let _0x55b8f0=![];Object[_0x3ca8ef(0xbb)](codecreate)[_0x3ca8ef(0xb5)](_0x5a21c4=>{const _0x59d20b=_0x3ca8ef;codecreate[_0x5a21c4][_0x59d20b(0xc9)]===_0x5b0d03&&(_0x55b8f0=_0x5a21c4);});if(_0x55b8f0!==![])return codecreate[_0x55b8f0][_0x3ca8ef(0xc9)];},checkCratejumlah=_0x5ba64e=>{const _0x2e530b=_0x220606;let _0x4f6b81=![];Object[_0x2e530b(0xbb)](codecreate)[_0x2e530b(0xb5)](_0x2572d0=>{codecreate[_0x2572d0]['code']===_0x5ba64e&&(_0x4f6b81=_0x2572d0);});if(_0x4f6b81!==![])return codecreate[_0x4f6b81][_0x2e530b(0xbf)];},checkPremiumcode=_0xde2c4f=>{const _0x3caec5=_0x220606;let _0x44de8f=![];Object['keys'](codepremium)['forEach'](_0x35e6d9=>{codepremium[_0x35e6d9]['code']===_0xde2c4f&&(_0x44de8f=_0x35e6d9);});if(_0x44de8f!==![])return codepremium[_0x44de8f][_0x3caec5(0xc9)];},checkPremiumDays=_0x49e6b7=>{const _0x144da0=_0x220606;let _0x43ac44=![];Object[_0x144da0(0xbb)](codepremium)[_0x144da0(0xb5)](_0x2839b9=>{const _0x575d15=_0x144da0;codepremium[_0x2839b9][_0x575d15(0xc9)]===_0x49e6b7&&(_0x43ac44=_0x2839b9);});if(_0x43ac44!==![])return codepremium[_0x43ac44][_0x144da0(0xc0)];},checkPremiumTimeAll=_0x49a59c=>{const _0x21e1d5=_0x220606;let _0x550b52=![];Object[_0x21e1d5(0xbb)](codepremium)[_0x21e1d5(0xb5)](_0x1904f7=>{const _0x3e4abf=_0x21e1d5;codepremium[_0x1904f7][_0x3e4abf(0xc9)]===_0x49a59c&&(_0x550b52=_0x1904f7);});if(_0x550b52!==![])return codepremium[_0x550b52][_0x21e1d5(0xca)];},checkPremiumTime=_0x52f10f=>{const _0x34d9a1=_0x220606;let _0x443a73=![];Object['keys'](codepremium)['forEach'](_0x53dbb6=>{const _0x315660=_0x4a62;codepremium[_0x53dbb6][_0x315660(0xc9)]===_0x52f10f&&(_0x443a73=_0x53dbb6);});if(_0x443a73!==![])return codepremium[_0x443a73][_0x34d9a1(0xba)];},removeLimitcode=_0x1cb9f0=>{const _0x4f4ba8=_0x220606;let _0x1f6efb=[];for(let _0x40592c of codelimit){_0x1f6efb[_0x4f4ba8(0xd1)](_0x40592c[_0x4f4ba8(0xc9)]);}const _0x11b8c1=_0x1f6efb[_0x4f4ba8(0xc5)](_0x1cb9f0);if(_0x11b8c1==-0x1)return;codelimit[_0x4f4ba8(0xb6)](_0x11b8c1,0x1),fs[_0x4f4ba8(0xbd)](_0x4f4ba8(0xb7),JSON[_0x4f4ba8(0xc8)](codelimit,null,0x2));},removeLootcode=_0x19d5f5=>{const _0x5d7b41=_0x220606;let _0x4cb15d=[];for(let _0x2c3187 of codelootbox){_0x4cb15d[_0x5d7b41(0xd1)](_0x2c3187[_0x5d7b41(0xc9)]);}const _0x97ef6a=_0x4cb15d['indexOf'](_0x19d5f5);if(_0x97ef6a==-0x1)return;codelootbox['splice'](_0x97ef6a,0x1),fs[_0x5d7b41(0xbd)](_0x5d7b41(0xc3),JSON[_0x5d7b41(0xc8)](codelootbox,null,0x2));},removeMoneycode=_0x44a3be=>{const _0x57a189=_0x220606;let _0x25a170=[];for(let _0x4c5c1f of codemoney){_0x25a170['push'](_0x4c5c1f[_0x57a189(0xc9)]);}const _0x5627ce=_0x25a170[_0x57a189(0xc5)](_0x44a3be);if(_0x5627ce==-0x1)return;codemoney[_0x57a189(0xb6)](_0x5627ce,0x1),fs[_0x57a189(0xbd)]('./database/database/code/codemoney.json',JSON['stringify'](codemoney,null,0x2));},removeTitlecode=_0x228f6d=>{const _0xba186c=_0x220606;let _0x48c5ac=[];for(let _0x35d8c3 of codetitle){_0x48c5ac['push'](_0x35d8c3[_0xba186c(0xc9)]);}const _0x1adaa3=_0x48c5ac['indexOf'](_0x228f6d);if(_0x1adaa3==-0x1)return;codetitle[_0xba186c(0xb6)](_0x1adaa3,0x1),fs['writeFileSync'](_0xba186c(0xc2),JSON[_0xba186c(0xc8)](codetitle,null,0x2));},removeCratecode=_0x399a61=>{const _0x125cc0=_0x220606;let _0xb96969=[];for(let _0x5a420f of codecreate){_0xb96969['push'](_0x5a420f['code']);}const _0x3c2ea4=_0xb96969[_0x125cc0(0xc5)](_0x399a61);if(_0x3c2ea4==-0x1)return;codecreate['splice'](_0x3c2ea4,0x1),fs['writeFileSync'](_0x125cc0(0xc6),JSON['stringify'](codecreate,null,0x2));},removePremcode=_0x1be909=>{const _0x479a95=_0x220606;let _0x473217=[];for(let _0x16389c of codepremium){_0x473217[_0x479a95(0xd1)](_0x16389c[_0x479a95(0xc9)]);}const _0x3e2ead=_0x473217['indexOf'](_0x1be909);if(_0x3e2ead==-0x1)return;codepremium[_0x479a95(0xb6)](_0x3e2ead,0x1),fs[_0x479a95(0xbd)](_0x479a95(0xb9),JSON['stringify'](codepremium,null,0x2));};module['exports']={'allcode':{'checkPremiumcode':checkPremiumcode,'checkCratecode':checkCratecode,'checkCratejumlah':checkCratejumlah,'checkLimitcode':checkLimitcode,'checkLimitjumlah':checkLimitjumlah,'checkMoneycode':checkMoneycode,'checkMoneyjumlah':checkMoneyjumlah,'removeCratecode':removeCratecode,'removeLimitcode':removeLimitcode,'removeMoneycode':removeMoneycode,'removePremcode':removePremcode,'addCratecode':addCratecode,'addPremcode':addPremcode,'addMoneycode':addMoneycode,'addLimitcode':addLimitcode,'checkPremiumDays':checkPremiumDays,'addTitlecode':addTitlecode,'checkTitlecode':checkTitlecode,'checkTitletitle':checkTitletitle,'removeTitlecode':removeTitlecode,'checkPremiumTimeAll':checkPremiumTimeAll,'checkPremiumTime':checkPremiumTime,'addLootcode':addLootcode,'removeLootcode':removeLootcode,'checkLootcode':checkLootcode,'checkLootjumlah':checkLootjumlah}};function _0x1704(){const _0x304a44=['./database/database/code/codelimit.json','13488608EuxUKX','./database/database/code/codepremium.json','time','keys','806373jPWaDD','writeFileSync','190VElSmT','jumlah','days','title','./database/database/code/codetitle.json','./database/database/code/codelootbox.json','readFileSync','indexOf','./database/database/code/codecreate.json','204eJmPiI','stringify','code','timeAll','20554332mfMEaW','parse','2yoYpZm','./database/database/code/codemoney.json','961984yhHzPt','1277186anuZwL','push','15XWTnBb','60910WATrTo','8393644mCTadM','22VMgbdy','forEach','splice'];_0x1704=function(){return _0x304a44;};return _0x1704();}