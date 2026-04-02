  
    const places = [
      { name:"เชียงใหม่",     region:"north",     label:"ภาคเหนือ",      color:"#0a4d2e", bg:"#e8f5ee", icon:"🏔️", desc:"เมืองสามฝ่าย วัดเก่าแก่ และวัฒนธรรมล้านนาอันงดงาม",                    stars:5 },
      { name:"กรุงเทพมหานคร", region:"central",   label:"ภาคกลาง",       color:"#7a4800", bg:"#fff3e0", icon:"🏙️", desc:"มหานครคึกคัก ศูนย์รวมวัฒนธรรมและแหล่งช้อปปิ้งระดับโลก",               stars:5 },
      { name:"ภูเก็ต",        region:"south",     label:"ภาคใต้",        color:"#0a3d6b", bg:"#e3f0fb", icon:"🌊", desc:"เกาะใหญ่ชายทะเลฝั่งอันดามัน หาดทรายขาว น้ำทะเลใส",                   stars:5 },
      { name:"เกาะสมุย",      region:"south",     label:"ภาคใต้",        color:"#0a3d6b", bg:"#e3f0fb", icon:"🌴", desc:"เกาะในอ่าวไทย บรรยากาศสงบ เหมาะสำหรับพักผ่อนระยะยาว",                stars:4 },
      { name:"อยุธยา",        region:"central",   label:"ภาคกลาง",       color:"#7a4800", bg:"#fff3e0", icon:"🏛️", desc:"อดีตราชธานีกว่า 400 ปี มรดกโลก UNESCO ที่น่าทึ่ง",                    stars:5 },
      { name:"เชียงราย",      region:"north",     label:"ภาคเหนือ",      color:"#0a4d2e", bg:"#e8f5ee", icon:"⛩️", desc:"วัดร่องขุ่น วัดพระธาตุ และชายแดนสามเหลี่ยมทองคำ",                    stars:4 },
      { name:"กระบี่",        region:"south",     label:"ภาคใต้",        color:"#0a3d6b", bg:"#e3f0fb", icon:"🪨", desc:"โขดหินปูน ถ้ำ และเกาะแก่งที่สวยที่สุดในประเทศ",                       stars:4 },
      { name:"พัทยา",         region:"east",      label:"ภาคตะวันออก",  color:"#6b2000", bg:"#fce8e3", icon:"🎡", desc:"เมืองท่องเที่ยวชื่อดัง ชายหาด สวนสนุก และไนท์ไลฟ์",                  stars:4 },
      { name:"กาญจนบุรี",    region:"central",   label:"ภาคกลาง",       color:"#7a4800", bg:"#fff3e0", icon:"🌲", desc:"ธรรมชาติน้ำตก แพลอยน้ำ และสะพานข้ามแม่น้ำแคว",                       stars:4 },
      { name:"เลย",           region:"northeast", label:"ภาคอีสาน",      color:"#3a1a7a", bg:"#f0ebfb", icon:"🌾", desc:"ภูกระดึง ภูเรือ ธรรมชาติบนภูเขาที่หนาวเย็นในฤดูหนาว",                stars:4 },
    ];

    function renderCards(filter) {
      const grid  = document.getElementById('cardGrid');
      const label = document.getElementById('filterLabel');
      const list  = filter === 'all' ? places : places.filter(p => p.region === filter);
      label.textContent = `แสดง ${list.length} สถานที่`;
      grid.innerHTML = list.map(p => `
        <div class="card">
          <div class="card-img" style="background:${p.bg};">
            <div class="emoji-bg">${p.icon}</div>
            <span class="region-tag" style="background:${p.bg};color:${p.color};">${p.label}</span>
          </div>
          <div class="card-body">
            <h3>${p.icon} ${p.name}</h3>
            <p>${p.desc}</p>
            <div class="card-footer">
              <span class="stars">${'★'.repeat(p.stars)}${'☆'.repeat(5 - p.stars)}</span>
              <button class="card-btn" onclick="alert('ดูรายละเอียด: ${p.name}')">ดูรายละเอียด →</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    function filterCards(region, btn) {
      document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(region);
    }

    function doSearch() {
      const q = document.getElementById('searchInput').value.trim().toLowerCase();
      if (!q) return renderCards('all');
      const result = places.filter(p =>
        p.name.includes(q) || p.desc.includes(q) || p.label.includes(q)
      );
      const grid  = document.getElementById('cardGrid');
      const label = document.getElementById('filterLabel');
      label.textContent = `ผลการค้นหา "${q}" · ${result.length} แห่ง`;
      grid.innerHTML = result.length
        ? result.map(p => `
            <div class="card">
              <div class="card-img" style="background:${p.bg};">
                <div class="emoji-bg">${p.icon}</div>
                <span class="region-tag" style="background:${p.bg};color:${p.color};">${p.label}</span>
              </div>
              <div class="card-body">
                <h3>${p.icon} ${p.name}</h3>
                <p>${p.desc}</p>
                <div class="card-footer">
                  <span class="stars">${'★'.repeat(p.stars)}${'☆'.repeat(5 - p.stars)}</span>
                  <button class="card-btn" onclick="alert('ดูรายละเอียด: ${p.name}')">ดูรายละเอียด →</button>
                </div>
              </div>
            </div>
          `).join('')
        : `<p style="color:#888;font-size:14px;grid-column:1/-1;">ไม่พบสถานที่ที่ค้นหา ลองคำอื่นดูครับ</p>`;
    }

    document.getElementById('searchInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') doSearch();
    });

    // init
    renderCards('all');
