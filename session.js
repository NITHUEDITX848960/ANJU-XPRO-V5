//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05wMTFxVUpScit0dDhiUU93M1MrTzdOTU9RQThDcTZWTG9NaWszSzExWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlZcnBZcmVpb2hKNThGV1NaaFYxbzIrYUxuZFJpOVY1NGU3bXJsVDBCWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUHZHSkQ2eVF0V2l4ZjluQ3JMemlRNG9Ydzl1OFgzUEE0RTBadElzUG5BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCelRLa3FrVExJOUxuRDRaeGdjN1BRaWZ3eDd3WVZsZHFabXR0bXorbURzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBSUMrcWVSOWI5WUEyWUh0ckN4T0h5VGJMcXJPUDhQMWpUYW1oVjIrbE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI4Nm8xcmFsYjdYUkZsRVAvRjFkUFlBeHBoNWhRTnJZd2IyUlRGYU50Rjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVwa2lram9OWVRCSUFMSTZZaE1qdjZFYlloNUNYSnpkRVdZbmN4MmpIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVNaYVNwTTZBWE9Za2UxTmpON3ZoQU1QZHZHSjdLT3k5VDROMUVvZENHTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNFQmU2N2VsYnQvMFhxVVFzRC9teU5LZUloSnBsY05FZlhGZVRvUjk2cWp0dkFFeGw3TkFZMDNRZWYxVVNENUtMbXl1ZkJFTHNzbnVGbTQ0OFRSOWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6ImRFNjJRcTBKUHo0UmNFMFdBWUdpb2xVbkxGYmM2K2RZTTZJSnMyMEM0WlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1HUFRPRnB5UlVPajFzZ2xTN0VHbFEiLCJwaG9uZUlkIjoiNzlkMzE0NjgtYzJmNS00NzM4LTlkZjAtOGYxMDRiNWU5NzRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhhRVJvYlRjbGN6dG9SRzNUU0VkY0pGWWlQQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSk1OUGpwZWo3ZkF6djd4ZG40dktkcWNoSEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUIzVlZOVkoiLCJtZSI6eyJpZCI6Ijk0Nzc0MTE1NTEyOjE5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTY4Njc2NTUyNjY3MzY0OjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXZkdHFZREVOSEptc1VHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibnlLaFgwZXRiQUZCc0R5TGp1K1VhREduMFlBSmJlMHczU2dvaGlqY3lIcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRmMvOGpGYThELzVsMmc2MWM0U25rdmY3R1RrcncxdHN0czZjRE9PU1pLZHZQdnMvcHpQMFFYM0VxbE41ak5SRVdoM05MYUluanVwOUZrZVdyOWRjQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImxiaXRYeXU5eDcvUDdoK3VGeDlZK0xjV01PcVhQR2RLUXNIcWl5dkRxQ2tsYnZaL21NekwxV1BPWEhmejNnZmdhdkFDak1kcFU3UEhUZldXNkRMZ2pBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzQxMTU1MTI6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjhpb1Y5SHJXd0JRYkE4aTQ3dmxHZ3hwOUdBQ1czdE1OMG9LSVlvM01oNyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NzUxNjQ3LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
