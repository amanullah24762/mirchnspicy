const common={fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round'};

export default function NavIcon({name}) {
  const paths={
    Home:<><path d="m3.5 11 8.5-7 8.5 7"/><path d="M5.5 9.5V20h13V9.5M9.5 20v-6h5v6"/></>,
    Menu:<><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="7" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="17" cy="18" r="1" fill="currentColor" stroke="none"/></>,
    About:<><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/></>,
    Locations:<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    'Blog & Recipes':<><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22Z"/><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22Z"/></>,
    Contact:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>
  };
  return <span className="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24" {...common}>{paths[name]}</svg></span>;
}
