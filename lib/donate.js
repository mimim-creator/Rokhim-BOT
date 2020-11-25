exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `😎 -----[ *MENU DONASI ${BotName}* ]----- 😎
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

📆 *${tampilTanggal}*
⏰ *${tampilWaktu}*

📌 Silahkan donasi dibawah ini :
   
🏆 *PULSA*: _0878-4811-5476_ 🏆
🏆 *PULSA*: _0878-4811-5476_ 🏆
🏆 *PULSA*: _0878-4811-5476_ 🏆
🏆 *PULSA*: _0878-4811-5476_ 🏆
🏆 *PULSA*: _0878-4811-5476_ 🏆
🏆 *PULSA*: _0878-4811-5476_ 🏆

📺 *Iklan* : *Semuanya Indah Pada waktunya:)*

✅ Follow akun instagram admin ${instagramlu}

🔖 INFORMASI COVID-19 TERBARU!

📉 POSITIF: *${corohelp.confirmed.value}*
🌞 SEMBUH: *${corohelp.recovered.value}*
🤧 MENINGGAL: *${corohelp.deaths.value}*
🎉 UPDATE: *${corohelp.lastUpdate}*

🗡️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang rondo di *${BotName} ?:v*
☎️ WA : *${whatsapplu}*
  
📢 Gunakan dengan bijak ‼️
📲 Bot ini berjalan ${kapanbotaktif} ‼️

🔱 Grup WhatsApp : ${grupch1}

🔜 Facebook (Like) : ${grupch2}

  
😎 -----[ *POWERED BY ${BotName}* ]----- 😎`
}
