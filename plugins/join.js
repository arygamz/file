import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `📮ʙᴏᴛ ɴɢɢᴀᴋ ɢʀᴀᴛɪꜱ ʟᴀɢɪ ᴋᴀᴋ ₍˄.  ̫.˄₎`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm + '\n💬Support By Aryy',
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌹 YOUTUBE',
                        url: 'https://youtube.com/channel/UCibkBnPNnWrUuyRpTwCdMYQ',
                    }
                },
                {
                    urlButton: {
                        displayText: '📞 Creator Bot',
                        url: 'https://wa.me/994408465157',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📜MENU',
                        id: '.menu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🎀SPEED',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '💸SEWA BOT',
                        id: '.sewa'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Yaw? ada apa kak?', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['join']
handler.tags = ['info']
handler.command = /^(join)$/i

export default handler
