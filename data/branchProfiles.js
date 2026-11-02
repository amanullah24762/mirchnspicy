import {fullMenu} from './menu';

const demoNames=['Chicken Tikka (1 pc)','Chicken Malai Tikka','Chicken Regular Roll','Chicken Boom Boom Roll','Chicken Karahi','Chicken Zinger Burger','Fries','Chicken Egg Fried Rice','Chicken Corn Soup','Cold Drink','Deal 1','Deal 2'];
const demoMenu=fullMenu.filter(item=>demoNames.includes(item.name)).map(item=>({...item,isDemo:true}));

const defaultPromotions=[
 {badge:'Branch special',title:'Family Feast',copy:'Selected BBQ, rolls and drinks bundled for sharing.',price:'From Rs. 2,450',image:'/images/hero-pakistani-feast.png'},
 {badge:'Limited time',title:'Roll Hour',copy:'Ask the branch team about today’s roll and drink offer.',price:'Confirm on WhatsApp',image:'/images/menu-chicken-rolls.png'}
];
const gulbergPromotions=[
 {badge:'Gulberg opening special',title:'Spice Up Gulberg',copy:'Order from the new Trade Center branch and confirm today’s opening deal on WhatsApp.',price:'Branch exclusive',image:'/images/hero-pakistani-feast.png'},
 {badge:'Best value',title:'Deal 8 · Five Rolls',copy:'Five Boom Boom Rolls with a 1.5L cold drink.',price:'Rs. 2,450',image:'/images/menu-chicken-rolls.png'}
];

export function getBranchProfile(branch){
 const isGulberg=branch?.id==='gulberg';
 return {isDemo:!isGulberg,menu:isGulberg?fullMenu:demoMenu,promotions:isGulberg?gulbergPromotions:defaultPromotions,heroImage:branch?.image||'/images/hero-pakistani-feast.png'};
}
