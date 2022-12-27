let fs = require('fs')
let handler = async (m) => {
if (stiker) return conn.sendFile(m.chat, stiker, './sticker/awokawok.webp', '', m)
conn.fakeReply(m.chat, stiker, '0@s.whatsapp.net', ' *HAHAHA* ', 'status@broadcast')
}

handler.customPrefix = /^(wkwkwk|awokawok|awikawok|wokwokwok|awikwok|awowkwowk|awokawok|HAHA|wk|wkwk)$/i
handler.command = new RegExp

export default handler 