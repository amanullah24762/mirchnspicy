'use client';
import {useState} from 'react';
import InnerShell,{PageHero} from '../../components/InnerShell';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import CustomSelect from '../../components/CustomSelect';
import ContactMethodIcon from '../../components/ContactMethodIcon';
const whatsapp='923055040848';
export default function Contact(){
 const [sent,setSent]=useState(false);
 const submit=e=>{e.preventDefault();const form=new FormData(e.currentTarget);const message=`Assalam-o-Alaikum Mirch N Spicy!\n\n*WEBSITE INQUIRY*\n\n*Name:* ${form.get('name')}\n*Phone:* ${form.get('phone')}\n*Email:* ${form.get('email')}\n*Purpose:* ${form.get('purpose')}\n*Message:* ${form.get('message')}\n\nPlease contact me regarding this inquiry. Thank you!`;window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');setSent(true)};
 return <InnerShell>
  <PageHero className="contact-hero" kicker="Contact us" title="Let’s talk" accent="food." copy="Book a table, ask about catering, share feedback or get help with an order." image="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85"/>
  <section className="section contact-page">
   <div className="contact-info"><p className="eyebrow">We are here to help</p><h2>Reach us<br/><em>your way.</em></h2><p className="contact-intro">Choose the quickest way to reach our team. For orders and immediate assistance, WhatsApp works best.</p><div className="contact-methods">
    <a className="contact-method contact-whatsapp" href="https://wa.me/923055040848?text=Assalam-o-Alaikum%20Mirch%20N%20Spicy!" target="_blank" rel="noreferrer"><i><WhatsAppIcon/></i><span><small>Quick response</small><strong>Chat on WhatsApp</strong><em>0305 5040848</em></span><b>↗</b></a>
    <a className="contact-method" href="tel:+923055040848"><i><ContactMethodIcon type="phone"/></i><span><small>Call our team</small><strong>0305 5040848</strong></span><b>↗</b></a>
    <a className="contact-method" href="mailto:order@mirchnspicy.com"><i><ContactMethodIcon type="email"/></i><span><small>Email</small><strong>order@mirchnspicy.com</strong></span><b>↗</b></a>
    <div className="contact-method"><i><ContactMethodIcon type="location"/></i><span><small>Primary address</small><strong>Iqbal Boulevard, DHA Phase II, Islamabad</strong></span></div>
    <div className="contact-method"><i><ContactMethodIcon type="time"/></i><span><small>Opening hours</small><strong>Mon–Fri 9AM–10PM<br/>Sat–Sun until 12AM</strong></span></div>
   </div></div>
   <form className="contact-form contact-inquiry-form" onSubmit={submit}><div className="form-heading"><span>Send an inquiry</span><h2>How can we help?</h2><p>Complete the details and we’ll open WhatsApp with your inquiry ready to send.</p></div><div className="field-row"><label>Your name<input required name="name" autoComplete="name" placeholder="Full name"/></label><label>Phone number<input required name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="03xx xxxxxxx"/></label></div><label>Email address<input required name="email" type="email" autoComplete="email" placeholder="you@email.com"/></label><label>Purpose<CustomSelect name="purpose" options={['Book a table','Order inquiry','Catering','Feedback','General question']}/></label><label>Your message<textarea required name="message" rows="4" placeholder="Tell us how we can help..."/></label><button className="btn contact-submit" type="submit"><i><WhatsAppIcon/></i><span><small>Send complete inquiry</small>Continue on WhatsApp</span><b>→</b></button>{sent&&<p className="form-status">WhatsApp opened with your inquiry. Review the details, then tap Send.</p>}</form>
  </section>
  <section className="section faq" id="faq"><div className="section-head"><div><p className="eyebrow">Frequently asked</p><h2>Quick<br/><em>answers.</em></h2></div></div><div className="faq-list"><details open><summary>Do you deliver?<span>+</span></summary><p>Yes, delivery is available in selected areas. Message us on WhatsApp to confirm coverage.</p></details><details><summary>Can I reserve a table?<span>+</span></summary><p>Yes. Send your preferred branch, date, time and guest count through the form above.</p></details><details><summary>Do you provide catering?<span>+</span></summary><p>Yes. Share your guest count, event date and requirements for a tailored menu.</p></details><details><summary>How do I confirm an online order?<span>+</span></summary><p>Complete your cart and send it on WhatsApp. Our team will confirm availability, total and timing.</p></details></div></section>
 </InnerShell>;
}
