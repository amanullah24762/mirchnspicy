'use client';

import { useEffect, useMemo, useState } from 'react';
import WhatsAppCheckout from '../components/WhatsAppCheckout';
import CartItemList from '../components/CartItemList';
import WhatsAppIcon from '../components/WhatsAppIcon';
import NavIcon from '../components/NavIcon';
import { SiteFooter } from '../components/InnerShell';
import CustomSelect from '../components/CustomSelect';
import { fullMenu, getMenuItemImage } from '../data/menu';
import {BranchHeaderButton,BranchLocationBar,useBranch} from '../components/BranchProvider';
import BranchPromotions from '../components/BranchPromotions';

const legacyMenuItems = [
  {name:'Chicken Tikka (1 pc)',cat:'bbq',price:350,tag:'Grill favourite',desc:'Juicy chicken marinated in rich spices and char-grilled.',img:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=85'},
  {name:'Chicken Malai Tikka (Chest)',cat:'bbq',price:410,tag:'Creamy',desc:'Tender chicken in creamy malai and mild aromatic spices.',img:'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=700&q=85'},
  {name:'Chicken Boom Boom Cheese Roll',cat:'rolls',price:500,tag:'Signature',desc:'Chicken, fresh vegetables, Boom Boom sauce and cheese.',img:'/images/menu-chicken-rolls.png'},
  {name:'Malai Boti Boom Boom Roll',cat:'rolls',price:480,tag:'Bestseller',desc:'Malai boti, Boom Boom sauce, herbs and a soft paratha.',img:'/images/menu-chicken-rolls.png'},
  {name:'Chicken Karahi (Full)',cat:'karahi',price:1900,tag:'Family size',desc:'Tomato, ginger, green chilli and our traditional spice blend.',img:'/images/hero-pakistani-feast.png'},
  {name:'Chicken Karahi White Makhni (Full)',cat:'karahi',price:2300,tag:'Rich & creamy',desc:'A luxurious buttery, cream-based karahi for sharing.',img:'/images/hero-pakistani-feast.png'},
  {name:'B.B.Q Shashlik Rice',cat:'rice',price:600,tag:'Desi fusion',desc:'Smoky BBQ shashlik served with seasoned rice.',img:'https://mirchnspicy.com/wp-content/uploads/2025/11/dry-chilli-chicken-600x425.jpg'},
  {name:'Chicken Chilli Rice',cat:'rice',price:850,tag:'Fusion',desc:'Spicy chicken chilli with sautéed vegetables and rice.',img:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=85'},
  {name:'Chicken Zinger Cheese Burger',cat:'burgers',price:440,tag:'Crunchy',desc:'Crispy chicken, melted cheese, fresh veggies and zinger sauce.',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85'},
  {name:'Bar B.Q Cheese Burger',cat:'burgers',price:440,tag:'Smoky',desc:'Grilled chicken, smoky BBQ sauce and melted cheese.',img:'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=85'},
  {name:'Fries Spicy Mayo (Regular)',cat:'burgers',price:400,tag:'Snack',desc:'Golden fries finished with spicy mayo and seasoning.',img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85'},
  {name:'Cold Drink 500ml',cat:'drinks',price:130,tag:'Chilled',desc:'A chilled single-serving cold drink.',img:'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=700&q=85'},
  {name:'Deal 6',cat:'deals',price:4000,tag:'Feeds a group',desc:'Burgers, rolls, BBQ, rice, kababs, roti, fries and 1.5L drink.',img:'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=700&q=85'},
  {name:'Deal 8',cat:'deals',price:2450,tag:'Best value',desc:'Five Boom Boom rolls with a 1.5L cold drink.',img:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85'}
];

const featuredMenuNames = ['Chicken Tikka (1 pc)','Chicken Malai Tikka','Chicken Boom Boom Roll','Malai Boti Boom Boom Roll','Chicken Karahi','Chicken Karahi White Makhni','B.B.Q Shashlik Rice','Chicken Chilli Rice','Chicken Zinger Burger','Bar B.Q Burger','Fries','Cold Drink','Deal 6','Deal 8'];
const menuItems = featuredMenuNames.map((name,index)=>{const item=fullMenu.find(product=>product.name===name);return item?{...item,cat:item.category,img:getMenuItemImage(item),tag:legacyMenuItems[index]?.tag||'Favourite'}:legacyMenuItems[index]}).filter(Boolean);

const branches = {
  islamabad: ['Iqbal Boulevard, Commercial Sector C, DHA Phase II','Al-Babar Centre, F-8 Markaz','Central Commercial, Sector C, DHA Phase 5','Hammad Plaza, Commercial 2, Naval Anchorage','Northern Strip FECHS, E-11/2','Trade Center, Gulberg Greens, Islamabad'],
  rawalpindi: ['Arsalan Plaza, Commercial Market, Chaklala Scheme 3','41-A Hospital Road, Food Street','Khadam Hussain Road, Lalkurti','Range Road, opposite Punjab Cash & Carry','Plot 56-B, Sector 2, Airport Society']
};

const reviews = [
  ['If you love bold, spicy desi flavours, this place is a must-try. Their Boom Boom Rolls and Karahi are my absolute favourites.','Hassan M.','DHA Phase 5'],
  ['The Chicken Tikka was juicy, flavourful and perfectly grilled. Every visit feels like a food adventure.','Ali R.','Islamabad'],
  ['We ordered a family deal and everything was hot, fresh and delicious. Great value for money!','Sana T.','Rawalpindi'],
  ['From classic BBQ to Chinese rice dishes, Mirch N Spicy nails it all.','Faizan K.','G-11 Markaz']
];

function Brand({ footer = false }) {
  return <a className={`brand real-brand ${footer ? 'footer-brand' : ''}`} href="/"><img src="/logo.svg" alt="Mirch N Spicy"/><span>Mirch <i>N</i> Spicy<small>Good food • Great taste</small></span></a>;
}

export default function Home() {
  const {selectedBranch,openSelector}=useBranch();
  const [filter, setFilter] = useState('all');
  const [city, setCity] = useState('islamabad');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [variantProduct,setVariantProduct]=useState(null);
  const [review, setReview] = useState(0);
  const [sent, setSent] = useState(false);
  useEffect(()=>{if(selectedBranch)setCity(selectedBranch.city.toLowerCase())},[selectedBranch]);
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);
  const addToCart = item => setCart(current => [...current, item]);
  const productOptions=product=>product?.variants?.length?product.variants:[{name:'Standard serving',price:product?.price,desc:product?.desc}];
  const selectedItemName=(product,variant)=>product.variants?.length?`${product.name} — ${variant.name}`:product.name;
  const itemQuantity = item => cart.filter(entry => entry.productName===item.name||entry.name===item.name).length;
  const variantQuantity=(product,variant)=>{const name=selectedItemName(product,variant);return cart.filter(item=>item.name===name).length};
  const addVariant=(product,variant)=>{const selectedName=selectedItemName(product,variant);setCart(current=>[...current,{...product,productName:product.name,name:selectedName,price:variant.price,variants:undefined}])};
  const decreaseVariant=(product,variant)=>{const selectedName=selectedItemName(product,variant);setCart(current=>{const index=current.findIndex(item=>item.name===selectedName);return index<0?current:current.filter((_,itemIndex)=>itemIndex!==index)})};
  const removeVariant=(product,variant)=>{const selectedName=selectedItemName(product,variant);setCart(current=>current.filter(item=>item.name!==selectedName))};
  const submitForm = event => { event.preventDefault(); event.currentTarget.reset(); setSent(true); };

  return <>
    <div className="topbar"><span>🔥 Fresh off the grill</span><span>Islamabad & Rawalpindi</span><a href="tel:+923055040848">Call 0305 5040848</a></div>
    <header className="header" id="top">
      <Brand />
      <nav className={`nav ${mobileNav ? 'open' : ''}`} aria-label="Main navigation">
        {[['/','Home'],['/menu','Menu'],['/about','About'],['/locations','Locations'],['/blog','Blog & Recipes'],['/contact','Contact']].map(([href,item]) => <a key={item} href={href} aria-current={href==='/'?'page':undefined} onClick={() => setMobileNav(false)}><NavIcon name={item}/><span>{item}</span></a>)}
      </nav>
      <div className="header-actions"><BranchHeaderButton/><a className="btn btn-small" href="/menu">Order now</a><button className="persistent-cart" onClick={() => setCartOpen(true)} aria-label={`Open cart with ${cart.length} items`}><span>🛒</span><b>{cart.length}</b></button><button className="menu-toggle" aria-label="Open menu" aria-expanded={mobileNav} onClick={() => setMobileNav(!mobileNav)}><span></span><span></span></button></div>
    </header>
    <BranchLocationBar/>

    <main>
      <section className="hero-clean" id="home">
        <div className="hero-clean-copy reveal"><div className="hero-brand-chip"><img src="/logo.svg" alt=""/><span><small>{selectedBranch?`Now serving from ${selectedBranch.city}`:'Good food · Great taste'}</small>{selectedBranch?.name||'Pakistani Specialties'}</span></div><p className="hero-clean-kicker">Fresh from the grill <span>•</span> Full of flavour</p><h1>Har bite mein<br/><em>asli maza.</em></h1><p>{selectedBranch?`Explore the Mirch N Spicy menu available for ${selectedBranch.name}. Your selected branch will be attached automatically when you order.`:'Smoky BBQ, sizzling karahi aur iconic Boom Boom rolls—fresh ingredients aur bold desi spices ke saath.'}</p><div className="hero-clean-actions"><a className="hero-menu-btn" href="/menu">Explore branch menu <span>↗</span></a><a className="hero-order-link" href="https://wa.me/923055040848?text=Assalam-o-Alaikum%20Mirch%20N%20Spicy!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noreferrer"><b><WhatsAppIcon/></b><span><small>Order on WhatsApp</small>0305 5040848</span></a></div><div className="hero-clean-meta"><span>🔥 Made fresh</span><span>✦ 153 menu choices</span><button className="hero-branch-meta" onClick={openSelector}>📍 {selectedBranch?.name||'Choose branch'}</button></div></div>
        <div className="hero-clean-visual reveal"><div className="hero-clean-image"><img src="/images/hero-pakistani-feast.png" alt="Pakistani karahi, BBQ, seekh kebabs, naan and paratha rolls"/></div><div className="hero-clean-label"><span>Made for sharing</span><strong>A proper desi feast</strong><small>Karahi · BBQ · Rolls · Naan</small></div><div className="hero-spice-seal"><strong>100%</strong><span>DESI<br/>FLAVOUR</span></div></div>
        <div className="hero-bottom-line"><span>Serving Islamabad & Rawalpindi</span><i></i><span>Open daily · 9AM till late</span></div>
      </section>
      <section className="ticker"><div>BBQ & GRILLED <i>✦</i> KARAHI <i>✦</i> BOOM BOOM ROLLS <i>✦</i> BIRYANI <i>✦</i> BURGERS <i>✦</i> DEALS <i>✦</i></div></section>

      <BranchPromotions />
      <section className="section menu-section" id="menu"><div className="section-head reveal"><div><p className="eyebrow">{selectedBranch?`${selectedBranch.name} branch menu`:'A little heat, a lot of heart'}</p><h2>Cravings, <em>sorted.</em></h2></div><p>{selectedBranch?`Showing the current printed menu for ${selectedBranch.name}, ${selectedBranch.city}. Item availability will be confirmed by this branch on WhatsApp.`:'Choose from our most-loved dishes. Use the categories to find your favourite, then add it to your bag.'}</p></div>
        <div className="category-tabs">{['all','bbq','rolls','karahi','rice','burgers','drinks','deals'].map(cat => <button key={cat} className={filter === cat ? 'active' : ''} onClick={() => setFilter(cat)}>{cat[0].toUpperCase()+cat.slice(1)}</button>)}</div>
        <div className="menu-grid">{menuItems.filter(item => filter === 'all' || item.cat === filter).map(item => {const quantity=itemQuantity(item);return <article className={`food-card ${quantity?'food-card-selected':''}`} key={item.name}><div className="food-image"><img src={item.img} alt={item.name} loading="lazy" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src='/logo.svg';e.currentTarget.classList.add('image-fallback')}}/><span>{item.tag}</span>{quantity>0&&<b className="food-selected-badge">{quantity} selected</b>}</div><div className="food-info"><small>{item.cat}</small><h3>{item.name}</h3><p>{item.desc}</p><div className="food-bottom"><strong>{item.variants?.length?'From ':''}Rs. {item.price.toLocaleString()}</strong><button className={`home-select-button ${quantity?'has-selection':''}`} onClick={()=>setVariantProduct(item)} aria-label={`${quantity?'Edit':'Select'} ${item.name}`}><span>{quantity?'Edit choices':'Select'}</span><i>{quantity||'+'}</i></button></div></div></article>})}</div>
        <div className="menu-note"><span>Looking for more?</span><p>Explore all 153 printed-menu choices, including rolls, BBQ, karahi, rice, soups, burgers, deals and drinks.</p><a className="btn btn-dark" href="/menu">View complete menu →</a></div>
      </section>

      <section className="story section" id="about"><div className="story-images reveal"><img className="story-main" src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1100&q=88" alt="Pakistani dishes prepared with fresh ingredients"/><img className="story-small" src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85" alt="Fresh food preparation"/><div className="since">Our story<br/><strong>Made with<br/>passion</strong></div></div><div className="story-copy reveal"><p className="eyebrow">Welcome to Mirch N Spicy</p><h2>Food that feels<br/><em>like home.</em></h2><p>Our journey began with one simple idea: bring the unforgettable taste of Pakistani street food into a warm, family-friendly dining experience. From our first grill to every plate today, we create more than meals — we create moments.</p><p>Signature Chicken Tikka, smoky BBQ rolls, zesty chutneys and rich karahis made us a local favourite. Today the printed menu also brings together burgers, fried rice, soups and value deals with our unmistakable desi twist.</p><div className="values"><article><span>01</span><h3>Our mission</h3><p>Serve quality food with authentic taste, generous value and exceptional hospitality.</p></article><article><span>02</span><h3>Our vision</h3><p>Become Pakistan’s leading name in bold, creative Pakistani fusion dining.</p></article></div></div></section>

      <section className="experience"><div className="experience-copy reveal"><p className="eyebrow">Why dine with us?</p><h2>More than a meal.<br/><em>It’s a mood.</em></h2><div className="amenities">{['Free WiFi','Family seating','Parking','Takeaway','Delivery','Catering'].map(x=><span key={x}>{x}</span>)}</div><p>Fresh ingredients daily. Sanitized kitchens. Trained food handlers. Regular quality checks and safe, sealed packaging — because flavour matters, but safety is everything.</p></div><div className="experience-card"><small>QUALITY PROMISE</small><strong>Fresh every day</strong><span>Premium meats • Hand-ground spices • Made-to-order meals</span></div></section>

      <section className="section locations" id="locations"><div className="section-head reveal"><div><p className="eyebrow">{selectedBranch?'Your selected location':'Find your nearest branch'}</p><h2>{selectedBranch?selectedBranch.name:'Serving flavour'}<br/><em>{selectedBranch?selectedBranch.city:'across the twin cities.'}</em></h2></div><div className="hours"><small>Opening hours</small><strong>Mon–Fri · 9AM–10PM</strong><strong>Sat–Sun · 9AM–12AM</strong></div></div><div className="location-layout"><div className="city-tabs">{Object.keys(branches).map(name=><button key={name} className={city===name?'active':''} onClick={()=>setCity(name)}>{name[0].toUpperCase()+name.slice(1)} <span>{branches[name].length} locations</span></button>)}</div><div className="location-list">{branches[city].map((address,index)=>{const isSelected=selectedBranch?.address.includes(address.split(',')[0])||address.includes(selectedBranch?.name||'__none__');return <article className={`location-card ${isSelected?'selected-branch-card':''}`} key={address}><b>{isSelected?'✓':String(index+1).padStart(2,'0')}</b><div><h3>{address.split(',')[0]}{address.includes('Gulberg Greens')?' · New':''}{isSelected?' · Selected':''}</h3><p>{address}</p></div><a href={`https://maps.google.com/?q=${encodeURIComponent(address+', Pakistan')}`} target="_blank" rel="noreferrer">↗</a></article>})}</div></div></section>

      <section className="testimonials" id="stories"><p className="eyebrow">Loved by spice seekers</p><h2>Happy plates.<br/><em>Happier people.</em></h2><div className="quote-wrap"><button className="quote-arrow" onClick={()=>setReview((review-1+reviews.length)%reviews.length)}>←</button><blockquote><div className="stars">★★★★★</div><p>“{reviews[review][0]}”</p><footer>{reviews[review][1]} <span>— {reviews[review][2]}</span></footer></blockquote><button className="quote-arrow" onClick={()=>setReview((review+1)%reviews.length)}>→</button></div></section>

      <section className="section recipes"><div className="section-head"><div><p className="eyebrow">From our kitchen</p><h2>Food stories &<br/><em>desi inspiration.</em></h2></div><a className="text-link" href="#contact">Stay connected →</a></div><div className="recipe-grid">{[['https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=85','Recipe','The secret behind a rich, aromatic karahi'],['https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85','BBQ guide','How we get that signature smoky char'],['https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=85','Our kitchen','Fresh ingredients, unforgettable flavour']].map((post,i)=><article key={post[2]}><div className="recipe-image"><img src={post[0]} alt={post[2]}/><span>{post[1]}</span></div><small>{i+3} min read</small><h3>{post[2]}</h3></article>)}</div></section>

      <section className="section faq" id="faq"><div className="section-head"><div><p className="eyebrow">Good to know</p><h2>Questions,<br/><em>answered.</em></h2></div><p>Everything you need to know before placing your next order.</p></div><div className="faq-list"><details open><summary>Do you offer home delivery?<span>+</span></summary><p>Yes. Delivery is available across selected areas of Islamabad and Rawalpindi. Call 0305 5040848 to confirm coverage and timing.</p></details><details><summary>Can I book a table or arrange catering?<span>+</span></summary><p>Absolutely. Use the inquiry form below or call our team for table bookings, family gatherings and catering requirements.</p></details><details><summary>What are your opening hours?<span>+</span></summary><p>Monday to Saturday, 9AM–10PM. Weekend service runs until 12AM. Timings can vary by branch.</p></details><details><summary>How can I confirm prices and availability?<span>+</span></summary><p>Our team confirms the final total, availability and delivery charges when you call.</p></details></div></section>

      <section className="contact" id="contact"><div className="contact-copy"><p className="eyebrow">Talk to us</p><h2>Let’s make your next<br/>meal <em>memorable.</em></h2><p>Book a table, plan an event, ask about catering or simply tell us what you’re craving.</p><div className="contact-details"><a href="tel:+923055040848"><small>Call us</small>0305 5040848</a><a href="mailto:order@mirchnspicy.com"><small>Email us</small>order@mirchnspicy.com</a><a href="https://maps.google.com" target="_blank" rel="noreferrer"><small>Visit us</small>Iqbal Boulevard, DHA Phase II, Islamabad</a></div></div><form className="contact-form" onSubmit={submitForm}><div className="field-row"><label>Your name<input required name="name" placeholder="Full name"/></label><label>Phone number<input required name="phone" type="tel" placeholder="03xx xxxxxxx"/></label></div><label>Email address<input required name="email" type="email" placeholder="you@email.com"/></label><label>How can we help?<CustomSelect name="purpose" options={['Book a table','Order inquiry','Catering','Feedback']}/></label><label>Your message<textarea name="message" rows="4" placeholder="Tell us more..."/></label><button className="btn" type="submit">Send inquiry <span>↗</span></button>{sent&&<p className="form-status">Thank you! Please call us for immediate confirmation.</p>}</form></section>
    </main>

    <SiteFooter/>

    {variantProduct&&<div className="variant-overlay" role="presentation" onClick={()=>setVariantProduct(null)}><section className="variant-modal" role="dialog" aria-modal="true" aria-labelledby="home-variant-title" onClick={event=>event.stopPropagation()}><header><div><small>{variantProduct.variants?.length?'Choose your variants':'Confirm your selection'}</small><h2 id="home-variant-title">{variantProduct.name}</h2><p>Add multiple options and adjust their quantities below.</p></div><button onClick={()=>setVariantProduct(null)} aria-label="Close item selection">×</button></header><div className="variant-options">{productOptions(variantProduct).map(variant=>{const quantity=variantQuantity(variantProduct,variant);return <article className={quantity?'variant-selected':''} key={variant.name}><span className="variant-option-copy"><b>{variant.name}</b><small>{variant.desc}</small></span><strong>Rs. {variant.price.toLocaleString()}</strong>{quantity?<div className="variant-inline-actions"><button className="variant-delete" onClick={()=>removeVariant(variantProduct,variant)} aria-label={`Remove ${variant.name}`}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg></button><div className="variant-quantity"><button onClick={()=>decreaseVariant(variantProduct,variant)} aria-label={`Decrease ${variant.name}`}>−</button><b>{quantity}</b><button onClick={()=>addVariant(variantProduct,variant)} aria-label={`Increase ${variant.name}`}>+</button></div></div>:<button className="variant-add" onClick={()=>addVariant(variantProduct,variant)}><span>Add</span><i>+</i></button>}</article>})}</div><footer className="variant-modal-footer"><span><b>{cart.length}</b> item{cart.length!==1?'s':''} selected</span><button onClick={()=>setVariantProduct(null)}>Done selecting <i>→</i></button></footer></section></div>}

    <aside className={`cart ${cartOpen?'open':''}`} aria-hidden={!cartOpen}><div className="cart-head"><div><small>Your selections</small><h3>Your order <b>{cart.length}</b></h3></div><button className="cart-close" onClick={()=>setCartOpen(false)}>×</button></div><div className="cart-items"><CartItemList items={cart} setItems={setCart}/></div><div className="cart-foot"><WhatsAppCheckout items={cart}/></div></aside>
    <div className={`overlay ${cartOpen?'show':''}`} onClick={()=>setCartOpen(false)}></div><button className={`scroll-cart ${cart.length?'has-items':''}`} onClick={()=>setCartOpen(true)} aria-label={`Open cart with ${cart.length} items`}><span>🛒</span><b>{cart.length}</b></button><a className="floating-call" href="https://wa.me/923055040848?text=Assalam-o-Alaikum%20Mirch%20N%20Spicy!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noreferrer" aria-label="Order on WhatsApp"><WhatsAppIcon/><span>Order on WhatsApp</span></a>
  </>;
}
