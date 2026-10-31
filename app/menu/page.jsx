'use client';
import { useEffect, useState } from 'react';
import InnerShell,{PageHero} from '../../components/InnerShell';
import {menuCategories,fullMenu} from '../../data/menu';
import WhatsAppCheckout from '../../components/WhatsAppCheckout';
import CartItemList from '../../components/CartItemList';

export default function MenuPage(){
 const [active,setActive]=useState('all'); const [query,setQuery]=useState(''); const [bag,setBag]=useState([]); const [bagOpen,setBagOpen]=useState(false); const [page,setPage]=useState(1);
 const perPage=8;
 const items=fullMenu.filter(x=>(active==='all'||x.category===active)&&x.name.toLowerCase().includes(query.toLowerCase()));
 const pages=Math.max(1,Math.ceil(items.length/perPage));
 const visibleItems=items.slice((page-1)*perPage,page*perPage);
 const paginationItems=(()=>{
  if(pages<=5)return Array.from({length:pages},(_,i)=>i+1);
  if(page<=3)return [1,2,3,4,'end-gap',pages];
  if(page>=pages-2)return [1,'start-gap',pages-3,pages-2,pages-1,pages];
  return [1,'start-gap',page-1,page,page+1,'end-gap',pages];
 })();
 useEffect(()=>setPage(1),[active,query]);
 const add=item=>{setBag([...bag,item]);setBagOpen(true)};
 const changePage=next=>{setPage(next);setTimeout(()=>document.querySelector('.menu-results-meta')?.scrollIntoView({behavior:'smooth',block:'start'}),0)};
 return <InnerShell cartCount={bag.length} onCartOpen={()=>setBagOpen(true)}>
  <PageHero kicker="Explore the full menu" title="Pick your" accent="perfect craving." copy="Browse clearly defined categories, search for a dish and build your order in a few taps." image="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=88"/>
  <section className="menu-guide section"><div className="category-showcase">{menuCategories.map(c=><button key={c.id} onClick={()=>setActive(c.id)} className={active===c.id?'active':''}><img src={c.image} alt="" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src='/logo.svg';e.currentTarget.classList.add('image-fallback')}}/><span>{c.icon}</span><div><strong>{c.name}</strong><small>{fullMenu.filter(x=>x.category===c.id).length} items</small></div></button>)}</div></section>
  <section className="full-menu section"><div className="menu-toolbar"><div><p className="eyebrow">Order your favourites</p><h2>{active==='all'?'Full menu':menuCategories.find(c=>c.id===active)?.name}</h2></div><label className="menu-search">⌕<input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search dishes..."/></label></div>
   <div className="menu-filter-row"><button className={active==='all'?'active':''} onClick={()=>setActive('all')}>All dishes</button>{menuCategories.map(c=><button key={c.id} className={active===c.id?'active':''} onClick={()=>setActive(c.id)}>{c.name}</button>)}</div>
   <div className="menu-results-meta"><span>Showing {items.length?((page-1)*perPage)+1:0}–{Math.min(page*perPage,items.length)} of {items.length} dishes</span><span>Page {page} of {pages}</span></div>
   <div className="menu-list visual-menu-list">{visibleItems.map(item=>{const category=menuCategories.find(c=>c.id===item.category);return <article key={item.name}><img className="menu-item-image" src={item.image||category?.image} alt={item.name} onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src='/logo.svg';e.currentTarget.classList.add('image-fallback')}}/><div><div className="menu-item-title"><h3>{item.name}</h3>{item.popular&&<span>Popular</span>}</div><small className="item-category">{category?.name}</small><p>{item.desc}</p></div><strong>Rs. {item.price.toLocaleString()}</strong><button onClick={()=>add(item)}>Add +</button></article>})}</div>{!items.length&&<div className="no-results">No dish found. Try another search.</div>}
   {items.length>perPage&&<nav className="pagination" aria-label="Menu pagination"><button className="pagination-nav pagination-prev" disabled={page===1} aria-label="Go to previous menu page" onClick={()=>changePage(page-1)}><span>←</span> Previous</button><div>{paginationItems.map(n=>typeof n==='number'?<button key={n} className={page===n?'active':''} aria-current={page===n?'page':undefined} aria-label={`Go to page ${n}`} onClick={()=>changePage(n)}>{n}</button>:<span className="pagination-gap" key={n} aria-hidden="true">…</span>)}</div><button className="pagination-nav pagination-next" disabled={page===pages} aria-label="Go to next menu page" onClick={()=>changePage(page+1)}>Next <span>→</span></button></nav>}
  </section>
  <button className={`scroll-cart ${bag.length?'has-items':''}`} onClick={()=>setBagOpen(true)} aria-label={`Open cart with ${bag.length} items`}><span>🛒</span><b>{bag.length}</b></button>
  <aside className={`cart ${bagOpen?'open':''}`}><div className="cart-head"><div><small>Your selections</small><h3>Your order <b>{bag.length}</b></h3></div><button className="cart-close" onClick={()=>setBagOpen(false)}>×</button></div><div className="cart-items"><CartItemList items={bag} setItems={setBag}/></div><div className="cart-foot"><WhatsAppCheckout items={bag}/></div></aside><div className={`overlay ${bagOpen?'show':''}`} onClick={()=>setBagOpen(false)}/>
 </InnerShell>
}
