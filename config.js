require("./database/module")

//GLOBAL PAYMENT
global.storename = "ByyX STR"
global.dana = "082127568219"
global.qris = "-"


// GLOBAL SETTING
global.owner = "62xxx"
global.namabot = "ByxxBotz"
global.nomorbot = "62xxx"
global.namaCreator = "byyxZ"
global.linkyt = "https://youtube.com/@abyyyferrr"
global.autoJoin = false
global.antilink = false
global.versisc = '7.0.0'

// DELAY JPM
global.delayjpm = 5500


//DOMAIN
global.domain = 'https://'

//APIKEY
global.apikey = 'ptla_HDAA07tpGoCk09LZTMbePt6FPrXLwlde1OCMlUbSu7T'

//CAPIKEY
global.capikey = 'ptlc_3215srTKIRGjGpgVb2jFF5TRaj4ROKd78WSnvdvv73q'

//GLOBAL EGGS
global.eggsnya = '15' 

//GLOBAL LOCATION
global.location = '1' 

//GLOBAL IMAGE URL
global.imageurl = 'https://vault.pictures/p/55018afae43d4485aee8c5a146d41cd3' 


//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = '-'
global.isLink = 'https://whatsapp.com/channel/0029Van86kL5Ui2SgngDlZ3W'
global.packname = "byx toxx"
global.author = "AbyyX"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})