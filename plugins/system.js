require('../command').cmd({pattern: "system",alias: ["status","botinfo","runtime","uptime"],desc: "Check uptime, RAM usage, and more",category: "main",filename: __filename}, async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {try {const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024), usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2), freeRAM = (totalRAM - usedRAM).toFixed(2), status = `*🚀 Uptime:* ${require('../lib/functions').runtime(process.uptime())}\n*📵 RAM Usage:*\n- *Used*: ${usedRAM} MB\n- *Free*: ${freeRAM} MB\n- *Total*: ${totalRAM} MB\n*🏠 HostName:* ${require("os").hostname()}\n*👤 Owner:* ᴄʏʙᴇʀ ᴋᴀᴠɪʏᴀ`; return reply(`${status}`)} catch (e) {console.log(e); reply(`Error: ${e}`)}});
