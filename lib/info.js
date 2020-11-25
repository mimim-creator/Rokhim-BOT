exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `😎 -----[ *MENU ${BotName}* ]----- 😎
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

📆 *${tampilTanggal}*
⏲️ *${tampilWaktu}*

📢 INFO BOT! :
   
⚜ *GITHUB*: https://github.com/mimim-creator/Rokhim-BOT
⚜ *AUTHOR*: ABDUR ROKHIM
⚜ *DESIGNER*: ABDUR ROKHIM
⚜ *INSTAGRAM*: ${instagramlu}
⚜ *SCRIPT ORIGINAL BY*: ABDUL MUTTAQIN / FDCIABDUL

🚀 INFO LAIN! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS
*AUTHOR*: ABDUR ROKHIM

📌 JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
👑 MAU DONASI? SILAHKAN KETIK #donate

📺 *Iklan* : *KIKO ENAK TAU:v*

✅ Follow akun instagram admin ${instagramlu}

🔖 INFORMASI COVID-19 TERBARU!

📉 POSITIF: *${corohelp.confirmed.value}*
🌞 SEMBUH: *${corohelp.recovered.value}*
🤧 MENINGGAL: *${corohelp.deaths.value}*
🎉 UPDATE: *${corohelp.lastUpdate}*

🗡️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang togel di *${BotName} ?:v*
☎️ WA : *${whatsapplu}*
  
📢 Gunakan dengan bijak ‼️
📲 Bot ini berjalan ${kapanbotaktif} ‼️

👑 Grup WhatsApp : ${grupch1}

✳️ Facebook (Like) : ${grupch2}

  
😎 -----[ *POWERED BY ${BotName}* ]----- 😎`
}
