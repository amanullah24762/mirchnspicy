export default function ContactMethodIcon({type}){
  const icons={phone:<path d="M7.2 3.5 10 7.8 8.3 10c1.2 2.5 3.2 4.5 5.7 5.7l2.2-1.7 4.3 2.8-.5 3c-.2 1-1.1 1.7-2.1 1.7C9.4 21.5 2.5 14.6 2.5 6.1c0-1 .7-1.9 1.7-2.1Z"/>,email:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,location:<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,time:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></>};
  return <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icons[type]}</g></svg>;
}
