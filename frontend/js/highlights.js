// ── HIGHLIGHTS ──
// section นี้เป็น static HTML ไม่มี logic พิเศษ
// หากต้องการดึงข้อมูลแบบ dynamic สามารถเพิ่มได้ที่นี่

const highlightsData = [
  { icon: '🏛️', label: 'วัดวาอาราม',    value: '40,000+' },
  { icon: '🏖️', label: 'ชายหาด',        value: '3,000 กม.' },
  { icon: '🌿', label: 'อุทยานแห่งชาติ', value: '157 แห่ง' },
  { icon: '🍜', label: 'อาหารขึ้นชื่อ',  value: 'ระดับโลก' },
];

// ตัวอย่างการ render แบบ dynamic (optional - ปัจจุบัน HTML เขียนตายตัวแล้ว)
// function renderHighlights() {
//   const container = document.querySelector('.highlights');
//   container.innerHTML = highlightsData.map(h => `
//     <div class="hi-card">
//       <div class="hi-icon">${h.icon}</div>
//       <div class="hi-label">${h.label}</div>
//       <div class="hi-val">${h.value}</div>
//     </div>
//   `).join('');
// }