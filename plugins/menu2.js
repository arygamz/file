import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `_👋Hallo Ganteng/Cantik_\n\n╰► *ʙᴏᴛ ʙʏ arygamz*
╲╲╭━━━━╮
╭╮┃▆┈┈▆┃╭╮
┃╰┫▽▽▽┣╯┃
╰━┫△△△┣━╯
╲╲┃┈┈┈┈┃
╲╲┃┈┏┓┈┃
▔▔╰━╯╰━╯
`

let audioName = "Play-Date-Melanie-Martinez-Cover-by-#U90a2#U51ef#U60a6XKY.opus";
let audioPTT = fs.readFileSync('./mp3/' + audioName)

let td = 'application/pdf'
const message = {
            document: { url: thumbbc },
            jpegThumbnail: await (await fetch(thumbbc)).buffer(), fileName: wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: wm,
            footer: wm2,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌎 DONASI BANG',
                        url: 'https://saweria.co/AryBotz'
                    }
                },
                {
                    urlButton: {
                        displayText: '📞 ᴀᴜᴛʜᴏʀ',
                        url: 'https://wa.me/994408465157',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📛 ᴊᴀɴɢᴀɴ ᴅɪ ᴋʟɪᴋ ᴋᴀᴋ',
                        id: 'huuu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📊 ʙᴏᴛ ɪɴꜰᴏ',
                        id: '.botinfo'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '💬 ʜᴀʟʟᴏ ʙᴏᴛ',
                        id: '.salken'
                    }
                },
            ]
        }
        conn.sendFile(m.chat, audioPTT, '', '', m, false, { ptt: true })
        conn.sendMessage(m.chat, message)
await conn.sendButton(m.chat, `Hallo Kak...\n➘\nJangan di Spam yah bot nya :)\n`,wm + '\n\n' + botdate, thumbbc, [['🌹MENU','.listmenu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Bot By arygamz',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sgh
                      }}
})
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help)$/i

handler.register = true
handler.exp = 3

export default handler
