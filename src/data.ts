import { ExclusiveDish, MenuItem, Chef, Testimonial, BlogPost } from './types';
import { IMAGES } from './images';

export const EXCLUSIVE_DISHES: ExclusiveDish[] = [
  {
    id: 'dish-1',
    name: 'Indian Burger',
    description: "Was brean shed moveth day yielding tree yielding day were female and",
    image: IMAGES.exclusive.indianBurger,
    price: '$24.00',
    category: 'Fast Gourmet'
  },
  {
    id: 'dish-2',
    name: 'Cremy Noodles',
    description: "Was brean shed moveth day yielding tree yielding day were female and",
    image: IMAGES.exclusive.creamyNoodles,
    price: '$28.00',
    category: 'Handmade Pasta'
  },
  {
    id: 'dish-3',
    name: 'Honey Meat',
    description: "Was brean shed moveth day yielding tree yielding day were female and",
    image: IMAGES.exclusive.honeyMeat,
    price: '$38.00',
    category: 'Wood-fired Roast'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Special (as in the screenshot)
  {
    id: 'menu-1',
    name: 'Pork Sandwich',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: IMAGES.menu.porkSandwich,
    category: 'Special'
  },
  {
    id: 'menu-2',
    name: 'Easter Delight',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: IMAGES.menu.easterDelight,
    category: 'Special'
  },
  {
    id: 'menu-3',
    name: 'Roasted Marrow',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: IMAGES.menu.roastedMarrow,
    category: 'Special'
  },
  {
    id: 'menu-4',
    name: 'Tiener Schnitze',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: IMAGES.menu.tienerSchnitze,
    category: 'Special'
  },
  {
    id: 'menu-5',
    name: 'Summer Cooking',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: IMAGES.menu.summerCooking,
    category: 'Special'
  },
  {
    id: 'menu-6',
    name: 'Chicken Roast',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: IMAGES.menu.chickenRoast,
    category: 'Special'
  },
  // Breakfast items
  {
    id: 'menu-b1',
    name: 'French Brioche Toast',
    description: "Soft artisanal brioche, organic berries, maple glaze",
    price: '$22.00',
    image: IMAGES.menu.frenchToast,
    category: 'Breakfast'
  },
  {
    id: 'menu-b2',
    name: 'Avocado Poached Eggs',
    description: "Toasted sourdough, ripe Haas avocado, poached free-range eggs",
    price: '$26.00',
    image: IMAGES.menu.avocadoPoachedEggs,
    category: 'Breakfast'
  },
  {
    id: 'menu-b3',
    name: 'Easter Delight',
    description: "Fluffy buttermilk pancake stack, wild blackberry reduction",
    price: '$24.00',
    image: IMAGES.menu.pancakeDelight,
    category: 'Breakfast'
  },
  {
    id: 'menu-b4',
    name: 'Salmon Breakfast Croissant',
    description: "Smoked Atlantic salmon, whipped dill cream, capers",
    price: '$29.00',
    image: IMAGES.menu.salmonCroissant,
    category: 'Breakfast'
  },
  // Launch items (Lunch)
  {
    id: 'menu-l1',
    name: 'Pork Sandwich',
    description: "Slow-roasted pulled pork, homemade brioche, apple slaw",
    price: '$34.00',
    image: IMAGES.menu.lunchPorkSandwich,
    category: 'Launch'
  },
  {
    id: 'menu-l2',
    name: 'Tiener Schnitze',
    description: "Crisp breaded cutlet, herb butter, potato purée",
    price: '$38.00',
    image: IMAGES.menu.lunchSchnitzel,
    category: 'Launch'
  },
  {
    id: 'menu-l3',
    name: 'Indian Burger Royale',
    description: "Double smashed wagyu patty, aged cheddar, truffle aioli",
    price: '$32.00',
    image: IMAGES.menu.burgerRoyale,
    category: 'Launch'
  },
  {
    id: 'menu-l4',
    name: 'Creamy Tagliatelle',
    description: "Parmigiano-Reggiano cream sauce, garden herbs, cracked pepper",
    price: '$30.00',
    image: IMAGES.menu.creamyTagliatelle,
    category: 'Launch'
  },
  // Dinner items
  {
    id: 'menu-d1',
    name: 'Roasted Marrow Deluxe',
    description: "Herb-crusted bone marrow, grilled baguette, parsley relish",
    price: '$48.00',
    image: IMAGES.menu.dinnerMarrow,
    category: 'Dinner'
  },
  {
    id: 'menu-d2',
    name: 'Summer Cooking Ribs',
    description: "Prime bone-in ribs, bourbon glaze, grilled heirloom vegetables",
    price: '$52.00',
    image: IMAGES.menu.summerRibs,
    category: 'Dinner'
  },
  {
    id: 'menu-d3',
    name: 'Chicken Roast Grand Cru',
    description: "Free-range roasted chicken, charred bell peppers, pan jus",
    price: '$42.00',
    image: IMAGES.menu.dinnerChickenRoast,
    category: 'Dinner'
  },
  {
    id: 'menu-d4',
    name: 'Atlantic Salmon Fillet',
    description: "Crispy skin salmon, lemon dill emulsion, asparagus spears",
    price: '$46.00',
    image: IMAGES.menu.atlanticSalmon,
    category: 'Dinner'
  },
  // Sneaks (Snacks)
  {
    id: 'menu-s1',
    name: 'Truffle Potato Crisps',
    description: "Thin hand-cut russet potatoes, summer black truffle, sea salt",
    price: '$18.00',
    image: IMAGES.menu.truffleCrisps,
    category: 'Sneaks'
  },
  {
    id: 'menu-s2',
    name: 'Bespoke Charcuterie',
    description: "Cured meats, aged artisanal cheeses, pickled mustard seeds",
    price: '$36.00',
    image: IMAGES.menu.charcuterie,
    category: 'Sneaks'
  },
  {
    id: 'menu-s3',
    name: 'Garlic Butter Crostini',
    description: "Roasted garlic purée, whipped ricotta, garden rosemary",
    price: '$16.00',
    image: IMAGES.menu.garlicCrostini,
    category: 'Sneaks'
  }
];

export const CHEFS: Chef[] = [
  {
    id: 'chef-1',
    name: 'Adam Billiard',
    role: 'Chef Master',
    image: IMAGES.chefs.adamBilliard,
    bio: 'Specializing in wood-fired grills and heritage roast techniques with over 15 years in Michelin culinary kitchens.',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      behance: '#'
    }
  },
  {
    id: 'chef-2',
    name: 'Fred Macyard',
    role: 'Chef Master',
    image: IMAGES.chefs.fredMacyard,
    bio: 'Master of contemporary artisanal burger creation and Italian pasta craftsmanship with farm-fresh organic produce.',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      behance: '#'
    }
  },
  {
    id: 'chef-3',
    name: 'Justin Stuard',
    role: 'Chef Master',
    image: IMAGES.chefs.justinStuard,
    bio: 'Executive sushi and seafood master curator renowned for exquisite seafood grilling and delicate flavor harmony.',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      behance: '#'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mosan Cameron',
    role: 'Executive of fedex',
    avatar: IMAGES.testimonials.avatar1,
    quote: "Also made from. Give may saying meat there from heaven it lights face had is gathered god dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place"
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'Director at Creative Arts',
    avatar: IMAGES.testimonials.avatar2,
    quote: "The culinary experience at Savora exceeds every expectation. The Honey Meat and freshly prepared pasta transformed our anniversary dinner into an unforgettable celebration of taste and ambiance."
  },
  {
    id: 'test-3',
    name: 'David Reynolds',
    role: 'Managing Partner, Apex Capital',
    avatar: IMAGES.testimonials.avatar3,
    quote: "Remarkable hospitality paired with exceptional wine curation. From the roasted marrow to the wood-fired steak, every course showcases true craftsmanship and pure culinary passion."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Adama kind deep gatherin first over fter his great',
    date: 'Apr 06, 2019',
    tag: '# Food News',
    image: IMAGES.blogs.post1,
    summary: 'Discover the secrets behind golden sourdough pancakes and summer berries reduction from our pastry chef.'
  },
  {
    id: 'blog-2',
    title: 'Adama kind deep gatherin first over fter his great',
    date: 'Apr 06, 2019',
    tag: '# Food News',
    image: IMAGES.blogs.post2,
    summary: 'How artisanal dry-aging and secret spicy chili marinade craft the signature flavor of our Indian Burger.'
  },
  {
    id: 'blog-3',
    title: 'Adama kind deep gatherin first over fter his great',
    date: 'Apr 06, 2019',
    tag: '# Food News',
    image: IMAGES.blogs.post3,
    summary: 'A journey through edible floral garnishes, candied citrus zest, and classic European pastry techniques.'
  }
];
