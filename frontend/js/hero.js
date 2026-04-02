// ── HERO: ฟังก์ชันค้นหา ──

function doSearch() {
  const q     = document.getElementById('searchInput').value.trim().toLowerCase();
  const grid  = document.getElementById('cardGrid');
  const label = document.getElementById('filterLabel');

  // ถ้าไม่มีคำค้นหา → แสดงทั้งหมด
  if (!q) {
    renderCards('all');
    return;
  }

  // กรองจาก places ที่ตรงกับคำค้น
  const result = places.filter(p =>
    p.name.includes(q) ||
    p.desc.includes(q) ||
    p.label.includes(q)
  );

  label.textContent = `ผลการค้นหา "${q}" · ${result.length} แห่ง`;

  grid.innerHTML = result.length
    ? result.map(createCardHTML).join('')
    : `<p style="color:#888; font-size:14px; grid-column:1/-1; padding:20px 0;">
        ไม่พบสถานที่ที่ค้นหา ลองคำอื่นดูครับ
       </p>`;
}

// กด Enter ในช่องค้นหา
document.getElementById('searchInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') doSearch();
});