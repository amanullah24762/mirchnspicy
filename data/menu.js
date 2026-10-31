export const menuCategories = [
  {id:'bbq',name:'BBQ & Grilled',icon:'🔥',summary:'Smoky, juicy and grilled to order.',image:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85'},
  {id:'rolls',name:'Rolls & Paratha',icon:'🌯',summary:'Our famous street-style rolls and Boom Boom specials.',image:'https://mirchnspicy.com/wp-content/uploads/2025/09/47825147783b1100a81d360a95b521fa-600x400.avif'},
  {id:'karahi',name:'Karahi & Handi',icon:'🥘',summary:'Rich desi gravies made for sharing.',image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85'},
  {id:'rice',name:'Biryani & Rice',icon:'🍚',summary:'Aromatic biryani and bold Pakistani-Chinese favourites.',image:'https://mirchnspicy.com/wp-content/uploads/2025/11/dry-chilli-chicken-600x425.jpg'},
  {id:'burgers',name:'Burgers & Sandwiches',icon:'🍔',summary:'Crispy, cheesy and generously loaded.',image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85'},
  {id:'pizza',name:'Pizza',icon:'🍕',summary:'Cheesy oven-baked pizzas with desi favourites.',image:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85'},
  {id:'pasta',name:'Pasta',icon:'🍝',summary:'Creamy, comforting pasta dishes.',image:'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=900&q=85'},
  {id:'wraps',name:'Wraps',icon:'🌮',summary:'Loaded wraps and sandwiches for quick cravings.',image:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85'},
  {id:'sides',name:'Sides & Breads',icon:'🍟',summary:'Fries, naan, paratha, raita and more.',image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85'},
  {id:'drinks',name:'Beverages',icon:'🥤',summary:'Cold drinks, water and refreshing coolers.',image:'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=85'},
  {id:'shakes',name:'Shakes & Coolers',icon:'🥛',summary:'Fresh shakes, lassi, juices and coolers.',image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85'},
  {id:'combos',name:'Special Combos',icon:'🍽️',summary:'Large sharing platters and group combinations.',image:'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=85'},
  {id:'deals',name:'Special Deals',icon:'✨',summary:'Great-value meals for one, friends and family.',image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85'}
];

const featuredMenu = [
 {name:'Chicken Tikka Leg',category:'bbq',price:440,desc:'Spice-marinated chicken, char-grilled to perfection.',popular:true},{name:'Chicken Malai Tikka',category:'bbq',price:520,desc:'Creamy, mild and melt-in-the-mouth.'},{name:'Golden Boti',category:'bbq',price:500,desc:'Boneless chicken with aromatic golden spices.'},{name:'Chicken Reshmi Kabab',category:'bbq',price:520,desc:'Soft minced chicken kabab with delicate seasoning.'},{name:'Beef Gola Kabab',category:'bbq',price:600,desc:'Juicy beef kabab, smoky and deeply spiced.'},{name:'Beef Seekh Kabab',category:'bbq',price:550,desc:'Classic skewered beef kabab with herbs.'},
 {name:'Chicken Regular Roll',category:'rolls',price:360,desc:'Chicken seekh, onions and mild mayo in paratha.'},{name:'Chicken Cheese Mayo Roll',category:'rolls',price:400,desc:'Creamy mayo, chicken and melted cheese.',popular:true},{name:'Chicken Jumbo Roll',category:'rolls',price:450,desc:'Double chicken for a bigger craving.',image:'https://mirchnspicy.com/wp-content/uploads/2025/09/47825147783b1100a81d360a95b521fa-600x400.avif'},{name:'Boom Boom Cheese Roll',category:'rolls',price:560,desc:'Seekh kabab, spicy Boom Boom mayo and cheese.',popular:true},{name:'Malai Boom Boom Roll',category:'rolls',price:530,desc:'Malai boti with our signature spicy sauce.'},{name:'Chicken Kabab Spicy Roll',category:'rolls',price:440,desc:'Chicken kabab with chutney and fiery mayo.'},
 {name:'Chicken Karahi Full',category:'karahi',price:1950,desc:'Traditional tomato gravy, ginger and green chilli.',popular:true},{name:'Chicken Karahi Half',category:'karahi',price:1050,desc:'Classic karahi in a smaller serving.'},{name:'White Chicken Karahi',category:'karahi',price:2050,desc:'Creamy yogurt gravy with mild spices.'},{name:'Makhni Chicken Karahi',category:'karahi',price:2150,desc:'Rich butter and cream tomato gravy.'},{name:'Achari Karahi',category:'karahi',price:2000,desc:'Tangy pickle spices and bold aroma.'},{name:'Boneless Chicken Karahi',category:'karahi',price:2150,desc:'Tender boneless chicken in classic gravy.'},
 {name:'Chicken Biryani Single',category:'rice',price:450,desc:'Aromatic basmati rice and traditional spices.',popular:true},{name:'Chicken Biryani Double',category:'rice',price:600,desc:'A generous double serving.'},{name:'Chicken Manchurian Rice',category:'rice',price:700,desc:'Tangy Manchurian chicken with rice.'},{name:'Chicken Chilli Rice',category:'rice',price:850,desc:'Spicy chicken chilli and sautéed vegetables.',image:'https://mirchnspicy.com/wp-content/uploads/2025/11/dry-chilli-chicken-600x425.jpg'},{name:'Chicken Egg Fried Rice',category:'rice',price:550,desc:'Chicken, egg and vegetables in seasoned rice.'},{name:'Chowmein',category:'rice',price:700,desc:'Stir-fried noodles with fresh vegetables.'},
 {name:'Chicken Burger',category:'burgers',price:460,desc:'Chicken patty, vegetables and creamy sauce.'},{name:'Zinger Burger',category:'burgers',price:500,desc:'Crispy chicken fillet with zinger sauce.',popular:true},{name:'Zinger Cheese Burger',category:'burgers',price:540,desc:'Crispy chicken with melted cheese.'},{name:'BBQ Cheese Burger',category:'burgers',price:490,desc:'Smoky BBQ chicken and cheese.'},{name:'Beef Cheese Burger',category:'burgers',price:500,desc:'Juicy beef patty with melted cheese.'},{name:'Club Sandwich',category:'burgers',price:430,desc:'Chicken, egg and vegetables with fries.'},
 {name:'Regular Fries',category:'sides',price:300,desc:'Crispy golden fries.'},{name:'Spicy Mayo Fries',category:'sides',price:350,desc:'Fries finished with spicy mayo.'},{name:'Roghni Naan',category:'sides',price:60,desc:'Soft sesame-topped naan.'},{name:'Tandoori Paratha',category:'sides',price:70,desc:'Flaky paratha from the tandoor.'},{name:'Boom Boom Paratha',category:'sides',price:200,desc:'Our signature seasoned paratha.'},{name:'Raita & Salad',category:'sides',price:150,desc:'Cooling yogurt and fresh salad.'},
 {name:'Mint Margarita',category:'drinks',price:250,desc:'Fresh mint, lemon and crushed ice.',popular:true},{name:'Cold Drink 500ml',category:'drinks',price:130,desc:'Chilled soft drink.'},{name:'Cold Drink 1.5L',category:'drinks',price:240,desc:'Family-size chilled soft drink.'},{name:'Mineral Water 500ml',category:'drinks',price:80,desc:'Fresh bottled water.'},{name:'Sting 500ml',category:'drinks',price:140,desc:'Chilled energy drink.'},{name:'Red Bull',category:'drinks',price:550,desc:'250ml energy drink.'},
 {name:'Deal 1',category:'deals',price:870,desc:'Chicken tikka, 2 parathas, fries and drink.'},{name:'Zinger & Boom Boom Deal',category:'deals',price:1250,desc:'Zinger burger, Boom Boom roll, fries and drink.',popular:true},{name:'BBQ Mix Grill Platter',category:'combos',price:4200,desc:'Tikka, malai boti, reshmi and seekh kababs with naan.'},{name:'Fast Food Deal',category:'combos',price:4050,desc:'A generous mix of burgers, rolls, fries and drinks.'},{name:'Family Deal',category:'deals',price:4600,desc:'Burgers, rolls, BBQ, parathas, fries and 1.5L drink.',popular:true}
];

const extraMenu = [
  // BBQ & Grilled — 10 items on the live menu
  {name:'Chicken Malai Boti',category:'bbq',price:520,desc:'Boneless chicken marinated in creamy malai and mild spices.'},
  {name:'Chicken Seekh Kabab',category:'bbq',price:510,desc:'Minced chicken kababs infused with herbs and aromatic spices.'},
  {name:'Beef Tikka Boti',category:'bbq',price:570,desc:'Juicy beef chunks marinated and char-grilled.'},
  {name:'Chicken Chest Piece',category:'bbq',price:470,desc:'A succulent marinated chicken breast grilled to order.'},

  // Beverages — 8 items on the live menu
  {name:'Cold Drink 250ml',category:'drinks',price:120,desc:'Chilled single-serving soft drink.'},
  {name:'Cold Drink 1L',category:'drinks',price:180,desc:'Chilled one-litre soft drink.'},
  {name:'Cold Drink 1.5L',category:'drinks',price:240,desc:'Family-size chilled soft drink.'},
  {name:'Mineral Water 500ml',category:'drinks',price:80,desc:'Refreshing bottled mineral water.'},
  {name:'Mineral Water 1.5L',category:'drinks',price:130,desc:'Large bottled mineral water.'},
  {name:'Sting 500ml',category:'drinks',price:140,desc:'Chilled energy drink.'},
  {name:'Red Bull',category:'drinks',price:550,desc:'250ml energy drink.'},

  // Biryani & Rice — 16 items on the live menu
  {name:'B.B.Q Shashlik Rice',category:'rice',price:800,desc:'BBQ chicken and colourful shashlik vegetables over rice.'},
  {name:'Shashlik Rice',category:'rice',price:750,desc:'Grilled shashlik vegetables served with aromatic rice.'},
  {name:'Vegetable Rice',category:'rice',price:450,desc:'Light seasoned rice loaded with fresh vegetables.'},
  {name:'Chicken Chilli Dry',category:'rice',price:850,desc:'Chicken, peppers and onions tossed in bold chilli sauces.',image:'https://mirchnspicy.com/wp-content/uploads/2025/11/dry-chilli-chicken-600x425.jpg'},
  {name:'Egg Fried Rice',category:'rice',price:450,desc:'Wok-fried rice with egg and fresh vegetables.'},
  {name:'Chicken Masala Rice',category:'rice',price:600,desc:'Tender chicken and aromatic spices with steamed rice.'},
  {name:'Black Pepper Chicken Rice',category:'rice',price:750,desc:'Peppery chicken served with fragrant rice.'},
  {name:'Chicken Almond with Rice',category:'rice',price:850,desc:'Chicken with crunchy almonds and aromatic rice.'},
  {name:'Beef Dry Chilli',category:'rice',price:850,desc:'Tender beef strips with chillies, peppers and onions.'},
  {name:'Plain Rice',category:'rice',price:350,desc:'Simple, fluffy steamed rice.'},

  // Burgers & Sandwiches — 14 items on the live menu
  {name:'Chicken Cheese Burger',category:'burgers',price:500,desc:'Chicken patty with vegetables and melted cheese.'},
  {name:'Beef Burger',category:'burgers',price:450,desc:'Juicy grilled beef patty with classic burger sauce.'},
  {name:'Chicken Broast Full',category:'burgers',price:1850,desc:'Full crispy broast, golden outside and juicy inside.'},
  {name:'Chicken Broast Half',category:'burgers',price:1000,desc:'Half crispy broast for a satisfying meal.'},
  {name:'Chicken Sandwich',category:'burgers',price:370,desc:'Tender chicken and creamy mayo in soft bread.'},
  {name:'B.B.Q Sandwich',category:'burgers',price:450,desc:'Smoky BBQ chicken with mayo and fresh vegetables.'},
  {name:'Zinger Sandwich',category:'burgers',price:480,desc:'Crunchy chicken fillet, lettuce and mayo.'},
  {name:'Bar B.Q Burger',category:'burgers',price:450,desc:'Grilled chicken patty glazed with smoky BBQ sauce.'},

  // Karahi & Handi — 24 items on the live menu
  {name:'Achari Karahi Full',category:'karahi',price:2000,desc:'Tangy chicken karahi cooked with aromatic pickle spices.'},
  {name:'Achari Karahi Half',category:'karahi',price:1050,desc:'Half serving of tangy achari chicken karahi.'},
  {name:'Chicken Karahi White Half',category:'karahi',price:1100,desc:'Creamy white chicken karahi for 1–2 people.'},
  {name:'Chicken Karahi Makhni Half',category:'karahi',price:1150,desc:'Buttery makhni chicken karahi in a smaller serving.'},
  {name:'Chicken White Makhni Karahi Full',category:'karahi',price:2200,desc:'Creamy white and makhni flavours in one rich karahi.'},
  {name:'Chicken White Makhni Karahi Half',category:'karahi',price:1300,desc:'Half serving of rich white makhni karahi.'},
  {name:'Chicken Ginger',category:'karahi',price:950,desc:'Chicken cooked with fresh ginger in a tomato-yogurt base.'},
  {name:'Chicken Jalfrezi',category:'karahi',price:950,desc:'Chicken with peppers and onions in a tangy gravy.'},
  {name:'Boneless Chicken Karahi Full',category:'karahi',price:2150,desc:'Tender boneless chicken in classic karahi gravy.'},
  {name:'Boneless Chicken Karahi Half',category:'karahi',price:1200,desc:'Half serving of classic boneless chicken karahi.'},
  {name:'Boneless White Karahi Full',category:'karahi',price:2250,desc:'Creamy boneless white karahi for sharing.'},
  {name:'Boneless White Karahi Half',category:'karahi',price:1200,desc:'Half creamy boneless white karahi.'},
  {name:'Boneless Achari Karahi Full',category:'karahi',price:2250,desc:'Boneless chicken with zesty achari spices.'},
  {name:'Boneless Achari Karahi Half',category:'karahi',price:1300,desc:'Half portion of boneless achari karahi.'},
  {name:'Boneless Makhni Karahi Full',category:'karahi',price:2300,desc:'Boneless chicken in smooth butter-tomato gravy.'},
  {name:'Boneless Makhni Karahi Half',category:'karahi',price:1250,desc:'Half serving of boneless makhni karahi.'},
  {name:'Boneless White Makhni Full',category:'karahi',price:2350,desc:'Premium creamy white makhni boneless karahi.'},
  {name:'Boneless White Makhni Half',category:'karahi',price:1300,desc:'Half premium white makhni boneless karahi.'},

  // Sides — 18 items on the live menu
  {name:'Salad',category:'sides',price:100,desc:'Crisp vegetables and a light dressing.'},
  {name:'Fries Large Family Pack',category:'sides',price:450,desc:'Large pack of crispy golden fries.'},
  {name:'Vegetable Soup Small',category:'sides',price:350,desc:'Fresh vegetables in a light comforting broth.'},
  {name:'Vegetable Soup Large',category:'sides',price:700,desc:'Large vegetable soup in a rich broth.'},
  {name:'Chicken Corn Soup Full',category:'sides',price:700,desc:'Chicken and sweet corn in a savoury broth.'},
  {name:'Chicken Corn Soup Half',category:'sides',price:400,desc:'Half bowl of chicken and sweet corn soup.'},
  {name:'Mirch N Spicy Soup Full',category:'sides',price:750,desc:'Our signature warm and zesty soup.'},
  {name:'Mirch N Spicy Soup Half',category:'sides',price:400,desc:'Half bowl of our signature soup.'},
  {name:'Mushroom Soup Small',category:'sides',price:350,desc:'Small creamy mushroom soup.'},
  {name:'Mushroom Soup Large',category:'sides',price:700,desc:'Large creamy mushroom soup.'},
  {name:'Kulcha',category:'sides',price:45,desc:'Soft, fluffy and lightly toasted kulcha.'},
  {name:'Chicken Naan',category:'sides',price:350,desc:'Naan filled with flavourful spiced chicken.'},
  {name:'Roti',category:'sides',price:20,desc:'Fresh whole-wheat roti.'},
  {name:'Naan',category:'sides',price:30,desc:'Soft tandoor-baked naan.'},
  {name:'Chapati',category:'sides',price:35,desc:'Soft whole-wheat chapati.'},

  // Special combos and special deals — 9 items total on the live menu
  {name:'Chinese Deal',category:'combos',price:3250,desc:'Almond rice, fried rice, beef chilli, chowmein and drinks.'},
  {name:'Deal 2',category:'deals',price:1100,desc:'Chicken tikka, parathas, fries and a cold drink.'},
  {name:'Deal 3',category:'deals',price:1200,desc:'Zinger burger, jumbo mayo roll, fries and a drink.'},
  {name:'Deal 4',category:'deals',price:1150,desc:'Malai boti, mayo roll, fries and a cold drink.'},
  {name:'Deal 5',category:'deals',price:1250,desc:'Zinger burger, Boom Boom roll, fries and cold drink.'},

  // Additional dishes listed on the restaurant's main menu page
  {name:'Margherita Pizza',category:'pizza',price:999,desc:'Tomato sauce, cheese and fresh basil.'},
  {name:'Veg Delight Pizza',category:'pizza',price:999,desc:'Peppers, olives, mushrooms and sweet corn.'},
  {name:'Pesto Cottage Cheese Pizza',category:'pizza',price:999,desc:'Cottage cheese, cherry tomatoes, olives and pesto.'},
  {name:'Grilled Beef Pizza',category:'pizza',price:999,desc:'Grilled beef, vegetables and cheese.'},
  {name:'Greek Lamb Pizza',category:'pizza',price:1500,desc:'Tomato sauce, lamb pieces and cheese.'},
  {name:'Chicken Tikka Pizza',category:'pizza',price:900,desc:'Chicken tikka, onion, capsicum and cheese.',popular:true},
  {name:'Alfredo Pasta',category:'pasta',price:999,desc:'Creamy Alfredo sauce and tender chicken.'},
  {name:'Chicken Arrabbiata Pasta',category:'pasta',price:999,desc:'Chicken pasta in a spicy tomato sauce.'},
  {name:'Creamy Tikka Pasta',category:'pasta',price:1050,desc:'Creamy pasta with a desi chicken tikka twist.'},
  {name:'Mexican Sandwich',category:'wraps',price:850,desc:'Loaded toasted sandwich with Mexican-style filling.'},
  {name:'Chicken Spicy Strips Wrap',category:'wraps',price:600,desc:'Spicy chicken strips, vegetables and sauce in a wrap.'},
  {name:'Loaded Fries',category:'wraps',price:600,desc:'Crispy fries loaded with chicken, cheese and sauces.'},
  {name:'Masala Fries',category:'wraps',price:300,desc:'Golden fries tossed in bold masala seasoning.'},
  {name:'Khajoor Badam Shake',category:'shakes',price:450,desc:'Creamy date and almond shake.'},
  {name:'Coconut Shake',category:'shakes',price:400,desc:'Chilled creamy coconut shake.'},
  {name:'Classic Lassi',category:'shakes',price:280,desc:'Traditional chilled yogurt lassi.'},
  {name:'Fresh Juice',category:'shakes',price:350,desc:'Fresh seasonal fruit juice.'},
  {name:'Ice Cream Shake',category:'shakes',price:450,desc:'Thick shake blended with ice cream.'},
  {name:'Mint Margarita Cooler',category:'shakes',price:250,desc:'Mint, lemon and crushed ice.'}
];

const rollBases = [
  ['Chicken',360],['Chicken Malai',400],['Beef',370],['Zinger',480],['Chicken Kabab',430],['Beef Kabab',430]
];
const rollStyles = [
  ['Roll',0,'A classic roll with fresh vegetables and signature sauce.'],
  ['Cheese Roll',40,'A classic roll finished with melted cheese.'],
  ['Spicy Roll',20,'A fiery roll made for spice lovers.'],
  ['Cheese & Spicy Roll',70,'A rich combination of melted cheese and spicy sauce.'],
  ['Jumbo Roll',90,'An extra-filled jumbo roll for bigger cravings.'],
  ['Jumbo Cheese Roll',130,'A jumbo roll loaded with melted cheese.'],
  ['Jumbo Spicy Roll',110,'A generously filled jumbo roll with extra heat.'],
  ['Jumbo Cheese & Spicy Roll',150,'A jumbo roll with cheese and bold spicy sauce.'],
  ['Boom Boom Roll',120,'Wrapped with our signature creamy Boom Boom sauce.'],
  ['Boom Boom Cheese Roll',160,'Boom Boom sauce and melted cheese in a soft paratha.'],
  ['Boom Boom Spicy Roll',150,'Signature Boom Boom sauce with an extra spicy kick.'],
  ['Boom Boom Cheese & Spicy Roll',180,'Cheese, spice and Boom Boom sauce in every bite.']
];
const generatedRolls = rollBases.flatMap(([base,price]) => rollStyles.map(([style,extra,desc]) => ({name:`${base} ${style}`,category:'rolls',price:price+extra,desc})));

const targets={bbq:10,drinks:8,rice:16,burgers:14,pizza:6,pasta:3,wraps:4,karahi:24,rolls:64,sides:18,shakes:6,combos:3,deals:6};
const allCandidates=[...featuredMenu,...extraMenu,...generatedRolls];
export const fullMenu=Object.entries(targets).flatMap(([category,count])=>{
  const unique=[]; const names=new Set();
  for(const item of allCandidates.filter(x=>x.category===category)){
    const key=item.name.toLowerCase().replace(/[^a-z0-9]/g,'');
    if(!names.has(key)){names.add(key);unique.push(item)}
  }
  return unique.slice(0,count);
});
