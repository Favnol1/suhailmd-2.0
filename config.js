I'mconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349153556919";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_11_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDczLFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICA5NixcbiAgICAgICAgMjM0LFxuICAgICAgICA4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5V0tqa3l6aU1aOHkyZEhYUDdSRVJta3BlN2Fuak1lNWR5ZUM3czBQYk1RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNTM1NTY5MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU0RDQ0MjE4NjAzQTA2RDkwRDRGQjE5Q0Q2NEZFM0QxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTIxOTExOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkNWxwQ3hCbVFBU01ZOFRnYnlSTGNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNjNWYxOWE5LTUxNzktNGYxOS1iM2M5LWNkOTIwMDdkMmUwMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICA1MCxcbiAgICAgIDI0NCxcbiAgICAgIDM3LFxuICAgICAgMzYsXG4gICAgICAyMTksXG4gICAgICAyMjIsXG4gICAgICAxNDIsXG4gICAgICAxNDQsXG4gICAgICAxMDAsXG4gICAgICAxNjAsXG4gICAgICAyMTMsXG4gICAgICAxNTgsXG4gICAgICAxOSxcbiAgICAgIDYsXG4gICAgICAxOTMsXG4gICAgICAxNDksXG4gICAgICAyMDIsXG4gICAgICAzLFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgNjgsXG4gICAgICAyNyxcbiAgICAgIDE4NSxcbiAgICAgIDcwLFxuICAgICAgMTExLFxuICAgICAgMTg5LFxuICAgICAgMjMsXG4gICAgICAxNDQsXG4gICAgICAxMzgsXG4gICAgICAyMzMsXG4gICAgICAyNyxcbiAgICAgIDg5LFxuICAgICAgOTcsXG4gICAgICAyMzEsXG4gICAgICAyOCxcbiAgICAgIDYzLFxuICAgICAgMzAsXG4gICAgICAxODgsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGOTFQNkRKUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1MzU1NjkxOTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzE3NzM5NzU1MTExNDc6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNeWM4NGNCRUtLZHdia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhreFdweEZDUE0vSnphblk1MnFlUWZlL2QxaWpJM3BLNkxCVjFWQUNjbWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRUFQMzZUUERFcCthejhZTGlxU0RwQXRBS3ZMT2Y5dFdsdXE5dGwxUFJBekcyejNmTjVFNFpaQTJHQjFRNllINHovS3Freis2QkhudnZSaWg5Z0tJQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYzl1U3lqZ3FMRWxZa21oRGdEODBoVmJMekllWHlxcHRQbFdCNkFZVy9KVkNjN0s4L3prY0x2VjR5R1pkay8zSWpPdFJRbTZvVDFDanVpdFFPbkhSQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1MzU1NjkxOTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEyMTkxMTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMTUhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNSC5qc29uIjogIntcImtleURhdGFcIjpcIlhvZjJoWFZpYm13TTdVUzM3djVYU1dJVndhdE9lOTBLZzBCYTV5VFBobEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjg1MDAzMzM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMxMTg1Mzk3MDU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
