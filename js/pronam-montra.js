const durga_montra = "সর্ব মঙ্গলমঙ্গল্যে শিবে সর্বার্থ সাধিকে। শরণ্যে ত্রাম্বকে গৌরী নারায়ণী নমোহস্তুতে।।যা দেবী সবর্বভূতেষু মাতৃরূপেন সংস্থিতানমসত্মস্যৈ নমসত্মস্যৈ নমসত্মস্যৈ নমো নমঃ।"
const durga_montra_details = "মহাবিদ্যা তুমি, মহামায়া, মহামেধা, তুমি মহাস্মৃতি। তুমি-ই সেই মহামোহ, তুমি-ই মহাদেবী, তুমি মহেশ্বরী।।"

const soroshoti_montra = "নমো সরস্বতী মহাভাগে বিদ্যে কমললোচনে। বিশ্বরূপে বিশালাক্ষ্মী বিদ্যাংদেহি নমোহস্তুতে।। জয় জয় দেবী চরাচর সারে, কুচযুগশোভিত মুক্তাহারে। বীনারঞ্জিত পুস্তক হস্তে, ভগবতী ভারতী দেবী নমহস্তুতে।।"
const soroshoti_montra_details = "দেবী সরস্বতী আদ্যন্তবিহীনা, শ্বেতপদ্মে আসীনা, শ্বেতপুষ্পে শোভিতা, শ্বেতবস্ত্র-পরিহিতা এবং শ্বেতগন্ধে অনুলিপ্তা।১ অধিকন্তু তাঁহার হস্তে শ্বেত রুদ্রাক্ষের মালা; তিনি শ্বেতচন্দনে চর্চিতা, শ্বেতবীণাধারিণী, শুভ্রবর্ণা এবং শ্বেত অলঙ্কারে ভূষিতা"

const lokkhi_montra = "ওঁ বিশ্বরূপস্য ভার্যাসি পদ্মে পদ্মালয়ে শুভে । সর্বতঃ পাহি মাং দেবী মহালক্ষ্মী.."
const lokkhi_montra_details = "দক্ষিণহস্তে পাশ, অক্ষমালা এবং বামহস্তে পদ্ম ও অঙ্কুশধারিণী, পদ্মাসনে উপবিষ্টা, শ্রীরূপা, ত্রিলোকমাতা, গৌরবর্ণা, সুন্দরী, সর্বালঙ্কারভূষিতা, ব্যগ্রহস্তে স্বর্ণপদ্মধারিণী এবং দক্ষিণহস্তে বরদাত্রী দেবীকে ধ্যান করি।"

const gonesh_montra = "একদন্তং মহাকায়ং লম্বোদর গজাননম। বিঘ্নবিনাশকং দেবং হেরম্বং পনমাম্যহম।। "
const gonesh_montra_details = "  “যিনি একদন্ত, মহাকায়, লম্বোদর, গজানন এবং বিঘ্ননাশকারী সেই হেরম্বদেবকে আমি প্রণাম করি। "

const kartik_montra = "ওঁ কার্ত্তিকের মহাভাগ দৈত্যদর্পনিসূদন। প্রণোতোহং মহাবাহো নমস্তে শিখিবাহন। রুদ্রপুত্র নমস্ত্তভ্যং শক্তিহস্ত বরপ্রদ। ষান্মাতুর মহাভাগ তারকান্তকর প্রভো। মহাতপস্বী ভগবান্ পিতুর্মাতুঃ প্রিয় সদা। দেবানাং যজ্ঞরক্ষার্থং জাতস্ত্বং গিরিশিখরে। শৈলাত্মজায়াং ভবতে তুভ্যং নিত্যং নমো নমঃ।"
const kartik_montra_details = "হে মহাভাগ, দৈত্যদলনকারী কার্ত্তিক দেব তোমায় প্রণাম করি। হে মহাবাহু, ময়ূর বাহন, তোমাকে নমস্কার। হে রুদ্রের (শিব) পুত্র, শক্তি নামক অস্ত্র তোমার হাতে। তুমি বর প্রদান কর। ছয়। কৃত্তিকা তোমার ধাত্রীমাতা। জনক-জননী প্রিয় হে মহাভাগ, হে ভগবান, তারকাসুর বিনাশক, হে মহাতপস্বী প্রভু তোমাকে প্রণাম। দেবতাদের যজ্ঞ রক্ষার জন্য পর্তবতের চূড়ায় তুমি জন্মগ্রহণ করেছ। হে পর্বতী দেবীর পুত্র তোমাকে সতত প্রণাম করি।"

const btn_durga = document.getElementById('btn-1');
const btn_soroshoti = document.getElementById('btn-2');
const btn_lokkhi = document.getElementById('btn-3');
const btn_gonesh = document.getElementById('btn-4');
const btn_kartik = document.getElementById('btn-5');

const btn_popup = document.getElementById('btn-popup');
const pop_img = document.getElementById('pop-img');
const pop_text1 = document.getElementById('pop-text1');
const pop_text2 = document.getElementById('pop-text2');

console.log(pop_text1)

btn_durga.addEventListener('click', function () {
  btn_popup.id = 'btn1'
  pop_img.src = `images/devotar-img/durga.jpg`
  pop_text1.innerHTML = durga_montra
  pop_text2.innerHTML = durga_montra_details
})
btn_soroshoti.addEventListener('click', function () {
  btn_popup.id = 'btn2'
  pop_img.src = `images/devotar-img/soroshoti.jpg`
  pop_text1.innerHTML = soroshoti_montra
  pop_text2.innerHTML = soroshoti_montra_details
})
btn_lokkhi.addEventListener('click', function () {
  btn_popup.id = 'btn3'
  pop_img.src = `images/devotar-img/lokkhi.jpg`
  pop_text1.innerHTML = lokkhi_montra
  pop_text2.innerHTML = lokkhi_montra_details
})
btn_gonesh.addEventListener('click', function () {
  btn_popup.id = 'btn4'
  pop_img.src = `images/devotar-img/gonesh.jpg`
  pop_text1.innerHTML = gonesh_montra
  pop_text2.innerHTML = gonesh_montra_details
})
btn_kartik.addEventListener('click', function () {
  btn_popup.id = 'btn5'
  pop_img.src = `images/devotar-img/kartik.jpg`
  pop_text1.innerHTML = kartik_montra
  pop_text2.innerHTML = kartik_montra_details
})


