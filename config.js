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
global.namasbot = '𝙎𝙝𝙞𝙯𝙪𝙠𝙖-𝙈𝘿'
global.wm = '𝗦𝗵𝗶𝘇𝘂𝗸𝗮'
global.owner = ['6282181552813','6285764175824']
global.packname = 'Rival Abadi'
global.author = '𝙃𝙖𝙮𝙪𝙠𝙠𝙠'
global.sessionName = 'session'

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '࿈'
global.mess = {
    success: '_*DONE,* JANGAN RAGU UNTUK MENGGUNAKAN SELURUH FITUR SHIZUKA BOT, KARENA DATA ANDA AKAN DI HAPUS DALAM WAKTU SATU JAM DI SERVER, DAN DATA ANDA AKAN AMAN DARI ORANG LAIN_',
    admin: '𝙆𝙖𝙢𝙪 𝘽𝙪𝙠𝙖𝙣 𝙖𝙙𝙢𝙞𝙣',
    botAdmin: 'hmm, Kayaknya bot bukan admin deh😁\nCoba lagi nanti kalau bot udah jadi admin...',
    owner: '𝗞𝗵𝘂𝘀𝘂𝘀 𝗢𝘄𝗻𝗲𝗿',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '𝗧𝘂𝗻𝗴𝗴𝘂 𝘀𝗲𝗯𝗲𝘁𝗮𝗿😉',
    premi: '_KAMU BUKAN MEMBER PREMIUM!!! SILAHKAN CHAT OWNER UNTUK MEMBELI PREMIUM!!!_',
    endLimit: 'LIMIT HARIAN ANDA TELAH HABIS... _MAU BELI PREMIUM??? CHAT OWNER_',
    error: 'Maaf, Terjadi kesalahan',
    errorApi: 'Maaf, Terjadi kesalahan di Server-nya!'
}
global.limitawal = {
    premium: 999999999999999999999999,
    free: 15
}

global.junaAi = fs.readFileSync('./media/juna.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
