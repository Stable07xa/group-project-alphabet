/* ===================================================================
   DATA — เนื้อหา SWOT ของ Alphabet / Google
=================================================================== */
const internalData = [
  {
    label: "โครงสร้าง",
    strength: {
      title: "โครงสร้างแบบ Holding Company",
      detail: "แยกธุรกิจหลัก (Google) ออกจากธุรกิจทดลอง (Other Bets) ทำให้จัดสรรเงินทุนและบริหารความเสี่ยงได้อย่างชัดเจน แต่ละหน่วยธุรกิจโฟกัสเป้าหมายของตนเอง"
    },
    weakness: {
      title: "การถือหุ้นสองชั้นรวมอำนาจ",
      detail: "โครงสร้างหุ้นแบบ Dual-Class ทำให้ผู้ก่อตั้งควบคุมสิทธิออกเสียงส่วนใหญ่ ลดอำนาจการตรวจสอบจากผู้ถือหุ้นรายย่อย และเพิ่มความซับซ้อนด้านธรรมาภิบาล"
    }
  },
  {
    label: "การบริการ, ผลผลิต",
    strength: {
      title: "ระบบนิเวศผลิตภัณฑ์ครบวงจร",
      detail: "ครองส่วนแบ่งตลาด Search และ Android ระดับโลก พร้อม YouTube และ Workspace ที่เชื่อมโยงผู้ใช้หลายพันล้านคนเข้าด้วยกัน"
    },
    weakness: {
      title: "พึ่งพารายได้โฆษณาสูงเกินไป",
      detail: "รายได้ส่วนใหญ่ยังผูกกับธุรกิจโฆษณา ทำให้อ่อนไหวต่อการเปลี่ยนแปลงพฤติกรรมผู้ใช้และกฎการติดตามข้อมูลที่เข้มงวดขึ้น"
    }
  },
  {
    label: "คน",
    strength: {
      title: "ดึงดูดบุคลากรระดับโลก",
      detail: "แบรนด์นายจ้างที่แข็งแกร่งดึงดูดวิศวกรและนักวิจัย AI ชั้นนำ รวมถึงทีม DeepMind ที่มีชื่อเสียงด้านการวิจัยระดับแนวหน้า"
    },
    weakness: {
      title: "แรงกดดันจากคู่แข่งแย่งชิงคน",
      detail: "การปรับลดพนักงานในช่วงที่ผ่านมากระทบขวัญกำลังใจ ขณะที่บริษัท AI หน้าใหม่เสนอค่าตอบแทนแข่งขันสูงเพื่อดึงตัวบุคลากร"
    }
  },
  {
    label: "เงิน",
    strength: {
      title: "กระแสเงินสดและกำไรมหาศาล",
      detail: "ฐานะการเงินแข็งแกร่งเปิดทางให้ลงทุนวิจัยพัฒนาและซื้อกิจการได้ต่อเนื่อง โดยไม่ต้องพึ่งพาการกู้ยืมมาก"
    },
    weakness: {
      title: "ต้นทุนลงทุนโครงสร้างพื้นฐาน AI สูง",
      detail: "การขยายศูนย์ข้อมูลและชิปประมวลผลสำหรับ AI ต้องใช้เงินลงทุนจำนวนมาก กดดันอัตรากำไรในระยะสั้น"
    }
  },
  {
    label: "วัสดุ",
    strength: {
      title: "โครงสร้างพื้นฐานคลาวด์ระดับโลก",
      detail: "เครือข่ายศูนย์ข้อมูลขนาดใหญ่และชิปประมวลผล TPU ที่พัฒนาเอง ช่วยลดการพึ่งพาผู้ผลิตชิปภายนอก"
    },
    weakness: {
      title: "การใช้พลังงานและน้ำจำนวนมาก",
      detail: "ศูนย์ข้อมูลขนาดใหญ่สร้างแรงกดดันด้านสิ่งแวดล้อมและความยั่งยืน ซึ่งอาจถูกตรวจสอบเข้มงวดขึ้นในอนาคต"
    }
  },
  {
    label: "การจัดการ",
    strength: {
      title: "วิสัยทัศน์ระยะยาวจากผู้นำ",
      detail: "ทีมบริหารที่มีประสบการณ์ นำโดย Sundar Pichai วางกลยุทธ์ระยะยาวโดยไม่ต้องกังวลแรงกดดันระยะสั้นมากนัก"
    },
    weakness: {
      title: "องค์กรใหญ่ ตัดสินใจช้า",
      detail: "ขนาดองค์กรที่ใหญ่ทำให้กระบวนการตัดสินใจซับซ้อน เคยตามหลังคู่แข่งในการเปิดตัวผลิตภัณฑ์ AI เชิงสนทนา"
    }
  }
];

const externalData = [
  {
    label: "สภาพสังคม",
    opportunity: {
      title: "ความต้องการ AI ในชีวิตประจำวันเพิ่มขึ้น",
      detail: "ผู้คนและองค์กรทั่วโลกหันมาใช้เครื่องมือ AI เพื่อการทำงานและการศึกษามากขึ้น เปิดโอกาสให้ผลิตภัณฑ์ Google เข้าถึงผู้ใช้ใหม่"
    },
    threat: {
      title: "ความกังวลเรื่องความเป็นส่วนตัว",
      detail: "กระแสสังคมที่ตื่นตัวเรื่องความเป็นส่วนตัวและจริยธรรม AI อาจกระทบความไว้วางใจที่มีต่อแบรนด์"
    }
  },
  {
    label: "เทคโนโลยี",
    opportunity: {
      title: "ความก้าวหน้าด้าน AI และ Quantum Computing",
      detail: "การพัฒนาโมเดล Gemini และงานวิจัยของ DeepMind วางตำแหน่งให้ Google เป็นผู้นำเทคโนโลยีแห่งอนาคต"
    },
    threat: {
      title: "การแข่งขันที่เคลื่อนไหวรวดเร็ว",
      detail: "คู่แข่งอย่าง OpenAI, Microsoft และโมเดลโอเพนซอร์สพัฒนาอย่างรวดเร็ว อาจลดทอนความได้เปรียบด้านเทคโนโลยี"
    }
  },
  {
    label: "สภาพเศรษฐกิจ",
    opportunity: {
      title: "การเติบโตของ Google Cloud",
      detail: "ธุรกิจคลาวด์เป็นส่วนที่เติบโตเร็วและมีอัตรากำไรสูงขึ้นเรื่อยๆ ช่วยลดการพึ่งพารายได้จากโฆษณาในระยะยาว"
    },
    threat: {
      title: "ภาวะเศรษฐกิจชะลอตัวกระทบงบโฆษณา",
      detail: "เมื่อเศรษฐกิจโลกชะลอตัว งบประมาณโฆษณาขององค์กรต่างๆ มักถูกตัดลดเป็นอันดับต้นๆ ส่งผลโดยตรงต่อรายได้หลัก"
    }
  },
  {
    label: "นโยบาย การเมือง",
    opportunity: {
      title: "โครงการดิจิทัลภาครัฐทั่วโลก",
      detail: "รัฐบาลหลายประเทศผลักดันการเปลี่ยนผ่านสู่ดิจิทัล เปิดโอกาสความร่วมมือด้านคลาวด์และการศึกษา"
    },
    threat: {
      title: "การกำกับดูแลด้านการแข่งขันที่เข้มงวดขึ้น",
      detail: "คดีต่อต้านการผูกขาดในสหรัฐฯ และสหภาพยุโรป รวมถึงกฎหมายคุ้มครองข้อมูลที่เข้มงวดขึ้น เพิ่มความเสี่ยงด้านกฎระเบียบ"
    }
  }
];

/* ===================================================================
   BUILD MATRIX ROWS
=================================================================== */
function buildCard(kindKey, kindLabel, accentVar, data){
  return `
    <article class="swot-card" style="--accent:var(${accentVar})" data-kind="${kindKey}">
      <div class="card-top">
        <span class="card-kind">${kindLabel}</span>
        <span class="card-plus">+</span>
      </div>
      <h4>${data.title}</h4>
      <p class="card-detail">${data.detail}</p>
    </article>`;
}

function renderMatrix(targetId, dataset, pairKey, leftKind, rightKind){
  const el = document.getElementById(targetId);
  const rows = dataset.map(row => `
    <div class="matrix-row reveal" data-pair="${pairKey}">
      <div class="row-label">${row.label}</div>
      ${buildCard(leftKind.key, leftKind.label, leftKind.accent, row[leftKind.key])}
      ${buildCard(rightKind.key, rightKind.label, rightKind.accent, row[rightKind.key])}
    </div>`).join("");
  el.innerHTML = rows;
}

renderMatrix("internalMatrix", internalData, "s",
  { key:"strength", label:"Strength", accent:"--green" },
  { key:"weakness", label:"Weakness", accent:"--red" }
);

renderMatrix("externalMatrix", externalData, "o",
  { key:"opportunity", label:"Opportunity", accent:"--blue" },
  { key:"threat", label:"Threat", accent:"--yellow" }
);

/* ===================================================================
   CARD ACCORDION
=================================================================== */
document.addEventListener("click", (e) => {
  const card = e.target.closest(".swot-card");
  if(!card) return;
  card.classList.toggle("open");
});

/* ===================================================================
   SCROLL REVEAL
=================================================================== */
const revealTargets = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("in");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold:0.12, rootMargin:"0px 0px -60px 0px" });

revealTargets.forEach(t => revealObserver.observe(t));

/* newly injected matrix rows also need observing */
document.querySelectorAll(".matrix-row.reveal").forEach(t => revealObserver.observe(t));

/* ===================================================================
   NAV: scrolled state + active link + mobile toggle
=================================================================== */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
}, { passive:true });

const navLinks = document.querySelectorAll(".nav-links a");
const sections = [...navLinks].map(a => document.querySelector(a.getAttribute("href")));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const idx = sections.indexOf(entry.target);
    if(idx === -1) return;
    if(entry.isIntersecting){
      navLinks.forEach(l => l.classList.remove("active"));
      navLinks[idx].classList.add("active");
    }
  });
}, { threshold:0.4 });

sections.forEach(s => s && sectionObserver.observe(s));

const navToggle = document.getElementById("navToggle");
const navLinksWrap = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  navLinksWrap.classList.toggle("open");
});
navLinksWrap.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinksWrap.classList.remove("open"));
});
