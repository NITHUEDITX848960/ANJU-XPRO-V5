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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklVTm9XQlFSTXZaQmNzbjgxVFBvOVUyeklHREJETnZwQTdzNXVFQWpsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXVXbWtQRzNKWmhJTldtZFNENlZ6bStIVXhvREo2OUtXSzdoQ3Fob0FXcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSHhuTUxaNkllVDRRNEk3ODIyWHhiYnZJZjQrUGU0ZmZqaVRabXJhaEU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3NE5nbEdqMVZxOTFFVnNlSm02a0dZaEM2ZCt2T1RyMTVNcVVveXpvanlNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBQYUFEVHY1LzEvN0kyKzhtbVdveHMxMXVGVkd2azNrMFhzMCtuc21qV2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFWR1NBWEE1YThESXFpY2VDNmdYNVptNGp2RDNGWWRZaHJhMkxrMDlFZ3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JEbU5NcWR4M08yT3kvdXNuV2o5bHU0L0dNQlhLYnhMUldGKzdyclcwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVJzanhpQUZLaFN3ZDBpN3dtRE1NWG1lams1S1NMSVFiNmJkNzdReGtuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpzL1VjTXhjdmxHdWlXd3JrbVNmV01vbk5NeFRFM2ZoMEJMcW5lN283eXFxZ1ZZd0cweGhjaDdHZVFRNGR5Z2ZmVDhvUkZDSVlYY05KU3ZFdFEvVGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJZV1p1Vkc1MTNmN0o5NmV5WWdWeGdXYXRUVHhmTndnOHRRVUNpZHZTU1RZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5Sjd0aHFzc1NSYVlCc0FhLVhFTzV3IiwicGhvbmVJZCI6ImQ0NWQxMjNkLTNlMzktNGZiNy1hNzA1LTlhN2Q3NDRlZDRhYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0K2ZLWFhPOXgrU0owK3BMNE0vMjYrd0ZYNUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRSsrazgzVkdNYXc1bTgvY21ZcytGZVZVcTNvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpIRFk5Uk0zIiwibWUiOnsiaWQiOiI5NDc0MDAwNTUxMjo0NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQYXRyaWNrIiwibGlkIjoiMTg1MTE4NDU5NDE0MDc6NDRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQTy85MVlRNHQrWHhRWVlCQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMc3Y3eVpRa1Rva0trMW1wS25qdkZiaGhvR0JLMWxFT1VYUzNGSU9FaEFBPSIsImFjY291bnRTaWduYXR1cmUiOiJlSzNOSGVQcndnYStlRHFhSnpXbUdzM0NYYlFQc1VkY0lwdlFndnFQcHgxQTcwaWZETGVUK2o5TkNmZ3FoOFlHREJXcStySmVrV3ZMZ2U4d1dKaFpEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiamRpN3Vpek5TRi9pMkl1czRIeS9QY3dhZDNKTTZPc01ZUGduYVN5SkhzUUhwcDJQQUxmZkRYM2hqOTNVbSs0SUcvWFF5ZXBvandrb0dEVGVIeEpZalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MDAwNTUxMjo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTN0wrOG1VSkU2SkNwTlpxU3A0N3hXNFlhQmdTdFpSRGxGMHR4U0RoSVFBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU3MDUzMjcsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
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
