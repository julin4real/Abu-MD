'use strict';const _0x5394b2=_0x25fd;(function(_0x519fa2,_0x72757f){const _0x56a994=_0x25fd,_0x52ff0c=_0x519fa2();while(!![]){try{const _0x157bba=parseInt(_0x56a994(0x13a))/0x1*(-parseInt(_0x56a994(0x16d))/0x2)+parseInt(_0x56a994(0x122))/0x3+parseInt(_0x56a994(0x172))/0x4*(parseInt(_0x56a994(0x157))/0x5)+-parseInt(_0x56a994(0x167))/0x6*(-parseInt(_0x56a994(0x127))/0x7)+parseInt(_0x56a994(0x119))/0x8*(parseInt(_0x56a994(0x17d))/0x9)+parseInt(_0x56a994(0x13c))/0xa+-parseInt(_0x56a994(0x15b))/0xb*(parseInt(_0x56a994(0x12a))/0xc);if(_0x157bba===_0x72757f)break;else _0x52ff0c['push'](_0x52ff0c['shift']());}catch(_0x93cab5){_0x52ff0c['push'](_0x52ff0c['shift']());}}}(_0x3de8,0xbabe5));const fileType=require(_0x5394b2(0x121)),config=require(_0x5394b2(0x124)),{isUrl,store,getBuffer,writeExifImg,writeExifVid,writeExifWebp,tiny,parseJid,getRandom,isNumber,decodeJid}=require('.'),fs=require('fs'),PhoneNumber=require(_0x5394b2(0x136)),{connected}=require(_0x5394b2(0x18a)),{generateForwardMessageContent,generateWAMessageFromContent,generateWAMessage,generateWAMessageContent}=require('@adiwajshing/baileys');class Base{constructor(_0x4eb77d,_0x269e8d){const _0x3b9bb7=_0x5394b2;Object[_0x3b9bb7(0x126)](this,_0x3b9bb7(0x14d),{'value':_0x4eb77d}),Object['defineProperty'](this,'m',{'value':_0x269e8d});}[_0x5394b2(0x146)](){const _0x3047fc=_0x5394b2;return Object[_0x3047fc(0x179)](Object[_0x3047fc(0x149)](this),this);}[_0x5394b2(0x11f)](_0x25d019){return _0x25d019;}}class Video extends Base{constructor(_0x89ca75,_0x209672,_0x16d59d){const _0x2f8b31=_0x5394b2;super(_0x89ca75);if(_0x209672)this[_0x2f8b31(0x11f)](_0x209672,_0x16d59d);}[_0x5394b2(0x11f)](_0x1adef3,_0x4c47d1){const _0x3a8596=_0x5394b2;return this[_0x3a8596(0x164)]=_0x1adef3[_0x3a8596(0x164)],this['id']=_0x1adef3[_0x3a8596(0x140)]['id']===undefined?undefined:_0x1adef3[_0x3a8596(0x140)]['id'],this[_0x3a8596(0x116)]=_0x1adef3[_0x3a8596(0x140)]['remoteJid'],this[_0x3a8596(0x130)]=_0x1adef3[_0x3a8596(0x130)],this[_0x3a8596(0x142)]=_0x1adef3[_0x3a8596(0x112)],this[_0x3a8596(0x170)]=config[_0x3a8596(0x150)]['split'](',')[_0x3a8596(0x129)](this['participant'][_0x3a8596(0x175)]('@')[0x0]),this[_0x3a8596(0x169)]=_0x1adef3[_0x3a8596(0x153)],this[_0x3a8596(0x137)]=_0x1adef3[_0x3a8596(0x140)][_0x3a8596(0x137)],this['timestamp']=typeof _0x1adef3['messageTimestamp']===_0x3a8596(0x176)?_0x1adef3['messageTimestamp'][_0x3a8596(0x143)]:_0x1adef3['messageTimestamp'],this[_0x3a8596(0x140)]=_0x1adef3[_0x3a8596(0x140)],this[_0x3a8596(0x187)]=_0x1adef3[_0x3a8596(0x187)][_0x3a8596(0x159)],_0x1adef3[_0x3a8596(0x14f)]?this[_0x3a8596(0x120)]=_0x1adef3[_0x3a8596(0x14f)]:this['reply_message']=![],super[_0x3a8596(0x11f)](_0x1adef3);}}function _0x25fd(_0x2f1080,_0x3c2ce7){const _0x3de831=_0x3de8();return _0x25fd=function(_0x25fd33,_0x382e5b){_0x25fd33=_0x25fd33-0x10e;let _0x3c1f22=_0x3de831[_0x25fd33];return _0x3c1f22;},_0x25fd(_0x2f1080,_0x3c2ce7);}class Image extends Base{constructor(_0x3c45f8,_0x325c1c,_0xea2ea7){const _0x28f6da=_0x5394b2;super(_0x3c45f8);if(_0x325c1c)this[_0x28f6da(0x11f)](_0x325c1c,_0xea2ea7);}[_0x5394b2(0x11f)](_0x155df6,_0x127e53){const _0x2c88ed=_0x5394b2;return this[_0x2c88ed(0x164)]=_0x155df6[_0x2c88ed(0x164)],this['id']=_0x155df6['key']['id']===undefined?undefined:_0x155df6[_0x2c88ed(0x140)]['id'],this[_0x2c88ed(0x116)]=_0x155df6[_0x2c88ed(0x140)][_0x2c88ed(0x163)],this['pushName']=_0x155df6['pushName'],this[_0x2c88ed(0x142)]=_0x155df6[_0x2c88ed(0x112)],this['sudo']=config['SUDO']['split'](',')[_0x2c88ed(0x129)](this['participant'][_0x2c88ed(0x175)]('@')[0x0]),this[_0x2c88ed(0x169)]=_0x155df6[_0x2c88ed(0x153)],this['fromMe']=_0x155df6[_0x2c88ed(0x140)]['fromMe'],this['timestamp']=typeof _0x155df6['messageTimestamp']==='object'?_0x155df6[_0x2c88ed(0x139)][_0x2c88ed(0x143)]:_0x155df6[_0x2c88ed(0x139)],this[_0x2c88ed(0x140)]=_0x155df6[_0x2c88ed(0x140)],this[_0x2c88ed(0x187)]=_0x155df6[_0x2c88ed(0x187)][_0x2c88ed(0x189)],_0x155df6[_0x2c88ed(0x14f)]?this['reply_message']=_0x155df6[_0x2c88ed(0x14f)]:this[_0x2c88ed(0x120)]=![],super['_patch'](_0x155df6);}async[_0x5394b2(0x184)](_0x155048,_0x20f5ea={'withTag':!![]}){const _0x49fce8=_0x5394b2;return this[_0x49fce8(0x14d)][_0x49fce8(0x173)](this[_0x49fce8(0x116)],{'text':require(_0x49fce8(0x147))[_0x49fce8(0x11a)](_0x155048),..._0x20f5ea},{..._0x20f5ea,'quoted':this[_0x49fce8(0x161)]});}}class Message extends Base{constructor(_0x139077,_0x3de10d,_0x9ac4e5){const _0x31e046=_0x5394b2;super(_0x139077,_0x3de10d);if(_0x3de10d)this[_0x31e046(0x11f)](_0x3de10d,_0x9ac4e5);}['_patch'](_0x375d56,_0x43b353){const _0x1e7c4f=_0x5394b2;return this[_0x1e7c4f(0x148)]=decodeJid(this[_0x1e7c4f(0x14d)][_0x1e7c4f(0x148)]['id']),this['key']=_0x375d56[_0x1e7c4f(0x140)],this[_0x1e7c4f(0x164)]=_0x375d56[_0x1e7c4f(0x164)],this[_0x1e7c4f(0x152)]=_0x375d56[_0x1e7c4f(0x152)],this['id']=_0x375d56[_0x1e7c4f(0x140)]['id']===undefined?undefined:_0x375d56[_0x1e7c4f(0x140)]['id'],this['jid']=_0x375d56['key'][_0x1e7c4f(0x163)],this[_0x1e7c4f(0x187)]={'key':_0x375d56[_0x1e7c4f(0x140)],'message':_0x375d56['message']},this[_0x1e7c4f(0x130)]=_0x375d56['pushName'],this[_0x1e7c4f(0x142)]=_0x375d56['sender'],this[_0x1e7c4f(0x170)]=config['SUDO'][_0x1e7c4f(0x175)](',')[_0x1e7c4f(0x129)](this[_0x1e7c4f(0x142)][_0x1e7c4f(0x175)]('@')[0x0]),this[_0x1e7c4f(0x13b)]=_0x375d56['body'],this[_0x1e7c4f(0x137)]=_0x375d56['key']['fromMe'],this[_0x1e7c4f(0x187)]=_0x43b353[_0x1e7c4f(0x187)],this[_0x1e7c4f(0x156)]=typeof _0x375d56[_0x1e7c4f(0x139)]===_0x1e7c4f(0x176)?_0x375d56['messageTimestamp'][_0x1e7c4f(0x143)]:_0x375d56['messageTimestamp'],_0x375d56[_0x1e7c4f(0x187)][_0x1e7c4f(0x183)](_0x1e7c4f(0x186))&&_0x375d56[_0x1e7c4f(0x187)][_0x1e7c4f(0x186)]['hasOwnProperty'](_0x1e7c4f(0x160))===!![]&&_0x375d56[_0x1e7c4f(0x187)][_0x1e7c4f(0x186)][_0x1e7c4f(0x160)]['hasOwnProperty'](_0x1e7c4f(0x11e))?this[_0x1e7c4f(0x128)]=_0x375d56[_0x1e7c4f(0x187)]['extendedTextMessage'][_0x1e7c4f(0x160)][_0x1e7c4f(0x11e)]:this['mention']=![],_0x375d56['message'][_0x1e7c4f(0x183)]('extendedTextMessage')&&_0x375d56[_0x1e7c4f(0x187)][_0x1e7c4f(0x186)][_0x1e7c4f(0x183)](_0x1e7c4f(0x160))===!![]&&_0x375d56[_0x1e7c4f(0x187)][_0x1e7c4f(0x186)]['contextInfo'][_0x1e7c4f(0x183)](_0x1e7c4f(0x145))?(this[_0x1e7c4f(0x120)]=new ReplyMessage(this['client'],_0x375d56['message']['extendedTextMessage']['contextInfo'],_0x375d56),this[_0x1e7c4f(0x120)][_0x1e7c4f(0x178)]=_0x375d56[_0x1e7c4f(0x14f)][_0x1e7c4f(0x178)]||_0x1e7c4f(0x186),this[_0x1e7c4f(0x120)][_0x1e7c4f(0x11c)]=_0x375d56[_0x1e7c4f(0x14f)][_0x1e7c4f(0x11c)],this['reply_message'][_0x1e7c4f(0x16c)]=_0x375d56[_0x1e7c4f(0x14f)][_0x1e7c4f(0x13b)][_0x1e7c4f(0x16c)]||_0x1e7c4f(0x11d),this[_0x1e7c4f(0x120)][_0x1e7c4f(0x140)]=_0x375d56[_0x1e7c4f(0x14f)][_0x1e7c4f(0x140)],this[_0x1e7c4f(0x120)]['message']=_0x375d56[_0x1e7c4f(0x14f)]['message']):this[_0x1e7c4f(0x120)]=![],super[_0x1e7c4f(0x11f)](_0x375d56);}async[_0x5394b2(0x158)](){const _0x2893d4=_0x5394b2;console[_0x2893d4(0x158)](this[_0x2893d4(0x161)]);}async[_0x5394b2(0x18e)](_0x55011b,_0x2df9ce={}){const _0x56face=_0x5394b2;let {data:_0x1be7db}=await this['client']['getFile'](_0x55011b),_0x48cd04=await fileType[_0x56face(0x110)](_0x1be7db);return this['client'][_0x56face(0x173)](this[_0x56face(0x116)],{[_0x48cd04['mime']['split']('/')[0x0]]:_0x1be7db,..._0x2df9ce},{..._0x2df9ce});}async[_0x5394b2(0x13f)](){const _0x2b3441=_0x5394b2;let _0x2e42da=await this['m']['download'](),_0x58d245=await fileType[_0x2b3441(0x110)](_0x2e42da);return await fs[_0x2b3441(0x12c)]['writeFile'](new Date()+_0x58d245[_0x2b3441(0x12f)],_0x2e42da),new Date()+_0x58d245[_0x2b3441(0x12f)];}async[_0x5394b2(0x184)](_0x2bddb8,_0x58bf25={}){const _0x182cbe=_0x5394b2;return this['client'][_0x182cbe(0x173)](this[_0x182cbe(0x116)],{'text':require(_0x182cbe(0x147))[_0x182cbe(0x11a)](_0x2bddb8),..._0x58bf25},{..._0x58bf25,'quoted':this});}async[_0x5394b2(0x16f)](_0x1ed16f,_0x5d4f27,_0x12d5f9={}){const _0x588db1=_0x5394b2;return this['client'][_0x588db1(0x173)](_0x1ed16f,{'text':require('util')[_0x588db1(0x11a)](_0x5d4f27),..._0x12d5f9},{..._0x12d5f9});}async[_0x5394b2(0x173)](_0x18f375,_0xc84fb5={'packname':_0x5394b2(0x18d),'author':_0x5394b2(0x138)},_0x529221='text'){const _0x30e8d8=_0x5394b2;switch(_0x529221[_0x30e8d8(0x133)]()){case'text':{return this[_0x30e8d8(0x14d)]['sendMessage'](this[_0x30e8d8(0x116)],{'text':_0x18f375,..._0xc84fb5},{..._0xc84fb5});}break;case'image':{if(Buffer[_0x30e8d8(0x13d)](_0x18f375))return this[_0x30e8d8(0x14d)][_0x30e8d8(0x173)](this[_0x30e8d8(0x116)],{'image':_0x18f375,..._0xc84fb5},{..._0xc84fb5});else{if(isUrl(_0x18f375))return this[_0x30e8d8(0x14d)]['sendMessage'](this[_0x30e8d8(0x116)],{'image':{'url':_0x18f375},..._0xc84fb5},{..._0xc84fb5});}}break;case _0x30e8d8(0x12d):{if(Buffer[_0x30e8d8(0x13d)](_0x18f375))return this[_0x30e8d8(0x14d)][_0x30e8d8(0x173)](this['jid'],{'video':_0x18f375,..._0xc84fb5},{..._0xc84fb5});else{if(isUrl(_0x18f375))return this[_0x30e8d8(0x14d)][_0x30e8d8(0x173)](this[_0x30e8d8(0x116)],{'video':{'url':_0x18f375},..._0xc84fb5},{..._0xc84fb5});}}case'audio':{if(Buffer[_0x30e8d8(0x13d)](_0x18f375))return this[_0x30e8d8(0x14d)][_0x30e8d8(0x173)](this[_0x30e8d8(0x116)],{'audio':_0x18f375,..._0xc84fb5},{..._0xc84fb5});else{if(isUrl(_0x18f375))return this[_0x30e8d8(0x14d)][_0x30e8d8(0x173)](this[_0x30e8d8(0x116)],{'audio':{'url':_0x18f375},..._0xc84fb5},{..._0xc84fb5});}}break;case _0x30e8d8(0x17b):let _0x5aa308=await generateWAMessage(this[_0x30e8d8(0x116)],_0x18f375,_0xc84fb5),_0x27ffad={'viewOnceMessage':{'message':{..._0x5aa308[_0x30e8d8(0x187)]}}};await this[_0x30e8d8(0x14d)][_0x30e8d8(0x166)](this[_0x30e8d8(0x116)],_0x27ffad,{'messageId':_0x5aa308['key']['id']});break;case _0x30e8d8(0x18b):{let {data:_0x33f43a,mime:_0x3c9219}=await this[_0x30e8d8(0x14d)][_0x30e8d8(0x17a)](_0x18f375);if(_0x3c9219=='image/webp'){let _0x4ea8bd=await writeExifWebp(_0x33f43a,_0xc84fb5);await this[_0x30e8d8(0x14d)][_0x30e8d8(0x173)](this[_0x30e8d8(0x116)],{'sticker':{'url':_0x4ea8bd},..._0xc84fb5},_0xc84fb5);}else{_0x3c9219=await _0x3c9219['split']('/')[0x0];if(_0x3c9219===_0x30e8d8(0x12d))await this['client'][_0x30e8d8(0x14a)](this[_0x30e8d8(0x116)],_0x18f375,_0xc84fb5);else _0x3c9219===_0x30e8d8(0x17f)&&await this['client'][_0x30e8d8(0x14a)](this[_0x30e8d8(0x116)],_0x18f375,_0xc84fb5);}}break;}}async[_0x5394b2(0x15c)](_0x8f0ac0,_0x26d6c3,_0x4d8bb3={}){const _0x4a5050=_0x5394b2;let _0x3037c5=generateWAMessageFromContent(_0x8f0ac0,_0x26d6c3,{..._0x4d8bb3,'userJid':this['client']['user']['id']});return await this['client'][_0x4a5050(0x166)](_0x8f0ac0,_0x3037c5[_0x4a5050(0x187)],{'messageId':_0x3037c5[_0x4a5050(0x140)]['id'],..._0x4d8bb3}),_0x3037c5;}async[_0x5394b2(0x113)](_0x3e98ef,_0x256c3b={}){const _0x4949c4=_0x5394b2;let _0xa8cac6=await getBuffer(_0x3e98ef),_0x35b674=await fileType[_0x4949c4(0x110)](_0xa8cac6),_0x4098aa=_0x35b674[_0x4949c4(0x14c)][_0x4949c4(0x175)]('/')[0x0];_0x4098aa===_0x4949c4(0x15e)&&(_0x256c3b[_0x4949c4(0x16c)]=_0x4949c4(0x132));if(_0x4098aa===_0x4949c4(0x180))_0x4098aa=_0x4949c4(0x135);return this[_0x4949c4(0x14d)][_0x4949c4(0x173)](this['jid'],{[_0x4098aa]:_0xa8cac6,..._0x256c3b},{..._0x256c3b});}async[_0x5394b2(0x117)](_0x57705e){const _0x32f82a=_0x5394b2;await sock[_0x32f82a(0x15f)](_0x57705e,this[_0x32f82a(0x116)]);}async[_0x5394b2(0x151)](_0x1b7c26){const _0xe57e52=_0x5394b2;await this[_0xe57e52(0x14d)][_0xe57e52(0x173)](this[_0xe57e52(0x116)],{'delete':_0x1b7c26});}async[_0x5394b2(0x15d)](_0x10af82){const _0x26cc5d=_0x5394b2;await this[_0x26cc5d(0x14d)][_0x26cc5d(0x174)](_0x10af82);}async[_0x5394b2(0x13e)](_0x6313fb){const _0x5b0227=_0x5394b2;return await this[_0x5b0227(0x14d)][_0x5b0227(0x185)](_0x6313fb,'image');}async['setPP'](_0x28ca28,_0x1dad4b){const _0x3a8f0e=_0x5394b2;Buffer['isBuffer'](_0x1dad4b)?await this[_0x3a8f0e(0x14d)][_0x3a8f0e(0x141)](_0x28ca28,_0x1dad4b):await this['client'][_0x3a8f0e(0x141)](_0x28ca28,{'url':_0x1dad4b});}async['block'](_0x13844a){const _0x3d37e1=_0x5394b2;await this['client'][_0x3d37e1(0x16e)](_0x13844a,_0x3d37e1(0x154));}async[_0x5394b2(0x162)](_0x163abb){const _0x137fe3=_0x5394b2;await this[_0x137fe3(0x14d)][_0x137fe3(0x16e)](_0x163abb,_0x137fe3(0x162));}async[_0x5394b2(0x11b)](_0x44a37c){const _0x29b0e2=_0x5394b2;return await this['client']['groupParticipantsUpdate'](this[_0x29b0e2(0x116)],_0x44a37c,_0x29b0e2(0x11b));}async['kick'](_0x61c76d){const _0x27569d=_0x5394b2;return await this['client']['groupParticipantsUpdate'](this[_0x27569d(0x116)],_0x61c76d,_0x27569d(0x18c));}async[_0x5394b2(0x10e)](_0x55bc1a){const _0x3835b3=_0x5394b2;return await this[_0x3835b3(0x14d)]['groupParticipantsUpdate'](this[_0x3835b3(0x116)],_0x55bc1a,_0x3835b3(0x10e));}async[_0x5394b2(0x144)](_0x3259f2){const _0x35d512=_0x5394b2;return await this[_0x35d512(0x14d)][_0x35d512(0x115)](this['jid'],_0x3259f2,_0x35d512(0x144));}async['getName'](_0x2e746b,_0x133979=![]){const _0x502bd4=_0x5394b2;id=decodeJid(_0x2e746b),_0x133979=this[_0x502bd4(0x14d)][_0x502bd4(0x134)]||_0x133979;let _0x43c242;if(id['endsWith'](_0x502bd4(0x12e)))return new Promise(async _0x3e2b64=>{const _0x25c426=_0x502bd4;_0x43c242=store[_0x25c426(0x16b)][id]||{};if(!(_0x43c242[_0x25c426(0x123)][_0x25c426(0x118)]||_0x43c242[_0x25c426(0x182)]))_0x43c242=this[_0x25c426(0x14d)][_0x25c426(0x14b)](id)||{};_0x3e2b64(_0x43c242[_0x25c426(0x123)]||_0x43c242[_0x25c426(0x182)]||PhoneNumber('+'+id[_0x25c426(0x14e)](_0x25c426(0x155),''))[_0x25c426(0x111)]('international'));});else _0x43c242=id==='0@s.whatsapp.net'?{'id':id,'name':_0x502bd4(0x12b)}:id===decodeJid(this[_0x502bd4(0x14d)][_0x502bd4(0x148)]['id'])?this[_0x502bd4(0x14d)][_0x502bd4(0x148)]:store[_0x502bd4(0x16b)][id]||{};return(_0x133979?'':_0x43c242[_0x502bd4(0x123)])||_0x43c242[_0x502bd4(0x182)]||_0x43c242['verifiedName']||PhoneNumber('+'+_0x2e746b[_0x502bd4(0x14e)](_0x502bd4(0x155),''))['getNumber'](_0x502bd4(0x168));}}class ReplyMessage extends Base{constructor(_0x1723fb,_0x395562,_0x2c5106){const _0x2b9533=_0x5394b2;super(_0x1723fb,_0x2c5106);if(_0x395562,_0x2c5106)this[_0x2b9533(0x11f)](_0x395562,_0x2c5106);}[_0x5394b2(0x11f)](_0x3e1812,_0x28b56f){const _0x3d3323=_0x5394b2;this['key']=_0x3e1812[_0x3d3323(0x140)],this['id']=_0x3e1812[_0x3d3323(0x171)],this[_0x3d3323(0x116)]=_0x3e1812['participant'],this['sudo']=config[_0x3d3323(0x150)][_0x3d3323(0x175)](',')[_0x3d3323(0x129)](_0x3e1812[_0x3d3323(0x142)][_0x3d3323(0x175)]('@')[0x0]),this[_0x3d3323(0x137)]=_0x3e1812[_0x3d3323(0x137)];if(_0x3e1812[_0x3d3323(0x145)]&&_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x189)])this['message']=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x189)]['caption']===null?_0x3e1812[_0x3d3323(0x187)]['imageMessage'][_0x3d3323(0x169)]:'',this[_0x3d3323(0x169)]=_0x3e1812['quotedMessage'][_0x3d3323(0x189)]['caption']===null?_0x3e1812[_0x3d3323(0x187)]['imageMessage'][_0x3d3323(0x169)]:'',this[_0x3d3323(0x17c)]=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x189)][_0x3d3323(0x17c)],this[_0x3d3323(0x16c)]=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x189)][_0x3d3323(0x16c)],this[_0x3d3323(0x15a)]=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x189)]['height'],this[_0x3d3323(0x17e)]=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x189)][_0x3d3323(0x17e)],this[_0x3d3323(0x16a)]=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x189)][_0x3d3323(0x16a)],this[_0x3d3323(0x17f)]=!![],this[_0x3d3323(0x12d)]=![],this[_0x3d3323(0x18b)]=![];else{if(_0x3e1812[_0x3d3323(0x145)]&&_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x159)])this[_0x3d3323(0x187)]=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x159)]['caption']===null?_0x3e1812[_0x3d3323(0x187)]['videoMessage'][_0x3d3323(0x169)]:'',this[_0x3d3323(0x169)]=_0x3e1812['quotedMessage'][_0x3d3323(0x159)][_0x3d3323(0x169)]===null?_0x3e1812[_0x3d3323(0x187)]['videoMessage'][_0x3d3323(0x169)]:'',this['url']=_0x3e1812['quotedMessage'][_0x3d3323(0x159)]['url'],this['mimetype']=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x159)][_0x3d3323(0x16c)],this[_0x3d3323(0x15a)]=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x159)]['height'],this['width']=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x159)][_0x3d3323(0x17e)],this[_0x3d3323(0x16a)]=_0x3e1812[_0x3d3323(0x145)]['videoMessage'][_0x3d3323(0x16a)],this[_0x3d3323(0x12d)]=!![];else{if(_0x3e1812[_0x3d3323(0x145)]&&_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x125)])this[_0x3d3323(0x187)]=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x125)],this[_0x3d3323(0x13b)]=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x125)],this[_0x3d3323(0x17f)]=![],this[_0x3d3323(0x12d)]=![],this['sticker']=![];else{if(_0x3e1812['quotedMessage']&&_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x188)])this['sticker']={'animated':_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x188)][_0x3d3323(0x177)]},this[_0x3d3323(0x16c)]=_0x3e1812['quotedMessage'][_0x3d3323(0x188)][_0x3d3323(0x16c)],this['message']=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x188)],this[_0x3d3323(0x17f)]=![],this[_0x3d3323(0x12d)]=![];else _0x3e1812[_0x3d3323(0x145)]&&_0x3e1812[_0x3d3323(0x145)]['audioMessage']&&(this['audio']=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x165)],this[_0x3d3323(0x16c)]=_0x3e1812[_0x3d3323(0x145)][_0x3d3323(0x165)][_0x3d3323(0x16c)]);}}}return super[_0x3d3323(0x11f)](_0x3e1812);}async[_0x5394b2(0x13f)](){const _0x143c73=_0x5394b2;let _0x5eac98=await this['m'][_0x143c73(0x14f)][_0x143c73(0x181)](),_0x4e2c97=await fileType[_0x143c73(0x110)](_0x5eac98);return await fs[_0x143c73(0x12c)][_0x143c73(0x10f)]('./media'+_0x4e2c97[_0x143c73(0x12f)],_0x5eac98),_0x143c73(0x131)+_0x4e2c97['ext'];}}function _0x3de8(){const _0x8dc016=['isBuffer','getPP','downloadMediaMessage','key','updateProfilePicture','participant','low','demote','quotedMessage','_clone','util','user','create','sendImageAsSticker','groupMetadata','mime','client','replace','quoted','SUDO','delete','prefix','body','block','@s.whatsapp.net','timestamp','203630KrcxMk','log','videoMessage','height','29124491HpCgQp','forward','updateName','audio','sendPresenceUpdate','contextInfo','data','unblock','remoteJid','isGroup','audioMessage','relayMessage','48tZezaA','international','caption','mediaKey','contacts','mimetype','1131814pthhZw','updateBlockStatus','send','sudo','stanzaId','92MMExrP','sendMessage','updateProfileName','split','object','isAnimated','type','assign','getFile','template','url','189ySXwSg','width','image','application','download','subject','hasOwnProperty','reply','profilePictureUrl','extendedTextMessage','message','stickerMessage','imageMessage','process','sticker','remove','Abu-MD','sendFile','promote','writeFile','fromBuffer','getNumber','sender','sendFromUrl','exports','groupParticipantsUpdate','jid','PresenceUpdate','notify','449432QSaIEs','format','add','mtype','text/plain','mentionedJid','_patch','reply_message','file-type','3018075HAQnPL','name','../config','conversation','defineProperty','84434FYtBjB','mention','includes','12aqbCLM','WhatsApp','promises','video','@g.us','ext','pushName','./media','audio/mpeg','toLowerCase','withoutContact','document','awesome-phonenumber','fromMe','Jsl','messageTimestamp','1aBQQGa','text','7595110chMQSQ'];_0x3de8=function(){return _0x8dc016;};return _0x3de8();}class Sticker extends Base{constructor(_0x38f0d8,_0x4f6676,_0x51c005){const _0x350a97=_0x5394b2;super(_0x38f0d8,_0x51c005);if(_0x4f6676,_0x51c005)this[_0x350a97(0x11f)](_0x4f6676,_0x51c005);}[_0x5394b2(0x11f)](_0x308eb4,_0x1ca18d){const _0x2cd41b=_0x5394b2;return this[_0x2cd41b(0x140)]=_0x308eb4[_0x2cd41b(0x140)],this['id']=_0x308eb4['key']['id'],this[_0x2cd41b(0x116)]=_0x308eb4['key']['remoteJid'],this[_0x2cd41b(0x164)]=_0x308eb4['isGroup'],this[_0x2cd41b(0x142)]=_0x308eb4[_0x2cd41b(0x112)],this[_0x2cd41b(0x187)]=_0x308eb4[_0x2cd41b(0x187)][_0x2cd41b(0x188)],this[_0x2cd41b(0x130)]=_0x308eb4[_0x2cd41b(0x130)],this[_0x2cd41b(0x170)]=config[_0x2cd41b(0x150)][_0x2cd41b(0x175)](',')[_0x2cd41b(0x129)](_0x308eb4['sender'][_0x2cd41b(0x175)]('@')[0x0]),this['timestamp']=typeof _0x308eb4['messageTimestamp']==='object'?_0x308eb4[_0x2cd41b(0x139)][_0x2cd41b(0x143)]:_0x308eb4['messageTimestamp'],this[_0x2cd41b(0x18b)]=!![],super[_0x2cd41b(0x11f)](_0x308eb4);}async[_0x5394b2(0x13f)](){const _0x582f17=_0x5394b2;let _0x146466=await this['m']['download'](),_0x483567=new Date();return await fs['promises'][_0x582f17(0x10f)](_0x483567,_0x146466),_0x483567;}}module[_0x5394b2(0x114)]={'Base':Base,'Image':Image,'Message':Message,'ReplyMessage':ReplyMessage,'Video':Video,'Sticker':Sticker};