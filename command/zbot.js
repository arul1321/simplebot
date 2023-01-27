require('../options/config')
var { 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
proto, generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
areJidsSameUser, 
getContentType } = require('@adiwajshing/baileys')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var { 
exec, 
spawn, 
execSync } = require("child_process")
var axios = require('axios')
var path = require('path')
var os = require('os')
var moment = require('moment-timezone')
var { JSDOM } = require('jsdom')
var speed = require('performance-now')
var { performance } = require('perf_hooks')
const bocil = require('@bochilteam/scraper') 
var { 
smsg, 
formatp, 
tanggal, 
formatDate, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom } = require('../message/myfunc')

//━━━━━━━━━━━━━━━[ THUMBNAIL ]━━━━━━━━━━━━━━━━━//

var image = fs.readFileSync('./image/zbot.jpg')
var thumbnail = fs.readFileSync('./image/thumbnail.jpg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

var tebaklagu = db.data.game.tebaklagu = []
var _family100 = db.data.game.family100 = []
var kuismath = db.data.game.math = []
var tebakgambar = db.data.game.tebakgambar = []
var tebakkata = db.data.game.tebakkata = []
var caklontong = db.data.game.lontong = []
var caklontong_desk = db.data.game.lontong_desk = []
var tebakkalimat = db.data.game.kalimat = []
var tebaklirik = db.data.game.lirik = []
var tebaktebakan = db.data.game.tebakan = []
var vote = db.data.others.vote = []

//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zbot = async (zbot, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
 var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var botNumber = await zbot.decodeJid(zbot.user.id)
var isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var itsMe = m.sender == botNumber ? true : false
var text = q = args.join(" ")
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
var isMedia = /image|video|sticker|audio/.test(mime)
var groupMetadata = m.isGroup ? await zbot.groupMetadata(m.chat).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
var groupOwner = m.isGroup ? groupMetadata.owner : ''
 var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
 var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
 var isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
    
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = true
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: true,
}

var creator = '©Created By : Z-Bot'
		
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: true,
}
	    
} catch (err) {
console.error(err)
}

//━━━━━━━━━━━━━━━[ AUTO STICKER ]━━━━━━━━━━━━━━━━━//
let isSticker = m.mtype
if (isSticker) {
if(isSticker === "imageMessage"){
let mediaaan = await quoted.download().catch(e => {
//m.reply(mess.erorr)
})
let encmedialik = await zbot.sendImageAsSticker(m.chat, mediaaan, m, { packname: 'Z-Bot', author: 'Bot Whatsapp' }).catch(e => {console.log(` `)
})
      }
    }

//━━━━━━━━━━━━━━━[ AUTO DELETE FOTO IN GROUP ]━━━━━━━━━━━━━━━━━//
let Delt = m.mtype
let lihj = await getBuffer(`https://ibb.co/FHgrkLn`)
if (Delt) {
if(Delt === "imageMessage"){
let key = {}
try {
key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
await zbot.sendMessage(m.chat, { delete: key})
}
}

//━━━━━━━━━━━━━━━[ PUBLIC & SELF ]━━━━━━━━━━━━━━━━━//

if (!zbot.public) {
if (!m.key.fromMe) return
}

//━━━━━━━━━━━━━━━[ AUTO READ ]━━━━━━━━━━━━━━━━━//

if (m.message) {
zbot.readMessages([m.key])
zbot.sendPresenceUpdate('recording', m.chat, m.sender, [m.key.id])
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
	
//━━━━━━━━━━━━━━━[ RESET LIMIT ]━━━━━━━━━━━━━━━━━//

let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
        
//━━━━━━━━━━━━━━━[ AUTO SET BIO ]━━━━━━━━━━━━━━━━━//

if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await zbot.setStatus(`Z-Bot Aktif | Runtime : ${runtime(process.uptime())}`)
setting.status = new Date() * 1
}
}
	    
//━━━━━━━━━━━━━━━[ FUNCTION GROUP ]━━━━━━━━━━━━━━━━━//
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return console.log(``)
let gclink = (`https://chat.whatsapp.com/`+await zbot.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ini Link Grup nya kak`)
let key = {}
try {
key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
zbot.sendMessage(m.chat, { delete: key})
//zbot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
        
//━━━━━━━━━━━━━━━[ MUTE ]━━━━━━━━━━━━━━━━━//

if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `©Created By Z-Bot`, orderTitle: 'Z-Bot MD', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

//━━━━━━━━━━━━━━━[ RESPON CMD ]━━━━━━━━━━━━━━━━━//

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: zbot.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, zbot.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
zbot.ev.emit('messages.upsert', msg)
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await zbot.sendText(room.x, str, m, { mentions: parseMention(str) } )
await zbot.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//
switch(command) {
case 'menu': case 'help': {
var p = '```'
menu =`Hi, Im a bot. What can I help you with?
Please Select an Order Below

❖ *Info Bot* ❖

🐰Bot Name : ${global.botname}
🦅Owner : ${global.owner}
🐶Owner Name : ${global.packname}

❖ [ *List All Menu* ] ❖

┌─❖ ⌜  *Group Menu* ⌟
│${p}${prefix}kick${p}
│${p}${prefix}add${p}
│${p}${prefix}promote${p}
│${p}${prefix}demote${p}
│${p}${prefix}setname${p}
│${p}${prefix}setdesc${p}
│${p}${prefix}setppgrup${p}
│${p}${prefix}tagall${p}
│${p}${prefix}totag${p}
│${p}${prefix}hidetag${p}
│${p}${prefix}group${p}
│${p}${prefix}editinfo${p}
│${p}${prefix}antilink${p}
│${p}${prefix}ephemeral${p}
└─❖
┌─❖ ⌜ *Download Menu* ⌟
│${p}${prefix}gitclone${p}
│${p}${prefix}tiktok${p}
│${p}${prefix}tiktokaudio${p}
│${p}${prefix}ytmp3${p}
│${p}${prefix}ytmp4${p}
│${p}${prefix}play${p}
└─❖
┌─❖ ⌜ *Fun Menu* ⌟
│${p}${prefix}del${p}
│${p}${prefix}jadian${p}
│${p}${prefix}jodohku${p}
│${p}${prefix}tictactoe${p}
│${p}${prefix}delttt${p}
└─❖
┌─❖ ⌜ *Converter Menu* ⌟
│${p}${prefix}telestick${p}
│${p}${prefix}sticker${p}
│${p}${prefix}toimage${p}
└─❖
┌─❖ ⌜ *Owner Menu* ⌟
│${p}${prefix}ping${p}
│${p}${prefix}owner${p}
│${p}${prefix}join${p}
│${p}${prefix}leave${p}
│${p}${prefix}block${p}
│${p}${prefix}unblock${p}
│${p}${prefix}bc${p}
│${p}${prefix}bcgc${p}
└─❖`
let buttons = [
            {buttonId: `${prefix}owner`, buttonText: {displayText: 'Owner'}, type: 1}
            ]
            let buttonMessage = {
            document: image,
            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            fileName: `Z-Bot Whatsapp MD`,
            fileLength: 99999999999999,
            caption: menu,
            footer: `Z-Bot Multidevice`,
            buttons: buttons,
            headerType: 4,
            contextInfo:{externalAdReply:{
            title:`Menu Z-Bot`,
            mediaType: 1,
            renderLargerThumbnail: true , 
            showAdAttribution: true, 
            jpegThumbnail: image,
            mediaUrl: `instagram.com/_daaa_1`,
            thumbnail: image,
            sourceUrl: ` `
            }}
            }
            zbot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//━━━━━━━━━━━━━━━[ DOWNLOADER MENU ]━━━━━━━━━━━━━━━━━//
case 'delete': case 'del': {
if (!m.quoted) throw false
let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 zbot.sendMessage(m.chat, { delete: key })
            }
            break
case 'play': case 'ytplay': {
if (!q) throw `Example : ${prefix + command} coding`
let yts = require("yt-search")
let search = await yts(q)
console.log(search)
let anu = search.videos[0]
let gam = await getBuffer(anu.thumbnail)
let buttons = [
                    {buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
let cap=`
❌ Title : ${anu.title}
⭕ Ext : Search
❌ ID : ${anu.videoId}
⭕ Duration : ${anu.timestamp}
❌ Viewers : ${anu.views}
⭕ Upload At : ${anu.ago}
❌ Author : ${anu.author.name}
⭕ Channel : ${anu.author.url}
❌ Description : ${anu.description}
⭕ Url : ${anu.url}`
let buttonMessage = {
document: gam,
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: cap,
footer: `Z-Bot Multidevice`,
buttons: buttons,
 headerType: 4,
 contextInfo:{externalAdReply:{
 title:`Play Youtube Downloader`,
 mediaType: 1,
 renderLargerThumbnail: true , 
 showAdAttribution: true, 
 jpegThumbnail: gam,
 mediaUrl: `instagram.com/_daaa_1`,
 thumbnail: gam,
 sourceUrl: ` `
            }}
            }
  zbot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
  break
case 'telestik': case 'telestick': case 'stickertele':{
if (!text) throw 'urlnya?'
m.reply(mess.wait) 
let packName = args[0].replace("https://t.me/addstickers/", "")
let gas = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } }).catch((err) => {
m.reply(`Terjadi Kesalahan Mohon Tunggu Beberapa Hari Kedepan 🙂`)
})
m.reply(`*Total stiker:* ${gas.result.stickers.length}
*Estimasi selesai:* ${gas.result.stickers.length * 1.5} detik`.trim())
for (let i = 0; i < gas.result.stickers.length; i++) {
let fileId = gas.result.stickers[i].thumb.file_id
let gasIn = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
let stick = "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + gasIn.result.file_path
let media = await getBuffer(stick)
zbot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
}
}
break 
case 'gitclone':{
if (!text) throw 'urlnya?'
m.reply(mess.wait) 
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, "")
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = `${repo}`
zbot.sendMessage(m.chat, {document: {url: `${url}`}, mimetype: 'application/zip', fileName: `${filename}`, 
contextInfo:{externalAdReply:{
title:`Downloader Github`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: image,
mediaUrl: `${q}`,
thumbnail: image,
sourceUrl: ` `
}}}, {quoted:m}).catch((err) => {
m.reply(`Terjadi Kesalahan Mohon Tunggu Beberapa Hari Kedepan 🙂`)
  })
}
break
case 'ytmp3': case 'ytmusic':{
if (!text) throw 'urlnya?'
m.reply(mess.wait)
var data = await fetchJson('https://yt.nxr.my.id/yt2?url=' + q + '&type=audio')
let med = await getBuffer(`${data.thumbnail}`)
zbot.sendMessage(m.chat, {audio:{url: data.data.url}, mimetype:"audio/mp4", ptt:false, contextInfo:{externalAdReply:{
title:`${data.data.filename}`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: med,
mediaUrl: `${q}`,
thumbnail: med,
sourceUrl: ` `
}}}, {quoted:m}).catch(e => {
m.reply('Terjadi Kesalahan Mohon Tunggu Beberapa Hari Kedepan 🙂')
})
}
break
case 'ytmp4':{
if (!text) throw 'urlnya?'
m.reply(mess.wait)
var data = await fetchJson('https://yt.nxr.my.id/yt2?url=' + q + '&type=video').catch((err) => {
m.reply('Terjadi Kesalahan Mohon Tunggu Beberapa Hari Kedepan 🙂')
  })
if (data.data.size > '70 MB') return m.reply(`File Melebihi Batas Silahkan Download Sendiri\n*Link :* ${data.data.url}`)
let vid = await getBuffer(`${data.data.url}`).catch((err) => {
m.reply('Terjadi Kesalahan Mohon Tunggu Beberapa Hari Kedepan 🙂')
  })
zbot.sendMessage(m.chat, { video: vid, caption: data.data.filename }, { quoted: m }).catch((err) => {
m.reply('Terjadi Kesalahan Mohon Tunggu Beberapa Hari Kedepan 🙂')
  })
}
break
case 'ttmp3': case 'tiktokaudio': {
if(!text) return replyig(`Penggunaan ${prefix + command} teks|teks`)
m.reply(mess.wait)
var data = await bocil.tiktokdl(text)
zbot.sendMessage(m.chat, {audio:{url: data.video.no_watermark}, mimetype:"audio/mp4", ptt:false, 
contextInfo:{externalAdReply:{
title:`Downloader Tiktok MP3`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: image,
mediaUrl: `${q}`,
thumbnail: image,
sourceUrl: ` `
}}}, {quoted:m}).catch(e => {
m.reply('Terjadi Kesalahan Mohon Tunggu Beberapa Hari Kedepan 🙂')
})
}
break
case 'ttdl': case 'tt': case 'ttmp4': case 'tiktok': case 'tiktoknowm':{
if (!text) throw 'Masukkan Link Tiktok'
m.reply(mess.wait)
let res = await bocil.tiktokdl(text).catch(e => { m.reply(mess.erorr)})
console.log(res)
anutxt = `• Author : ${res.author.nickname}\n• Description : ${res.description}`
let buttons = [{buttonId: `${prefix}tiktokaudio ${text}`, buttonText: {displayText: `Audio`}, type: 1}]
let buttonMessage = {
video: {url:res.video.no_watermark},
caption: anutxt,
footer: 'Downloader Tiktok',
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Tiktok Downloader No Watermak",
body:"Downloader by zBot",
thumbnail: image,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
zbot.sendMessage(m.chat, buttonMessage, {quoted:m}).catch(e => {
m.reply('Terjadi Kesalahan Mohon Tunggu Beberapa Hari Kedepan 🙂')
})
}
break
//━━━━━━━━━━━━━━━[ GROUP MENU ]━━━━━━━━━━━━━━━━━//
case 'totag': {
if (!m.isGroup) throw mess.group
if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
zbot.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zbot.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isCreator) throw mess.owner
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zbot.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zbot.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zbot.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Teks Nya Mana Bos ?'
await zbot.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Teks Nya Mana Bos ?'
await zbot.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await zbot.downloadAndSaveMediaMessage(quoted)
await zbot.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall':{
if (!m.isGroup) throw mess.group
let teks = `──── ⌜ Tag All ⌟ ────
 
 ❗ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
zbot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag':{
if (!m.isGroup) throw mess.group
zbot.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await zbot.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await zbot.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await zbot.sendButtonText(m.chat, buttons, `Mode Group`, creator, m)
}
}
break
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await zbot.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await zbot.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await zbot.sendButtonText(m.chat, buttons, `Mode Edit Info`, creator, m)
}
}
break
case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${zbot.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${zbot.user.name} telah di unmute di group ini !`)
} else {
let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await zbot.sendButtonText(m.chat, buttons, `Mute Bot`, creator, m)
}
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
let response = await zbot.groupInviteCode(m.chat)
zbot.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await zbot.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await zbot.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'JADIAN' }, type: 1 }
]
await zbot.sendButtonText(m.chat, buttons, jawab, creator, m, {mentions: menst})
}
break
case 'jodohku': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'JODOHKU' }, type: 1 }
]
await zbot.sendButtonText(m.chat, buttons, jawab, creator, m, {mentions: ments})
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
zbot.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("../message/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await zbot.sendText(room.x, str, m, { mentions: parseMention(str) } )
await zbot.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'owner': case 'creator': {
let vcard = `BEGIN:VCARD\n` // metadata of the contact card
+ `VERSION:3.0\n`
+ `N:;${packname}.;;;`
+ `FN:${packname}.\n` // full name
+ `ORG:${packname};\n` // the organization of the contact
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n` // WhatsApp ID + phone number
+ `END:VCARD`
let msg = await zbot.sendMessage(m.chat, { contacts: { displayName: `${owner}`, contacts: [{ vcard }] } }, { quoted: ftroli })
let buttons3 = [
{buttonId: `menu`, buttonText: {displayText: 'BACK MENU'}, type: 1},
]
let buttonMessage3 = {
text: `DONT NOT SPAM OWNER!! `,
footerText: 'Press The Button Below',
buttons: buttons3,
headerType: 2
}
zbot.sendMessage(m.chat, buttonMessage3, { quoted: ftroli })                        
}
break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await zbot.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
zbot.sendMessage(m.chat, { image: buffer }, { quoted: ftroli })
fs.unlinkSync(ran)
}).catch(e => {
m.reply('Terjadi Kesalahan Mohon Tunggu Beberapa Hari Kedepan 🙂')
})
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await zbot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await zbot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await zbot.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) throw mess.owner
await zbot.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zbot.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zbot.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let txt = `*${text}*`
let buttons = [
            {buttonId: `${prefix}owner`, buttonText: {displayText: 'Owner'}, type: 1}
            ]
            let buttonMessage = {
            document: image,
            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            fileName: `Izin Broadcast Bang`,
            fileLength: 99999999999999,
            caption: txt,
            footer: `Z-Bot Multidevice`,
            buttons: buttons,
            headerType: 4,
            contextInfo:{externalAdReply:{
            title:`Broadcast Z-Bot`,
            mediaType: 1,
            renderLargerThumbnail: true , 
            showAdAttribution: true, 
            jpegThumbnail: image,
            mediaUrl: `instagram.com/_daaa_1`,
            thumbnail: image,
            sourceUrl: ` `
            }}
            }
            zbot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
m.reply('Sukses Broadcast')
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await zbot.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let txt = `*${text}*`
let buttons = [
            {buttonId: `${prefix}owner`, buttonText: {displayText: 'Owner'}, type: 1}
            ]
            let buttonMessage = {
            document: image,
            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            fileName: `Izin Broadcast Bang`,
            fileLength: 99999999999999,
            caption: txt,
            footer: `Z-Bot Multidevice`,
            buttons: buttons,
            headerType: 4,
            contextInfo:{externalAdReply:{
            title:`Broadcast Z-Bot`,
            mediaType: 1,
            renderLargerThumbnail: true , 
            showAdAttribution: true, 
            jpegThumbnail: image,
            mediaUrl: `instagram.com/_daaa_1`,
            thumbnail: image,
            sourceUrl: ` `
            }}
            }
            zbot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//

default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
			
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
lm.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
			
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
zbot.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
        

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})