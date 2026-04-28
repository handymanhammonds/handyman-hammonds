import React from 'react';
import { createRoot } from 'react-dom/client';
import { Phone, MessageCircle, ClipboardList, Star, Hammer, Wrench, Paintbrush, Lightbulb, Home, CheckCircle, MapPin, Mail, Drill, PackageCheck, DoorOpen, Sparkles } from 'lucide-react';
import './styles.css';
import logoSrc from './assets/logo-source.jpg';
import work1 from './assets/work1.jpeg';
import work2 from './assets/work2.jpeg';
import work3 from './assets/work3.jpeg';
import work4 from './assets/work4.jpeg';
import work5 from './assets/work5.jpeg';
import work6 from './assets/work6.jpeg';
import work7 from './assets/work7.jpeg';
import work8 from './assets/work8.jpeg';
import work9 from './assets/work9.jpeg';
import work10 from './assets/work10.jpeg';
import work11 from './assets/work11.jpeg';
import work12 from './assets/work12.jpeg';

const phone='817-941-2612';
const phoneHref='18179412612';
const smsText=encodeURIComponent("Hi Handyman Hammonds, I’d like a quote for a project.");

const services=[
  {title:'Furniture Assembly', text:'Furniture, shelving, garage storage, mudroom pieces and home setups.', icon:PackageCheck, color:'#8BB182'},
  {title:'Repairs & Maintenance', text:'Punch lists, minor fixes, door adjustments, touch-ups and home upkeep.', icon:Wrench, color:'#1B3346'},
  {title:'Carpentry & Finish Work', text:'Trim details, wall features, built-ins, island upgrades and clean finish work.', icon:Hammer, color:'#623A25'},
  {title:'Light Fixtures', text:'Pendant lights, chandeliers, vanity lights, picture lights and fixture swaps.', icon:Lightbulb, color:'#F8CA6F'},
  {title:'Painting', text:'Interior painting, touch-ups, accent areas and refresh projects.', icon:Paintbrush, color:'#9E6C46'},
  {title:'Cabinet Hardware', text:'Cabinet pulls, knobs, handles, hinges, alignment and drilling templates.', icon:Drill, color:'#8BB182'},
  {title:'Outdoor & Seasonal', text:'Outdoor tasks, seasonal help, Christmas lights and project support.', icon:Home, color:'#1B3346'},
  {title:'Miscellaneous Projects', text:'The odds and ends you keep meaning to get handled.', icon:Sparkles, color:'#623A25'},
];

const photos=[
  {src:work2, title:'Dining Room Trim Wall', cat:'Carpentry & Finish Work'},
  {src:work3, title:'Dining Chandelier Install', cat:'Lighting & Fixtures'},
  {src:work4, title:'Cabinet Hardware Install', cat:'Cabinet Hardware'},
  {src:work8, title:'Bathroom Vanity Refresh', cat:'Cabinet Hardware'},
  {src:work9, title:'Kitchen Island Finish', cat:'Carpentry & Finish Work'},
  {src:work5, title:'Kitchen Pendant Lighting', cat:'Lighting & Fixtures'},
  {src:work7, title:'TV Mount & Console', cat:'Assembly & Mounting'},
  {src:work12, title:'Mudroom Assembly', cat:'Furniture Assembly'},
  {src:work10, title:'Bedroom Setup', cat:'Home Upgrades'},
  {src:work11, title:'Garage Storage', cat:'Garage Organization'},
  {src:work6, title:'Gallery Lighting', cat:'Lighting & Fixtures'},
  {src:work1, title:'Art Installation', cat:'Mounting & Decor'},
];

const reviews=[
  'Showed up right on time, worked efficiently the entire time, paid attention to detail and cleaned everything up before leaving. Highly recommend.',
  'Professional, personable and easy to work with from first communication through completion of the job. Will hire again.',
  'Great communication, quality work and very friendly. Made the whole project simple and stress-free.',
  'Worked hard, completed everything the right way and finished in a timely manner. We will be asking for services again.',
  'Super organized, quick to complete the tasks and clearly experienced. Absolutely would hire again.'
];

function App(){
  return <>
    <header className="topbar">
      <a href="#home" className="brand"><div className="logoCrop"><img src={logoSrc}/></div><span>Handyman<br/>Hammonds</span></a>
      <nav><a href="#services">Services</a><a href="#work">Work</a><a href="#reviews">Reviews</a><a href="#quote">Quote</a></nav>
      <a className="callBtn" href={`tel:${phoneHref}`}><Phone size={18}/> {phone}</a>
    </header>

    <main id="home">
      <section className="hero">
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <div className="eyebrow">Goodland based • Serving nearby DFW</div>
          <h1>Hammonds Has It Handled</h1>
          <h2>Reliable Work. Beautiful Results.</h2>
          <p>Handyman and home upgrade services for homeowners who want clean work, clear communication and projects done right.</p>
          <div className="ctaRow"><a href={`tel:${phoneHref}`} className="btn primary"><Phone size={20}/> Call Now</a><a href={`sms:${phoneHref}?&body=${smsText}`} className="btn green"><MessageCircle size={20}/> Text Now</a><a href="#quote" className="btn ghost"><ClipboardList size={20}/> Get Quote</a></div>
          <div className="trust"><span><Star/> 5.0 Rated</span><span><CheckCircle/> 13 Reviews</span><span><MapPin/> Goodland, TX</span></div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="sectionHead"><p>What we do</p><h2>Handyman Services</h2><span>From designer lighting to everyday repairs, Hammonds has it handled.</span></div>
        <div className="serviceGrid">{services.map(({title,text,icon:Icon,color})=><div className="serviceCard" key={title}><div className="icon" style={{backgroundColor:color}}><Icon size={34}/></div><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>

      <section className="split"><div><p className="small">Why choose us</p><h2>Local. Reliable. Trusted.</h2><p>Handyman Hammonds is built for homeowners who care about the details — clean installs, finished spaces, and dependable help close to home.</p><ul><li><CheckCircle/> Clear communication</li><li><CheckCircle/> Quality finish work</li><li><CheckCircle/> On-time and professional</li><li><CheckCircle/> Premium home upgrade experience</li></ul></div><div className="featurePhoto"><img src={work2}/></div></section>

      <section className="section work" id="work"><div className="sectionHead"><p>Recent projects</p><h2>See Our Work</h2><span>Real projects from local homes.</span></div><div className="photoGrid">{photos.map(p=><article className="photoCard" key={p.title}><img src={p.src}/><div><strong>{p.title}</strong><span>{p.cat}</span></div></article>)}</div></section>

      <section className="section reviews" id="reviews"><div className="sectionHead"><p>Trusted by local homeowners</p><h2>5 Star Reviews</h2><span>13 reviews • 5.0 average rating</span></div><div className="reviewGrid">{reviews.map((r,i)=><div className="review" key={i}><div className="stars">★★★★★</div><p>“{r}”</p></div>)}</div></section>

      <section className="areas"><h2>Serving Goodland & Surrounding Areas</h2><p>Goodland, Midlothian, Mansfield, Waxahachie, Grand Prairie and nearby communities.</p></section>

      <section className="quote" id="quote"><div><p className="small">Get started</p><h2>Request a Quote</h2><p>Call, text, or send the project details. Add photos when you have them so we can understand the scope quickly.</p><div className="contactList"><a href={`tel:${phoneHref}`}><Phone/> {phone}</a><a href={`sms:${phoneHref}?&body=${smsText}`}><MessageCircle/> Text Handyman Hammonds</a><a href="mailto:services@handymanhammonds.com"><Mail/> services@handymanhammonds.com</a></div></div><form className="quoteForm" action="mailto:services@handymanhammonds.com" method="post" encType="text/plain"><input name="Name" placeholder="Name"/><input name="Phone" placeholder="Phone"/><input name="City" placeholder="City"/><select name="Service"><option>Service needed</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select><textarea name="Project Details" placeholder="Tell us what you need help with"></textarea><button type="submit">Send Quote Request</button><small>For email + text form alerts, connect this form to Formspree + Zapier/Twilio after launch.</small></form></section>
    </main>

    <footer><div className="footerBrand"><div className="logoCrop smallLogo"><img src={logoSrc}/></div><strong>Handyman Hammonds</strong></div><p>© 2026 Handyman Hammonds. Goodland, TX.</p></footer>

    <div className="stickyMobile"><a href={`tel:${phoneHref}`}><Phone/> Call</a><a href={`sms:${phoneHref}?&body=${smsText}`}><MessageCircle/> Text</a><a href="#quote"><ClipboardList/> Quote</a></div>
  </>
}

createRoot(document.getElementById('root')).render(<App/>);
