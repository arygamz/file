import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `_ðHallo Ganteng/Cantik_\n\nâ°âº *Êá´á´ ÊÊ arygamz*
â²â²â­âââââ®
â­â®âââââââ­â®
ââ°â«â½â½â½â£â¯â
â°ââ«â³â³â³â£ââ¯
â²â²ââââââ
â²â²ââââââ
âââ°ââ¯â°ââ¯
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
                        displayText: 'ð DONASI BANG',
                        url: 'https://saweria.co/AryBotz'
                    }
                },
                {
                    urlButton: {
                        displayText: 'ð á´á´á´Êá´Ê',
                        url: 'https://wa.me/994408465157',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'ð á´á´É´É¢á´É´ á´Éª á´ÊÉªá´ á´á´á´',
                        id: 'huuu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'ð Êá´á´ ÉªÉ´ê°á´',
                        id: '.botinfo'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'ð¬ Êá´ÊÊá´ Êá´á´',
                        id: '.salken'
                    }
                },
            ]
        }
        conn.sendFile(m.chat, audioPTT, '', '', m, false, { ptt: true })
        conn.sendMessage(m.chat, message)
await conn.sendButton(m.chat, `Hallo Kak...\nâ\nJangan di Spam yah bot nya :)\n`,wm + '\n\n' + botdate, thumbbc, [['ð¹MENU','.listmenu']], m, {
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
