const _0x5314eb=_0x3eb9;(function(_0x3cf93b,_0x2beca5){const _0x1a784e=_0x3eb9,_0x59f9b5=_0x3cf93b();while(!![]){try{const _0x436924=-parseInt(_0x1a784e(0x158))/0x1+parseInt(_0x1a784e(0x15c))/0x2+parseInt(_0x1a784e(0x153))/0x3*(-parseInt(_0x1a784e(0x165))/0x4)+-parseInt(_0x1a784e(0x14d))/0x5*(-parseInt(_0x1a784e(0x14e))/0x6)+parseInt(_0x1a784e(0x162))/0x7+parseInt(_0x1a784e(0x14c))/0x8*(parseInt(_0x1a784e(0x15e))/0x9)+-parseInt(_0x1a784e(0x160))/0xa;if(_0x436924===_0x2beca5)break;else _0x59f9b5['push'](_0x59f9b5['shift']());}catch(_0x159f9c){_0x59f9b5['push'](_0x59f9b5['shift']());}}}(_0x1df1,0xd348d));const fs=require('fs'),hunt=JSON['parse'](fs[_0x5314eb(0x14b)](_0x5314eb(0x163))),addHunt=_0x440324=>{const _0x318f1a=_0x5314eb,_0x4e7aa0={'id':_0x440324,'common':![],'rare':![],'epic':![],'legendary':![],'spesial':![],'mytical':![],'shunt':[{'hewan':0x0,'id':![]},{'hewan':0x0,'id':![]},{'hewan':0x0,'id':![]}],'mhunt':[{'hewan':0x0,'id':![]},{'hewan':0x0,'id':![]}]};hunt[_0x318f1a(0x164)](_0x4e7aa0),fs[_0x318f1a(0x14f)](_0x318f1a(0x163),JSON['stringify'](hunt,null,0x2));},EditStatusCommon=(_0xb72698,_0x2f2b0b)=>{const _0xcc0267=_0x5314eb;let _0x50693a=![];Object[_0xcc0267(0x15a)](hunt)[_0xcc0267(0x159)](_0x2264e7=>{hunt[_0x2264e7]['id']===_0xb72698&&(_0x50693a=_0x2264e7);}),_0x50693a!==![]&&(hunt[_0x50693a][_0xcc0267(0x161)]=_0x2f2b0b,fs[_0xcc0267(0x14f)]('./database/database/fun/shunt.json',JSON[_0xcc0267(0x152)](hunt,null,0x2)));},checkStatusCommon=_0x426908=>{const _0x20edd4=_0x5314eb;let _0x403c8e=![];Object[_0x20edd4(0x15a)](hunt)[_0x20edd4(0x159)](_0x14231c=>{hunt[_0x14231c]['id']===_0x426908&&(_0x403c8e=_0x14231c);});if(_0x403c8e!==![])return hunt[_0x403c8e]['common'];},EditStatusRare=(_0x982829,_0x2a6116)=>{const _0x5b11c4=_0x5314eb;let _0x3ee058=![];Object['keys'](hunt)['forEach'](_0x412693=>{hunt[_0x412693]['id']===_0x982829&&(_0x3ee058=_0x412693);}),_0x3ee058!==![]&&(hunt[_0x3ee058][_0x5b11c4(0x157)]=_0x2a6116,fs[_0x5b11c4(0x14f)](_0x5b11c4(0x163),JSON[_0x5b11c4(0x152)](hunt,null,0x2)));},checkStatusRare=_0x298696=>{const _0x592628=_0x5314eb;let _0x4d9aff=![];Object[_0x592628(0x15a)](hunt)['forEach'](_0x429dfa=>{hunt[_0x429dfa]['id']===_0x298696&&(_0x4d9aff=_0x429dfa);});if(_0x4d9aff!==![])return hunt[_0x4d9aff]['rare'];},EditStatusSpesial=(_0x31f4ba,_0x54abd4)=>{const _0x37d539=_0x5314eb;let _0x12f605=![];Object['keys'](hunt)[_0x37d539(0x159)](_0x5da908=>{hunt[_0x5da908]['id']===_0x31f4ba&&(_0x12f605=_0x5da908);}),_0x12f605!==![]&&(hunt[_0x12f605][_0x37d539(0x166)]=_0x54abd4,fs[_0x37d539(0x14f)](_0x37d539(0x163),JSON['stringify'](hunt,null,0x2)));},checkStatusEpic=_0x40583a=>{const _0x229b69=_0x5314eb;let _0x5ae747=![];Object['keys'](hunt)[_0x229b69(0x159)](_0x51f8b3=>{hunt[_0x51f8b3]['id']===_0x40583a&&(_0x5ae747=_0x51f8b3);});if(_0x5ae747!==![])return hunt[_0x5ae747][_0x229b69(0x155)];},EditStatusEpic=(_0x661be7,_0x107626)=>{const _0x1c0896=_0x5314eb;let _0x44267a=![];Object[_0x1c0896(0x15a)](hunt)[_0x1c0896(0x159)](_0x25654a=>{hunt[_0x25654a]['id']===_0x661be7&&(_0x44267a=_0x25654a);}),_0x44267a!==![]&&(hunt[_0x44267a][_0x1c0896(0x155)]=_0x107626,fs['writeFileSync'](_0x1c0896(0x163),JSON[_0x1c0896(0x152)](hunt,null,0x2)));},EditStatusLegendary=(_0xe7f556,_0x348da0)=>{const _0x509805=_0x5314eb;let _0x583dc5=![];Object[_0x509805(0x15a)](hunt)[_0x509805(0x159)](_0x1b0ca1=>{hunt[_0x1b0ca1]['id']===_0xe7f556&&(_0x583dc5=_0x1b0ca1);}),_0x583dc5!==![]&&(hunt[_0x583dc5][_0x509805(0x150)]=_0x348da0,fs[_0x509805(0x14f)](_0x509805(0x163),JSON[_0x509805(0x152)](hunt,null,0x2)));},checkStatusLegendary=_0x63f55f=>{const _0x3dc814=_0x5314eb;let _0xf6f2df=![];Object[_0x3dc814(0x15a)](hunt)[_0x3dc814(0x159)](_0x3f03d1=>{hunt[_0x3f03d1]['id']===_0x63f55f&&(_0xf6f2df=_0x3f03d1);});if(_0xf6f2df!==![])return hunt[_0xf6f2df][_0x3dc814(0x150)];},checkStatusSpesial=_0x18bedf=>{const _0x32d392=_0x5314eb;let _0x35fc7e=![];Object[_0x32d392(0x15a)](hunt)[_0x32d392(0x159)](_0x2e3f4f=>{hunt[_0x2e3f4f]['id']===_0x18bedf&&(_0x35fc7e=_0x2e3f4f);});if(_0x35fc7e!==![])return hunt[_0x35fc7e]['spesial'];},EditSpesial=(_0x5a1bc4,_0x196e70,_0x2815e5)=>{const _0x8fe5c=_0x5314eb;let _0x11f76a=![];Object[_0x8fe5c(0x15a)](hunt)[_0x8fe5c(0x159)](_0x278134=>{hunt[_0x278134]['id']===_0x5a1bc4&&(_0x11f76a=_0x278134);}),_0x11f76a!==![]&&(hunt[_0x11f76a][_0x8fe5c(0x156)][_0x2815e5]['id']=_0x196e70,fs[_0x8fe5c(0x14f)](_0x8fe5c(0x163),JSON[_0x8fe5c(0x152)](hunt,null,0x2)));},EditMhunt=(_0x10cf93,_0x428e34,_0x3d65b8)=>{const _0x23cfb2=_0x5314eb;let _0x205ee4=![];Object[_0x23cfb2(0x15a)](hunt)[_0x23cfb2(0x159)](_0x36e414=>{hunt[_0x36e414]['id']===_0x10cf93&&(_0x205ee4=_0x36e414);}),_0x205ee4!==![]&&(hunt[_0x205ee4][_0x23cfb2(0x151)][_0x3d65b8]['id']=_0x428e34,fs[_0x23cfb2(0x14f)]('./database/database/fun/shunt.json',JSON['stringify'](hunt,null,0x2)));},checkSpesial=(_0x27a035,_0xcd1d58)=>{const _0x5d03b0=_0x5314eb;let _0x5d83aa=![];Object['keys'](hunt)[_0x5d03b0(0x159)](_0x24f009=>{hunt[_0x24f009]['id']===_0x27a035&&(_0x5d83aa=_0x24f009);});if(_0x5d83aa!==![])return hunt[_0x5d83aa][_0x5d03b0(0x156)][_0x5d03b0(0x154)]===0x2&&(hunt[_0x5d83aa][_0x5d03b0(0x156)]['push']({'hewan':0x0,'id':![]}),fs[_0x5d03b0(0x14f)]('./database/database/fun/shunt.json',JSON[_0x5d03b0(0x152)](hunt,null,0x2))),hunt[_0x5d83aa][_0x5d03b0(0x156)][_0xcd1d58];},checkMhunt=(_0x4512c6,_0x28e178)=>{const _0x52bbc7=_0x5314eb;let _0x874667=![];Object[_0x52bbc7(0x15a)](hunt)[_0x52bbc7(0x159)](_0x1bebe6=>{hunt[_0x1bebe6]['id']===_0x4512c6&&(_0x874667=_0x1bebe6);});if(_0x874667!==![])return hunt[_0x874667][_0x52bbc7(0x151)]['length']===0x1&&(hunt[_0x874667][_0x52bbc7(0x151)][_0x52bbc7(0x164)]({'hewan':0x0,'id':![]}),fs['writeFileSync']('./database/database/fun/shunt.json',JSON[_0x52bbc7(0x152)](hunt,null,0x2))),hunt[_0x874667][_0x52bbc7(0x151)][_0x52bbc7(0x154)]===0x0&&(hunt[_0x874667]['mhunt'][_0x52bbc7(0x164)]({'hewan':0x0,'id':![]}),hunt[_0x874667][_0x52bbc7(0x151)]['push']({'hewan':0x0,'id':![]}),fs[_0x52bbc7(0x14f)]('./database/database/fun/shunt.json',JSON[_0x52bbc7(0x152)](hunt,null,0x2))),hunt[_0x874667][_0x52bbc7(0x151)][_0x28e178];},EditStatusMyctal=(_0x40a6f8,_0x47ccaf)=>{const _0x4501de=_0x5314eb;let _0x38062e=![];Object[_0x4501de(0x15a)](hunt)['forEach'](_0x50da9c=>{hunt[_0x50da9c]['id']===_0x40a6f8&&(_0x38062e=_0x50da9c);}),_0x38062e!==![]&&(hunt[_0x38062e][_0x4501de(0x15b)]=_0x47ccaf,fs['writeFileSync']('./database/database/fun/shunt.json',JSON['stringify'](hunt,null,0x2)));},checkStatusMycyal=_0x2d57b3=>{const _0x380589=_0x5314eb;let _0x297d39=![];Object[_0x380589(0x15a)](hunt)['forEach'](_0x2070ab=>{hunt[_0x2070ab]['id']===_0x2d57b3&&(_0x297d39=_0x2070ab);});if(_0x297d39!==![])return hunt[_0x297d39][_0x380589(0x15b)];},addSpesial=(_0x5a8675,_0x1d0374,_0x25fc4c)=>{const _0x10d76f=_0x5314eb;let _0x2b53bb=![];Object['keys'](hunt)[_0x10d76f(0x159)](_0x48984a=>{hunt[_0x48984a]['id']===_0x5a8675&&(_0x2b53bb=_0x48984a);}),_0x2b53bb!==![]&&(hunt[_0x2b53bb][_0x10d76f(0x156)][_0x25fc4c][_0x10d76f(0x15f)]+=parseInt(_0x1d0374),fs[_0x10d76f(0x14f)](_0x10d76f(0x163),JSON['stringify'](hunt,null,0x2)));},addMhunt=(_0x163c8c,_0xb93094,_0x190d5c)=>{const _0x473f20=_0x5314eb;let _0x245dc6=![];Object['keys'](hunt)[_0x473f20(0x159)](_0x5239e9=>{hunt[_0x5239e9]['id']===_0x163c8c&&(_0x245dc6=_0x5239e9);}),_0x245dc6!==![]&&(hunt[_0x245dc6][_0x473f20(0x151)][_0x190d5c][_0x473f20(0x15f)]+=parseInt(_0xb93094),fs[_0x473f20(0x14f)](_0x473f20(0x163),JSON[_0x473f20(0x152)](hunt,null,0x2)));},removeSpesial=(_0x371d5e,_0x505855,_0x384831)=>{const _0x54c454=_0x5314eb;let _0x5ab49b=![];Object[_0x54c454(0x15a)](hunt)['forEach'](_0x16f4b6=>{hunt[_0x16f4b6]['id']===_0x371d5e&&(_0x5ab49b=_0x16f4b6);}),_0x5ab49b!==![]&&(hunt[_0x5ab49b][_0x54c454(0x156)][_0x384831][_0x54c454(0x15f)]-=parseInt(_0x505855),fs['writeFileSync'](_0x54c454(0x163),JSON[_0x54c454(0x152)](hunt,null,0x2)));},removeMhunt=(_0x3027b9,_0x231e28,_0x562fd1)=>{const _0x1ff884=_0x5314eb;let _0x51e793=![];Object['keys'](hunt)[_0x1ff884(0x159)](_0x3c6245=>{hunt[_0x3c6245]['id']===_0x3027b9&&(_0x51e793=_0x3c6245);}),_0x51e793!==![]&&(hunt[_0x51e793][_0x1ff884(0x151)][_0x562fd1][_0x1ff884(0x15f)]-=parseInt(_0x231e28),fs[_0x1ff884(0x14f)](_0x1ff884(0x163),JSON[_0x1ff884(0x152)](hunt,null,0x2)));};function _0x1df1(){const _0x528ebb=['mhunt','stringify','313545ENGmBi','length','epic','shunt','rare','953067usqIhM','forEach','keys','mytical','1601426wwrnts','exports','12407067yUqCeo','hewan','19770630aRLCoT','common','8494689llEvxg','./database/database/fun/shunt.json','push','40rASrPg','spesial','readFileSync','8xzQmuG','3619745wlOduR','12POiqHd','writeFileSync','legendary'];_0x1df1=function(){return _0x528ebb;};return _0x1df1();}function _0x3eb9(_0x2447ec,_0xd6c2e6){const _0x1df10d=_0x1df1();return _0x3eb9=function(_0x3eb9d3,_0x426a56){_0x3eb9d3=_0x3eb9d3-0x14b;let _0x5a205a=_0x1df10d[_0x3eb9d3];return _0x5a205a;},_0x3eb9(_0x2447ec,_0xd6c2e6);}module[_0x5314eb(0x15d)]={'shunt':{'addHunt':addHunt,'EditSpesial':EditSpesial,'checkSpesial':checkSpesial,'addSpesial':addSpesial,'removeSpesial':removeSpesial,'EditStatusCommon':EditStatusCommon,'checkStatusCommon':checkStatusCommon,'EditStatusRare':EditStatusRare,'checkStatusRare':checkStatusRare,'EditStatusEpic':EditStatusEpic,'checkStatusEpic':checkStatusEpic,'EditStatusLegendary':EditStatusLegendary,'checkStatusLegendary':checkStatusLegendary,'EditStatusSpesial':EditStatusSpesial,'checkStatusSpesial':checkStatusSpesial,'EditStatusMyctal':EditStatusMyctal,'checkStatusMycyal':checkStatusMycyal,'checkMhunt':checkMhunt,'EditMhunt':EditMhunt,'addMhunt':addMhunt,'removeMhunt':removeMhunt}};