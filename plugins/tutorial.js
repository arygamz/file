let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *TUTORIAL* ${htka}

*ð® Command Termux:*
Command termux Ary Bot
â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬


ð´âÂ¸ Ketik di *[TERMUX]*
1) $ pkg upgrade && pkg update
2) $ pkg install git -y
3) $ pkg install ffmpeg -y
4) $ pkg install imagemagick -y
5) $ pkg install nodejs -y
6) $ git clone (link sc github)
7) $ cd (nama file)
8) $ npm i
9) $ node .


â«â«â«â«â«â«â«â«â«â«â«

ð¸======== *PEMISAH* ====================ð¸
Ini hanya untuk tutorial lain ya, yg ga paham misal ada yg
gagal, make command di bawah ini


ð´âÂ¸ *Untuk Sc nya cari sendiri, atau beli sc ku*
6) $ termux-setup-storage
7) $ cd storage/(nama file yg kmu rename) Jika storage ga berfungsi
ganti menjadi _cd sdcard/_


ð´âÂ¸ *Git*
1) $ pkg install git -y
2) $ pkg install ffmpeg -y
3) $ pkg install imagemagick -y
4) $ pkg install nodejs -y

ð´âÂ¸ *Script*
5) $ git clone (link sc github)
6) $ cd (nama sc)

*ð´âÂ¸ Penginstal :*
$ npm start
atau
$ npm i
$ npm i pm2 && pm2 start (sesuaikan sama sc kalian)
$ node .

[ ð£ Note : Tanda $ Ga Perlu Di Ketik ]
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'ðScript', url: 'https://s.id/-1a7RO'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['cbb', 'carabuatbot', 'runbot']
handler.tags = ['info']
handler.command = /^(cbb|cararunbot|runbot)$/i
handler.private = true

export default handler
