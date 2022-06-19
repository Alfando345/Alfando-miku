/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

global.prems = ["62882021947109","6289510173767"]
// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'f46748255951',
}

// Other
global.botname = 'SHIZUKA-BOT'
global.namasbot = 'Shizuka'
global.wm = 'Shizu-Bot'
global.owner = ['6282181552813','6285764175824','6288216335309']
global.packname = 'Rival Abadi'
global.author = 'SHIZUKA NO AI'
global.sessionName = 'session'

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '࿈'
global.mess = {
    success: '_*DONE,* JANGAN RAGU UNTUK MENGGUNAKAN SELURUH FITUR SHIZUKA BOT, KARENA DATA ANDA AKAN DI HAPUS DALAM WAKTU SATU JAM DI SERVER, DAN DATA ANDA AKAN AMAN DARI ORANG LAIN_',
    admin: '_MOHON MAAF, SEPERTINYA KAMU BUKAN ADMIN... KAMU HARUS MENJADI ADMIN TERLEBIH DAHULU UNTUK MENGGUNAKAN FITUR INI...',
    botAdmin: '_ERROR, BOT BUKAN ADMIN_ kode:638383928Ecbs',
    owner: '*Hanya bisa digunakan oleh owner bot!! mau punya bot sendiri??? WA.ME/6285764175824*',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_SABAR... ORANG SABAR DISAYANG TUHAN..._😉',
    premi: 'Fitur Ini Hanya Digunakan Untuk User Premium!',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    error: 'Maaf, Terjadi kesalahan',
    errorApi: 'Maaf, Terjadi kesalahan di Server-nya!'
}
global.limitawal = {
    premium: 999999999999999999999999,
    free: 50
}

global.junaAi = fs.readFileSync('./media/juna.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
