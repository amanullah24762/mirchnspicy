'use client';

export default function CartItemList({items,setItems}){
  const grouped=items.reduce((list,item)=>{const found=list.find(x=>x.name===item.name);if(found)found.qty+=1;else list.push({...item,qty:1});return list},[]);
  const add=item=>setItems([...items,item]);
  const subtract=item=>{const index=items.findIndex(x=>x.name===item.name);if(index<0)return;setItems(items.filter((_,i)=>i!==index))};
  const remove=item=>setItems(items.filter(x=>x.name!==item.name));
  if(!items.length)return <div className="empty-cart"><span>🛍️</span><p>Your order is empty.</p><small>Add multiple dishes from the menu.</small></div>;
  const clearCart=()=>{if(window.confirm('Remove all items from your cart?'))setItems([])};
  return <div className="grouped-cart-wrap"><div className="grouped-cart-toolbar"><span>{grouped.length} different item{grouped.length!==1?'s':''}</span><button className="clear-cart-btn" onClick={clearCart} aria-label="Remove all items from cart"><span className="clear-cart-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg></span><span>Clear cart</span></button></div><div className="grouped-cart-list">{grouped.map(item=><article className="grouped-cart-item" key={item.name}><div className="grouped-cart-info"><h4>{item.name}</h4><small>Rs. {item.price.toLocaleString()} each</small></div><button className="delete-cart-item" onClick={()=>remove(item)} aria-label={`Delete ${item.name} from cart`} title="Delete item"><span>×</span></button><div className="quantity-control" aria-label={`Quantity for ${item.name}`}><button onClick={()=>subtract(item)} aria-label="Decrease quantity">−</button><b>{item.qty}</b><button onClick={()=>add(item)} aria-label="Increase quantity">+</button></div><strong>Rs. {(item.price*item.qty).toLocaleString()}</strong></article>)}</div></div>
}
