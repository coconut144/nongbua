// ── ข้อมูลสถานที่ท่องเที่ยว (ใช้ร่วมกันทุก section) ──
const places = [
  {
    name: "เชียงใหม่",
    region: "north",
    label: "ภาคเหนือ",
    color: "#0a4d2e",
    bg: "#e8f5ee",
    icon: "🏔️",
    desc: "เมืองสามฝ่าย วัดเก่าแก่ และวัฒนธรรมล้านนาอันงดงาม",
    stars: 5
  },
  {
    name: "กรุงเทพมหานคร",
    region: "central",
    label: "ภาคกลาง",
    color: "#7a4800",
    bg: "#fff3e0",
    icon: "🏙️",
    desc: "มหานครคึกคัก ศูนย์รวมวัฒนธรรมและแหล่งช้อปปิ้งระดับโลก",
    stars: 5
  },
  {
    name: "ภูเก็ต",
    region: "south",
    label: "ภาคใต้",
    color: "#0a3d6b",
    bg: "#e3f0fb",
    icon: "🌊",
    desc: "เกาะใหญ่ชายทะเลฝั่งอันดามัน หาดทรายขาว น้ำทะเลใส",
    stars: 5
  },
  {
    name: "เกาะสมุย",
    region: "south",
    label: "ภาคใต้",
    color: "#0a3d6b",
    bg: "#e3f0fb",
    icon: "🌴",
    desc: "เกาะในอ่าวไทย บรรยากาศสงบ เหมาะสำหรับพักผ่อนระยะยาว",
    stars: 4
  },
  {
    name: "อยุธยา",
    region: "central",
    label: "ภาคกลาง",
    color: "#7a4800",
    bg: "#fff3e0",
    icon: "🏛️",
    desc: "อดีตราชธานีกว่า 400 ปี มรดกโลก UNESCO ที่น่าทึ่ง",
    stars: 5
  },
  {
    name: "เชียงราย",
    region: "north",
    label: "ภาคเหนือ",
    color: "#0a4d2e",
    bg: "#e8f5ee",
    icon: "⛩️",
    desc: "วัดร่องขุ่น วัดพระธาตุ และชายแดนสามเหลี่ยมทองคำ",
    stars: 4
  },
  {
    name: "กระบี่",
    region: "south",
    label: "ภาคใต้",
    color: "#0a3d6b",
    bg: "#e3f0fb",
    icon: "🪨",
    desc: "โขดหินปูน ถ้ำ และเกาะแก่งที่สวยที่สุดในประเทศ",
    stars: 4
  },
  {
    name: "พัทยา",
    region: "east",
    label: "ภาคตะวันออก",
    color: "#6b2000",
    bg: "#fce8e3",
    icon: "🎡",
    desc: "เมืองท่องเที่ยวชื่อดัง ชายหาด สวนสนุก และไนท์ไลฟ์",
    stars: 4
  },
  {
    name: "กาญจนบุรี",
    region: "central",
    label: "ภาคกลาง",
    color: "#7a4800",
    bg: "#fff3e0",
    icon: "🌲",
    desc: "ธรรมชาติน้ำตก แพลอยน้ำ และสะพานข้ามแม่น้ำแคว",
    stars: 4
  },
  {
    name: "เลย",
    region: "northeast",
    label: "ภาคอีสาน",
    color: "#3a1a7a",
    bg: "#f0ebfb",
    icon: "🌾",
    desc: "ภูกระดึง ภูเรือ ธรรมชาติบนภูเขาที่หนาวเย็นในฤดูหนาว",
    stars: 4
  }
];