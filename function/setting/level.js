const _0x5a7c9b=_0x1cc1;function _0x1cc1(_0x3d6884,_0x4dde2b){const _0x11ecda=_0x11ec();return _0x1cc1=function(_0x1cc1d6,_0x397233){_0x1cc1d6=_0x1cc1d6-0x191;let _0x4a11e8=_0x11ecda[_0x1cc1d6];return _0x4a11e8;},_0x1cc1(_0x3d6884,_0x4dde2b);}(function(_0x486223,_0x37ea4f){const _0xbc372c=_0x1cc1,_0xbc6b7d=_0x486223();while(!![]){try{const _0x152588=parseInt(_0xbc372c(0x195))/0x1+-parseInt(_0xbc372c(0x19c))/0x2+parseInt(_0xbc372c(0x192))/0x3*(parseInt(_0xbc372c(0x191))/0x4)+parseInt(_0xbc372c(0x197))/0x5+-parseInt(_0xbc372c(0x19b))/0x6+parseInt(_0xbc372c(0x194))/0x7*(-parseInt(_0xbc372c(0x1a3))/0x8)+-parseInt(_0xbc372c(0x19f))/0x9;if(_0x152588===_0x37ea4f)break;else _0xbc6b7d['push'](_0xbc6b7d['shift']());}catch(_0x214df2){_0xbc6b7d['push'](_0xbc6b7d['shift']());}}}(_0x11ec,0x719c5));const fs=require('fs'),level=JSON[_0x5a7c9b(0x1a2)](fs[_0x5a7c9b(0x196)](_0x5a7c9b(0x1a4))),getLevelingXp=_0x1fb30a=>{const _0x5ce4f3=_0x5a7c9b;let _0x3e2eda=![];Object['keys'](level)[_0x5ce4f3(0x193)](_0xf5e987=>{const _0x29ac83=_0x5ce4f3;level[_0xf5e987][_0x29ac83(0x1a1)]===_0x1fb30a&&(_0x3e2eda=_0xf5e987);});if(_0x3e2eda!==![])return level[_0x3e2eda]['xp'];},getLevelingLevel=_0x5cea93=>{const _0x46af35=_0x5a7c9b;let _0x1691ae=![];Object[_0x46af35(0x1a0)](level)['forEach'](_0x22bef7=>{level[_0x22bef7]['jid']===_0x5cea93&&(_0x1691ae=_0x22bef7);});if(_0x1691ae!==![])return level[_0x1691ae][_0x46af35(0x198)];},getUserRank=_0x174e6b=>{const _0x59836b=_0x5a7c9b;let _0xd5e6e2=null,_0x10e647=![];level[_0x59836b(0x19e)]((_0x2ae0b7,_0x287e0c)=>_0x2ae0b7['xp']<_0x287e0c['xp']?0x1:-0x1),Object[_0x59836b(0x1a0)](level)[_0x59836b(0x193)](_0xdd749=>{level[_0xdd749]['jid']===_0x174e6b&&(_0xd5e6e2=_0xdd749,_0x10e647=!![]);});if(_0x10e647===![]&&_0xd5e6e2===null){const _0x3797d8={'jid':sender,'xp':0x1,'level':0x0};return level['push'](_0x3797d8),fs[_0x59836b(0x199)](_0x59836b(0x1a4),JSON['stringify'](level,null,0x2)),0x63;}else return parseInt(_0xd5e6e2);},getLevelingId=_0x2c0204=>{const _0x26d7d4=_0x5a7c9b;let _0x2ab9c2=![];Object[_0x26d7d4(0x1a0)](level)[_0x26d7d4(0x193)](_0xdd8e51=>{const _0x4c14d2=_0x26d7d4;level[_0xdd8e51][_0x4c14d2(0x1a1)]===_0x2c0204&&(_0x2ab9c2=_0xdd8e51);});if(_0x2ab9c2!==![])return level[_0x2ab9c2][_0x26d7d4(0x1a1)];},addLevelingXp=(_0x179575,_0x346de6)=>{const _0x2e1636=_0x5a7c9b;let _0x3bf3c3=![];Object[_0x2e1636(0x1a0)](level)[_0x2e1636(0x193)](_0x50cd13=>{const _0x3178a2=_0x2e1636;level[_0x50cd13][_0x3178a2(0x1a1)]===_0x179575&&(_0x3bf3c3=_0x50cd13);}),_0x3bf3c3!==![]&&(level[_0x3bf3c3]['xp']+=_0x346de6,fs[_0x2e1636(0x199)](_0x2e1636(0x1a4),JSON[_0x2e1636(0x19d)](level,null,0x2)));},addLevelingLevel=(_0x2e3499,_0x50a60d)=>{const _0x53918b=_0x5a7c9b;let _0x8f8c64=![];Object[_0x53918b(0x1a0)](level)[_0x53918b(0x193)](_0x16491a=>{const _0x44fdd5=_0x53918b;level[_0x16491a][_0x44fdd5(0x1a1)]===_0x2e3499&&(_0x8f8c64=_0x16491a);}),_0x8f8c64!==![]&&(level[_0x8f8c64][_0x53918b(0x198)]+=_0x50a60d,fs['writeFileSync'](_0x53918b(0x1a4),JSON['stringify'](level,null,0x2)));},addLevelingId=_0xaa3771=>{const _0x9713ef=_0x5a7c9b,_0x13947f={'jid':_0xaa3771,'xp':0x1,'level':0x0};level['push'](_0x13947f),fs['writeFileSync'](_0x9713ef(0x1a4),JSON[_0x9713ef(0x19d)](level,null,0x2));};module[_0x5a7c9b(0x19a)]={'level':{'getLevelingLevel':getLevelingLevel,'getLevelingXp':getLevelingXp,'getLevelingId':getLevelingId,'addLevelingXp':addLevelingXp,'addLevelingLevel':addLevelingLevel,'addLevelingId':addLevelingId,'getUserRank':getUserRank}};function _0x11ec(){const _0x386b7f=['208RcWkcw','./database/database/settings/leveluser.json','3356KQckKv','3135fIftnB','forEach','10598NHqdRi','457338DGivzZ','readFileSync','3775675YnMDwu','level','writeFileSync','exports','2495826lPjuse','1117800clDNjt','stringify','sort','5486796WbUzrE','keys','jid','parse'];_0x11ec=function(){return _0x386b7f;};return _0x11ec();}