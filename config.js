/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

global.prems = ["6285764175824","6282181552813"]
// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '087b253e44',
}

// Other
global.botname = 'SHIZUKA-BOT'
global.namasbot = '๐๐๐๐ฏ๐ช๐ ๐-๐๐ฟ'
global.wm = '๐ฆ๐ต๐ถ๐๐๐ธ๐ฎ'
global.owner = ['6282181552813','6285764175824']
global.packname = 'Rival Abadi'
global.author = '๐๐๐ฎ๐ช๐ ๐ ๐ '
global.sessionName = 'session'

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','๐ฆ','๐ค','๐ฟ']
global.sp = 'เฟ'
global.mess = {
    success: '_*DONE,* JANGAN RAGU UNTUK MENGGUNAKAN SELURUH FITUR SHIZUKA BOT, KARENA DATA ANDA AKAN DI HAPUS DALAM WAKTU SATU JAM DI SERVER, DAN DATA ANDA AKAN AMAN DARI ORANG LAIN_',
    admin: '๐๐๐ข๐ช ๐ฝ๐ช๐ ๐๐ฃ ๐๐๐ข๐๐ฃ',
    botAdmin: 'hmm, Kayaknya bot bukan admin deh๐\nCoba lagi nanti kalau bot udah jadi admin...',
    owner: '๐๐ต๐๐๐๐ ๐ข๐๐ป๐ฒ๐ฟ',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '๐ง๐๐ป๐ด๐ด๐ ๐๐ฒ๐ฏ๐ฒ๐๐ฎ๐ฟ๐',
    premi: '_KAMU BUKAN MEMBER PREMIUM!!! SILAHKAN CHAT OWNER UNTUK MEMBELI PREMIUM!!!_',
    endLimit: 'LIMIT HARIAN ANDA TELAH HABIS... _MAU BELI PREMIUM??? CHAT OWNER_',
    error: 'Maaf, Terjadi kesalahan',
    errorApi: 'Maaf, Terjadi kesalahan di Server-nya!'
}
global.limitawal = {
    premium: 999999999999999999999999,
    free: 100
}

global.junaAi = fs.readFileSync('./media/juna.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
