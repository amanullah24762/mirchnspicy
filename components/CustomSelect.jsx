'use client';

import {useEffect,useRef,useState} from 'react';

export default function CustomSelect({name,options}){
  const [open,setOpen]=useState(false);
  const [value,setValue]=useState(options[0]);
  const root=useRef(null);
  useEffect(()=>{
    const close=event=>{if(!root.current?.contains(event.target))setOpen(false)};
    const escape=event=>{if(event.key==='Escape')setOpen(false)};
    const form=root.current?.closest('form');
    const reset=()=>{setValue(options[0]);setOpen(false)};
    document.addEventListener('pointerdown',close);
    document.addEventListener('keydown',escape);
    form?.addEventListener('reset',reset);
    return()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',escape);form?.removeEventListener('reset',reset)};
  },[options]);
  return <div className={`custom-select ${open?'open':''}`} ref={root}>
    <input type="hidden" name={name} value={value} readOnly/>
    <button className="custom-select-trigger" type="button" aria-haspopup="listbox" aria-expanded={open} onClick={()=>setOpen(!open)}><span>{value}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 9.5 5 5 5-5"/></svg></button>
    {open&&<div className="custom-select-options" role="listbox" aria-label={name}>{options.map(option=><button type="button" role="option" aria-selected={value===option} className={value===option?'selected':''} key={option} onClick={()=>{setValue(option);setOpen(false)}}><span>{option}</span>{value===option&&<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>}</button>)}</div>}
  </div>;
}
