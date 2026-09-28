import type { LucideIcon } from 'lucide-react'
import {
  BadgeDollarSign,
  BookOpen,
  Boxes,
  CalendarCheck,
  Camera,
  ClipboardList,
  Droplets,
  Gamepad2,
  Gem,
  Guitar,
  HandCoins,
  Handshake,
  HeartHandshake,
  House,
  KeyRound,
  Laptop,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  Truck,
  Warehouse,
  Wrench,
} from 'lucide-react'

type Package = {
  name: string
  level: 'Light' | 'Medium' | 'Heavy'
  intensity: 1 | 2 | 3
  price: number
  bestFor: string
  signs: string[]
  featured?: boolean
}

export const packages: Package[] = [
  {
    name: 'Essential',
    level: 'Light',
    intensity: 1,
    price: 249,
    bestFor: '1-car garage or light clutter',
    signs: ['You can still walk through it', 'A few piles, boxes, and loose junk', 'Just needs a solid reset'],
  },
  {
    name: 'Full Reset',
    level: 'Medium',
    intensity: 2,
    price: 379,
    bestFor: '2-car garage or moderate clutter',
    featured: true,
    signs: ["Boxes stacked up and you can't park inside", 'Stuff piled on shelves and the floor', 'Needs organizing, not just clearing'],
  },
  {
    name: 'Total Transformation',
    level: 'Heavy',
    intensity: 3,
    price: 599,
    bestFor: '3-car garage or heavy clutter',
    signs: ['Packed wall to wall with years of stuff', 'Moving, selling, or an estate cleanout', 'Floor needs a real deep clean'],
  },
]

// `from` is the lowest package intensity that includes the feature.
export const packageFeatures: { label: string; from: 1 | 2 | 3 }[] = [
  { label: 'Walkthrough with you before we start', from: 1 },
  { label: 'Sort everything into keep, sell, and haul-away piles', from: 1 },
  { label: 'Cash offers on anything worth selling', from: 1 },
  { label: "Load up and haul away what you don't want", from: 1 },
  { label: 'Sweep and blow out the floor', from: 1 },
  { label: 'Everything you keep, put back neatly', from: 1 },
  { label: 'Organize into zones: tools, sports, seasonal, storage', from: 2 },
  { label: 'Wipe down shelves, cabinets, and surfaces', from: 2 },
  { label: 'Clear cobwebs, dust, and debris from walls and corners', from: 2 },
  { label: 'Dump and disposal fees included', from: 3 },
  { label: 'Floor pressure wash and degrease', from: 3 },
  { label: 'Oil and rust stain treatment', from: 3 },
  { label: 'Before-and-after photos of your garage', from: 3 },
]

const [essential, fullReset, total] = packages

export const floorCleaning = {
  sizes: [
    { label: '1-car garage', price: 179 },
    { label: '2-car garage', price: 229 },
    { label: '3-car garage', price: 279 },
  ],
  addOns: [
    { label: 'Oil and rust stain treatment', price: 49 },
    { label: 'Walls, shelves, and garage door wipe-down', price: 79 },
  ],
}

type Service = {
  icon: LucideIcon
  title: string
  priceLabel: string
  description: string
  points: string[]
  link: { href: string; label: string }
}

export const services: Service[] = [
  {
    icon: Boxes,
    title: 'Garage Cleanout',
    priceLabel: `From $${essential.price}`,
    description:
      'We clear out the clutter, sort what you want to keep, and organize everything so you can actually use your garage again.',
    points: [
      'Sort into keep, sell, and haul-away piles',
      'Everything you keep, put back neatly',
      'Three packages for any size garage',
    ],
    link: { href: '#pricing', label: 'See packages' },
  },
  {
    icon: HandCoins,
    title: 'We Buy Your Stuff',
    priceLabel: 'Free offers',
    description:
      "Got tools, electronics, or collectibles you don't need anymore? If it's worth selling, we'll make you an offer.",
    points: [
      'No-obligation offers',
      'Take the cash, or put it toward your cleanout',
      'We handle the pickup',
    ],
    link: { href: '#we-buy', label: 'See what we buy' },
  },
  {
    icon: Truck,
    title: 'Junk Removal',
    priceLabel: 'Priced by the load',
    description:
      "Anything you don't want, we haul away. No trips to the dump and no heavy lifting on your end.",
    points: [
      'We do all the lifting and loading',
      'Boxes, scrap, old furniture, and clutter',
      'Donated or recycled when possible',
    ],
    link: { href: '#quote', label: 'Get a quote' },
  },
  {
    icon: Droplets,
    title: 'Floor & Deep Cleaning',
    priceLabel: `From $${floorCleaning.sizes[0].price}`,
    description:
      "Once it's empty, we get it spotless: pressure washing, degreasing, and stain treatment for the whole floor.",
    points: [
      'Pressure wash and degrease',
      'Oil and rust stain treatment',
      'Walls, shelves, and door wipe-down',
    ],
    link: { href: '#floor-cleaning', label: 'See floor prices' },
  },
]

type Step = { icon: LucideIcon; title: string; description: string }

export const steps: Step[] = [
  {
    icon: ClipboardList,
    title: 'Request a free quote',
    description: 'Tell us about your garage in the form below. It takes about a minute.',
  },
  {
    icon: ReceiptText,
    title: 'Get your price upfront',
    description: "We'll follow up for a few photos, then give you a clear price before any work starts.",
  },
  {
    icon: Boxes,
    title: 'We get to work',
    description: 'We sort everything, make offers on your valuables, haul away the rest, and clean up.',
  },
  {
    icon: Sparkles,
    title: 'Enjoy your garage',
    description: 'Park in it, work in it, and actually use it again.',
  },
]

type Category = { icon: LucideIcon; name: string; examples: string }

export const buyCategories: Category[] = [
  { icon: Wrench, name: 'Tools', examples: 'Power tools, hand tool sets, tool chests' },
  { icon: Camera, name: 'Cameras', examples: 'Digital cameras, lenses, camera gear' },
  { icon: Laptop, name: 'Laptops & computers', examples: 'Laptops, desktops, monitors' },
  { icon: Smartphone, name: 'Phones & tablets', examples: 'Smartphones, tablets, smartwatches' },
  { icon: Gamepad2, name: 'Video games', examples: 'Consoles, games, controllers' },
  { icon: Guitar, name: 'Music gear', examples: 'Instruments, amps, audio equipment' },
  { icon: Gem, name: 'Collectibles', examples: 'Vintage items, figures, memorabilia' },
  { icon: Trophy, name: 'Sports cards', examples: 'Singles, sets, and graded cards' },
  { icon: BookOpen, name: 'Select books', examples: 'Collectible, signed, and in-demand titles' },
]

export const buyLooksFor = [
  'The simple test: could it be resold online?',
  'Electronics especially: laptops, desktops, phones, cameras, tablets',
  'Brand-name items in good, working condition (or worth something for parts)',
  'Most things worth roughly $10 to $2,000',
  'Chargers, cases, and accessories included when possible',
]

export const buyDoesNotBuy = [
  'Cars and other vehicles',
  'Fine jewelry and items worth more than about $2,000',
  'Cheap, low-value stuff — a $3 shirt or worn-out odds and ends',
  'Most everyday clothing (nice shoes or quality pieces? just ask)',
  'Anything stolen, counterfeit, or without clear ownership',
]

export const buySteps = [
  {
    title: "Show us what you've got",
    description: 'Point it out during your cleanout, or list it in the quote form.',
  },
  {
    title: 'Get a straightforward offer',
    description: "Based on condition and what similar items are actually selling for. No obligation.",
  },
  {
    title: 'Get paid',
    description: 'Take the cash, or put it toward your cleanout.',
  },
]

type Value = { icon: LucideIcon; title: string; description: string }

export const values: Value[] = [
  {
    icon: ReceiptText,
    title: 'Upfront pricing',
    description: "You'll know the price before we lift a thing. No surprise fees at the end.",
  },
  {
    icon: Handshake,
    title: 'One crew, four services',
    description: 'Cleanout, buyout, haul-away, and deep clean. No juggling three different companies.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Cash for your valuables',
    description: 'Anything worth selling gets a real offer, so your cleanout costs you less.',
  },
  {
    icon: ShieldCheck,
    title: 'Respect for your stuff',
    description: 'We treat your things and your home with care, and leave your garage cleaner than we found it.',
  },
]

export const perfectFor: { icon: LucideIcon; label: string }[] = [
  { icon: Boxes, label: 'Moving out or moving in' },
  { icon: House, label: 'Getting a home ready to sell' },
  { icon: KeyRound, label: 'Downsizing' },
  { icon: HeartHandshake, label: 'Estate cleanouts' },
  { icon: Warehouse, label: 'Finally parking inside again' },
  { icon: CalendarCheck, label: 'Spring and fall cleanups' },
]

export const faqs = [
  {
    question: 'How much does a garage cleanout cost?',
    answer: `Packages start at $${essential.price} for a 1-car garage or light clutter, $${fullReset.price} for a 2-car garage or moderate clutter, and $${total.price} for a 3-car garage or heavy clutter. Your exact price depends on your garage's size and how much we haul away, and you'll always get it before any work starts.`,
  },
  {
    question: 'Are dump fees included?',
    answer: `Yes in the ${total.name} package. For ${essential.name} and ${fullReset.name}, dump fees are passed along at cost, and they're included in the quote you get before we start.`,
  },
  {
    question: 'How do you decide what to offer for my stuff?',
    answer:
      "We look at each item's condition, brand, and what similar items are actually selling for right now, then make you a straightforward offer. There's no obligation. If you'd rather keep something, no problem.",
  },
  {
    question: 'Can I put the money toward my cleanout?',
    answer: 'Yes. You can take the cash, or have it taken off the price of your cleanout.',
  },
  {
    question: 'What happens to the stuff you haul away?',
    answer:
      "Anything with resale value, we'll offer to buy first. Usable items get donated or recycled whenever possible, and the rest is disposed of properly.",
  },
  {
    question: "Is there anything you can't take?",
    answer:
      "For safety reasons, we can't haul hazardous materials like paint, chemicals, fuel, propane tanks, or anything containing asbestos. Not sure about something? Just ask.",
  },
  {
    question: 'Do I need to be home?',
    answer:
      "We'll walk through the garage with you at the start so we know exactly what stays and what goes. After that, you don't need to stick around.",
  },
  {
    question: 'How long does a cleanout take?',
    answer:
      "It depends on the size of your garage and how much is in it. We'll give you a time estimate along with your quote.",
  },
  {
    question: 'Do you clean the floor too?',
    answer: `Yes. A floor pressure wash and degrease is included in the ${total.name} package, or you can book it on its own starting at $${floorCleaning.sizes[0].price}.`,
  },
  {
    question: 'What areas do you serve?',
    answer:
      "We're a local service. Enter your ZIP code in the quote form and we'll confirm we can get to you.",
  },
]

export const serviceOptions = ['Garage cleanout', 'Sell us items', 'Junk removal', 'Floor & deep cleaning']
export const garageSizes = ['1-car garage', '2-car garage', '3-car or larger', 'Not sure']
export const timeframes = ['As soon as possible', 'Within 2 weeks', 'Within a month', 'Just getting prices']
