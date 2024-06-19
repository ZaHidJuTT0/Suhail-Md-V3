const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Muhammad786:Muhammad786@cluster0.fwvspqh.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://www.instagram.com/zidii_decent_boy?igsh=MXVobjVlMXBrYzcxbg==";
global.website=process.env.GURL || "https://www.instagram.com/zidii_decent_boy?igsh=MXVobjVlMXBrYzcxbg==" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/36eb746e1fbda08fccbe2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`𓆩𝐌𝐫ͥ𝒔ᷟ,𝐙፝፝֟֟𝒊𝙙𝒊𝒊𓆪`" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923288330026";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/36eb746e1fbda08fccbe2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_02_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjksXG4gICAgICAgIDUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDY2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDMsXG4gICAgICAgIDQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM2LFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NSxcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MixcbiAgICAgICAgNzksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMjMyLFxuICAgICAgICA4MixcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NixcbiAgICAgICAgMjA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdkMFB1eVIrUFEyb2ZRcHBPOE5Wdk9kNlQ4bFZIMklZTmN5aUVPOG03amM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJpeWxtYUJQUlB1SnNHdWJUNVRubVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjMxZTBkMjktMzU5YS00MWQ5LTgwNDgtNTNmMDYzMmJlNmExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDE1OCxcbiAgICAgIDE4MixcbiAgICAgIDQ3LFxuICAgICAgODEsXG4gICAgICAxOTYsXG4gICAgICAyMzQsXG4gICAgICA4OCxcbiAgICAgIDQsXG4gICAgICAxMjcsXG4gICAgICAyMixcbiAgICAgIDE3NCxcbiAgICAgIDM0LFxuICAgICAgMjI5LFxuICAgICAgMTU2LFxuICAgICAgODksXG4gICAgICAxNTQsXG4gICAgICAxNTYsXG4gICAgICAxMzIsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAxMjcsXG4gICAgICAxNTksXG4gICAgICAxNCxcbiAgICAgIDI0OCxcbiAgICAgIDE1LFxuICAgICAgMTEwLFxuICAgICAgNjMsXG4gICAgICAyNTUsXG4gICAgICAxNyxcbiAgICAgIDIxNyxcbiAgICAgIDQsXG4gICAgICA1NSxcbiAgICAgIDE1NCxcbiAgICAgIDEwNixcbiAgICAgIDM2LFxuICAgICAgMjA5LFxuICAgICAgMTI2LFxuICAgICAgMzAsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTg1NDNTMTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEwNDY5NzgwMDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODYwNDE1MzI4NjI1MjQ6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHFFcDdvQ0VJKzl5ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLZmVOdFJsMzBkL09Qek1zWURDUHMrUlp0dGpHSnk3NkFUY0k1VmxBelNNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkx3ZUVCL2Z1VkF5alk3S3pPazJoQ2UxOGtuNzI2V2V4RXpqeWhST1RvdXcwbHFTMXBrdWpyQUJzNUo4VnFYdFhHVUFIY2dSbURqYnRnR25FN1lXZkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlYyU0RoWkU5YXdTeUlsVU4yQzhzdVpScmVMZWVtMlhZV1FmQkc4TU1JRDlHV2ppdEV2Rmk4QVZmM1pDL2NoOUprRFUwdnNtcHlpa2pEK1hORlA1cEJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEwNDY5NzgwMDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODc4NzczMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🦋",
  packname: process.env.PACK_NAME || "德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽",
  botname : process.env.BOT_NAME  || "`𓆩𝐌𝐫ͥ𝒔ᷟ,𝐙፝፝֟֟𝒊𝙙𝒊𝒊𓆪`",
  ownername:process.env.OWNER_NAME|| "𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "Public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
