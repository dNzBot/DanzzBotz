/*
 * Biasakan Jangan Asal Ubah
 * Nanti Error Yang di Salahin Developer nya
 * Kalo Ada Bug Lapor!! Jan Diem
*/

let {		
	Presence,
	Mimetype, 
	waChatkey,
	ProxyAgent,	
	processTime,
	mentionedJid,
	MessageType, 
	WAdanzection,
	RedanzectMode,		
	MessageOptions, 
	GroupSettingChange, 	
	WALocationMessage, 
	WA_DEFAULT_EPHEMERAL, 
	WA_MESSAGE_STUB_TYPES, 
	} = require('@adiwajshing/baileys')
let fs = require('fs')
let toMs = require('ms')
let hx = require('hxz-api')
let axios = require("axios")
let ms = require('parse-ms')
let crypto = require('crypto') 
let yts = require( 'yt-search')
let request = require('request')
let fetch = require('node-fetch')
let googleImage = require('g-i-s')
let ffmpeg = require('fluent-ffmpeg')
let brainly = require('brainly-scraper')
let { lirikLagu } = require('./lib/lirik.js')
let { EmojiAPI } = require("emoji-api");
let emoji = new EmojiAPI();
let speed = require('performance-now')
let { y2mate } = require('./lib/y2mate');
let moment = require('moment-timezone')
let { color, bgcolor } = require('./lib/color')
let { jagoKata } = require('./lib/jagokata.js')
let { mediafireDl } = require('./lib/mediafire.js')
let imageToBase64 = require('image-to-base64')
let { y2mateA, y2mateV } = require('./lib/y2mate.js')
let { exec, spawn, execSync } = require('child_process')
let setting = JSON.parse(fs.readFileSync('./setting.json'));
let time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
let { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
let { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
let { fetchJson, fetchText, createExif } = require('./lib/fetcher')
let { uptotele, uploadFile, uploadImages } = require('./lib/uploadimage');
let { gamewaktu, Miminnya, youtube, BotName, fake, ownerNumber, limitCount, gcounti } = require('./setting.json')
let { sleep, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, NumberRandom } = require('./lib/functions')

//A L L  D A T A B A S E📍
let bad = JSON.parse(fs.readFileSync('./lib/data/bad.json'))
let ban = JSON.parse(fs.readFileSync('./lib/data/banned.json'))
let simin = JSON.parse(fs.readFileSync('./lib/data/simi.json'))
let _dare = JSON.parse(fs.readFileSync('./lib/data/dare.json'));
let event = JSON.parse(fs.readFileSync('./lib/data/event.json'))
let _truth = JSON.parse(fs.readFileSync('./lib/data/truth.json'));
let nsfww = JSON.parse(fs.readFileSync('./lib/data/nsfw.json'))
let siapakahaku = JSON.parse(fs.readFileSync('./lib/data/siapakahaku.json'))
let hit = JSON.parse(fs.readFileSync('./lib/data/totalcmd.json'))
let antivirtex = JSON.parse(fs.readFileSync("./lib/data/antivirtex.json"))
let fiturnye = JSON.parse(fs.readFileSync('./lib/data/video.json'))
let setiker = JSON.parse(fs.readFileSync('./mediadata/stik.json'))
let prem = JSON.parse(fs.readFileSync('./lib/data/premium.json'))
let _antilink = JSON.parse(fs.readFileSync('./lib/data/antilink.json'))
let videonye = JSON.parse(fs.readFileSync('./mediadata/video.json'))
let audionye = JSON.parse(fs.readFileSync('./mediadata/audio.json'))
let badword = JSON.parse(fs.readFileSync('./lib/data/badword.json'))
let imagenye = JSON.parse(fs.readFileSync('./mediadata/image.json'))
let _scommand = JSON.parse(fs.readFileSync("./lib/data/scommand.json"));

//I M A G E📍
let tamnel = fs.readFileSync('./media/danzbot.jpg')
let mrpg = fs.readFileSync('./media/mrpg.jpg')
let tde = fs.readFileSync('./media/TD.jpg')
let devil = fs.readFileSync('./media/devil.jpg')
let slime = fs.readFileSync('./media/slime.jpg')
let demon = fs.readFileSync('./media/demon.jpg')
let goblin = fs.readFileSync('./media/goblin.jpg')
let demonking = fs.readFileSync('./media/demonking.jpg')
let behemoth = fs.readFileSync('./media/behemoth.jpg')

//D A T A B A S E  U S E R📍
let limit = JSON.parse(fs.readFileSync('./lib/bot/limit.json'));
let balance = JSON.parse(fs.readFileSync('./lib/bot/balance.json'));
let glimit = JSON.parse(fs.readFileSync('./lib/bot/glimit.json'));
let pendaftar = JSON.parse(fs.readFileSync('./lib/bot/user.json'))

//D A T A  G A M E📍
let tebakgambar = JSON.parse(fs.readFileSync('./lib/data/tebakgambar.json'))
let susunkata = JSON.parse(fs.readFileSync('./lib/data/susunkata.json'))
let tebakanime = JSON.parse(fs.readFileSync('./lib/data/tebakanime.json'))
let asahotak = JSON.parse(fs.readFileSync('./lib/data/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./lib/data/caklontong.json'))
let tebakkata = JSON.parse(fs.readFileSync('./lib/data/tebakata.json'))
let family = JSON.parse(fs.readFileSync('./lib/data/family.json'))

//R P G  B Y  @Febzzz_👑
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish, addPet, getPet } = require("./lib/rpgfunction");

//D A T A B A S E  R P G📍
let _RPG = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./lib/rpg/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))

//O P T I O N📍
var game = require("./lib/game");
var { allmenu } = require('./lib/helep')  
 
let family100 = [];
imgtobot = 'https://telegra.ph/file/1f910ae6b79cb0c517687.jpg'
let p = '```'
publik = true
readGc = false; 
readPc = false;
autovn = true;
autoketik = false;
hit_today = [];
//healtawal = 100
//potionawal = 1
modelmenu = 'loc' // ubah tema awal menu!! bisa loc / fyt / catalog
let LomKey = 'BeliLah' //Daftar Atau Beli Di lolhuman.xyz

//━━━━━━━━━━━━━━━[ AU LUPA ]━━━━━━━━━━━━━━━\\


function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
		myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'];
		var tgl = new Date();
		var day = tgl.getDate()
		bulan = tgl.getMonth()
		var thisDay = tgl.getDay(),
		thisDay = myDays[thisDay];
		var yy = tgl.getYear()
		var year = (yy < 1000) ? yy + 1900 : yy;
        return `${thisDay} ${day} ${myMonths[bulan]} ${year}`
}                  
var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'GoodNigh🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'GooodEvening🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'GoodEvening🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'GoodAfternoon🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'GoodMoorning🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'GoodNight🏙'
}
        var runtime = function(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor(seconds % (3600 * 24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        } 
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
        module.exports = danz = async (danz, mek, _welkom, ucapanWaktu, botmessage) => {
	    try {
        if (!mek.hasNewMessage) return 
        mek = mek.messages.all()[0]
        const { mentioned } = mek
       	if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.prefix
		global.blocked				
	    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wita = moment.tz('Asia/Makassar').format("HH:mm")
        const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")        
        const hour_now = moment().format('HH:mm:ss')
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[z∆?Ａ繩?繞?°?Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+@,;]/.test(cmd) ? cmd.match(/^[z∆?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '!'          	
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''				
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		bodi = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
	    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	    const messagesC = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
	    const timestamp = speed();
	  	const latensi = speed() - timestamp
	    hit_today.push(command);
	  	const nopref = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
      	const args = body.trim().split(/ +/).slice(1)
    	const isCmd = body.startsWith(prefix)
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
       	const v = args.join(' ')
       	const q = args.join(' ')
	    const botNumber = danz.user.jid
	    const botNumberss = danz.user.jid + '@c.us'
	    const isGroup = from.endsWith('@g.us')
	    const sender = mek.key.fromMe // Fix Bug by Pebri
        ? danz.user.jid
        : isGroup
        ? mek.participant
        : mek.key.remoteJid;
        let senderr = mek.key.fromMe
        ? danz.user.jid
        : mek.key.remoteJid.endsWith("@g.us")
        ? mek.participant
        : mek.key.remoteJid;
	    const OwnerNumber = [`${ownerNumber}@s.whatsapp.net`, `6285822578327@s.whatsapp.net`]
     	const isOwner = OwnerNumber.includes(sender)
     	const isBanned = ban.includes(sender)
        const isPremium = prem.includes(sender) || isOwner
        const isPetualang = checkPetualangUser(sender)
    	const totalchat = await danz.chats.all()
	    const groupMetadata = isGroup ? await danz.groupMetadata(from) : ''
	    const groupName = isGroup ? groupMetadata.subject : ''
    	const groupId = isGroup ? groupMetadata.jid : ''		 
	    const groupMembers = isGroup ? groupMetadata.participants : ''
	    const groupDesc = isGroup ? groupMetadata.desc : ''
     	const groupOwner = isGroup ? groupMetadata.owner : ''
	    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
     	const isGroupAdmins = groupAdmins.includes(sender) || false        
     const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isBadWord = isGroup ? badword.includes(from) : false
        const isWelkom = isGroup ? _welkom.includes(from) : false
     	const isEventon = isGroup ? event.includes(from) : false
        const isAnti = isGroup ? _antilink.includes(from) : false
        const isNsfw = isGroup ? nsfww.includes(from) : false
        const isUser = pendaftar.includes(sender)
                const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const conts = mek.key.fromMe ? danz.user.jid : danz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? danz.user.name : conts.notify || conts.vname || conts.name || 'Undefinied'

        const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.premi : gcounti.useri                
                                                       
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\        
    
		mess = {
		 ban : 'Kamu telah di ban',
		  glimit : '```Limit game lu abis bwang```',
		   limit: `Upss maaf kak ${pushname} limit kamu sudah habis`,
			wait: '```𝘛𝘶𝘯𝘨𝘨𝘶 𝘉𝘦𝘯𝘵𝘢𝘳𝘳...```',
		  	  success: '```𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘕i𝘩```',
			   error: {
				stick: '```𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘈𝘦 𝘟𝘰𝘯𝘵𝘰𝘭```',
				 Iv: '*403 ERROR!! URL INVALID PLEASE CHECK AGAIN*',				 
				  api: '*404 ERROR!! APIKEY INVALID*',
				   sc: '*403 ERROR FITUR!! PLEASE REPORT DEVOLOPER!*',
	 	          },
			       only: {
	    	        group: '```𝘒𝘩𝘶𝘴𝘶𝘴 𝘎𝘳𝘰𝘶𝘱 𝘉𝘳𝘰𝘰```',
	    	         owner: 'Khusus Owner Slurr',
	    	          admin: 'Khusus Admin...',
	    	           prem: 'Khusus Member Premium...',
	    	            event: 'Event Belum Aktif Di Group ini!!',
	    	             bot: 'Bo5 Harus Admin Boss',	    
	    	              player: `Maaff kak ${pushname} sepertinya kakak bukan petualang!!\nUntuk menjadi petualang silahkan ketik :\n${prefix}joinrpg nama`,	           
                           }
	                       }
	                     
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            danz.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            danz.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? danz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : danz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        //+++ || FAKE TROLI         
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: tamnel, surface: 200, message: ` • ${BotName}\n • Command : ${command}`, orderTitle: 'LordPebri', sellerJid: '0@s.whatsapp.net'} } }    

        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/danzbot.jpg')}}}

        const Febriansyah = (teks) => {
               danz.sendMessage(from, teks, text, { thumbnail: fs.readFileSync('./media/fakeyt.jpg'), sendefffhemeral: true, quoted: troli, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${ucapanWaktu} kak ${pushname}`, body: "SUBSCRIB FEBZABOTZ", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/fakeyt.jpg'), sourceUrl: `https://youtu.be/KnVIKuN3Q_w` } } })
   }
        
         
        const katalog = (teks) => {
             res = danz.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999999999, "message": teks, "footerText": "©danzbot", "jpegThumbnail": fs.readFileSync('./media/danzbot.jpg'), "surface": 'CATALOG' }}, {quoted:troli})
             danz.relayWAMessage(res)
        }
        function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		
	    const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        function monospace(string) {
            return '' + string + ''
        }
        function bintang(string) {
            return '*' + string + '*'
        }
        function miring(string) {
            return '_' + string + '_'
        }
        const nebal = (angka) => {
            return Math.floor(angka)
        }
        var premi = 'No Premium User'
			if (isPremium) {
				premi = 'Premiun User'
			} 
			if (isOwner) {
				premi = 'This Is Owner'
			}
	    var elit = 'Petualang Biasa'
			if (isPremium) {
				elit = 'Petualang Pro'
			} 
			if (isOwner) {
				elit = 'GM in GAME'
			}
			
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        danz.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: mek
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        danz.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await danz.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        danz.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: mek,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return danz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        } 
        var sendButloc = (from, title, text, desc, button, sen, men, file) => {
        return danz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
        }                                                         
        const sendMedia = async(from, url, text="", mids=[]) =>{
        if(mids.length > 0){
        text = normalizeMention(from, text, mids)
        } 
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if(mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif
        }
        if(mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio
        }
        danz.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
        fs.unlinkSync(filename)
        });
        } 
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
        if(mids.length > 0){
        text = normalizeMention(to, text, mids)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if(mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif
        }
        if(mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio
        }
        danz.sendMessage(to, media, type, { quoted: troli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})  
        fs.unlinkSync(filename)
        });
        }                                 
        const sendFileFromStorage = (path, type, options) => {
        danz.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
        reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
        console.log(e)
        })
        }        
        const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
        danz.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
        danz.sendMessage(from, hasil, type, options).catch(e => {
        danz.sendMessage(from, { url : link }, type, options).catch(e => {
        reply('_[ ! ] Error failed to download and send media_')
        console.log(e)
        })
        })
        })
        })
        }       
        const sendStickerFromUrl = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, './stik' + names + '.png', async function () {
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
        let media = fs.readFileSync(asw)
        danz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(filess)
        fs.unlinkSync(asw)
        });
        });
        }
        const sendWebp = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, './sticker' + names + '.png', async function () {
        let filess = './sticker' + names + '.png'
        let asw = './sticker' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
        fs.unlinkSync(filess)
        if (err) return reply(`${err}`)
        exec(`webpmux -set exif ./mediadata/data.exif ${asw} -o ${asw}`, async (error) => {
        if (error) return reply(`${error}`)
        danz.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:false, quoted:mek})
        fs.unlinkSync(asw)
        });
        });
        });
        }
        
        			
			//function rank 
			const levelRole = getLevelingLevel(sender)
   	     var role = 'bronz'
   	     if (levelRole <= 3) {
   	         role = 'Copper'
   	     } else if (levelRole <= 5) {
   	         role = 'Iron'
   	     } else if (levelRole <= 7) {
   	         role = 'Silver'
   	     } else if (levelRole <= 10) {
   	         role = 'Gold'
   	     } else if (levelRole <= 12) {
   	         role = 'Platinum'
   	     } else if (levelRole <= 15) {
   	         role = 'Mithril'
   	     } else if (levelRole <= 18) {
   	         role = 'Orichalcum'
   	     } else if (levelRole <= 25) {
   	         role = 'Adamantite'
   	     } else if (levelRole <= 45) {
   	         role = 'Good In Game'
   	     }
   
     //FUNCTION AFK
     if (isGroup && isAntivirtex && !mek.key.fromMe && !isOwner) {
      if (budy.length > 1000) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("「 A N T I V I R T E X  D E T E C T E D 」 \n\nMaaf Kamu Akan Dikick");
        danz.groupRemove(from, [sender]);
      }
    }
    
    // SUSUN KATA
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete susunkata[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${BotName} | ${Miminnya}`, [{"buttonId": `!susunkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                } else {
                    reply("Jawaban Salah!")
                }
            }
            
             // SIAPA AKU
if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = siapakahaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete siapakahaku[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${BotName} | ${Miminnya}`, [{"buttonId": `!siapakahaku`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                } else {
                    reply("Jawaban Salah!")
                }
            }

	        //function leveling
            if (isGroup && isPetualang) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)              
                addBalance(sender, 300, balance)
                givegame(sender, 5, glimit)
                giveLimit(sender, 10, limit)
                //var lvlup = monospace(`╭───「 Level Up 」\n│\n├ • Nama : ${pushname}\n├ • Rank : ${role}\n├ • Status : ${elit}\n├ • Xp : ${getLevelingXp(sender)}\n├ • Level : ${getLevelingLevel(sender)}\n│\n╰───「 Omedeto 」`)
                reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
		        var lvlup = `*🎊Level up player*

*🗯️STATUS PLAYER*
*📍Username :* ${pushname}
*🎖️Role :* ${role}
*🌿Level :* ${getLevelingLevel(sender)}
*🍁Total Xp :* ${getLevelingXp(sender)}
*🌱Progres :* ${getLevelingXp(sender)}/${reqXp}
•━━━━━━━━━━━━━━━━━━━━•
*🎁HADIAH LEVEL UP*
*💰Uang :* 300
*⚡Limit :* 10
*💥Glimit:* 5`
		        but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
             sendButton(from, lvlup, 'Level Up', but)
               }
            } catch (err) {
                console.error(err)
            }
        }  
        
//game        
var _0x6ff743=_0x5d8a;(function(_0x1c0ce3,_0x445b03){var _0x497f3b=_0x5d8a,_0x5f35e3=_0x1c0ce3();while(!![]){try{var _0x73f6c8=-parseInt(_0x497f3b(0x9e))/0x1*(-parseInt(_0x497f3b(0x93))/0x2)+-parseInt(_0x497f3b(0x91))/0x3*(-parseInt(_0x497f3b(0xa7))/0x4)+-parseInt(_0x497f3b(0xa9))/0x5+-parseInt(_0x497f3b(0x9a))/0x6*(-parseInt(_0x497f3b(0xa8))/0x7)+parseInt(_0x497f3b(0xab))/0x8*(parseInt(_0x497f3b(0xa4))/0x9)+parseInt(_0x497f3b(0xaa))/0xa+-parseInt(_0x497f3b(0x9b))/0xb*(parseInt(_0x497f3b(0xa6))/0xc);if(_0x73f6c8===_0x445b03)break;else _0x5f35e3['push'](_0x5f35e3['shift']());}catch(_0x157edb){_0x5f35e3['push'](_0x5f35e3['shift']());}}}(_0x54ec,0x56016),game['cekWaktuFam'](danz,family100));if(tebakgambar[_0x6ff743(0xa5)](sender[_0x6ff743(0x9c)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakgambar[sender['split']('@')[0x0]];if(budy['toLowerCase']()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace(_0x6ff743(0x97)+http+_0x6ff743(0xa0)),but=[{'buttonId':_0x6ff743(0x98),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,'Game',but),delete tebakgambar[sender[_0x6ff743(0x9c)]('@')[0x0]],fs['writeFileSync']('./lib/data/tebakgambar.json',JSON[_0x6ff743(0x96)](tebakgambar));}else reply('Jawaban\x20Salah!');}function _0x54ec(){var _0x353bd9=['3NqqZOv','!tebakkata','18946JaQcSd','./lib/data/tebakanime.json','toLowerCase','stringify','🎮\x20Tebak\x20Gambar\x20\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$','!tebakgambar','🎮\x20Tebak\x20Anime\x20\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$','571284itrKRq','22wYIioZ','split','main\x20lagi','9hnBGeQ','Jawaban\x20salah!','\x20💰\x0a\x0aIngin\x20bermain\x20lagi?\x20klik\x20aja','!caklontong','writeFileSync','Game','585DBxoiS','hasOwnProperty','2772552yBqOEI','692596PYBzQK','21fKGdzF','1378725grYUfd','3209720PPNefk','27704KiQWji','!tebakanime','🎮\x20Cak\x20Lontong\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$'];_0x54ec=function(){return _0x353bd9;};return _0x54ec();}if(tebakanime[_0x6ff743(0xa5)](sender[_0x6ff743(0x9c)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakanime[sender[_0x6ff743(0x9c)]('@')[0x0]];if(budy[_0x6ff743(0x95)]()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace(_0x6ff743(0x99)+http+_0x6ff743(0xa0)),but=[{'buttonId':_0x6ff743(0xac),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,_0x6ff743(0xa3),but),delete tebakanime[sender[_0x6ff743(0x9c)]('@')[0x0]],fs[_0x6ff743(0xa2)](_0x6ff743(0x94),JSON['stringify'](tebakanime));}else reply('Jawaban\x20salah!');}function _0x5d8a(_0x26959a,_0x16eb71){var _0x54ec25=_0x54ec();return _0x5d8a=function(_0x5d8a61,_0x44e3fc){_0x5d8a61=_0x5d8a61-0x91;var _0xbaaeed=_0x54ec25[_0x5d8a61];return _0xbaaeed;},_0x5d8a(_0x26959a,_0x16eb71);}if(tebakkata[_0x6ff743(0xa5)](sender[_0x6ff743(0x9c)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakkata[sender[_0x6ff743(0x9c)]('@')[0x0]];if(budy[_0x6ff743(0x95)]()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace('🎮\x20Tebak\x20Kata\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$'+http+'\x20💰\x0a\x0aIngin\x20bermain\x20lagi?\x20klik\x20aja'),but=[{'buttonId':_0x6ff743(0x92),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,_0x6ff743(0xa3),but),delete tebakkata[sender['split']('@')[0x0]],fs['writeFileSync']('./lib/data/tebakata.json',JSON['stringify'](tebakkata));}else reply(_0x6ff743(0x9f));}if(caklontong['hasOwnProperty'](sender['split']('@')[0x0])&&!isCmd){kuis=!![],jawaban=caklontong[sender['split']('@')[0x0]];if(budy[_0x6ff743(0x95)]()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace(_0x6ff743(0xad)+http+_0x6ff743(0xa0)),but=[{'buttonId':_0x6ff743(0xa1),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,'Game',but),delete caklontong[sender[_0x6ff743(0x9c)]('@')[0x0]],fs['writeFileSync']('./lib/data/caklontong.json',JSON[_0x6ff743(0x96)](caklontong));}else reply('Jawaban\x20salah!');}
 
if (game.isfam(from, family100)) {
  var anjuy = game.getjawaban100(from, family100)
  for (let i of anjuy){
 if (budy.toLowerCase().includes(i)){
 var http = randomNomor(100)
 addBalance(sender, http, balance) 
await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${http}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
 }
  }
  if (anjuy.length < 1){
 danz.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
 family100.splice(game.getfamposi(from, family100), 1)
  }
}

    
//--- Total command
        const cmdadd = () => {
	    hit[0].totalcmd += 1
    	fs.writeFileSync('./lib/data/totalcmd.json', JSON.stringify(hit))
        }
        if (isCmd) cmdadd()
        const totalhit = JSON.parse(fs.readFileSync('./lib/data/totalcmd.json'))[0].totalcmd
        
// ---- Antilink 
        const linkwa = 'https://chat.whatsapp.com/'
		if (budy.includes(`${linkwa}`)){
		if (!isGroup) return
		if (!isAnti) return
        if (!isBotGroupAdmins) return reply('Untung Gue bukan admin, kalo iya gua kick lu')
        linkgc = await danz.groupInviteCode (from)
        if (budy.includes(`${linkwa}${linkgc}`)) return reply('Untung Link group ini')
		if (isGroupAdmins) return reply(`Hmm mantap min`)
		danz.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('byee')
		}, 1100)
		setTimeout( () => {
		danz.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Antilink menyala & link Group Terdeteksi maaf *${pushname}* anda akan di kick`)
		}, 0)
     	}

		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return 
		}            
		
        if (isGroup && isBadWord) {
        if (bad.includes(messagesC)) {
        if (!isGroupAdmins) {
        return reply("JAGA UCAPAN DONG!! 😠")
        .then(() => danz.groupRemove(from, sender))
        .then(() => {
        danz.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
        }).catch(() => danz.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
        } else {
        return reply( "Tolong Jaga Ucapan Min 😇")
        }
        }
        }
// Kalo Make Kasi WM Made By Febriansyah Ajg!!          

        var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
        var petnya = ['😾','🐺','🦊','🐶','🐰']
        var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
        var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']
                    
        const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍋 : 🍋 : 🍋 Win👑', 
        '🔔 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🍒 : 🍒 : 🍒 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🔔 : 🔔 : 🔔 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',    //Mau Ambil? Add Wm Lah Tod
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔', 
        '🍊 : 🍒 : 🍐', 
        '🍒 : 🔔 : 🍊', 
        '🍇 : 🍇 : 🍇 Win👑', 
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐', 
        '🔔 : 🍒 : 🍊', 
        '🍊 : 🍋 : 🔔',	
        '🍐 : 🍒 : 🍋', 
        '🍐 : 🍐 : 🍐 Win👑', 
        '🍊 : 🍒 : 🍒', 
        '🔔 : 🔔 : 🍇', 
        '🍌 : 🍒 : 🔔', 
        '🍐 : 🔔 : 🔔', 
        '🍊 : 🍋 : 🍒', 
        '🍋 : 🍋 : 🍌', 
        '🔔 : 🔔 : 🍇', 
        '🔔 : 🍐 : 🍇', 
        '🍌 : 🍌 : 🍌 Win👑']
        
//━━━━━━━━━━━━━━━[ GAK USAH DI UBAH ]━━━━━━━━━━━━━━━\\

		if (isCmd && !isUser) {
		  pendaftar.push(sender)
		  fs.writeFileSync('./lib/bot/user.json', JSON.stringify(pendaftar))
		}

	    colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
	    const isSimi = simin.includes(from)
	    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isTagedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        if (!isGroup && isCmd) console.log(color('[','white'), color('➳','lime'), color(']','white'), color('NAMA','red'), color(pushname,'yellow'), color('MENGGUNAKAN','white'), color('FITUR :','red'), color(command, 'lime'), 'args :', color(args.length))
        
        if (isCmd && isGroup) console.log(color('[','white'), color('➳','lime'), color(']','white'), color('NAMA','red'), color(pushname,'yellow'), color('MENGGUNAKAN','white'), color('FITUR :','red'), color(command, 'lime'), color(`Di Group ${groupName}`,'yellow'), 'args :', color(args.length))


//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\  

   
switch(nopref) {

              case 'tes': case 'test': case 'bot':
          if (isBanned) return reply(mess.ban)
          pp = `*BOT ONLINE✓*
RUNTIME: ${runtime(process.uptime())}`
          but = [
           { buttonId: `!menu`, buttonText: { displayText: 'MENU' }, type: 1 },
           { buttonId: `!owner`, buttonText: { displayText: 'OWNER' }, type: 1 }]
          sendButton(from, pp, `*NGETES BOT*`, but, troli)
          break          

		
}
          
switch (command) {

					case 'ban': case 'banned': case 'userbn':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				bnnd = body.slice(5)
				ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('./lib/data/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
case 'unban':  
					
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					delp = body.slice(7)
					ban.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./lib/data/banned.json', JSON.stringify(ban))
					reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
					break
case 'listban':
		case 'banlist'://By M4N1K
					teks = '*List Ban:*\n\n'
					for (let manikgans of ban) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${ban.length}*`
					danz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
					break
                   
        //--------------------------------------------------------------------------------------------\\  	               	
    case "setmenu":
if (!mek.key.fromMe && !isOwner) return  reply(mess.only.owner)    
if (!q) return reply(`Masukan opts :\n
loc
pdf`)
if (q == "loc") {
modelmenu = "loc"
reply("Done change menu to "+q)
} else if (q == "fyt") {
modelmenu = "fyt"
reply("Done change menu to "+q)
} else if (q == "catalog") {
modelmenu = "catalog"
reply("Done change menu to "+q)
} else {
reply(`Masukan opts :\n
loc
pdf`)
}
break


case 'sc': case 'sc':
  var { allesce } = require('./lib/sewa')   
Febriansyah(allesce())
break

   
    case 'ghstalk': 
    case 'githubstalk': 
     if (isBanned) return reply(mess.ban)
          {
          if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
          reply(mess.wait)
          damta = await fetchJson(`https://api.github.com/users/${v}`)    
          let txt = `*GITHUB STALKING*

*📍Data Berhasil Didapatkan!*
•️ Username : ${damta.login}
• Name : ${damta.name}
• Followers : ${damta.followers}
• Following : ${damta.following}
• Public Gists : ${damta.public_gists}
• Public Repos : ${damta.public_repos}
• Twitter : ${damta.twitter_username}
• Email : ${damta.email}
• Location : ${damta.location}
• Blog : ${damta.blog}
• Link : ${damta.html_url}
• Bio : ${damta.bio}
• Created : ${damta.created_at}
• Last Updated : ${damta.updated_at}`
          pp = await getBuffer(damta.avatar_url)
          but = [{ buttonId: `!allmenu`, buttonText: { displayText: 'M E N U' }, type: 1 }]
          sendButLocation(from, txt, 'Github Stalk@^1.2.3', pp, but, {quoted: mek}).catch((err) => {                         
		  reply('Data tidak ditemukan')
          })    
          }       
          break            

       case 'fox':  
        if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   danz.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
       case 'dog':  
        if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   danz.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
          break
                   break
       case 'panda':  
        if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   danz.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
       case 'redpanda':  
        if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   danz.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
       case 'bird':  
        if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/bird`)
                   anu1 = await getBuffer(anu.link)
                   danz.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
      case 'koala':  
       if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   danz.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
       case 'meme':  
 if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   danz.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break



    case 'autoread':
          if (args.length < 1) return reply(`Example:\n${prefix}autoread gc/pc on`)
          if (args[0] === "gc") {
          if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
          if (args[1] === "on") {
          if (readGc === true) return
          readGc = true
          reply(`Succes mengaktifkan autoread group`)
          } else if (args[1] === "off") {
          if (readGc === false) return
          readGc = false
          reply(`Succes mematikan autoread group`)
          } else {
          reply(`Pilih on atau off`)
          }
          } else if (args[0] === "pc") {
          if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
          if (args[1] === "on") {
          if (readPc === true) return
          readPc = true
          reply(`Succes mengaktifkan autoread pc`)
          } else if (args[1] === "off") {
          if (readPc === false) return
          readPc = false
          reply(`Succes mematikan autoread pc`)
          } else {
          reply(`Pilih on atau off`)
          }
          } else {
          reply(`*List Auto Read*\n•> gc\n•> pc`)
          }
          break


    case 'autoketik':
          if (!isOwner && !mek.key.fromMe) return
          if (args.length < 1) return reply('Pilih on atau off')
          if (args[0] === "on") {
          if (autoketik === true) return
          autoketik = true
          reply(`Succes mengaktifkan autoketik`)
          } else if (args[0] === "off") {
          if (autoketik === false) return
          autoketik = false
          reply(`Succes mematikan autoketik`)
          } else {
          reply(`Pilih on atau off`)
          }
          break
    case 'autovn':
          if (!isOwner && !mek.key.fromMe) return
          if (args.length < 1) return reply('Pilih on atau off')
          if (args[0] === "on") {
          if (autovn === true) return
          autovn = true
          reply(`Succes mengaktifkan autovn`)
          } else if (args[0] === "off") {
          if (autovn === false) return
          autovn = false
          reply(`Succes mematikan autovn`)
          } else {
          reply(`Pilih on atau off`)
          }           
          break

    case 'bugreportadmin':
          if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
          reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
          danz.sendMessage(`${ownerNumber}@s.whatsapp.net`,`*Bug Report:* ${v}`, text)
          break 
    case 'bugreportdev':
          if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`)       
          reply('Terima Kasih Telah Melaporkan Bug Pada Devoloper, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
          danz.sendMessage('6285849261085@s.whatsapp.net',`*Bug Report:* ${v}\ndari http://wa.me/${sender.split('@')[0]}`, text)
          break
            
case 'profile': case 'rpgmenu':
 if (isBanned) return reply(mess.ban)
if (!isPetualang) return reply(mess.only.player)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • quest 
 • mining
 • mancing
 • luckyday
 • adventure
 • myinventori
 • topleaderboard
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 • killslime
 • killgoblin
 • killdevil
 • killbehemoth
 • killdemond
 • killdemondking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • sellikan
 • sellbesi
 • sellemas
 • selldiamond`)
 but = [
          { buttonId: `!inventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', mrpg, but, {quoted: mek})
          break
    case 'joinrpg':   
          if (isBanned) return reply(mess.ban)
		  if (isPetualang) return reply('Kamu sudah menjadi petualang')
		  if (args.length < 1) return reply(`Kirim perintah ${prefix + command} nama`) 
	   	  _petualang.push(sender)
		  fs.writeFileSync('./lib/data/inventori.json', JSON.stringify(_petualang))        
	      addInventori(sender)
	      addLevelingId(sender) 
          const name = args[0]
          try {
		  ppimg = await danz.getProfilePicture(`${sender.split('@')[0]}@c.us`)
		  } catch {
	      ppimg = 'https://telegra.ph/file/ea03e6d664f8406465f00.jpg'	
		  }
		  const serialUser = createSerial(14)
          const anuu = monospace(`「 SUKSES JOIN RPG 」\n「 PROFILE 」\n • Nama : ${name}\n • Level : ${getLevelingLevel(sender)}\n • Status : ${elit}\n • Xp :  ${getLevelingXp(sender)}/${reqXp}\n\n「 RPG GAME 」`)
          haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${name}&member=${pendaftar.length} User&seri=${serialUser}&pp=${ppimg}&bg=https://telegra.ph/file/d34e017b7d744bdcbfac3.jpg`)
          but = [
          { buttonId: `!rpgmenu`, buttonText: { displayText: 'RPG MENU' }, type: 1 }]
          sendButLocation(from, anuu, 'Rpg Game@^1.2.3', haitod, but, {quoted: mek})  
          break
    case 'mybag':
    case 'cekinven':
    case 'inventori':
    case 'myinventori':
          if (isBanned) return reply(mess.ban)
          if (!isPetualang) return reply(mess.only.player)
          var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
          done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
          but = [{ buttonId: `!adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
          sendButton(from, done, 'Inventori User', but)
          break

case 'kues': case 'quest': case 'misi':
          if (isBanned) return reply(mess.ban)
          if (!isPetualang) return reply(mess.only.player)
          var lordpebri = danz.prepareMessageFromContent(from, {
                        "listMessage": {
						"title": "Hallo kak, Aku danz!!\nAku adalah admin quest di group ini! \nSilahkan pilih quest yang cocok dengan kakak!\nGabung ke petualang pro untuk membuka quest mode demon",
						"description": "\n*Jadi petualangan pro untuk dapatkan hadiah sepesial>_<*",
						"buttonText": "Silahkan Pilih Misinya Kak!",
						"footerText": "@Quest game",
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "Misi Ke-1",
								"rows": [
									{
										"title": "Membunuh Slime",
										"description": "Berburu slime untuk mendapatkan hadiah",
										"rowId": "!slime"
									}
								]
							},
							{
								"title": "Misi Ke-2", 
								"rows": [
									{
										"title": "Membunuh Goblin",
										"description": "Membunuh goblin untuk mendapatkan hadiah",
										"rowId": "!goblin"
									}
								]
							},
							{
								"title": "Misi Ke-3", 
								"rows": [
									{
										"title": "Membunuh Monster Evil Eye",
										"description": "Membunuh monster untuk mendapatkan hadiah",
										"rowId": "!devil"
									}
								]
							},
							{
								"title": "Misi Ke-4",
								"rows": [
									{
										"title": "Membunuh Monster Behemoth",
										"description": "Membunuh monster untuk mendapatkan hadiah",
										"rowId": "!behemoth"
									}
								]
							},
                            {
								"title": "Misi Ke-5",
								"rows": [
									{
										"title": "Membunuh Demon Four Fiends | VIP",
										"description": "Membunuh demon untuk mendapatkan hadiah",
										"rowId": "!demon"
									}
								]
							},
                            {
								"title": "Misi Ke-6",
								"rows": [
									{
										"title": "Membunuh Demon King | VIP",
										"description": "Membunuh demon king untuk mendapatkan hadiah spesial",
										"rowId": "!demonking"
                                  }
								]
							}
						]
					}
				},
			{}
	      )
	      danz.relayWAMessage(lordpebri, {waitForAck: true})     
          break
    case 'slime': case 'killslime':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 400)
          addLevelingXp(sender, ez)
          a = randomNomor(55)
          b = randomNomor(400)
          c = randomNomor(80)
          d = randomNomor(3)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', slime, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break      
    case 'goblin': case 'killgoblin':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 500)
          addLevelingXp(sender, ez)
          a = randomNomor(65)
          b = randomNomor(500)
          c = randomNomor(90)
          d = randomNomor(5)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', goblin, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break                      
    case 'devil': case 'killdevil':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 600)
          addLevelingXp(sender, ez)
          a = randomNomor(70)
          b = randomNomor(600)
          c = randomNomor(95)
          d = randomNomor(6)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', devil, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break
    case 'behemoth': case 'killbehemoth':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 700)
          addLevelingXp(sender, ez)
          a = randomNomor(75)
          b = randomNomor(600)
          c = randomNomor(100)
          d = randomNomor(7)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3',behemoth, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break   
    case 'demon': case 'killdemond': 
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
		  if (!isPremium) return reply('Upss sepertinya kakak bukan petualang pro!\nchat ownet untuk menjadi petualang pro')
          ez = Math.ceil(Math.random() * 850)
          addLevelingXp(sender, ez)
          a = randomNomor(90)
          b = randomNomor(900)
          c = randomNomor(120)
          d = randomNomor(10)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demon, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break  
    case 'demonking': case 'killdemondking':
          if (isBanned) return reply(mess.ban)
          if (!isOwner) return reply ('Hanya Untuk GM')    
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 1000)
          addLevelingXp(sender, ez)
          addLevelingXp(sender, ez)
          addBalance(sender, 1999, balance)
          addEmas(sender, 99)          
          addBesi(sender, 99)
          addDm(sender, 99)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demonking, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break                    
    case 'leaderboard':
	case 'lb':
	      if (isBanned) return reply(mess.ban)
	      _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
          let leaderboardlvl = ' > 𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 <\n\n'
          let nom = 0
          try {
          for (let i = 0; i < 10; i++) {
          nom++
          leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n • *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
          }
          await reply(leaderboardlvl)
          } catch (err) {
          console.error(err)
          await reply(`minimal 10 user untuk bisa mengakses database`)
          }
          break
    case 'sellikan':
          if (isBanned) return reply(mess.ban)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 5 * jmlh
          if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
          sellFish(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)          
          break
    case 'sellbesi':
          if (isBanned) return reply(mess.ban)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 10 * jmlh
          if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
          sellBesi(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔??𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break          
    case 'sellemas':
          if (isBanned) return reply(mess.ban)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 25 * jmlh
          if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
          sellEmas(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break 
    case 'selldiamond':
          if (isBanned) return reply(mess.ban)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          ttl = body.slice(13)
          var etoo = 75 * ttl
          if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
          sellDm(sender, ttl)
          addBalance(sender, etoo, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break                                      
    case 'mancing':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isPetualang) return reply(mess.only.player)	
          ikannya = ikan[Math.floor(Math.random() * ikan.length)]
	      xp = Math.ceil(Math.random() * 350)          
	      coin = randomNomor(50)	    
	      ditangkap = Math.ceil(Math.random() * 50)
	      cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
	      setTimeout( () => {
	      caption = monospace(`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
          but = [
          { buttonId: '!mancing', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
          { buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
           ]
          sendButLocation(from, caption, 'Memancing', cing, but, {quoted: mek})      
          }, 6000)
          setTimeout( () => {
		  danz.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  danz.sendMessage(from, '🎣Meanarik kail. . .', text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  danz.sendMessage(from, '🎣Mulai memancing. . .', text) 
		  }, 1500) // 1000 = 1s,
		  addFish(sender, ditangkap)
		  addLevelingXp(sender, xp)
		  addBalance(sender, coin, balance) 
          limitAdd(sender, limit)         
	      break
    case 'adventure':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isPetualang) return reply(mess.only.player)
          ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
	      const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
          const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
          anu = fs.readFileSync('./lib/rpg/dungeon.js');
          const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
          jsonData = JSON.parse(anu);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasm = await getBuffer(randKey.result)  
	      const adven = Math.ceil(Math.random() * 1000)          
	      const money = Math.ceil(Math.random() * 300)					      	      
	      setTimeout( () => {		
          caption = monospace(`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
          but = [
          { buttonId: `!myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, caption, 'Memancing', hasm, but, {quoted: mek})   
          }, 7000)
          setTimeout( () => {
		  danz.sendMessage(from, `Awass`, text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  danz.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  danz.sendMessage(from, `${pushname} sedang bertualang`, text) 
		  }, 1500) // 1000 = 1s,
		  addLevelingXp(sender, adven)
		  addBalance(sender, money, balance) 
          limitAdd(sender, limit)         
          break
   	case 'mining':   
   	      if (isBanned) return reply(mess.ban)
   	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)                              
          if (!isPetualang) return reply(mess.only.player)
          pp = randomNomor(75)
          emas = randomNomor(15)
          dm = randomNomor(3)
          besi = randomNomor(50)
          done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
          addBalance(sender, pp, balance)          
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
          mining = ('Waitt sedang menguli . . .')
		  setTimeout( () => {		//case by pebri
		  but = [{ buttonId: `!mining`, buttonText: { displayText: 'Mining again' }, type: 1 }]
          sendButton(from, done, 'Mining', but)
		  }, 9000) // 1000 = 1s,
		  setTimeout( () => {
		  danz.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  danz.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  danz.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  danz.sendMessage(from, mining, text, {quoted: mek}) 
		  }, 0) // 1000 = 1s,
	      break	  
    case 'luckyday':  case 'luckytime':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu belum menjadi petualang')
          if (isPremium) {
          ez = Math.ceil(Math.random() * 450)
          a = randomNomor(99)
          b = randomNomor(500)
          c = randomNomor(150)
          addBalance(sender, b, balance)
          addLevelingXp(sender, ez)
          addEmas(sender, a)
          addBesi(sender, c)
          za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButton(from, za, '@LuckyTime', but, mek)   
          }else{
          ez = Math.ceil(Math.random() * 300)
          addLevelingXp(sender, ez)
          a = randomNomor(49)
          b = randomNomor(300)
          c = randomNomor(70)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButton(from, za, '@LuckyTime', but, mek)          
          }  
          gameAdd(sender, glimit) 
          break	              
          
//==============		
    case 'restart':
          if (!isOwner) return 
          reply(mess.wait)
          exec(`node main`)
          reply('_Restarting Bot Success_')
          break             								
	case 'bc2': 
		  if (!isOwner) return reply(mess.only.owner) 
		  if (args.length < 1) return reply('.......')
	      anu = await danz.chats.all()
		  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		  buff = await danz.downloadMediaMessage(encmedia)
		  for (let _ of anu) {
		  danz.sendMessage(_.jid, buff, image, {caption: `❮ PESAN ❯\n\n${body.slice(4)}`}).catch(e => {
		  })
		  }
		  reply('*_succes broadcast_* ')
		  } else {
		  for (let _ of anu) {
		  sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`).catch(e => {
		  })
		  }
		  reply('*_succes broadcast_* ')
		  }
          break				                       
    case 'buylimit':{
          if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)      
          payout = body.slice(10)
          ane = 150 * payout
          if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
          kurangBalance(sender, ane, balance)
          giveLimit(sender, parseInt(args[0]), limit)
          reply(monospace(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance :  $${(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
          }
          break
    case 'buygamelimit':
    case 'buyglimit':{
          if (args.length < 1) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $250 balance`)            
          payout = v
          ane = 250 * payout
          if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
          kurangBalance(sender, ane, balance)
          givegame(sender, payout, glimit)
          reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
          }
          break                    
//------------------< Downloader/Search/Anime 
    case 'addprem':  case 'addpremium':
    case 'addpetualangpro':
          if (isBanned) return reply(mess.ban)
          if (args.length < 1) return reply('ditag')
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)    
		  adprem = `${args[0].replace('@','')}@s.whatsapp.net`
		  prem.push(adprem)
		  fs.writeFileSync('./lib/data/premium.json', JSON.stringify(prem))
	 	  reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
		  break				
	case 'delprem':  case 'delpremium':
	case 'delpetualangpro':
	      if (args.length < 1) return reply('tag')
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)    
		  delp = v
		  prem.splice(`${delp}@s.whatsapp.net`, 1)
		  fs.writeFileSync('./lib/data/premium.json', JSON.stringify(prem))
		  reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
		  break
	case 'listprem': case 'listpremium':
    case 'premlist':
          if (!isPremium && !isOwner) return reply(mess.only.prem)
		  teks = '*List Premium:*\n\n'
		  for (let manikgans of prem) {
		  teks += `- ${manikgans}\n`
		  }
	      teks += `\n*Total : ${prem.length}*`
		  danz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": prem } })
		  break
    case "jadian":
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
	  	  const jdii = groupMembers
		  const koss = groupMembers
		  const akuu = jdii[Math.floor(Math.random() * jdii.length)]
		  const diaa = koss[Math.floor(Math.random() * koss.length)]
	      teks = `Ciee..yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
		  jds.push(akuu.jid)
		  jds.push(diaa.jid)
	      mentions(teks, jds, true)
		  break	
    case "ngewe":
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiid = groupMembers
	      const kosst = groupMembers
	      const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
		  const diaat = kosst[Math.floor(Math.random() * kosst.length)]
		  teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
		  jds.push(akuut.jid)
		  jds.push(diaat.jid)		  		  
		  mentions(teks, jds, true)
	   	  break
    case 'truth':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          const truth = _truth[Math.floor(Math.random() * _truth.length)]
          but = [
          { buttonId: `!dare`, buttonText: { displayText: 'dare' }, type: 1 }, { buttonId: `!truth`, buttonText: { displayText: 'truth' }, type: 1 }]
          sendButImage(from, truth, `Gak Jalanin Donasi`, tde, but)  
          limitAdd(sender, limit)
          break
    case 'dare':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          const dare = _dare[Math.floor(Math.random() * _dare.length)]
          but = [
          { buttonId: `!dare`, buttonText: { displayText: 'dare' }, type: 1 }, { buttonId: `!truth`, buttonText: { displayText: 'truth' }, type: 1 }]
          sendButImage(from, dare, `Gak Jalanin Donasi`, tde, but)  
          limitAdd(sender, limit)
          break	
    case 'addtruth':
          if (isBanned) return reply(mess.ban)
          if (!isOwner) return reply(mess.only.owner)
          if (args.length < 1) return reply('Textnya mana?')
          _truth.push(v)
          fs.writeFileSync('./lib/data/truth.json', JSON.stringify(_truth))
          reply(`Done add ${v} di fitur truth`)
          break
    case 'adddare':
          if (isBanned) return reply(mess.ban)
          if (!isOwner) return reply(mess.only.owner)
          if (args.length < 1) return reply('Textnya mana?')
          _dare.push(v)
          fs.writeFileSync('./lib/data/dare.json', JSON.stringify(_dare))
          reply(`Done add ${v} di fitur dare`)
          break             	  	
    case "terganteng":
    case "terjelek":
    case "tercantik":
    case "tergay":
    case "terpedo":
    case "terwibu":
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiidc = groupMembers
		  const kosstc = groupMembers
		  const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
		  teks = `Yang ${command} di grub ini adalah @${akuutc.jid.split('@')[0]}`
		  jds.push(akuutc.jid)
		  limitAdd(sender, limit)
		  mentions(teks, jds, true)
	      break		
    case 'darkjokes':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          let data = fs.readFileSync('./lib/darkjokes.js');
	      jsonData = JSON.parse(data);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasl = await getBuffer(randKey.result)  
          but = [
          { buttonId: `!darkjokes`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `AhhhGelapKekMasaDepanlu`, `Klik Next Ngab`, hasl, but)   
          limitAdd(sender, limit)       
          break
    case 'tts': case 'gtts':      
          if (isBanned) return reply(mess.ban) 
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          bogay = body.replace(prefix, '')
          const gtts = require('./lib/gtts.js')(args[0])
          if (args.length < 2) return danz.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
          dtt = bogay.slice(8)
          ranm = getRandom('.mp3')
          dtt.length > 600 ? reply('Textnya kebanyakan om') : gtts.save(ranm, dtt, function() {
          sendFileFromStorage(ranm, audio, {quoted: mek, mimetype: 'audio/mp4', ptt: true})
          fs.unlinkSync(ranm)
          limitAdd(sender, limit)
          })
          break
    case 'slot':
    case 'slots':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)           
          if (!isEventon) return reply(mess.only.event)
          const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
          slom = `[  🎰 | SLOTS GAME ]\n━━━━━━━━━━━━━\n🍋 : 🍌 : 🍍\n${somtoy} <== ||\n🍋 : 🍌 : 🍍\n━━━━━━━━━━━━━\n[  🎰 | SLOTS GAME ]\n\nInfo : Dapatkan 3 buah untuk win\n\nContoh : 🍌 : 🍌 : 🍌<== 👑`
          but = [{ buttonId: `!slot`, buttonText: { displayText: 'Play Again' }, type: 1 },
          { buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButton(from, slom, 'Slot Game', but)                 
          limitAdd(sender, limit)
          break
    case 'setlolhuman': 
    case 'setlolkey':
		  if (args.length < 1) return
	      if (!isOwner) return reply(mess.only.owner)
          LomKey = args[0]
          reply(`*Apikey LolHuman berhasil di ubah menjadi* : ${LomKey}`)
	      break
    case 'addbadword': case 'addbd':    
          if (!isOwner) return reply(mess.only.owner)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
          bad.push(v)
          fs.writeFileSync('./lib/data/bad.json', JSON.stringify(bad))
          reply('Success Menambahkan Bad Word!')
          break
    case 'delbadword': case 'deldb':
          if (!isOwner) return reply(mess.only.owner)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)                 
          bad.splice(v)
          fs.writeFileSync('./lib/data/bad.json', JSON.stringify(bad))
          reply('Success Menghapus BAD WORD!')
          break 
    case 'listbadword': case 'lb':
          let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
          for (let i of bad) {
          lbw += `> ${i.replace(bad)}\n`
          }
          await reply(lbw)
          break 
    case 'nobad':
		  if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
          if (args.length < 1) return reply('lel🗿')
          if (args[0] === 'enable') {
          if (isBadWord) return reply('*fitur BadWord sudah aktif tadi!!*')
          badword.push(from)
          fs.writeFileSync('./lib/data/badword.json', JSON.stringify(badword))
          reply(`badword is enable`)
          } else if (args[0] === 'disable') {
          badword.splice(from, 1)
          fs.writeFileSync('./lib/data/badword.json', JSON.stringify(badword))
          reply(`badword is disable`)
          } else {
          reply('dah')
          }
          break
    case 'hacked':
	      if (!isOwner) return 
          if (!isGroup) return reply(mess.only.group)
          if (args.length < 1) return reply('Teksnya?')
          reply('Otw Hack')
          tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
          danz.updateProfilePicture (from, tessgc)
          danz.groupUpdateSubject(from, `HACKED BY ${v}`)
          danz.groupUpdateDescription(from, monospace(`_${pushname} telah meretas grup ini_\n_Diretas Pada ${wita} ${tanggal()}_\n*Tiada Lord Selain Pebri!!*`))                     
          danz.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
          break					
    case "term":
          if (!isOwner) return 
          if (!v) return reply('_-');
          exec(v, (err, stdout) => {
          if (err) return reply(`~ ${err}`);
          if (stdout) {
          reply(stdout);
          }
          });
          break;
//Fitur Fun
case 'suit':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = ["Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😁","Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂","Kamu *Gunting*\nAku *Gunting*\nKita Seri 😅☝️"]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = ["Kamu *Kertas*\nAku *Batu*\nKamu Menang 😁","Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂","Kamu *Kertas*\nAku *Kertas*\nKita Seri 😅☝️"]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = ["Kamu *Batu*\nAku *Gunting*\nKamu Menang 😁","Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂","Kamu *Batu*\nAku *Batu*\nKita Seri 😅☝️"]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'apakah':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
danz.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
break
case 'rate': case 'nilai':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
rate = body.slice(1)
const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
danz.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
break
case 'bisakah':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
danz.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
break
case 'kapankah':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
danz.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
break
case 'howgay': case 'cekgay':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kapankah = body.slice(1)
const gay =['5% GAY','10% GAY','15% GAY','20% GAY','25% GAY','30% GAY','35% GAY','40% GAY','45% GAY','50% GAY','55% GAY','60% GAY','65% GAY','70% GAY','75% GAY','80% GAY','85% GAY','90% GAY','95% GAY','Anjime😳 100% GAY']
const hogay = gay[Math.floor(Math.random() * gay.length)]
danz.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ hogay, text, { quoted: mek })
break
case 'howganteng': case 'cekganteng':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kapankah = body.slice(1)
const ganten =['5% GANTENG','10% GANTENG','15% GANTENG','20% GANTENG','25% GANTENG','30% GANTENG','35% GANTENG','40% GANTENG','45% GANTENG','50% GANTENG','55% GANTENG','60% GANTENG','65% GANTENG','70% GANTENG','75% GANTENG','80% GANTENG','85% GANTENG','90% GANTENG','95% GANTENG','100% GANTENG']
const hoganten = ganten[Math.floor(Math.random() * ganten.length)]
danz.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ hoganten, text, { quoted: mek })
break
case 'howcantik': case 'cekcantik':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kapankah = body.slice(1)
const cantik =['5% CANTIK','10% CANTIK','15% CANTIK','20% CANTIK','25% CANTIK','30% CANTIK','35% CANTIK','40% CANTIK','45% CANTIK','50% CANTIK','55% CANTIK','60% CANTIK','65% CANTIK','70% CANTIK','75% CANTIK','80% CANTIK','85% CANTIK','90% CANTIK','95% CANTIK','100% CANTIK']
const hocantik = cantik[Math.floor(Math.random() * cantik.length)]
danz.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ hocantik, text, { quoted: mek })
break
case 'howlesbi': case 'ceklesbi':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kapankah = body.slice(1)
const lesbi =['5% LESBI','10% LESBI','15% LESBI','20% LESBI','25% LESBI','30% LESBI','35% LESBI','40% LESBI','45% LESBI','50% LESBI','55% LESBI','60% LESBI','65% LESBI','70% LESBI','75% LESBI','80% LESBI','85% LESBI','90% LESBI','95% LESBI','100% LESBI']
const holesbi = lesbi[Math.floor(Math.random() * lesbi.length)]
danz.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ holesbi, text, { quoted: mek })
break
case 'howsatir': case 'ceksatir':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kapankah = body.slice(1)
const satir =['5% SATIR','10% SATIR','15% SATIR','20% SATIR','25% SATIR','30% SATIR','35% SATIR','40% SATIR','45% SATIR','50% SATIR','55% SATIR','60% SATIR','65% SATIR','70% SATIR','75% SATIR','80% BELAU INI SATIR HANDAL??','85% SATIR','90% DAMN BRE BELIAU INI SATIR😳','95 SATIR','100% DAMN BE BALIAU INI SATIR SEKALI😱']
const hosatir = satir[Math.floor(Math.random() * satir.length)]
danz.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ hosatir, text, { quoted: mek })
break

//MENU SIMPLE
case 'simplemenu': case 'menusimple': case 'simpelmenu': case 'menusimpel': case'simple': case 'simpel':
          if (isBanned) return reply(mess.ban)
          var lordpebri = danz.prepareMessageFromContent(from, {
                        "listMessage": {
						"title": `👋Hallo kak ${pushname}\nSilahlan Pilih Menu Yang Cocok Untuk Kakak`,
						"description": `┌────「 *Danzz-Botz* 」───⬣
│⬡ Aktif selama ${runtime(process.uptime())}
│⬡ 1151 Pengguna
│⬡ Mode : ${publik ? 'Public' : 'Self'}
╰──────⬣
┌────「 *Dan Slebew* 」───⬣
│⬡ Owner : wa.me/6285848300025
│⬡ Limit : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
│⬡ Role : ${role}
│⬡ Premium : ${premi}
│⬡ Date : ${tanggal()}
│⬡ Time : ${wita}
╰──────────────⬣
𝚂𝙸𝙻𝙰𝙷𝙺𝙰𝙽 𝙿𝙸𝙻𝙸𝙷 𝙼𝙴𝙽𝚄 𝙳𝙸 𝙱𝙰𝚆𝙰𝙷`,
						"buttonText": "MENU",
						"footerText": "simple menu",
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "🔖 ALLMENU",
								"rows": [
									{
										"title": "🔖「 *ALL MENU* 」",
										"description": "Menampilkan Seluruh Menu",
										"rowId": "!allmenu"
									}
								]
							},
							{
								"title": "👑 OWNER MENU", 
								"rows": [
									{
										"title": "👑「 *OWNER* 」",
										"description": "Menampilkan Menu Owner",
										"rowId": "!menuowner"
									}
								]
							},
                            {
								"title": "🔥️ GAME MENU",
								"rows": [
									{
										"title": "🔥️「 *GAME MENU* 」",
										"description": "Menampilkan Menu Game",
										"rowId": "!menugame"
									}
								]
							},
                            {
								"title": "🎮 FUN MENU",
								"rows": [
									{
										"title": "🎮「 *FUN MENU* 」",
										"description": "Menampilkan Menu Fun",
										"rowId": "!menufun"
									}
								]
							},
                            {
								"title": "🏔️ RPG MENU",
								"rows": [
									{
										"title": "🏔️「 *RPG MENU* 」",
										"description": "Menampilkan Menu Rpg",
										"rowId": "!rpgmenu"
									}
								]
							},
                            {
								"title": "✨ GROUP",
								"rows": [
									{
										"title": "✨「 *GROUP* 」",
										"description": "Menampilkan Menu Grup",
										"rowId": "!menugrup"
									}
								]
							},
                            {
								"title": "🔎 SEARCH",
								"rows": [
									{
										"title": "🔎「 *SEARCH* 」",
										"description": "Menampilkan Menu Search",
										"rowId": "!menusearch"
									}
								]
							},
                            {
								"title": "🍅 ANIME MENU", 
								"rows": [
									{
										"title": "🍅「 *ANIME* 」",
										"description": "Menampilkan Menu Anime",
										"rowId": "!menuanime"
									}
								]
							},
							{
								"title": "📥 DOWLOAD",
								"rows": [
									{
										"title": "📥「 *DOWLOAD* 」",
										"description": "Menampilkan Menu Download",
										"rowId": "!menudownload"
									}
								]
							},
                            {
								"title": "⚙️ STORAGE",
								"rows": [
									{
										"title": "⚙️「 *STORAGE* 」",
										"description": "Menampilkan Menu Storage",
										"rowId": "!menustorage"
										}
								]
							},
                            {
								"title": "🌿️ NULIS",
								"rows": [
									{
										"title": "🌿️「 *NULIS* 」",
										"description": "Menampilkan Menu Nulis",
										"rowId": "!menunulis"
									}
								]
							},
                            {
								"title": "📍 CONVERT",
								"rows": [
									{
										"title": "📍「 *CONVERT* 」",
										"description": "Menampilkan Menu Convert",
										"rowId": "!menuconvert"
									}
								]
							},
                            {
								"title": "👑 UPSWBOT",
								"rows": [
									{
										"title": "👑「 *UPSWBOT* 」",
										"description": "Menampilkan Menu Upswbot",
										"rowId": "!menuswbot"
									}
								]
							},
                            {
								"title": "🎏 STICKER",
								"rows": [
									{
										"title": "🎏「 *STICKER* 」",
										"description": "Menampilkan Menu Sticker",
										"rowId": "!menusticker"
									}
								]
							},
                            {
								"title": "🍂️ RANDOM API",
								"rows": [
									{
										"title": "🍂️「 *RANDOM API* 」",
										"description": "Menampilkan Menu Random Api",
										"rowId": "!menurandomapi"
									}
								]
							},
                            {
								"title": "⚒️ TOOLS",
								"rows": [
									{
										"title": "⚒️「 *TOOLS* 」",
										"description": "Menampilkan Menu Tools",
										"rowId": "!menutools"
									}
								]
							},
                            {
								"title": "🛒 STORE",
								"rows": [
									{
										"title": "🛒「 *STORE* 」",
										"description": "Menampilkan Menu Store",
										"rowId": "!menustore"
                                  }
								]
							}
						]
					}
				},
			{}
	      )
	      danz.relayWAMessage(lordpebri, {waitForAck: true})     
          break

//SIMPEL
case 'menuowner':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  👑「 *OWNER* 」	          
│◦➛ .ping
│◦➛ .self
│◦➛ .ban
│◦➛ .unban
│◦➛ .listban
│◦➛ .public
│◦➛ .runtime
│◦➛ .setthumb
│◦➛ .autoketik
│◦➛ .autovn
│◦➛ .autoread
│◦➛ .addtruth kata
│◦➛ .adddare kata
│◦➛ .listbadword
│◦➛ .setmenu loc
│◦➛ .setmenu fyt
│◦➛ .setmenu catalog
│◦➛ .delbadword kata
│◦➛ .addbadword kata
│◦➛ .listpremium
│◦➛ .addpremium @tag
│◦➛ .delpremium @tag
│◦➛ .addpetualangpro @tag
│◦➛ .delpetualangpto @tag
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU OWNER', but, troli)
break

case 'menuanime':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  🍅「 *ANIME* 」
│◦➛ .loli
│◦➛ .waifu
│◦➛ .waifu2
│◦➛ .husbu
│◦➛ .wallml
│◦➛ .cosplay
│◦➛ .hentai
│◦➛ .nhentai
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU ANIME', but, troli)
break

case 'menugame':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  🔥️「 *GAME* 」	
│◦➛ .tebakkata
│◦➛ .susunkata
│◦➛ .tebakanime
│◦➛ .tebakgambar
│◦➛ .siapakahaku
│◦➛ .caklontong
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU GAME', but, troli)
break

case 'menufun':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  🎮「 *FUN MENU* 」	
│◦➛ .slot
│◦➛ .suit
│◦➛ .nilai
│◦➛ .truth
│◦➛ .dare
│◦➛ .meme
│◦➛ .jadian
│◦➛ .ngewe
│◦➛ .tergay
│◦➛ .terpedo
│◦➛ .terjelek
│◦➛ .terwibu
│◦➛ .tercantik
│◦➛ .terganteng
│◦➛ .apakah
│◦➛ .bisakah
│◦➛ .darkjokes
│◦➛ .kapankah
│◦➛ .howgay @tag
│◦➛ .howsatir @tag
│◦➛ .howcantik @tag
│◦➛ .howganteng @tag
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU GAME', but, troli)
break

case 'menugrup':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  ✨「 *GROUP* 」	
│◦➛ .group
│◦➛ .hacked
│◦➛ .tagall 
│◦➛ .hidetag 
│◦➛ .add 62
│◦➛ .linkgroup
│◦➛ .resetlink
│◦➛ .kick @tag
│◦➛ .join link
│◦➛ .demote @tag
│◦➛ .demoteall
│◦➛ .promote @tag
│◦➛ .promoreall
│◦➛ .del replymes
│◦➛ .setdesc text
│◦➛ .setname name
│◦➛ .setppgc replyimg
│◦➛ .eventgc
│◦➛ .antilink
│◦➛ .antivirtex
│◦➛ .welcome
│◦➛ .nobadword
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU GRUP', but, troli)
break

case 'menudownload':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  📥「 *DOWLOAD* 」	
│◦➛ .play query
│◦➛ .tiktok link
│◦➛ .ytmp3 link
│◦➛ .ytmp4 link
│◦➛ .twitter link
│◦➛ .facebook link
│◦➛ .Instagram link
│◦➛ .mediafire link
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU DOWNLOAD', but, troli)
break

case 'menumedia':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  💿「 *MEDIA* 」	
│◦➛ .wink
│◦➛ .attp text
│◦➛ .tourl img
│◦➛ .toimg reply
│◦➛ .semoji emot
│◦➛ .sticker reply
│◦➛ .smeme reply
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU MEDIA', but, troli)
break

case 'menustorage':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  ⚙️「 *STORAGE* 」
│◦➛ .listvn
│◦➛ .listvideo
│◦➛ .liststicker
│◦➛ .listimg
│◦➛ .addvn nama
│◦➛ .addvideo nama
│◦➛ .addsticker nama
│◦➛ .addimage nama
│◦➛ .getvn data
│◦➛ .getvideo data
│◦➛ .getsticker data
│◦➛ .getimage data
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU STORAGE', but, troli)
break

case 'menuconvert':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  📍「 *CONVERT* 」
│◦➛ .gtts id text
│◦➛ .tovn replyaudio
│◦➛ .tomp3 replyvideo
│◦➛ .fast replyvideo 
│◦➛ .slow replyvideo 
│◦➛ .reverse replyvideo 
│◦➛ .slow2 replyaudio 
│◦➛ .bass replyaudio 
│◦➛ .tupai replyaudio
│◦➛ .gemuk replyaudio 
│◦➛ .nightcore replyaudio
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU CONVERT', but, troli)
break

case 'menuswbot':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  👑「 *UPSWBOT* 」
│◦➛ .upswgift
│◦➛ .upswteks
│◦➛ .upswvideo
│◦➛ .upswaudio
│◦➛ .upswvoice
│◦➛ .upswlokasi
│◦➛ .upswimage
│◦➛ .upswsticker	
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU UPSWBOT', but, troli)
break

case 'menusearch':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  🔎「 *SEARCH* 」
│◦➛ .ssweb link 
│◦➛ .lirik lirik lagu
│◦➛ .gimage query (ban)
│◦➛ .pinterest query (ban)
│◦➛ .ytsearch query
│◦➛ .ranime animenya
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU SEARCH', but, troli)
break

case 'menunulis':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  🌿️「 *NULIS* 」
│◦➛ .nulis teks
│◦➛ .nuliskiri teks
│◦➛ .nuliskanan teks
│◦➛ .foliokiri teks
│◦➛ .foliokanan teks
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU NULIS', but, troli)
break

case 'menusticker':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  🎏「 *STICKER* 」
│◦➛ .gura 
│◦➛ .patrick
│◦➛ .sanime
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU STICKER', but, troli)
break

case 'menutools':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  ⚒️「 *TOOLS* 」	
│◦➛ .jadibot
│◦➛ .stopjadibot
│◦➛ .listjadibot
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU TOOLS', but, troli)
break

case 'menustore':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  🛒「 *STORE* 」	
│◦➛ .buylimit jumlah
│◦➛ .buyglimit jumlah
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU STORE', but, troli)
break

case 'menustalker':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  🗯️「 *STALKER* 」
│◦➛ .ghstalk username
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU STALKER', but, troli)
break

case 'menurandomapi':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  🍂️「 *RANDOM API* 」
│◦➛ .fox
│◦➛ .dog
│◦➛ .bird
│◦➛ .koala
│◦➛ .panda
│◦➛ .redpanda
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU RANDOM API', but, troli)
break

case 'menutextprome':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  📖「 *Text Pro Me* 」	
│◦➛ .blackpink text
│◦➛ .neon text
│◦➛ .greenneon text
│◦➛ .advanceglow text
│◦➛ .futureneon text
│◦➛ .sandwriting text
│◦➛ .sandsummer text
│◦➛ .sandengraved text
│◦➛ .metaldark text
│◦➛ .neonlight text
│◦➛ .holographic text
│◦➛ .text1917 text
│◦➛ .minion text
│◦➛ .deluxesilver text
│◦➛ .newyearcard text
│◦➛ .bloodfrosted text
│◦➛ .halloween text
│◦➛ .jokerlogo text
│◦➛ .fireworksparkle text
│◦➛ .natureleaves text
│◦➛ .bokeh text
│◦➛ .toxic text
│◦➛ .strawberry text
│◦➛ .box3d text
│◦➛ .roadwarning text
│◦➛ .breakwall text
│◦➛ .icecold text
│◦➛ .luxury text
│◦➛ .cloud text
│◦➛ .summersand text
│◦➛ .horrorblood text
│◦➛ .thunder text
│◦➛ .pornhub text text
│◦➛ .glitch text text
│◦➛ .avenger text text
│◦➛ .space text text
│◦➛ .ninjalogo text text
│◦➛ .marvelstudio text text
│◦➛ .lionlogo text text
│◦➛ .wolflogo text text
│◦➛ .teel3d text text
│◦➛ .wallgravity text text
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU TEXT PRO ME', but, troli)
break

case 'menuphotooxy':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  🖼️「 *Photo OXY* 」	
│◦➛ .shadow text
│◦➛ .cup text
│◦➛ .cup1 text
│◦➛ .romance text
│◦➛ .smoke text
│◦➛ .burnpaper text
│◦➛ .lovemessage text
│◦➛ .undergrass text
│◦➛ .love text
│◦➛ .coffe text
│◦➛ .woodheart text
│◦➛ .woodenboard text
│◦➛ .summer3d text
│◦➛ .wolfmetal text
│◦➛ .nature3d text
│◦➛ .underwater text
│◦➛ .golderrose text
│◦➛ .summernature text
│◦➛ .letterleaves text
│◦➛ .glowingneon text
│◦➛ .fallleaves text
│◦➛ .flamming text
│◦➛ .harrypotter text
│◦➛ .carvedwood text
│◦➛ .arcade8bit text text
│◦➛ .battlefield4 text text
│◦➛ .pubg text text
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU PHOTO OXY', but, troli)
break

case 'menuphoto360':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│  📸「 *Photo 360°* 」	
│◦➛ .wetglass text
│◦➛ .multicolor3d text
│◦➛ .watercolor text
│◦➛ .luxurygold text
│◦➛ .galaxywallpaper text
│◦➛ .lighttext text
│◦➛ .beautifulflower text
│◦➛ .puppycute text
│◦➛ .royaltext text
│◦➛ .heartshaped text
│◦➛ .birthdaycake text
│◦➛ .galaxystyle text
│◦➛ .hologram3d text
│◦➛ .greenneon text
│◦➛ .glossychrome text
│◦➛ .greenbush text
│◦➛ .metallogo text
│◦➛ .noeltext text
│◦➛ .glittergold text
│◦➛ .textcake text
│◦➛ .starsnight text
│◦➛ .wooden3d text
│◦➛ .textbyname text
│◦➛ .writegalacy text
│◦➛ .galaxybat text
│◦➛ .snow3d text
│◦➛ .birthdayday text
│◦➛ .goldplaybutton text
│◦➛ .silverplaybutton text
│◦➛ .freefire text
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU PHOTO 360', but, troli)
break

case 'menureport':
if (isBanned) return reply(mess.ban)
pp = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│   ☠️「 *REPORT* 」
│◦➛ .reportadmin 
│◦➛ .reportdev 
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
but = [
{ buttonId: `!simpel`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, 'MENU REPORT', but, troli)
break


//game          
          
    case 'tebakgambar':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./lib/rpgasset/tebakgambar.js');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = await getBuffer(randKey.result.soalImg)
          jawaban = randKey.result.jawaban
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          danz.sendMessage(from, somal, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 60s' }).then(() => {
          tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./lib/data/tebakgambar.json", JSON.stringify(tebakgambar))
          })
          await sleep(60000)
          if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = "*Jawaban*: " + jawaban
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!tebakgambar`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete tebakgambar[sender.split('@')[0]]
          fs.writeFileSync("./lib/data/tebakgambar.json", JSON.stringify(tebakgambar))
          }
          gameAdd(sender, glimit)
          break      

    case 'tebakanime':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./lib/rpgasset/tebakanime.js');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = await getBuffer(randKey.result.soalanime)
          jawaban = randKey.result.jawaban
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          danz.sendMessage(from, somal, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 60s' }).then(() => {
          tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./lib/data/tebakanime.json", JSON.stringify(tebakanime))
          })
          await sleep(60000)
          if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = "*Jawaban*: " + jawaban
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!tebakanime`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete tebakanime[sender.split('@')[0]]
          fs.writeFileSync("./lib/data/tebakanime.json", JSON.stringify(tebakanime))
          }
          gameAdd(sender, glimit)
          break  
                   
    case 'tebakkata':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./lib/rpgasset/tebakkata.json');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = (randKey.soal)
          jawaban = randKey.jawaban
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          danz.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+somal+'\n• *Waktu :* 60s', text, { quoted: mek}).then(() => {tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./lib/data/tebakata.json", JSON.stringify(tebakkata))
          })
          await sleep(60000)
          if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = "*Jawaban*: " + jawaban
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!tebakkata`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete tebakkata[sender.split('@')[0]]
          fs.writeFileSync("./lib/data/tebakata.json", JSON.stringify(tebakkata))
          }
          gameAdd(sender, glimit)
          break               
          
				case 'susunkata':{
		if (isGame(sender, isPremium, isOwner, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${Miminnya}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    let tipenya = `${result.tipe}`
                    susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./lib/data/susunkata.json", JSON.stringify(susunkata))
                    console.log(jawaban)
                    tebakya = result.soal
                    danz.sendMessage(from, "Soal : " + tebakya + '\n' +"Tipe : " + tipenya + '\n\n⏰ Timeout : 60.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(60000)
                    if (susunkata.hasOwnProperty(sender.split('@')[0])) {
                                danz.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '  '+ jawaban +'', text, {quoted: mek}) // ur cods
								delete susunkata[sender.split('@')[0]]
                        fs.writeFileSync("./lib/data/susunkata.json", JSON.stringify(susunkata))
                    }
                    await gameAdd(sender, glimit)}
					break  
					
				case 'siapakahaku': case 'siapaaku':{
		if (isGame(sender, isPremium, isOwner, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${Miminnya}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = `${result.jawaban}`
                    siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./lib/data/siapakahaku.json", JSON.stringify(siapakahaku))
                    console.log(jawaban)
                    let tebakya = result.soal
                    danz.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(60000)
                    if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
                                danz.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete siapakahaku[sender.split('@')[0]]
                        fs.writeFileSync("./lib/data/siapakahaku.json", JSON.stringify(siapakahaku))
                    }
                    await gameAdd(sender, glimit)}
					break   
        
    case 'caklontong':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./lib/rpgasset/caklontong.json');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = (randKey.soal)
          jawaban = randKey.jawaban
          desnya = randKey.deskripsi
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          danz.sendMessage(from, '*+* ```Cak lontong```\n\n• *Soal* :'+somal+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./lib/data/caklontong.json", JSON.stringify(caklontong))
          })
          await sleep(60000)
          if (caklontong.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = `*Jawaban*: ${jawaban}\n*Deskripsi* : ${desnya}`
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!caklontong`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete caklontong[sender.split('@')[0]]
          fs.writeFileSync("./lib/data/caklontong.json", JSON.stringify(caklontong))
          }
          gameAdd(sender, glimit)
          break 



//===Menu

                 
    case 'devoloperinfo': case 'infodeff': case 'deffinfo': case 'info2':
          if (isBanned) return reply(mess.ban)
          var { deffinfox } = require('./lib/sewa')
          Febriansyah(deffinfox()) 
          break
//»»»𝘉𝘶𝘵𝘵𝘰𝘯 𝘉𝘢𝘮𝘩 
    case 'welcome':
 		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)     
          pp = 'on or off?'
          but = [
           { buttonId: `!wel on`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!wel off`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Welcome', but, troli)
          break          
                        case 'sewa':
          if (isBanned) return reply(mess.ban)
          pp = `*╭───── 👑「 SEWA BOT 」*
*│RULES SEWA BOT*_
*│≻ Dilarang buat stiker 18+*
*│≻ Dilarang convert video 18+*
*│≻ Dilarang menggunakan menu 18+*
*│≻ Dilarang ytsearch 18+*
*│≻ Dilarang Gimage 18+*
*│INTINYA DILARANG PAKAI KONTEN YANG BERBAU 18+*
*│≻ Dilarang spam bot*
*│≻ Dilarang telp bot = ban+block*
*│≻ Dilarang chat gk penting = block*
*│≻ Dilarang plagiat*
*│KALAU MEMBER DI GRUP LU GAK BISA BACA RULES GUA KELUAR*
*│LIMIT SEWA BOT LU CUMA 2 JADI KALAU LU MAU ADD CUMA BISA 2 KALI*
*╰─────────────────────────*`
          but = [
           { buttonId: `!menu`, buttonText: { displayText: 'MENU' }, type: 1 },
           { buttonId: `!owner`, buttonText: { displayText: 'OWNER' }, type: 1 }]
          sendButton(from, pp, `*SEWA BOT*`, but, troli)
          break          
    case 'nobadword': case 'nobd':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!nobad enable`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!nobad disable`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'NoBadWord', but, troli)
          break                    
    case 'event':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Event Group', but, troli)
          break 
    case 'nsfw':
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!nww 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!nww 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Nsfw Group', but, troli)
          break                                       
    case 'antilink':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!anti on`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!anti off`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Antilink', but, troli)
          break
    case 'group': case 'gc': case 'grup':     	 
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)  
          menu = `Di Pilih Di Pilih!`
          but = [
           { buttonId: `!opengc`, buttonText: { displayText: 'OPEN️' }, type: 1 },
           { buttonId: `!closegc`, buttonText: { displayText: 'CLOSE' }, type: 1 }]
          sendButton(from, menu, 'Created By Dani', but, troli)
          break           
 
//»»»𝘚𝘦𝘢𝘳𝘤𝘩𝘪𝘯𝘨 𝘔𝘦𝘯𝘶
    //case 'gimage':
    //case 'googleimage':
          //if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Apa Yang Mau Dicari?')
          reply(mess.wait)
          teks = args.join(' ')
          res = await googleImage(teks, google)
          function google(error, result){
          if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
          else {
          var gugImg = result
          var akhir =  gugImg[Math.floor(Math.random() * gugImg.length)].url
          sendFileFromUrl(akhir, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
          limitAdd(sender, limit)
          }
          }
          break 
    //case 'pinterest':
          //if (isBanned) return reply(mess.ban)
          //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if(!v) return reply(`Antum Mau Nyari Gambar Ape? Contoh ${prefix}pinterest waifu ayasaka`)
          pin = await hx.pinterest(v)
          ac = pin[Math.floor(Math.random() * pin.length)]
          di = await getBuffer(ac)
          but = [
           { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `pinterest ${v}`, `Klik Next Ngab`, di, but).catch(e => {
          reply('Gambar tidak di temukan')
          })
          limitAdd(sender, limit)
          break
    case 'lirik':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
          reply(mess.wait)
          teks = body.slice(7)
          lirikLagu(teks).then((res) => {
          let lirik = monospace(`❒「  SEARCH LIRIK  」\n└ Lirik Lagu :\n\n${res[0].result}\n`)
          danz.sendMessage(from, lirik, text, {quoted:mek}).catch(e => {
          reply('Lirik tidak ditemukan')
          })
          limitAdd(sender, limit)
          })
          break
    case 'ytsearch':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Yang mau di cari apaan?')
          teks = args.join(' ')
          reply(mess.wait)
          res = await yts(`${teks}`)
          kant = ``
          for (let i of res.videos) {
          kant += monospace(`❒「  YtSearch  」\n• Judul : ${i.title}\n• Views : ${i.views}\n• Di Upload Pada : ${i.ago}\n• Durasi : ${i.timestamp}\n• Channel : ${i.author.name}\n• Link Video : ${i.url}\n\n\n`)
          }
          var akhir = kant.trim()
          sendFileFromUrl(res.all[0].image, image, {quoted: troli, caption: akhir})
          limitAdd(sender, limit)
          break  
    case 'ranime': case 'random':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Apa Yang Mau Dicari?\nContoh #ranime sarada')
          if (args.length > 1) return reply('Hanya Satu Kata!! Contoh #ranime naruto')
          let im = await hx.chara(v)
          let acak = im[Math.floor(Math.random() * im.length)]
          let li = await getBuffer(acak)   
          but = [
           { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${v}`, `Klik Next Ngab`, li, but).catch(e => {
          reply('Gambar tidak ditemukan')
          })
          limitAdd(sender, limit)
          break
                             
          
//»»»𝘛𝘰𝘰𝘭𝘴 𝘔𝘦𝘯𝘶          				
    case "jadibot":
          if (isBanned) return reply(mess.ban)
          if (!isPremium) return reply(mess.only.prem)
          if (!isOwner && !mek.key.fromMe) return
          if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
          jadibot(reply, danz, from);
          break;
    case "stopjadibot":
          if (isBanned) return reply(mess.ban)
          if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
          stopjadibot(reply);
          break;
    case "listbot":
          if (isBanned) return reply(mess.ban)
          let tekss = "「 *LIST JADIBOT* 」\n";
          for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`;
          }
          reply(tekss);
          break;	
    case 'ssweb': case 'ss':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Urlnya mana kak..')
     	  anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${v}`)
	      buff = await getBuffer(anu.screenshot)
	      danz.sendMessage(from, buff, image, {quoted: mek, caption : v}).catch(e => {
	      reply('Hemmm web maintenance')
	      })
	      limitAdd(sender, limit)
          break    
              	
//»»»𝘖𝘸𝘯𝘦𝘳 𝘔𝘦𝘯𝘶
	case 'public':
	  	  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  publik = true
		  reply('Sukses mengubah mode self ke public')
		  break
	case 'self':
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  publik = false
		  reply('Sukses mengubah mode public ke self')
		  break
	case 'setthumb':
	      if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		  delb = await danz.downloadMediaMessage(boij)
		  fs.writeFileSync(`./media/danzbot.jpg`, delb)
		  reply('Sukses')
          } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          }
	  	  break
    case 'runtime':
    case 'test':
          if (isBanned) return reply(mess.ban)
          run = process.uptime() 
          teks = `${runtime(run)}`
          reply(teks)
          break  
	case 'speed':
	case 'ping':
	      if (isBanned) return reply(mess.ban)
	  	  const timestamp = speed();
	  	  run = process.uptime() 
		  exec(`neofetch --stdout`, (error, stdout, stderr) => {
		  const child = stdout.toString('utf-8')
	  	  const teks = child.replace(/Memory:/, "Ram:")
	 	  const pingnya = `${teks}\nSpeed: ${latensi.toFixed(4)} Second`
		  Febriansyah(`${pingnya}\nRuntime : ${runtime(run)}`)
		  })
		  break
case 'bc': case 'broadcast':
          if (!isOwner) return  reply(mess.only.owner)
          if (args.length < 1) return reply('teks?')
          anu = await danz.chats.all()
          if (isMedia && !mek.message.videoMessage || isQuotedImage) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          bc = await danz.downloadMediaMessage(encmedia)
          for (let _ of anu) {
          tes = `${body.slice(4)}`
          danz.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `© cikobot 2K22`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText:'DONASI'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
          }
          reply('Suksess broadcast')
          } else {
          for (let _ of anu) {
       	  textt = `${body.slice(4)}`
          danz.sendMessage(_.jid, { contentText: `${textt}`, footerText: `${p}${wita} || ${tanggal()}${p}`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText:'DONASI'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
          }
          reply('Suksess broadcast')
          }
          break    
//=== Doujindesu
    case 'nhentai': case 'nhentaipdf': case 'ht':     
          if (isBanned) return reply(mess.ban)
          if (isGroup) return reply('Only private chat')          
          if (!isPremium) return reply('Anda Bukan User VVIP') 
          if (args.length == 0) return reply(`Example: ${prefix + command} 298444`)
          reply(mess.wait)
          henid = args[0]
          get_result = await fetchJson(`http://hadi-api.herokuapp.com/api/nhentai?id=${henid}`)
          dowload = await getBuffer(get_result.download_pdf)  
          danz.sendMessage(from, dowload, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `doujindesu.pdf` }).catch(e => {
          reply('doujin tidak ditemukan')
          })
          break  
    case 'nuklir': case 'nuklirkode':
          if (isBanned) return reply(mess.ban)
          if (isGroup) return reply('Only private chat')          
          if (!isPremium) return reply('Anda Bukan User VVIP')    
          var { nuklir } = require('./lib/nuklir.js')
          danz.sendMessage(from, nuklir(), text, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
          break
    case 'dojin': case 'doujin': case 'doujinkode':
          if (isBanned) return reply(mess.ban)
          if (isGroup) return reply('Only private chat')          
          if (!isPremium) return reply('Anda Bukan User VVIP')    
          var { dojin } = require('./lib/doujin.js')
	      danz.sendMessage(from, dojin(), text, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})	  	  
// end.  
          break
//»»»𝘔𝘦𝘥𝘪𝘢 𝘔𝘦𝘯u
    case 'wink':     
          if (isBanned) return reply(mess.ban)
          etto = await fetchJson('https://some-random-api.ml/animu/wink')
          jadi = await getBuffer(etto.link)
          zz = etto.link 
         // await sendWebp(from, zz).catch(e => {           
       //   gkguna.push(`ambil`)
		  fs.writeFileSync(`./media/ambil.gif`, jadi)
		  //fs.writeFileSync('./', JSON.stringify(videonye))        
		   buffer = fs.readFileSync(`./media/ambil.gif`)
          danz.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek, caption:'Ubah sendiri ke sticker giff pake cmd #sticker'})   
                            
     //     })   
          break
          
          case 'gett':
                if (isBanned) return reply(mess.ban)
           buffer = fs.readFileSync(`./media/ambil.mp4`)
          danz.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })   
          break
    case 'patrick':
          if (isBanned) return reply(mess.ban)
          fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
          .then(res => res.text())
          .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          sendWebp(from, pjr)
          }          
          )
          break
    case 'gura':
    case 'gawgura':          
          if (isBanned) return reply(mess.ban)
          fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
          .then(res => res.text())
          .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          sendWebp(from, pjr)
          }
          )
          break
    case 'sanime':
    case 'stickeranime':       
          if (isBanned) return reply(mess.ban)
          fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
          .then(res => res.text())
          .then(body => {
          let todd = body.split("\n");
          let pjrr = todd[Math.floor(Math.random() * todd.length)];
          sendWebp(from, pjrr)
          }
          )          
          break          
    case 'nulis':
    case 'tulis':
          if (isBanned) return reply(mess.ban)
          if (args.length < 1) return reply('Yang mau di tulis apaan?')
          teks = args.join(' ')
          reply(mess.wait)
          nulis = encodeURIComponent(teks)
          res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
          if (res.data.error) return reply(res.data.error)
          buff = Buffer.from(res.data.result.split(',')[1], 'base64')
          danz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success}).catch(e => {
          return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
          })
          break
          
          
            case 'nuliskiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                .on('exit', () => {
                    danz.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break
            case 'nuliskanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                console.log(e)
                .on('exit', () => {
                    danz.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break
            case 'foliokiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                .on('exit', () => {
                    danz.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break
            case 'foliokanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                .on('exit', () => {
                    danz.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break          
          
          
          
    case 'toimg':          
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
		  if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
	      reply(mess.wait)
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await danz.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.png')
	      exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Upp Sorry Failed to Convert To Sticker^_^')
	      buffer = fs.readFileSync(ran)
		  danz.sendMessage(from, buffer, image, {quoted: mek})
		  limitAdd(sender, limit)
		  fs.unlinkSync(ran)
		  })
	      break
case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* lord`)
try {
if (!isQuotedImage) return reply(`Reply Gambar!`)
reply(mess.wait)
var teks2 = args.join(' ')
var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var media = await danz.downloadMediaMessage(enmedia)
var njay = await uploadImages(media)
var resu = await getBuffer(`https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`)
danz.sendMessage(from, resu, image, {caption:'Nih Kak Tinggal Jadikan Sticker', quoted: mek})
fs.unlinkSync(media)
} catch (e) {
console.log(e)
}
break
    case 'tourl':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (
          ((isMedia && !mek.message.videoMessage) ||
          isQuotedImage ||
          isQuotedVideo) &&
          args.length == 0
          ) {
          boij =
          isQuotedImage || isQuotedVideo
          ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
          .extendedTextMessage.contextInfo
          : mek;
          owgi = await danz.downloadMediaMessage(boij);
          res = await upload(owgi);
          tek = monospace(`Type : Image\nExpired : Permanent\nServer : Telegram ph\nResult : ${res}`)
          danz.sendMessage(from, tek, text, {quoted: mek});
          limitAdd(sender, limit)
          } else {
          reply("kirim/reply gambar/video");
          }
          break;	            
    case "emoji":    
    case "semoji":
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Send command *${prefix}semoji 😁`)
          qes = args.join(" ");
          emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);        
          limitAdd(sender, limit)
          });
          break
    case "tomp4":
          if (isBanned) return reply(mess.ban)
          if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
          ) {
          ger = isQuotedSticker
          ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
          .extendedTextMessage.contextInfo
          : mek;
          owgi = await danz.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
          sendMediaURL(from, res.result, "Done");
          limitAdd(sender, limit)
          });
          } else {
          reply("reply stiker");
          }
          fs.unlinkSync(owgi);
          break;			
	case 'attp':
	      if (isBanned) return reply(mess.ban)
	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} danz`)
          buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(v)}`)
          danz.sendMessage(from, buffer, sticker, { quoted: mek }).catch(e => {
          reply('Gagal!! mungkin terjadi spam')
          })
          limitAdd(sender, limit)
          break;		  
    case 'sticker': case 'stiker': case 'sg': case 's':
          if (isBanned) return reply(mess.ban)
          var a = "Danzz Botz";
          var b = "By Danz";
          if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
          const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           media = await danz.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          danz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          danz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await danz.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          danz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          danz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
          const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          media = await danz.downloadAndSaveMediaMessage(encmedia)
          createExif(a, b);
          modStick(media, danz, mek, from)
          } else {
          reply(`Kirim gambar dengan caption ${prefix}swm atau tag gambar yang sudah dikirim`)
          }
          break;
//»»»𝘚𝘵𝘰𝘳𝘢𝘨𝘦
    case 'addvideo':
          if (isBanned) return reply(mess.ban)
		  if (!isQuotedVideo) return reply('Reply videonya blokk!')
		  svst = body.slice(10)
		  if (!svst) return reply('Nama videonya apa su?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await danz.downloadMediaMessage(boij)
		  videonye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/video/${svst}.mp4`, delb)
		  fs.writeFileSync('./mediadata/video.json', JSON.stringify(videonye))
		  danz.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
		  break					
    case 'getvideo':
          if (isBanned) return reply(mess.ban)
		  namastc = body.slice(10)
		  buffer = fs.readFileSync(`./mediadata/video/${namastc}.mp4`)
		  danz.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
		  break					
	case 'listvideo':
	case 'videolist':
	      if (isBanned) return reply(mess.ban)
		  teks = '*List Video :*\n\n'
		  for (let awokwkwk of videonye) {
	      teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${videonye.length}*`
		  danz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
		  break
    case 'getsticker':
	case 'gets': 
	      if (isBanned) return reply(mess.ban)
		  namastc = body.slice(12)
		  result = fs.readFileSync(`./mediadata/stiker/${namastc}.webp`)
		  danz.sendMessage(from, result, sticker, {quoted :mek})
		  break
    case 'stickerlist':
	case 'liststicker': 
	      if (isBanned) return reply(mess.ban)
		  teks = '*Sticker List :*\n\n'
		  for (let awokwkwk of setiker) {
	  	  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${setiker.length}*`
		  danz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
	      break
    case 'addsticker':
    case 'addstiker':
          if (isBanned) return reply(mess.ban)
		  if (!isQuotedSticker) return reply('Reply stiker nya')
	      svst = body.slice(12)
		  if (!svst) return reply('Nama sticker nya apa?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await danz.downloadMediaMessage(boij)
	  	  setiker.push(`${svst}`)
	 	  fs.writeFileSync(`./mediadata/stiker/${svst}.webp`, delb)
		  fs.writeFileSync(`./mediadata/stik.json`, JSON.stringify(setiker))
	  	  danz.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
	 	  break
    case 'addvn': 
          if (isBanned) return reply(mess.ban)
	      svst = body.slice(7)
		  if (!svst) return reply('Nama audionya apa su?')
	  	  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await danz.downloadMediaMessage(boij)
	  	  audionye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/audio/${svst}.mp3`, delb)
		  fs.writeFileSync('./mediadata/audio.json', JSON.stringify(audionye))
		  danz.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
		  break			
	case 'listvn':
	case 'vnlist': 
	      if (isBanned) return reply(mess.ban)
       	  teks = '*List Vn:*\n\n'
		  for (let awokwkwk of audionye) {
		  teks += `- ${awokwkwk}\n`
	  	  }
		  teks += `\n*Total : ${audionye.length}*`
		  danz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
		  break
    case 'getvn': 
          if (isBanned) return reply(mess.ban)
		  namastc = body.slice(7)
		  buffer = fs.readFileSync(`./mediadata/audio/${namastc}.mp3`)
	 	  danz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
		  break
    case 'addimage':
          if (isBanned) return reply(mess.ban)
		  if (!isQuotedImage) return reply('Reply imagenya blokk!')
		  svst = body.slice(10)
		  if (!svst) return reply('Nama imagenya apa su?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	  delb = await danz.downloadMediaMessage(boij)
		  imagenye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/image/${svst}.jpeg`, delb)
		  fs.writeFileSync('./mediadata/image.json', JSON.stringify(imagenye))
		  danz.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
		  break					
	case 'getimage':
	      if (isBanned) return reply(mess.ban)
	      namastc = body.slice(10)
		  buffer = fs.readFileSync(`./mediadata/image/${namastc}.jpeg`)
		  danz.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
		  break					
    case 'imglist':
	case 'listimg':
	      if (isBanned) return reply(mess.ban)
		  teks = '*List Image :*\n\n'
		  for (let awokwkwk of imagenye) {
		  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${imagenye.length}*`
		  danz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
	 	  break          
//»»»𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘦𝘳          
    case 'tovn':           
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
          reply(mess.wait)
	      encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await danz.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Gagal mengkonversi audio ke ptt')
		  topt = fs.readFileSync(ran)
		  danz.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
		  limitAdd(sender, limit)
		  })
		  break				           
    case "tomp3":           
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedVideo) return reply("Reply videonya!");
          reply(mess.wait);
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await danz.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          danz.sendMessage(from, buffer453, audio, {
          mimetype: "audio/mp4",
          quoted: mek,
          });      
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          });
          break;          
    case "fast":    
          if (isBanned) return reply(mess.ban)        
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedVideo) return reply("Reply videonya!");
          reply(mess.wait);
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await danz.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          danz.sendMessage(from, buffer453, video, {
          mimetype: "video/mp4",
          quoted: mek,
          });
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          }
          );
          break;
    case "slow":            
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedVideo) return reply("Reply videonya!");
          reply(mess.wait);
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await danz.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          danz.sendMessage(from, buffer453, video, {
          mimetype: "video/mp4",
          quoted: mek,
          });
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          }
          );
          break;
    case "reverse":            
          if (isBanned) return reply(mess.ban)
          if (!isQuotedVideo) return reply("Reply videonya!");
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await danz.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          danz.sendMessage(from, buffer453, video, {
          mimetype: "video/mp4",
          quoted: mek,
          });
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          });
          break;      
    case 'bass':             
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
	   	  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await danz.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  danz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
	      fs.unlinkSync(ran)
	      limitAdd(sender, limit)
		  })
		  break
    case 'nightcore':            
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
      	  if (!isQuotedAudio) return reply('Reply Audionya')
		  night = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  core = await danz.downloadAndSaveMediaMessage(night)
		  ran = getRandom('.mp3')
		  reply(mess.wait)
		  exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(core)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  danz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, ptt: true})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
		  })
	      break
    case 'gemuk':            
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await danz.downloadAndSaveMediaMessage(encmedia)
	      ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
	      fs.unlinkSync(media)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  danz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
	 	  })
		  break
    case 'tupai':           
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await danz.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  danz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
		  })
		  break
    case 'slow2':            
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await danz.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
  	      exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(media)
	      if (err) return reply('Error!')
	      hah = fs.readFileSync(ran)
	      danz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
		  })
		  break 
//===Up SW		   
    case 'upswteks':
          if (isBanned) return reply(mess.ban)
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (args.length < 1) return reply('Teksnya?')
          teks = body.slice(10)
          danz.sendMessage('status@broadcast', teks, MessageType.text)
          reply(`Sukses upload status:\n${teks}`)
          break	
    case 'upswlokasi':
          if (isBanned) return reply(mess.ban)
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
          if (args.length < 1) return reply('Teksnya?')
          teks = body.slice(12)
          danz.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
          reply(`Sukses upload lokasi:\n${teks}`)
          break	
    case 'upswsticker':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedSticker) return reply('Reply stikernya!')
          if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
	      const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	      buff = await danz.downloadMediaMessage(encmedia)
	 	  danz.sendMessage('status@broadcast', buff, sticker)
	      }
		  reply(`Sukses upload sticker`)
          break
    case 'upswaudio':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedAudio) return reply('Reply audionya!')
          if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
	      const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	      buff = await danz.downloadMediaMessage(encmedia)
	      danz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
		  }
		  reply(`Sukses upload audio`)
		  break
    case 'upswvoice':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerBl)
          if (!isQuotedAudio) return reply('Reply audionya!')
          if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
		  const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          buff = await danz.downloadMediaMessage(encmedia)
		  danz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
	 	  }
		  reply(`Sukses upload voice`)
		  break
    case 'upswvideo':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          var konti = body.slice(11)
          reply(mess.wait)
          var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      var mediap = await danz.downloadAndSaveMediaMessage(enmediap)
          const buffer3 = fs.readFileSync(mediap)
          danz.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
          reply(`Sukses upload video:\n${konti}`)
          break
    case 'upswgif':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          var konti = body.slice(7)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await danz.downloadAndSaveMediaMessage(enmedia)
          const buffer6 = fs.readFileSync(media)
          danz.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
          reply(`Sukses upload gif:\n${konti}`)
          break
    case 'upswimage':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          var teksyy = body.slice(11)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await danz.downloadAndSaveMediaMessage(enmedia)
          buffer = fs.readFileSync(media)
          danz.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
          reply(`Sukses upload image:\n${teksyy}`)
          break		   
//»»»𝘎𝘳𝘰𝘱 𝘔𝘦𝘯𝘶	
    case 'epen':
          if (isBanned) return reply(mess.ban)
		  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  if (args.length < 1) return reply('Boo :𝘃')
		  if (Number(args[0]) === 1) {
		  if (isEventon) return reply('*SUDAH AKTIF* !!!')
		  event.push(from)
		  fs.writeFileSync('./lib/data/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
		  } else if (Number(args[0]) === 0) {
		  event.splice(from, 1)
		  fs.writeFileSync('./lib/data/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
		  } else {
		  reply('eeee')
		  }										
		  break  
    case 'nww':
          if (isBanned) return reply(mess.ban)
		  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  if (args.length < 1) return reply('Boo :𝘃')
		  if (Number(args[0]) === 1) {
		  if (isNsfw) return reply('*SUDAH AKTIF* !!!')
		  nsfww.push(from)
		  fs.writeFileSync('./lib/data/nsfw.json', JSON.stringify(nsfww))
		  reply('*❬ SUKSES ❭ MENGAKTIFKAN NSFW DI GRUB INI*')
		  } else if (Number(args[0]) === 0) {
		  nsfww.splice(from, 1)
		  fs.writeFileSync('./lib/data/nsfw.json', JSON.stringify(nsfww))
		  reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
		  } else {
		  reply('eeee')
		  }										
		  break		            
    case 'wel':   
          if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
          if ((args[0]) === 'on') {
          if (isWelkom) return reply('welcome sudah aktif')
          _welkom.push(from)
          fs.writeFileSync('./lib/data/welcome.json', JSON.stringify(_welkom))
          reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
          } else if ((args[0]) === 'off') {
          if (!isWelkom) return reply('welcome sudah off sebelumnya')
          _welkom.splice(from, 1)
          fs.writeFileSync('./lib/data/welcome.json', JSON.stringify(_welkom))
          reply(`\`\`\`Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
          } else {
          reply('on untuk mengaktifkan, off untuk menonaktifkan')
          }
          break		           		              	  
    case 'modesimi':
          if (args.length < 1) return reply('hmm')
          if (Number(args[0]) === 1) {
          simin.push(from)
          fs.writeFileSync('./lib/data/simi.json', JSON.stringify(simin))
          reply('Sukses mengaktifkan mode simi')
          } else if (Number(args[0]) === 0) {
          simin.splice(from, 1)
          fs.writeFileSync('./lib/data/simi.json', JSON.stringify(simin))
          reply('Sukes menonaktifkan mode simi')
          } else {
          reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
          }
          break
    case 'anti':
	  	  if (!isGroup) return reply(mess.only.group)
		  if (!isGroupAdmins && !isOwner) return reply('Lu bkn admin')
	      if (!isBotGroupAdmins) return reply('Bot Harus Admin')
		  if (args.length < 1) return reply(`On untuk mengaktifkan & off untuk menonaktifkan`)
		  if ((args[0]) === 'on') {
		  if (isAnti) return reply('Antilink aktif')
		  _antilink.push(from)
	  	  fs.writeFileSync('./lib/data/antilink.json', JSON.stringify(_antilink))
		  reply(`Mengaktifkan fitur anti link di group *${groupMetadata.subject}*`)
		  } else if ((args[0]) === 'off') {
		  if (!isAnti) return reply('Antilink off')
		  _antilink.splice(from, 1)
	      fs.writeFileSync('./lib/data/antilink.json', JSON.stringify(_antilink))
		  reply(`Menonaktifkan fitur anti link di group *${groupMetadata.subject}*`)
		  } else {
	      reply('On untuk mengaktifkan & off untuk menonaktifkan')
	      }
	 	  break
    case 'opengc':
     	  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
          reply(`Sukses Membuka Grup ${groupName}`)
		  danz.groupSettingChange(from, GroupSettingChange.messageSend, false)
		   break
     case 'closegc':
		   if (!isGroup) return reply(mess.only.group)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
		   reply(`Sukses Menutup Grup ${groupName}`)
		   danz.groupSettingChange(from, GroupSettingChange.messageSend, true)
		   break   	 	   
     case "groupinfo": case 'gcinfo': case 'infogc':       	       
           if (!isGroup) return;
           ppUrl = await danz.getProfilePicture(from); // leave empty to get your own
           buffergbl = await getBuffer(ppUrl);
           danz.sendMessage(from, buffergbl, image, {
           quoted: mek,
           caption: `\`\`\`「 Group Info 」\`\`\`\n\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
           });
           break;
     case 'setdesc':
           if (!isGroup) return reply(mess.only.group)
           if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(`Bot Harus Admin dong`)
           if (args.length < 1) return reply(`Ketik *${prefix}setdesc Isi* Buat Edit Desc Grup`)
           teks = body.slice(9)
           danz.groupUpdateDescription(from, teks)
           break	       
   	 case 'setppgc': 
           if (!isGroup) return reply(mess.only.group)
           if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(mess.only.bot)
           media = await danz.downloadAndSaveMediaMessage(mek)
           await danz.updateProfilePicture (from, media)
           reply('[SUKSES] Mengganti icon grub')
	  	   break
   	 case 'setname':
           if (!isGroup) return reply(mess.only.group)
    	   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(mess.only.bot)
           danz.groupUpdateSubject(from, `${body.slice(9)}`)
           reply('Succes, Ganti Nama Grup')	  	     
			case 'add':  
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                    if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					orang = args[0] + '@s.whatsapp.net'
response = await danz.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
danz.sendMessage(from, `User private\n\nMengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
danz.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
					break 
					case 'radd': case 'addreply':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
danz.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yau = q.split('@')[1] + '@s.whatsapp.net'
danz.groupRemove(from, [yau])
reply(`Succses kick target!`)
break

case 'rkick': case 'kickreply':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
danz.groupRemove(from, mentioned)
break      
	case 'antivirtex':
 if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())       
        if (args[0] == "on") {
          if (isAntivirtex) return reply(lang.anjawaUdhOn(command))
          antivirtex.push(from);
          fs.writeFileSync(
            "./src/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply(lang.anjawaOn(command))
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./src/antivirtex.json", JSON.stringify(ant));
          reply(lang.anjawaOff(command))
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Choose one`, [
            {
              buttonId: 'antivirtex on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antivirtex off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
	 case 'demote':
		   if (!isGroup) return reply(mess.only.group)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(mess.only.bot)
		   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
	       mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
	 	   teks = ''
		   for (let _ of mentioned) {
		   teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
	 	   teks += `@_.split('@')[0]`
		   }
		   mentions(teks, mentioned, true)
	 	   danz.groupDemoteAdmin(from, mentioned)
		   } else {
		   mentions(`DEMOTE @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
	  	   danz.groupDemoteAdmin(from, mentioned)
		   }
	       break
	 case 'promote':
		   if (!isGroup) return reply(mess.only.group)
	       if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
	       if (!isBotGroupAdmins) return reply(mess.only.bot)
		   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
		   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
		   teks = ''
		   for (let _ of mentioned) {
		   teks += `Selamat🥳 anda naik menjadi admin grub ( ^ w ^ ) :\n`
		   teks += `@_.split('@')[0]`
		   }
		   mentions(teks, mentioned, true)
		   danz.groupMakeAdmin(from, mentioned)
		   } else {
		   mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub ( ^ w ^ )`, mentioned, true)
		   danz.groupMakeAdmin(from, mentioned)
		   }
		   break
     case 'revoke': case 'risetgc': case 'resetlink':
     case 'revokegroup': case 'revokelink': {
           if (!isGroup) return reply(mess.only.group)
           if (!isGroupAdmins)return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(mess.only.bot)
           var linkgc = await danz.revokeInvite(from)
           mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
           }
           break
     case 'linkgc': case 'link':
     case 'linkgroup': case 'linkgrup':
           linkgc = await danz.groupInviteCode(from)
           reply('https://chat.whatsapp.com/'+linkgc)  
           break         	   
     case 'join':case 'joingc':
		   if (args.length < 1) return reply(`link broo?*`)
		   if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
		   if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('gkvalid..')
	       reply('Tunggu Sebentar..')
		   link = args[0].replace('https://chat.whatsapp.com/','')
	  	   fak = danz.query({ json: ['action', 'invite', link],
		   expect200: true })
		   reply('Berhasil Masuk Grup')
           break		
     case 'delete': case 'del': case 'D':
	       if (!isGroup)return reply(mess.only.group)
		   try {
		   danz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		   } catch (e) {
		   reply('Hanya bisa menghapus pesan dariku')
	  	   }
		   break  
    case 'hidetag':
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
    	  var value = args.join(' ')
		  var group = await danz.groupMetadata(from)
		  var member = group['participants']
		  var mem = []
    	  member.map(async adm => {
		  mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		  })
		  var optionshidetag = {
	      text: value,
		  contextInfo: { mentionedJid: mem },
		  quoted: mek
	      }
	      danz.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":'#IZIN NGETAG',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": tamnel} }  } })
	      break
    case 'tagall':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  members_id = []
		  teks = `🎌 Group : *${groupName}*\n💫 Jumlah member : *${groupMetadata.participants.length}*\n\n┌───⊷ *TAG ALL* ⊶\n`
		  for (let mem of groupMembers) {
		  teks += `├> @${mem.jid.split('@')[0]}\n`
	   	  members_id.push(mem.jid)
		  }
		  teks += `└──────────────`
	 	  mentions(teks, members_id, true)
		  break	
    case 'demoteall':
	   	  if (!isOwner && !mem.key.fromMe) return reply(mess.only.owner)
		  if (!isGroup) return reply(mess.only.group)
		  if (!isBotGroupAdmins) return reply(mess.only.bot)
          members_id = []
		  for (let mem of groupMembers) {
	   	  members_id.push(mem.jid)
	  	  }
          danz.groupDemoteAdmin(from, members_id)
          break
    case 'promoteall':
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  if (!isGroup) return reply(mess.only.group)
		  if (!isBotGroupAdmins) return reply(mess.only.bot)
          members_id = []
		  for (let mem of groupMembers) {
	  	  members_id.push(mem.jid)
	  	  }
          danz.groupMakeAdmin(from, members_id)
          break		  	            		           
//»»»𝘋𝘰𝘸𝘭𝘰𝘢𝘥𝘦𝘳 𝘔𝘦𝘯𝘶     									

    case 'play':
          if (isBanned) return reply(mess.ban)
          if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
          reply('Bentar Om lagi Nyari')
          let yut = await yts(v)
          yta(yut.videos[0].url)             
          .then(async(res) => {
          var { thumb, title, filesizeF, filesize } = res
          var capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁\n•💬 Judul : ${yut.all[0].title}\n•🎥 ID Video : ${yut.all[0].videoId}\n•⏰️ Diupload Pada : ${yut.all[0].ago}\n•👁️️ Views : ${yut.all[0].views}\n•▶️ Durasi : ${yut.all[0].timestamp}\n•📍 Channel : ${yut.all[0].author.name}\n•🔗 Link Channel : ${yut.all[0].author.url}\n•⚡ Link Video : ${yut.videos[0].url}`
          ya = await getBuffer(thumb)
          py =await danz.prepareMessage(from, ya, image)
          sendButloc(from,monospace(capti),'',`*select the type you want to download*`,[{buttonId: `!ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
          {buttonId: `!ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}],null,null,ya)
          }).         
          break      
    
case 'ytmp4': case 'mp4':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.ErrorLink)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Youtube(args[1]).then( data => {
                var teks = `Succes`
			      conn.sendMessage(from, { video: { url: data.medias[1].url }, caption: teks }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.ErrorApi))
			    break
case 'ytmp3': case 'mp3':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.Error.link)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Youtube(args[1]).then( data => {
			      var teks = `*Youtube Audio Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* ${data.medias[7].quality}\n*≻ Size :* ${data.medias[7].formattedSize}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			      conn.sendMessage(from, { audio: { url: data.medias[7].url }, mimetype: 'audio/mp4' }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.ErrorApi))
			    break
    
    case 'tiktokdl': case 'ttdl': case 'tiktokmp4': case 'tiktok':    	        	
          if (isBanned) return reply(mess.ban)    
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 	      if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.Iv)
 	      if (!v) return reply('Link?')
 		  reply(mess.wait)
		  hx.ttdownloader(`${args[0]}`)
    	  .then(result => {
          const { wm, nowm, audio } = result
          axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
          .then(async (a) => {
    	  me = fake
	      danz.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
	      limitAdd(sender, limit)
          })
		  })
		  break
    case "twitter":
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
           return reply(mess.error.url);
           if (!v) return fakegroup("Linknya?");
           ten = args[0];
           var res = await hx.twitter(`${ten}`);
           ren = `${g.HD}`;
           sendMediaURL(from, ren, "Nih kak video nya!!");
           limitAdd(sender, limit)
           break;
     case "facebook":
           if (isBanned) return reply(mess.ban)
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if (!v) return reply("Linknya?");
           if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
           return reply(mess.error.url);
           reply(mess.wait);
           te = args.join(" ");
           hx.fbdown(`${te}`).then((G) => {
           ten = `${G.HD}`;
           sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`).catch(e => {
           reply(mess.error.sc)
           })
           limitAdd(sender, limit)
           });
           break;
     case "instagram":
           if (isBanned) return reply(mess.ban)
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
           return reply(mess.error.url);
           if (!v) return reply("Linknya?");
           reply(mess.wait);
           hx.igdl(args[0]).then(async (result) => {
           for (let i of result.medias) {
           if (i.url.includes("mp4")) {
           let link = await getBuffer(i.url);
           danz.sendMessage(from, link, video, {
           quoted: mek,
           caption: `Type : ${i.type}`,
           });
           } else {
           let link = await getBuffer(i.url);
           danz.sendMessage(from, link, image, {
           quoted: mek,
           caption: `Type : ${i.type}`,
           });
           }
           }
           });
           limitAdd(sender, limit)
           break;		  		  
    case 'mediafire':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Link Nya Mana? ')
          if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
          reply(mess.wait)
          teks = args.join(' ')
          res = await mediafireDl(teks)
          result = monospace(`❒「  MediaFire  」\n• Nama : ${res[0].nama}\n• Ukuran : ${res[0].size}\n• Link : ${res[0].link}`)
          but = [
           { buttonId: `!dwd`, buttonText: { displayText: 'DOWNLOAD️' }, type: 1 }]
          sendButton(from, result, 'MediaFire Downloader', but, troli)
          break
          case 'dwd':
          sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek}).catch(e => {
          reply('Error Dalam Mendownload File')
          })
          limitAdd(sender, limit)
          break
//+++Random
    case 'waifu': case 'loli': case 'husbu': case 'milf': case 'cosplay': case 'wallml':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  var bb = await danz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
          var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]
          var ButtonssMessages = {
          contentText: `*Antum Birahi Dengan ${command}!Tobat Brother*`,
          buttons: buttonnsss,
          footerText: `Klik Next Untuk Melanjutkan`,
          headerType: 4,
          imageMessage: bb.message.imageMessage
          }
          await danz.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : mek})
          fs.unlinkSync(`./${sender}.jpeg`)
          limitAdd(sender, limit)
          break   
    case 'waifu2':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)    
          reply(mess.wait)
          anu = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
          img = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, img, but)
          limitAdd(sender, limit)
          break
    case 'nekochan':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)    
          reply(mess.wait)
          anu = await fetchJson(`https://api.waifu.pics/sfw/neko`)
          img = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, img, but)
          limitAdd(sender, limit)
          break          
   case  'nekochan2':
         if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)   
          if (!isGroup) return reply(mess.only.group)
          reply(mess.wait)
          anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
          buffer = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, buffer, but)
          limitAdd(sender, limit)
          break
   case  'megumin':
         if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)   
          if (!isGroup) return reply(mess.only.group)
          reply(mess.wait)
          anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
          buffer = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, buffer, but)
          limitAdd(sender, limit)
          break                          
//»»»𝘔𝘢𝘬𝘦𝘳 𝘔𝘦𝘯𝘶          
    case 'blackpink':      case 'neon':
    case 'greenneon':     case 'advanceglow':
    case 'futureneon':    case 'sandwriting':
    case 'sandsummer':  case 'sandengraved':
    case 'metaldark':     case 'neonlight':
    case 'holographic':   case 'text1917':
    case 'minion':        case 'deluxesilver':
    case 'newyearcard':  case 'bloodfrosted':
    case 'halloween':     case 'jokerlogo':
    case 'fireworksparkle':case 'natureleaves':
    case 'bokeh':         case 'toxic':
    case 'strawberry':    case 'box3d':
    case 'roadwarning':  case 'breakwall':
    case 'icecold':        case 'luxury':
    case 'cloud':          case 'summersand':
    case 'horrorblood':   case 'thunder':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} danzbot`)
          reply(mess.wait)
          ini_txt = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${LomKey}&text=${ini_txt}`).then((gambar) => {
          danz.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
    case 'pornhub':      case 'glitch':
    case 'avenger':      case 'space':
    case 'ninjalogo':     case 'marvelstudio':
    case 'lionlogo':      case 'wolflogo':
    case 'steel3d':       case 'wallgravity':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} danzbot`)
          reply(mess.wait)
          txt1 = args[0]
          txt2 = args[1]
          getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${LomKey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
          danz.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
         // Photo Oxy //
    case 'shadow':  case 'cup':
    case 'cup1':     case 'romance':
    case 'smoke':   case 'burnpaper':
    case 'lovemessage': case 'undergrass':
    case 'love':      case 'coffe':
    case 'woodheart': case 'woodenboard':
    case 'summer3d': case 'wolfmetal':
    case 'nature3d':   case 'underwater':
    case 'golderrose': case 'summernature':
    case 'letterleaves': case 'glowingneon':
    case 'fallleaves':   case 'flamming':
    case 'harrypotter': case 'carvedwood':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} danzbot`)
          reply(mess.wait)
          ini_txt = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LomKey}&text=${ini_txt}`).then((gambar) => {
          danz.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
    case 'arcade8bit':
    case 'battlefield4':
    case 'pubg':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} danzbot`)
          reply(mess.wait)
          txt1 = args[0]
          txt2 = args[1]      
          getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${LomKey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
           danz.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })          
          break
          // Ephoto 360 //
    case 'wetglass':     case 'multicolor3d':
    case 'watercolor':    case 'luxurygold':
    case 'galaxywallpaper':  case 'lighttext':
    case 'beautifulflower':  case 'puppycute':
    case 'royaltext':      case 'heartshaped':
    case 'birthdaycake':  case 'galaxystyle':
    case 'hologram3d':  case 'greenneon':
    case 'glossychrome': case 'greenbush':
    case 'metallogo':    case 'noeltext':
    case 'glittergold':    case 'textcake':
    case 'starsnight':    case 'wooden3d':
    case 'textbyname':  case 'writegalacy':
    case 'galaxybat':    case 'snow3d':
    case 'birthdayday':  case 'goldplaybutton':
    case 'silverplaybutton': case 'freefire':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} danzbot`)
          reply(mess.wait)
          ini_txt = args.join(" ")      
          getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LomKey}&text=${ini_txt}`).then((gambar) => {
          danz.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
                         
          
case  'blowjob':
      if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (!isPremium) return reply('Anda Bukan User VIP') 
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
//danz.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/miku.jpg')})
reply('dosa:v')
break
case  'hentai': 
      if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (!isPremium) return reply('Anda Bukan User VIP') 
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
//danz.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/miku.jpg')})
reply('dosaa')
break
case  'neko':
      if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (!isPremium) return reply('Anda Bukan User VIP') 
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
//danz.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/miku.jpg')})
reply('dosaa')
break
case  'trapnime':
      if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (!isPremium) return reply('Anda Bukan User VIP') 
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
//danz.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/miku.jpg')})
reply('dosaa')
break

    case 'ahegao':
    case 'ass':
    case 'bdsm':
    case 'cuckold':
    case 'cum':
    case 'ero':
    case 'femdom':
    case 'foot':
    case 'glasses':
    case 'jahy':
    case 'yuri':
    case 'manga':
    case 'pussy':
    case 'thighs':
          if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isGroup) return reply(mess.only.group)        
          if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)       
function _0x1a28(_0x4bbb5c,_0x7612f){var _0x4fba6e=_0x4fba();return _0x1a28=function(_0x1a282e,_0x173fcf){_0x1a282e=_0x1a282e-0x194;var _0x61baf=_0x4fba6e[_0x1a282e];return _0x61baf;},_0x1a28(_0x4bbb5c,_0x7612f);}var _0x1616de=_0x1a28;(function(_0x46840e,_0x5bd52){var _0x247235=_0x1a28,_0x10bbf7=_0x46840e();while(!![]){try{var _0x10dd73=-parseInt(_0x247235(0x19a))/0x1*(parseInt(_0x247235(0x19f))/0x2)+-parseInt(_0x247235(0x19e))/0x3*(parseInt(_0x247235(0x19d))/0x4)+parseInt(_0x247235(0x194))/0x5*(-parseInt(_0x247235(0x19c))/0x6)+parseInt(_0x247235(0x1a0))/0x7*(parseInt(_0x247235(0x1a1))/0x8)+parseInt(_0x247235(0x199))/0x9*(parseInt(_0x247235(0x19b))/0xa)+-parseInt(_0x247235(0x198))/0xb*(-parseInt(_0x247235(0x195))/0xc)+parseInt(_0x247235(0x197))/0xd;if(_0x10dd73===_0x5bd52)break;else _0x10bbf7['push'](_0x10bbf7['shift']());}catch(_0x51d5c2){_0x10bbf7['push'](_0x10bbf7['shift']());}}}(_0x4fba,0x56a18));if(!isPremium)return reply('Anda\x20Bukan\x20User\x20VIP');function _0x4fba(){var _0xbcc374=['3570rlBrhY','4998DlcvEK','16DMYeFg','505017JPGSfr','2ArCEmS','4815629ztJvQL','8wKUzNe','215pNCnJO','300JNCplf','dosaaa','628589gCcRUs','107239jplziL','17370uFfJyh','605020SnRRMR'];_0x4fba=function(){return _0xbcc374;};return _0x4fba();}reply(_0x1616de(0x196)),limitAdd(sender,limit);
          break
          
//++Menunya          
    case 'allmenu': case 'm2':                        
          if (isBanned) return reply(mess.ban)
          but = [
           { buttonId: `!owner`, buttonText: { displayText: 'OWNER' }, type: 1 },
           { buttonId: `!sewa`, buttonText: { displayText: 'SEWA' }, type: 1 }]
          sendButton(from, allmenu(), fake, but, troli)
          break 
    case 'ffshop':      
          var { epep } = require('./lib/shop/listsale.js')
          reply(epep())
          break
          
case 'menu':
      if (isBanned) return reply(mess.ban)
           if (modelmenu == "gakdiset") return reply('set menu dulu kali bang!!')
           	try {
					ppx = await danz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppx = imgtobot
					}
					img = await getBuffer(ppx)
               menu =`┕─━──┑DANZZ◆BOTZ┍──━─┙

*I N F O  U S E R*
Hallo @${sender.split('@')[0]}
Status User : ${premi}
Limit User : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
Limit Game : ${isOwner ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
Uang User : $${(getBalance(sender, balance))}

*I N F O  B O T*
Nama Owner : ${Miminnya}
Nama Bot : ${BotName}
Mode : ${publik ? 'Public' : 'Self'}
Runtime : ${runtime(process.uptime())}
Total Chat : ${totalchat.length} Chat
Total Pengguna : ${pendaftar.length} User
Browser : ${danz.browserDescription[1]}
Server : ${danz.browserDescription[0]}
Speed :  ${latensi.toFixed(4)} Second`
            if (modelmenu == "loc") {
            // menu button loc
            await sendButLocation(from, menu, fake, img, [{buttonId:`!allmenu`,buttonText:{displayText:'ALLMENU'},type:1},{buttonId:`!simpel`,buttonText:{displayText:'SIMPLE MENU'},type:1},{buttonId:`!owner`,buttonText:{displayText:'OWNER'},type:1}], {contextInfo: { mentionedJid:[senderr]}})
            } else if (modelmenu == "fyt") {
            // menu fake yt
                    var menx = monospace(`​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *⦿ Status User :* ${premi}
│ *⦿ Limit User :* ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
│ *⦿ Limit Game :* ${isOwner ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
│ *⦿ Uang User :* $${(getBalance(sender, balance))}
└┬────────────┈ ⳹
┌┤  「  *Status Bot*  」
│ *⦿ Nama Owner :* ${Miminnya}
│ *⦿ Nama Bot :* ${BotName}
│ *⦿ Mode :* ${publik ? 'Public' : 'Self'}
│ *⦿ Runtime :* ${runtime(process.uptime())}
│ *⦿ Total Chat :* ${totalchat.length} Chat
│ *⦿ Total Pengguna :* ${pendaftar.length} User
│ *⦿ Hit Today :* ${hit_today.length} Hit
│ *⦿ Total Hit :* ${totalhit} Hit
│ *⦿ Browser :* ${danz.browserDescription[1]}
│ *⦿ Server :* ${danz.browserDescription[0]}
│ *⦿ Version :* ${danz.browserDescription[2]} 
│ *⦿ Handphone :* ${danz.user.phone.device_manufacturer}
│ *⦿ Speed :*  ${latensi.toFixed(4)} Second
│ *⦿ Versi Whatsapp :* ${danz.user.phone.wa_version}
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`)
danz.sendMessage(from, {"contentText": menx,"footerText": `${fake}\n${wita} || ${tanggal()}`,
"buttons": [
{buttonId: `!simpel`, buttonText: {displayText: `SIMPLE MENU`}, type: 1},
{buttonId: `!allmenu`, buttonText: {displayText: 'ALLMENU‍️'}, type: 1},
{buttonId: `!sewa`, buttonText: {displayText: 'SEWA'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/pdf",
            "title": "danz.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "1111",
            "pageCount": 1111,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "DANZZBOTZ BY #Dani.pdf",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",         
  }}, MessageType.buttonsMessage,{ quoted: troli, sendEphemeral: true, contextInfo:{"forwardingScore":1111,"isForwarded":true, "externalAdReply":{"title": `Hai Kak ${pushname} ${ucapanWaktu}`, "body": 'susbcribe YouTube owner👑', mediaType: 2, thumbnail: fs.readFileSync('./media/fakeyt.jpg'),"previewType": "VIDEO","mediaUrl": `https://www.youtube.com/watch?v=AfqivwnMhmo`}}})
  
} else if (modelmenu == 'catalog') {

           var imgs = await danz.prepareMessage('0@c.us', tamnel, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await danz.prepareMessageFromContent(from, {
            "productMessage": {
            "product": {
            "productImage": imgCatalog,
            "productId": "4457725420906655",
            "title": `THIS IS A MENU`,
            "description": allmenu(),
            "footerText": `メ${BotName}`,
            "currencyCode": "USD",
            "priceAmount1000": "0",
            "productImageCount": 1,
            "firstImageId": 1,
            "salePriceAmount1000": "0",
            "retailerId": `Please Use command Example : ${prefix}sticker`,
            "url": "blm ada"
            },
            "businessOwnerJid": `${ownerNumber}@s.whatsapp.net`,
            }
            }, { quoted: troli, mimetype: 'image/jpeg' })
            danz.relayWAMessage(ctlg)
}
break          

    case 'info':
      var { info } = require('./lib/info')          
      reply(info(pushname))
      danz.sendMessage(from, 'Tanyakan lebih lanjut ke owner', text)
case 'owner':
vcard3 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN:${Miminnya}\n` +
            `item1.TEL;waid=${ownerNumber}:${ownerNumber}\n` +
            `item1.X-ABLabel:👑 Creator\n` +
            `item2.EMAIL;type=INTERNET : dan********@gmail.com\n` +
            `item2.X-ABLabel:📧 Email : dan********@gmail.com\n` +
            `item3.URL:https://youtube.com/c/Surya Azhura/\n` +
            `item3.X-ABLabel:⚙️ Channel Owner\n` +
            `item4.ADR:🇮🇩 Indonesia\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:🌍 Region\n` +
            `item5.X-ABLabel:⚔️ Danzz - Botz Owner\n` +
            'END:VCARD'.trim()
danz.sendMessage(from, {displayName: `Creator Danzz`, vcard: vcard3}, contact, 
{ quoted: troli, 
})
break

   default:

          if (isSimi && bodi != undefined){
          res = await axios.get(`https://api-sv2.simsimi.net/v2/?text=${bodi}&lc=id`)
          pp = res.data.success
          danz.sendMessage(from, pp, text)
          }

          if (budy.startsWith('>') && isOwner) {
          console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
	      try {
	      let evaled = await eval(budy.slice(2))
		  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
		  Febriansyah(`${evaled}`)
	      } catch (err) {
	      reply(`${err}`)
		  }
		  } else if (budy.startsWith('x') && isOwner) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
		  try {
	 	  return danz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
	      } catch (err) {
		  e = String(err)
		  reply(e)
		  }
	      }
          }
		
    	  } catch (e) {
          e = String(e)
          if (!e.includes("this.isZero") && !e.includes("jid")) {
    	  console.log('ERROR TOD : %s', color(e, 'red'))
          }
    	  }
          }
