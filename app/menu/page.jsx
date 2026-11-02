'use client';
import { useEffect, useRef, useState } from 'react';
import InnerShell,{PageHero} from '../../components/InnerShell';
import {menuCategories,fullMenu,getMenuItemImage} from '../../data/menu';
import WhatsAppCheckout from '../../components/WhatsAppCheckout';
import CartItemList from '../../components/CartItemList';
import {useBranch} from '../../components/BranchProvider';

export default function MenuPage(){
 const {selectedBranch,openSelector}=useBranch();
 const [active,setActive]=useState('all'); const [query,setQuery]=useState(''); const [bag,setBag]=useState([]); const [bagOpen,setBagOpen]=useState(false); const [page,setPage]=useState(1); const [variantProduct,setVariantProduct]=useState(null);
 const searchRef=useRef(null);
 const perPage=8;
 const items=fullMenu.filter(x=>(active==='all'||x.category===active)&&(`${x.name} ${x.variants?.map(v=>v.name).join(' ')||''}`).toLowerCase().includes(query.toLowerCase()));
 const pages=Math.max(1,Math.ceil(items.length/perPage));
 const visibleItems=items.slice((page-1)*perPage,page*perPage);
 const paginationItems=(()=>{
  if(pages<=5)return Array.from({length:pages},(_,i)=>i+1);
  if(page<=3)return [1,2,3,4,'end-gap',pages];
  if(page>=pages-2)return [1,'start-gap',pages-3,pages-2,pages-1,pages];
  return [1,'start-gap',page-1,page,page+1,'end-gap',pages];
 })();
 useEffect(()=>setPage(1),[active,query]);
 useEffect(()=>{const focusSearch=event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();searchRef.current?.focus()}};window.addEventListener('keydown',focusSearch);return()=>window.removeEventListener('keydown',focusSearch)},[]);
 const add=item=>setVariantProduct(item);
 const productOptions=product=>product?.variants?.length?product.variants:[{name:'Standard serving',price:product?.price,desc:product?.desc}];
 const selectedItemName=(product,variant)=>product.variants?.length?`${product.name} — ${variant.name}`:product.name;
 const variantQuantity=(product,variant)=>{const name=selectedItemName(product,variant);return bag.filter(item=>item.name===name).length};
 const addVariant=(product,variant)=>{const selectedName=selectedItemName(product,variant);setBag(current=>[...current,{...product,name:selectedName,price:variant.price,variants:undefined}])};
 const decreaseVariant=(product,variant)=>{const selectedName=selectedItemName(product,variant);setBag(current=>{const index=current.findIndex(item=>item.name===selectedName);return index<0?current:current.filter((_,itemIndex)=>itemIndex!==index)})};
 const removeVariant=(product,variant)=>{const selectedName=selectedItemName(product,variant);setBag(current=>current.filter(item=>item.name!==selectedName))};
 const changePage=next=>{setPage(next);setTimeout(()=>document.querySelector('.menu-results-meta')?.scrollIntoView({behavior:'smooth',block:'start'}),0)};
 const selectCategory=category=>{
  setActive(category);
  setQuery('');
  setPage(1);
  requestAnimationFrame(()=>requestAnimationFrame(()=>document.getElementById('menu-results')?.scrollIntoView({behavior:'smooth',block:'start'})));
 };
 return <InnerShell cartCount={bag.length} onCartOpen={()=>setBagOpen(true)}>
  <PageHero kicker="Explore the full menu" title="Pick your" accent="perfect craving." copy="Browse clearly defined categories, search for a dish and build your order in a few taps." image="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=88"/>
  {selectedBranch&&<div className="selected-branch-strip selected-branch-strip-page"><div><small>Menu for your selected branch</small><b>{selectedBranch.name} · {selectedBranch.city}</b></div><button onClick={openSelector}>Change branch →</button></div>}
  <section className="menu-guide section" id="menu-categories"><header className="category-section-head"><div><p className="eyebrow">Find your favourite</p><h2>Browse by <em>category.</em></h2></div><p>Choose a category to jump directly to its dishes, prices and available variants.</p></header><div className="category-showcase">{menuCategories.map(c=>{const categoryItems=fullMenu.filter(x=>x.category===c.id);const count=categoryItems.reduce((sum,item)=>sum+(item.variants?.length||1),0);return <button key={c.id} onClick={()=>selectCategory(c.id)} className={active===c.id?'active':''} aria-label={`Browse ${c.name}`}><img src={c.image} alt="" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src='/logo.svg';e.currentTarget.classList.add('image-fallback')}}/><span>{c.icon}</span><div><strong>{c.name}</strong><small>{count} choices · View dishes ↓</small></div></button>})}</div></section>
  <section className="full-menu section" id="menu-results"><div className="menu-toolbar"><div><p className="eyebrow">Order your favourites</p><h2>{active==='all'?'Full menu':menuCategories.find(c=>c.id===active)?.name}</h2></div><label className={`menu-search ${query?'has-value':''}`}><span className="sr-only">Search menu dishes</span><svg className="menu-search-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></svg><input ref={searchRef} type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by dish or variant..." autoComplete="off"/>{query&&<button type="button" className="menu-search-clear" onClick={()=>{setQuery('');searchRef.current?.focus()}} aria-label="Clear menu search">×</button>}<kbd>⌘ K</kbd></label></div>
   <div className="menu-filter-row"><button className={active==='all'?'active':''} onClick={()=>selectCategory('all')}>All dishes</button>{menuCategories.map(c=><button key={c.id} className={active===c.id?'active':''} onClick={()=>selectCategory(c.id)}>{c.name}</button>)}</div>
   <div className="menu-results-meta"><span>Showing {items.length?((page-1)*perPage)+1:0}–{Math.min(page*perPage,items.length)} of {items.length} products</span><span>Page {page} of {pages}</span></div>
   <div className="menu-list visual-menu-list">{visibleItems.map(item=>{const category=menuCategories.find(c=>c.id===item.category);return <article className={item.variants?.length?'has-variants':'single-option'} key={item.name}><img className="menu-item-image" src={getMenuItemImage(item)} alt={`${item.name} — Mirch N Spicy menu item`} loading="lazy" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src=category?.image||'/logo.svg';e.currentTarget.classList.add('image-fallback')}}/><div className="menu-item-copy"><div className="menu-item-title"><h3>{item.name}</h3><span className="option-badge">{item.variants?.length?`${item.variants.length} variants`:'1 option'}</span></div><small className="item-category">{category?.name}</small><p>{item.desc}</p></div><strong className="menu-item-price">{item.variants?.length?'From ':''}Rs. {item.price.toLocaleString()}</strong><button className="menu-select-button" onClick={()=>add(item)}><span>Select</span><i>→</i></button></article>})}</div>{!items.length&&<div className="no-results">No dish found. Try another search.</div>}
   {items.length>perPage&&<nav className="pagination" aria-label="Menu pagination"><button className="pagination-nav pagination-prev" disabled={page===1} aria-label="Go to previous menu page" onClick={()=>changePage(page-1)}><span>←</span> Previous</button><div>{paginationItems.map(n=>typeof n==='number'?<button key={n} className={page===n?'active':''} aria-current={page===n?'page':undefined} aria-label={`Go to page ${n}`} onClick={()=>changePage(n)}>{n}</button>:<span className="pagination-gap" key={n} aria-hidden="true">…</span>)}</div><button className="pagination-nav pagination-next" disabled={page===pages} aria-label="Go to next menu page" onClick={()=>changePage(page+1)}>Next <span>→</span></button></nav>}
  </section>
  {variantProduct&&<div className="variant-overlay" role="presentation" onClick={()=>setVariantProduct(null)}><section className="variant-modal" role="dialog" aria-modal="true" aria-labelledby="variant-title" onClick={event=>event.stopPropagation()}><header><div><small>{variantProduct.variants?.length?'Choose your variants':'Confirm your selection'}</small><h2 id="variant-title">{variantProduct.name}</h2><p>Add multiple options and adjust their quantities below.</p></div><button onClick={()=>setVariantProduct(null)} aria-label="Close item selection">×</button></header><div className="variant-options">{productOptions(variantProduct).map(variant=>{const quantity=variantQuantity(variantProduct,variant);return <article className={quantity?'variant-selected':''} key={variant.name}><span className="variant-option-copy"><b>{variant.name}</b><small>{variant.desc}</small></span><strong>Rs. {variant.price.toLocaleString()}</strong>{quantity?<div className="variant-inline-actions"><button className="variant-delete" onClick={()=>removeVariant(variantProduct,variant)} aria-label={`Remove ${variant.name}`} title="Remove selection"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg></button><div className="variant-quantity"><button onClick={()=>decreaseVariant(variantProduct,variant)} aria-label={`Decrease ${variant.name}`}>−</button><b>{quantity}</b><button onClick={()=>addVariant(variantProduct,variant)} aria-label={`Increase ${variant.name}`}>+</button></div></div>:<button className="variant-add" onClick={()=>addVariant(variantProduct,variant)}><span>Add</span><i>+</i></button>}</article>})}</div><footer className="variant-modal-footer"><span><b>{bag.length}</b> item{bag.length!==1?'s':''} selected</span><button onClick={()=>setVariantProduct(null)}>Done selecting <i>→</i></button></footer></section></div>}
  <button className={`scroll-cart ${bag.length?'has-items':''}`} onClick={()=>setBagOpen(true)} aria-label={`Open cart with ${bag.length} items`}><span>🛒</span><b>{bag.length}</b></button>
  <aside className={`cart ${bagOpen?'open':''}`}><div className="cart-head"><div><small>Your selections</small><h3>Your order <b>{bag.length}</b></h3></div><button className="cart-close" onClick={()=>setBagOpen(false)}>×</button></div><div className="cart-items"><CartItemList items={bag} setItems={setBag}/></div><div className="cart-foot"><WhatsAppCheckout items={bag}/></div></aside><div className={`overlay ${bagOpen?'show':''}`} onClick={()=>setBagOpen(false)}/>
 </InnerShell>
}
