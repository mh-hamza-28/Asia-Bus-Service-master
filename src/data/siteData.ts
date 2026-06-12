import {
  BriefcaseBusiness,
  Bus,
  CalendarCheck,
  Clock3,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Plane,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Star,
  Phone,
  Thermometer,
  Headphones,
} from 'lucide-react';
import heroImage from '../assets/images/asia-bus-hero.jpeg';
import memoryImage from '../assets/images/asia-bus-memory.jpeg';
import roadImage from '../assets/images/asia-bus-road.jpeg';
import premiumImage from '../assets/images/asia-bus-premium.jpeg';
import corporateImage from '../assets/images/generated/corporate-travel.svg';
import schoolImage from '../assets/images/generated/school-transportation.svg';
import weddingImage from '../assets/images/generated/wedding-transportation.svg';
import airportImage from '../assets/images/generated/airport-transfers.svg';
import pilgrimageImage from '../assets/images/generated/pilgrimage-tours.svg';
import tourImage from '../assets/images/generated/tour-packages.svg';
import employeeImage from '../assets/images/generated/employee-transportation.svg';
import outstationImage from '../assets/images/generated/outstation-trips.svg';

const currentYear = new Date().getFullYear();
const establishedYear = 1965;
const yearsInBusiness = currentYear - establishedYear;

export const company = {
  name: 'Asia Bus Service',
  phone: '+91 9559222275',
  phoneHref: 'tel:+919559222275',
  whatsappHref: 'https://wa.me/919559222275',
  email: 'asiabusservice081@gmail.com',
  address: 'Opp. Koneshwar Mandir, Koneshwar Chauraha, Chowk, Lucknow-226003, Uttar Pradesh',
  hours: 'Open 24 Hours, All Days',
  yearsInBusiness,
  establishedYear,
  socials: {
    instagram: 'https://www.instagram.com/asiabusserviceofficial/',
    facebook: 'https://www.facebook.com/asiabusservice',
    justdial: 'https://www.justdial.com/Lucknow/Asia-Bus-Service-Opp-Koneshwar-Mandir-Lucknow-Chowk/0522PX522-X522-140623165124-E7J3_BZDET',
  },
};

export const images = {
  hero: heroImage,
  memory: memoryImage,
  road: roadImage,
  premium: premiumImage,
};

export const navLinks = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Reviews', '#reviews'],
  ['Book Now', '#book-now'],
  ['Contact', '#contact'],
] as const;

export const services = [
  { title: 'Tourist Bus Rental', icon: Route, image: tourImage, copy: 'Luxury AC and non-AC tourist buses for family holidays, group tours, and outstation journeys. Routes covering Mumbai to Goa, Bangalore to Ooty, Delhi to Jaipur and more across India.', price: 15000, priceLabel: '₹15,000', destination: 'All India' },
  { title: 'Corporate Travel', icon: BriefcaseBusiness, image: corporateImage, copy: 'Executive transportation for conferences, team outings, and daily business commutes. Dedicated buses with professional drivers for companies across Lucknow and Uttar Pradesh.', price: 20000, priceLabel: '₹20,000', destination: 'Lucknow & UP' },
  { title: 'Wedding Transportation', icon: HeartHandshake, image: weddingImage, copy: 'Elegant guest transfers and baraat arrangements. Multi-bus coordination for large weddings with decorated, comfortable coaches ensuring every guest travels in style.', price: 25000, priceLabel: '₹25,000', destination: 'All UP' },
  { title: 'School & College Trips', icon: GraduationCap, image: schoolImage, copy: 'Safe, disciplined buses for educational excursions, college fests, and institutional transport. Experienced drivers trained for student group travel across all destinations.', price: 10000, priceLabel: '₹10,000', destination: 'All India' },
  { title: 'Airport & Railway Transfers', icon: Plane, image: airportImage, copy: 'Seamless pickup and drop services for Chaudhary Charan Singh Airport and Lucknow Junction. Timely, reliable transfers for groups of any size, available round the clock.', price: 5000, priceLabel: '₹5,000', destination: 'Lucknow' },
  { title: 'Pilgrimage Tours', icon: Sparkles, image: pilgrimageImage, copy: 'Comfortable long-distance devotional journeys to Varanasi, Ayodhya, Prayagraj, Haridwar and other sacred destinations. Special packages for senior citizen groups.', price: 12000, priceLabel: '₹12,000', destination: 'UP & North India' },
  { title: 'Employee Transport', icon: Users, image: employeeImage, copy: 'Dependable daily staff movement for offices, factories, IT parks, and institutions. Fixed-route services with GPS tracking and punctual scheduling for workforce commutes.', price: 8000, priceLabel: '₹8,000', destination: 'Lucknow City' },
  { title: 'Outstation & Private Hire', icon: MapPin, image: outstationImage, copy: 'Private bus rental for inter-city travel covering Lucknow, Kanpur, Agra, Varanasi, Prayagraj, Gorakhpur, and all major destinations across Uttar Pradesh and neighbouring states.', price: 18000, priceLabel: '₹18,000', destination: 'All India' },
];

export const fleet = [
  { name: 'Luxury Coach', capacity: '45-49 Seater', type: 'AC / Non AC', image: roadImage, amenities: ['Pushback seats', 'Ambient lighting', 'Tour permit'] },
  { name: 'Volvo Coach', capacity: '49 Seater', type: 'AC', image: heroImage, amenities: ['Premium suspension', 'Entertainment', 'Spacious cabin'] },
  { name: 'Tourist Coach', capacity: '45 Seater', type: 'AC / Non AC', image: memoryImage, amenities: ['Curtains', 'Clean interiors', 'Luggage support'] },
  { name: 'Mini Bus', capacity: '20-32 Seater', type: 'AC / Non AC', image: premiumImage, amenities: ['City friendly', 'Family trips', 'Airport runs'] },
  { name: 'Sleeper Bus', capacity: 'Long Route', type: 'AC', image: roadImage, amenities: ['Rest comfort', 'Night travel', 'Private hire'] },
  { name: 'Corporate Bus', capacity: 'Staff Routes', type: 'AC / Non AC', image: heroImage, amenities: ['Daily operations', 'GPS ready', 'On-time routes'] },
];

export const features = [
  { title: 'Experienced Drivers', icon: ShieldCheck, copy: 'Professional, licensed drivers with deep route knowledge across Uttar Pradesh and all-India destinations.' },
  { title: 'GPS Tracking', icon: MapPin, copy: 'Real-time vehicle tracking for complete trip visibility and coordination between groups.' },
  { title: 'Affordable Pricing', icon: Wallet, copy: 'Transparent rental plans with no hidden charges. Competitive rates for every journey size and budget.' },
  { title: 'On-Time Service', icon: Clock3, copy: 'Punctual arrivals for events, offices, and tours. We value your time as much as you do.' },
  { title: 'Clean Buses', icon: Sparkles, copy: 'Deep-cleaned interiors, fresh linens, and sanitised cabins before every single booking.' },
  { title: 'Safe Travel', icon: ShieldCheck, copy: 'Safety-first operations with regular vehicle inspections and speed-governed driving.' },
  { title: 'Comfortable Seating', icon: Bus, copy: 'Spacious pushback seats with ample legroom built for long-route comfort across all coaches.' },
  { title: '24/7 Support', icon: Headphones, copy: 'Round-the-clock phone and WhatsApp support whenever your journey needs attention.' },
  { title: 'AC & Non-AC Options', icon: Thermometer, copy: 'Choose climate-controlled AC coaches or budget-friendly non-AC buses based on your needs.' },
  { title: 'All India Permit', icon: Star, copy: 'National permit buses that can travel across state borders for pan-India tour packages and trips.' },
];

export const trustStats = [
  { value: yearsInBusiness, suffix: '+', label: 'Years in Business' },
  { value: 5000, suffix: '+', label: 'Happy Customers' },
  { value: 10000, suffix: '+', label: 'Successful Trips' },
  { value: 24, suffix: '/7', label: 'Customer Support' },
];

export const testimonials = [
  { name: 'Rajesh Sharma', role: 'Corporate Trip', quote: 'Excellent service for our company outing. Professional drivers and well-maintained buses.' },
  { name: 'Priya Gupta', role: 'Wedding Transport', quote: 'Made our wedding logistics seamless. All guests were comfortable and on time.' },
  { name: 'Amit Verma', role: 'School Excursion', quote: 'Safe, punctual and reliable. The kids loved the journey. Highly recommended for school trips.' },
];
