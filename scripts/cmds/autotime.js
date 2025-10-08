const schedule = require("node-schedule");
const chalk = require("chalk");

module.exports.config = {
  name: "autosent",
  version: "10.1.1",
  hasPermssion: 0,
  credits: "MUNTASIR MAHMUD",
  description: "Automatically sends messages at scheduled times (Bangladesh Time)",
  category: "group messenger", // ✅ fixed: correct field name
  usages: "[]",
  cooldowns: 3
};

// ⏰ All Messages (12AM–11PM)
const messages = [
  { time: "12:00 AM", message: "এখন সময় রাত 12:00 AM ⏳\nঅনেক রাত হলো, ঘুমিয়ে পড় Bby Good Night 😴💤❤️" },
  { time: "1:00 AM", message: "এখন সময় রাত 1:00 AM ⏳\nকিরে তুই এখনো ঘুমাস নাই? তাড়াতাড়ি ঘুমিয়ে পড়!😾😴🛌" },
  { time: "2:00 AM", message: "এখন সময় রাত 2:00 AM ⏳\nঘুমে আয় ভাই! এখনো জাইগা আফসোস ক্যান?😤👊💤" },
  { time: "3:00 AM", message: "এখন সময় রাত 3:00 AM ⏳\nসবাই ঘুমাইয়া গেছে, তুই এখন জাইগা আসোস ক্যান?🙄🌃🛌" },
  { time: "4:00 AM", message: "এখন সময় ভোর 4:00 AM ⏳\nএকটু পর আজান হবে, সময় হয়ে গেছে। 🕌🕋🕓" },
  { time: "5:00 AM", message: "এখন সময় ভোর 5:00 AM ⏳\nফজরের আজান হয়ে গেছে, নামাজটা পরে নিও পিও~ 🕌✨🤲💖" },
  { time: "6:00 AM", message: "এখন সময় সকাল 6:00 AM ⏳\nআসসালামুয়ালাইকুম Good Morning Bby! এখন বিছানা থেকে উঠে ব্যায়াম টা করে ফেল 🌅💖😳" },
  { time: "7:00 AM", message: "এখন সময় সকাল 7:00 AM ⏳\nঘুম ভাঙতেই মোবাইল! দাঁত ব্রাশটা করবি তো নাকি!🛌➡️📱" },
  { time: "8:00 AM", message: "এখন সময় সকাল 8:00 AM ⏳\nপিও, মোবাইল রেখে দাঁত ব্রাশ করে খেয়ে নাও!📱🪥🍽️" },
  { time: "9:00 AM", message: "এখন সময় সকাল 9:00 AM ⏳\nBby, Breakfast korco?🍳🥞💖" },
  { time: "10:00 AM", message: "এখন সময় সকাল 10:00 AM ⏳\nকিরে ভন্ড, তুই আজ কলেজ যাস নাই? 😜📚🙄" },
  { time: "11:00 AM", message: "এখন সময় সকাল 11:00 AM ⏳\nনাটক কম কর পিও~ বস এখন বিজি আছে!🙄📱💼" },
  { time: "12:00 PM", message: "এখন সময় দুপুর 12:00 PM ⏳\nGood Afternoon! 🌞🙌🌸" },
  { time: "1:00 PM", message: "এখন সময় দুপুর 1:00 PM ⏳\nভন্ড কোথাকার মোবাইল বন্ধ করে জোহরের নামাজ পড়ে নাও😻❣️🥰" },
  { time: "2:00 PM", message: "এখন সময় দুপুর 2:00 PM ⏳\nভন্ড কোথাকার, মোবাইল রাখ! গোসল করে খাওয়া-দাওয়া করে নে🔪🛁🍽️" },
  { time: "3:00 PM", message: "এখন সময় বিকেল 3:00 PM ⏳\nJan, তোমাকে ছাড়া আর দুপুরে ঘুম হয় না….!😴💔🌙" },
  { time: "4:00 PM", message: "এখন সময় বিকেল 4:00 PM ⏳\nঅনেক গরম পড়েছিল আজ! 🥵🌞💦" },
  { time: "5:00 PM", message: "এখন সময় বিকেল 5:00 PM ⏳\nপরিস্থিতি যেমনি হোক না কেন, সব সময় হলে হাসতেই হবে! 😅🕒🙂" },
  { time: "6:00 PM", message: "এখন সময় সন্ধ্যা 6:00 PM ⏳\nGood Evening Everyone! সবাই হাত মুখ ধুয়ে নাও! 🌆👐💦" },
  { time: "7:00 PM", message: "এখন সময় সন্ধ্যা 7:00 PM ⏳\nকিরে ভন্ড, তুই আজ পড়তে বসছিলি নাকি?😏📚🤔" },
  { time: "8:00 PM", message: "এখন সময় রাত 8:00 PM ⏳\nওই ওই, এতো bot bot না করে ভাতটা খা🫰😎🔥" },
  { time: "9:00 PM", message: "এখন সময় রাত 9:00 PM ⏳\nআমার cute bby টাহ খানা খাইছে...!😘🍽️❤️" },
  { time: "10:00 PM", message: "এখন সময় রাত 10:00 PM ⏳\nকিরে ভন্ড, খাইবি কখন? সারাদিন মোবাইল টিপস..!😜📱😾" },
  { time: "11:00 PM", message: "এখন সময় রাত 11:00 PM ⏳\nযে ছেড়ে গেছে 😔 তাকে ভুলে যাও 🙂🤗" }
];

module.exports.onLoad = () => {
  const api = global.GoatBot.bot.api;

  console.log(chalk.bold.hex("#00ff99")("\n============ AUTOSENT COMMAND LOADED (BANGLADESH TIME) ============\n"));

  messages.forEach(({ time, message }) => {
    const [hour, minute, period] = time.split(/[: ]/);
    let hour24 = parseInt(hour, 10);
    if (period === "PM" && hour !== "12") hour24 += 12;
    if (period === "AM" && hour === "12") hour24 = 0;

    const rule = new schedule.RecurrenceRule();
    rule.tz = "Asia/Dhaka";
    rule.hour = hour24;
    rule.minute = parseInt(minute, 10);

    schedule.scheduleJob(rule, async () => {
      const allThreadIDs = global.GoatBot?.threadsData?.keys();
      if (!allThreadIDs?.length) return;

      for (const threadID of allThreadIDs) {
        try {
          await api.sendMessage(message, threadID);
          console.log(chalk.hex("#00FFFF")(`📤 Sent (${time}) to Thread: ${threadID}`));
        } catch (error) {
          console.error(chalk.red(`❌ Failed to send to ${threadID}: ${error.message}`));
        }
      }
    });

    console.log(chalk.hex("#FFD700")(`⏰ Scheduled (BDT): ${time} => ${message.slice(0, 25)}...`));
  });

  console.log(chalk.bold.hex("#00ffcc")("\n============ ALL MESSAGES SCHEDULED SUCCESSFULLY ✅ ============\n"));
};

module.exports.run = () => {};
