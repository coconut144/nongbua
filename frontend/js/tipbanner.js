// ── TIP BANNER ──
// ข้อมูล tip แต่ละเดือน (สามารถขยายให้ dynamic ได้)

const travelTips = [
  { months: 'พฤศจิกายน – กุมภาพันธ์', desc: 'อากาศเย็นสบายทั่วประเทศ เหมาะท่องเที่ยวทุกภาค' },
  { months: 'มีนาคม – พฤษภาคม',       desc: 'หน้าร้อน เหมาะเที่ยวทะเลภาคใต้ฝั่งอันดามัน' },
  { months: 'มิถุนายน – ตุลาคม',      desc: 'หน้าฝน ธรรมชาติเขียวสด เหมาะเที่ยวน้ำตกและป่า' },
];

// แสดง tip ตามเดือนปัจจุบัน
function renderTip() {
  const month = new Date().getMonth(); // 0-11
  let tipIndex = 0;
  if (month >= 2 && month <= 4) tipIndex = 1;
  else if (month >= 5 && month <= 9) tipIndex = 2;

  const tip = travelTips[tipIndex];
  const banner = document.querySelector('.tip-banner p');
  if (banner) {
    banner.textContent = `ช่วงเวลาที่ดีที่สุด: ${tip.months} · ${tip.desc}`;
  }
}

// กดปุ่มดูเพิ่มเติม
document.querySelector('.tip-btn').addEventListener('click', function () {
  alert('เคล็ดลับการเที่ยวไทย:\n\n' + travelTips.map((t, i) =>
    `${i + 1}. ${t.months}\n   ${t.desc}`
  ).join('\n\n'));
});

// เรียกใช้งาน
renderTip();