'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MotionEffects(){
  const pathname=usePathname();
  useEffect(()=>{
    let observer;
    let floatingObserver;
    let elements=[];
    let animations=[];
    const progress=document.querySelector('.scroll-progress');
    const updateProgress=()=>{if(!progress)return;const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform=`scaleX(${max>0?window.scrollY/max:0})`};

    const selectors=['.section-head','.food-card','.category-showcase button','.story-images','.story-copy','.values article','.experience-copy','.experience-card','.location-card','.branch-grid article','.quality-grid article','.purpose-grid article','.recipe-grid article','.blog-grid article','.featured-post','.contact-copy','.contact-form','.contact-info','.faq details','.menu-list article','.hero-clean-copy','.hero-clean-visual','.inner-hero>div','.inner-hero>img'];
    elements=[...document.querySelectorAll(selectors.join(','))];
    const mobile=window.matchMedia('(max-width: 768px)').matches;
    const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if(!reduceMotion){
      animations=elements.map((element,index)=>{
        const animation=element.animate(
          [
            {opacity:0,transform:`translate3d(0,${mobile?16:22}px,0)`},
            {opacity:1,transform:'translate3d(0,0,0)'}
          ],
          {
            duration:mobile?520:650,
            delay:Math.min(index%6,5)*(mobile?34:55),
            easing:'cubic-bezier(.2,.75,.2,1)',
            fill:'both'
          }
        );
        animation.pause();
        return animation;
      });
    }

    observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const index=elements.indexOf(entry.target);
      animations[index]?.play();
      observer?.unobserve(entry.target);
    }),{threshold:mobile ? .04 : .09,rootMargin:mobile ? '0px 0px 4%' : '0px 0px -5%'});
    elements.forEach(element=>observer.observe(element));
    updateProgress();
    window.addEventListener('scroll',updateProgress,{passive:true});

    const coveredSections=[...document.querySelectorAll('.contact,.contact-page,.footer')];
    const visibleSections=new Set();
    floatingObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>entry.isIntersecting?visibleSections.add(entry.target):visibleSections.delete(entry.target));
      document.body.classList.toggle('floating-actions-hidden',visibleSections.size>0);
    },{threshold:.12});
    coveredSections.forEach(section=>floatingObserver.observe(section));

    return()=>{
      observer?.disconnect();
      floatingObserver?.disconnect();
      animations.forEach(animation=>animation.cancel());
      window.removeEventListener('scroll',updateProgress);
      document.body.classList.remove('floating-actions-hidden');
    };
  },[pathname]);
  return <><div className="scroll-progress" aria-hidden="true"/><div className="page-noise" aria-hidden="true"/></>;
}
