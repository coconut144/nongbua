// ── MAP: ข้อมูลภูมิภาค ──
// section นี้เป็น static HTML
// หากต้องการ highlight ภูมิภาคตาม filter สามารถเพิ่ม logic ได้ที่นี่

const regionColors = {
  north:     '#1a6b4a',
  central:   '#c8860a',
  south:     '#1a5b8a',
  east:      '#8a3a1a',
  northeast: '#5a3a8a',
};

// ตัวอย่าง: highlight dot ของภูมิภาคที่กำลัง filter อยู่
function highlightRegion(region) {
  document.querySelectorAll('.region-item').forEach(item => {
    item.style.opacity = '0.4';
  });
  if (region === 'all') {
    document.querySelectorAll('.region-item').forEach(item => {
      item.style.opacity = '1';
    });
  } else {
    const index = Object.keys(regionColors).indexOf(region);
    const items = document.querySelectorAll('.region-item');
    if (items[index]) items[index].style.opacity = '1';
  }
}