'use client';

import { useMemo, useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER='923055040848';

export default function WhatsAppCheckout({items=[]}){
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [type,setType]=useState('Delivery');
  const [location,setLocation]=useState('');
  const [notes,setNotes]=useState('');
  const [errors,setErrors]=useState({});
  const grouped=useMemo(()=>items.reduce((list,item)=>{const found=list.find(x=>x.name===item.name);if(found)found.qty+=1;else list.push({...item,qty:1});return list},[]),[items]);
  const total=items.reduce((sum,item)=>sum+item.price,0);
  const message=useMemo(()=>{
    const orderLines=grouped.map((item,index)=>`${index+1}. ${item.name} × ${item.qty}\n   Rs. ${(item.price*item.qty).toLocaleString()}`).join('\n');
    return `Assalam-o-Alaikum Mirch N Spicy! 🌶️\n\n*NEW WEBSITE ORDER*\n\n${orderLines}\n\n*Estimated Total: Rs. ${total.toLocaleString()}*\n\n*Customer Name:* ${name.trim()}\n*Phone Number:* ${phone.trim()}\n*Order Type:* ${type}\n*${type==='Delivery'?'Delivery Address':'Preferred Branch'}:* ${location.trim()}\n*Order Notes:* ${notes.trim()||'No special instructions'}\n\nPlease confirm item availability, final total and ${type==='Delivery'?'delivery time':'pickup time'}. Thank you!`;
  },[grouped,total,name,phone,type,location,notes]);
  const link=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const submitOrder=e=>{
    e.preventDefault();
    const nextErrors={};
    if(!items.length)nextErrors.items='Please add at least one menu item.';
    if(name.trim().length<2)nextErrors.name='Please enter your full name.';
    if(!/^(?:\+?92|0)?3\d{9}$/.test(phone.replace(/[\s-]/g,'')))nextErrors.phone='Enter a valid Pakistani mobile number.';
    if(location.trim().length<5)nextErrors.location=type==='Delivery'?'Please enter your complete delivery address.':'Please enter your preferred branch.';
    setErrors(nextErrors);
    if(Object.keys(nextErrors).length)return;
    window.open(link,'_blank','noopener,noreferrer');
  };
  return <div className="whatsapp-checkout">
    <div className="checkout-total"><span>Estimated total</span><strong>Rs. {total.toLocaleString()}</strong></div>
    <form className="checkout-form" onSubmit={submitOrder} noValidate>
    <div className="checkout-fields">
      <label><span>Your full name <b>*</b></span><input value={name} onChange={e=>{setName(e.target.value);setErrors({...errors,name:''})}} placeholder="Enter your full name" autoComplete="name" aria-invalid={!!errors.name}/>{errors.name&&<em>{errors.name}</em>}</label>
      <label><span>WhatsApp number <b>*</b></span><input value={phone} onChange={e=>{setPhone(e.target.value);setErrors({...errors,phone:''})}} placeholder="03xx xxxxxxx" type="tel" inputMode="tel" autoComplete="tel" aria-invalid={!!errors.phone}/>{errors.phone&&<em>{errors.phone}</em>}</label>
      <div className="order-type" role="group" aria-label="Order type"><button className={type==='Delivery'?'active':''} onClick={()=>setType('Delivery')} type="button">Delivery</button><button className={type==='Pickup'?'active':''} onClick={()=>setType('Pickup')} type="button">Pickup</button></div>
      <label><span>{type==='Delivery'?'Complete delivery address':'Preferred branch'} <b>*</b></span><input value={location} onChange={e=>{setLocation(e.target.value);setErrors({...errors,location:''})}} placeholder={type==='Delivery'?'House, street, area and city':'e.g. Gulberg Greens Trade Center'} aria-invalid={!!errors.location}/>{errors.location&&<em>{errors.location}</em>}</label>
      <label><span>Order notes <small>Optional</small></span><textarea value={notes} onChange={e=>setNotes(e.target.value)} rows="2" placeholder="Spice level, special instructions..."/></label>
    </div>
    {errors.items&&<p className="checkout-error checkout-items-error">{errors.items}</p>}
    <button className={`whatsapp-order-btn ${!items.length?'disabled':''}`} type="submit"><b><WhatsAppIcon/></b><span><small>Send complete order</small>Order on WhatsApp</span><i>→</i></button>
    <p className="checkout-help">WhatsApp will open with your complete order. Review it, then tap Send.</p>
    </form>
  </div>
}
