let handler = async (m, { conn }) => {
let info = `
*${htki} ONLINE ${htka}*
          
   ๐Bot Online Nih:v
`
const sections = [
   {
    title: `โ INFO`,
	rows: [
	    {title: "๐๏ธMenu", rowId: '.menu', description: 'Event ARY BOT' },
	{title: "๐YT Bot", rowId: '.ytbot', description: 'Youtube Bot' },
	]
    }, {
    title: `โ INFO`,
	rows: [
	    {title: "๐ธSapa Bot", rowId: '.salken', description: 'Discount Pembayaran' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "ARY BOT๐",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "๐ Group Official", null,null, [['Owner','.owner']], m)
}

handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler