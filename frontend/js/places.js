// ── PLACES: สร้างและแสดงการ์ดสถานที่ ──

// สร้าง HTML ของการ์ดแต่ละใบ
function createCardHTML(place) {
  const filledStars = '★'.repeat(place.stars);
  const emptyStars  = '☆'.repeat(5 - place.stars);
  return `
    <div class="card">
      <div class="card-img" style="background:${place.bg};">
        <div class="emoji-bg">${place.icon}</div>
        <span class="region-tag" style="background:${place.bg}; color:${place.color};">${place.label}</span>
      </div>
      <div class="card-body">
        <h3>${place.icon} ${place.name}</h3>
        <p>${place.desc}</p>
        <div class="card-footer">
          <span class="stars">${filledStars}${emptyStars}</span>
          <button class="card-btn" onclick="showDetail('${place.name}')">ดูรายละเอียด →</button>
        </div>
      </div>
    </div>
  `;
}

// แสดงการ์ดตาม region ที่เลือก
function renderCards(filter) {
  const grid  = document.getElementById('cardGrid');
  const label = document.getElementById('filterLabel');
  const list  = filter === 'all' ? places : places.filter(p => p.region === filter);

  label.textContent = `แสดง ${list.length} สถานที่`;
  grid.innerHTML = list.map(createCardHTML).join('');
}

// กดปุ่มดูรายละเอียด
function showDetail(name) {
  alert(`ดูรายละเอียด: ${name}\n\n(สามารถเพิ่มหน้า detail page ได้ในภายหลัง)`);
}

// เริ่มต้นแสดงทุกสถานที่
renderCards('all');