// ── FILTER NAV: กรองสถานที่ตามภูมิภาค ──

function filterCards(region, btn) {
  // เอา active ออกจากทุกปุ่ม แล้วใส่ให้ปุ่มที่กด
  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  renderCards(region);
}