"use client";

import { useState } from "react";
import {
  BookOpen, GraduationCap, Headphones, Mic2, PenLine, BookMarked,
  ClipboardCheck, RotateCcw, Search, Bell, Flame, Target, Trophy,
  ChevronLeft, Play, Menu, X, Sparkles, Moon, Sun, Languages
} from "lucide-react";

const levels = [
  { id: "A1", name: "مبتدئ", en: "Beginner", color: "mint", progress: 18, lessons: 24 },
  { id: "A2", name: "أساسي", en: "Elementary", color: "blue", progress: 0, lessons: 28 },
  { id: "B1", name: "متوسط", en: "Intermediate", color: "violet", progress: 0, lessons: 32 },
  { id: "B2", name: "فوق المتوسط", en: "Upper Intermediate", color: "amber", progress: 0, lessons: 36 },
  { id: "C1", name: "متقدم", en: "Advanced", color: "rose", progress: 0, lessons: 40 },
  { id: "C2", name: "إتقان", en: "Proficiency", color: "slate", progress: 0, lessons: 44 },
];

const sections = [
  { name: "المفردات", en: "Vocabulary", icon: BookOpen, desc: "كلمات وتعبيرات مع النطق والأمثلة", count: "20 وحدة" },
  { name: "القواعد", en: "Grammar", icon: GraduationCap, desc: "شرح مبسط ثم تطبيق وتمارين", count: "دروس متدرجة" },
  { name: "القصص", en: "Stories", icon: BookMarked, desc: "قصص قصيرة تناسب مستواك", count: "قراءة ممتعة" },
  { name: "الاستماع", en: "Listening", icon: Headphones, desc: "تدريبات لفهم الإنجليزية المسموعة", count: "صوت + نص" },
  { name: "البودكاست", en: "Podcasts", icon: Headphones, desc: "حلقات تعليمية مع نصوصها", count: "حلقات" },
  { name: "القراءة", en: "Reading", icon: BookOpen, desc: "نصوص ومقالات متدرجة", count: "نصوص" },
  { name: "المحادثة", en: "Speaking", icon: Mic2, desc: "حوارات ومواقف من الحياة اليومية", count: "مواقف عملية" },
  { name: "الكتابة", en: "Writing", icon: PenLine, desc: "من الجملة إلى الفقرة والمقال", count: "تطبيقات" },
  { name: "الاختبارات", en: "Tests", icon: ClipboardCheck, desc: "اختبر فهمك وثبّت ما تعلمته", count: "اختبارات" },
  { name: "المراجعة", en: "Revision", icon: RotateCcw, desc: "راجع في الوقت المناسب", count: "مراجعة ذكية" },
];

export default function Home() {
  const [active, setActive] = useState("الرئيسية");
  const [level, setLevel] = useState("A1");
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [started, setStarted] = useState(false);

  const nav = ["الرئيسية", "المستويات", "خطتي", "إنجازاتي"];
  const selected = levels.find(x => x.id === level)!;

  return (
    <main className={dark ? "app dark" : "app"}>
      <aside className={menu ? "sidebar open" : "sidebar"}>
        <div className="brand"><div className="brand-mark"><Languages size={23}/></div><div><b>English Path</b><small>طريقك إلى الإنجليزية</small></div><button className="close-menu" onClick={() => setMenu(false)}><X/></button></div>
        <div className="side-label">القائمة الرئيسية</div>
        <nav>{nav.map((n, i) => <button key={n} onClick={() => {setActive(n);setMenu(false)}} className={active===n?"nav-item active":"nav-item"}>{[<BookOpen/>,<GraduationCap/>,<Target/>,<Trophy/>][i]}<span>{n}</span>{active===n&&<i/>}</button>)}</nav>
        <div className="side-label level-label">مسارات التعلم</div>
        {levels.map(l=><button key={l.id} className={"side-level "+(level===l.id?"chosen":"")} onClick={()=>{setLevel(l.id);setActive("المستويات");setMenu(false)}}><span className={"level-dot "+l.color}>{l.id}</span><span>{l.name}</span><small>{l.progress}%</small></button>)}
        <div className="sidebar-bottom"><div className="mini-card"><Sparkles size={18}/><b>خطوة صغيرة كل يوم</b><p>الاستمرارية تصنع الفرق.</p></div><div className="profile"><div className="avatar">E</div><div><b>متعلم English Path</b><small>رحلتك تبدأ هنا</small></div><span>•••</span></div></div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <button className="mobile-menu" onClick={()=>setMenu(true)}><Menu/></button>
          <div className="crumb">مساحة التعلم <ChevronLeft size={14}/> <b>{active}</b></div>
          <div className="top-actions">
            <label className="search"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="ابحث عن درس أو كلمة..."/></label>
            <button className="icon-btn" onClick={()=>setDark(!dark)} aria-label="تبديل المظهر">{dark?<Sun/>:<Moon/>}</button>
            <button className="icon-btn notification" aria-label="الإشعارات"><Bell/></button>
            <div className="avatar small-avatar">E</div>
          </div>
        </header>

        <div className="content">
          <div className="welcome-row">
            <div><div className="eyebrow"><span/> YOUR ENGLISH JOURNEY STARTS HERE</div><h1>أهلاً بك في <em>English Path</em></h1><p>تعلم الإنجليزية خطوة بخطوة، من أول كلمة حتى الطلاقة.</p></div>
            <div className="date-chip"><span className="date-icon">✦</span><span>مساحة تعلمك الشخصية</span></div>
          </div>

          <section className="hero">
            <div className="hero-copy"><div className="hero-tag"><Sparkles size={14}/> خطوتك القادمة</div><h2>كل رحلة عظيمة<br/>تبدأ <span>بكلمة واحدة.</span></h2><p>ابدأ من مستواك، تعلّم بذكاء، واحتفل بكل تقدم تحققه.</p><button className="primary-btn" onClick={()=>{setActive("المستويات");setStarted(true)}}><Play size={16} fill="currentColor"/> {started?"تابع رحلتك":"ابدأ التعلم الآن"}</button></div>
            <div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="book-illustration"><BookOpen size={76} strokeWidth={1.25}/><span className="spark s1">✦</span><span className="spark s2">✧</span><span className="floating-word word-one">Learn</span><span className="floating-word word-two">Grow</span></div><div className="hero-note"><span>✦</span><div><b>One day at a time</b><small>يومًا بعد يوم</small></div></div></div>
          </section>

          <section className="stats">
            <div className="stat-card"><div className="stat-icon purple"><Target/></div><div><small>مستواك الحالي</small><b>A1 <span>مبتدئ</span></b></div><div className="stat-arrow">↗</div></div>
            <div className="stat-card"><div className="stat-icon orange"><Flame/></div><div><small>سلسلة التعلم</small><b>0 <span>أيام متتالية</span></b></div><div className="stat-arrow">↗</div></div>
            <div className="stat-card"><div className="stat-icon green"><BookOpen/></div><div><small>الكلمات المتعلمة</small><b>0 <span>كلمة</span></b></div><div className="stat-arrow">↗</div></div>
            <div className="stat-card"><div className="stat-icon blue"><Trophy/></div><div><small>إنجازك الإجمالي</small><b>0% <span>مكتمل</span></b></div><div className="stat-arrow">↗</div></div>
          </section>

          <div className="section-heading"><div><span className="eyebrow">CHOOSE YOUR LEVEL</span><h2>اختر مسارك التعليمي</h2><p>ست دورات متدرجة، وكل مستوى يبني على ما قبله.</p></div><button className="text-link" onClick={()=>setActive("المستويات")}>عرض كل المستويات <ChevronLeft size={16}/></button></div>
          <section className="levels-grid">
            {levels.map((l,i)=><button key={l.id} onClick={()=>{setLevel(l.id);setActive("المستويات")}} className={"level-card "+l.color}>
              <div className="level-card-top"><span className="level-badge">{l.id}</span><span className="level-status">{l.progress? "بدأت التعلم":"لم يبدأ بعد"}</span></div>
              <h3>{l.name}</h3><p>{l.en}</p><div className="level-progress"><span style={{width:l.progress+"%"}}/></div><div className="level-foot"><small>{l.lessons} درساً مخططاً</small><span><ChevronLeft size={17}/></span></div>
            </button>)}
          </section>

          <div className="section-heading section-heading-lower"><div><span className="eyebrow">YOUR LEARNING TOOLS</span><h2>أقسام التعلم</h2><p>طوّر مهاراتك في جميع جوانب اللغة.</p></div></div>
          <section className="tools-grid">
            {sections.map((s,i)=><button key={s.en} className="tool-card" onClick={()=>setActive(s.name)}><div className={"tool-icon t"+i}><s.icon size={21}/></div><div className="tool-text"><b>{s.name}</b><small>{s.en}</small><p>{s.desc}</p></div><span className="tool-count">{s.count}</span><ChevronLeft className="tool-chevron" size={17}/></button>)}
          </section>

          <section className="continue-card"><div className="continue-icon"><BookOpen size={24}/></div><div><span className="eyebrow">READY WHEN YOU ARE</span><h3>درس البداية: التعارف والتحية</h3><p>ابدأ بأول درس في مستوى A1 وتعلّم كيف تلقي التحية وتعرّف بنفسك.</p></div><button onClick={()=>{setLevel("A1");setActive("المستويات")}}>اذهب إلى الدرس <ChevronLeft size={16}/></button></section>
          <footer><div className="footer-brand">English Path <span>✦</span></div><p>خطوة كل يوم تقرّبك من هدفك.</p><small>نسخة تأسيسية قيد التطوير · المحتوى التعليمي سيُضاف ويُراجع على مراحل</small></footer>
        </div>
      </section>
    </main>
  );
}
