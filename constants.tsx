
import { Driver, Track } from './types';

export const F1_LOGO_URL = "https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png";

export const DRIVERS: Driver[] = [
  { id: 'piastri', firstName: 'Oscar', lastName: 'Piastri', team: 'McLaren', number: 81, nationality: '🇦🇺', color: '#FF8700', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/piastri.jpg.transform/2col-retina/image.jpg' },
  { id: 'norris', firstName: 'Lando', lastName: 'Norris', team: 'McLaren', number: 4, nationality: '🇬🇧', color: '#FF8700', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/norris.jpg.transform/2col-retina/image.jpg' },
  { id: 'russell', firstName: 'George', lastName: 'Russell', team: 'Mercedes', number: 63, nationality: '🇬🇧', color: '#27F4D2', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/russell.jpg.transform/2col-retina/image.jpg' },
  { id: 'antonelli', firstName: 'Kimi', lastName: 'Antonelli', team: 'Mercedes', number: 12, nationality: '🇮🇹', color: '#27F4D2', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2025Drivers/antonelli.jpg.transform/2col-retina/image.jpg' },
  { id: 'verstappen', firstName: 'Max', lastName: 'Verstappen', team: 'Red Bull Racing', number: 1, nationality: '🇳🇱', color: '#3671C6', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/verstappen.jpg.transform/2col-retina/image.jpg' },
  { id: 'tsunoda', firstName: 'Yuki', lastName: 'Tsunoda', team: 'Red Bull Racing', number: 22, nationality: '🇯🇵', color: '#3671C6', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/tsunoda.jpg.transform/2col-retina/image.jpg' },
  { id: 'leclerc', firstName: 'Charles', lastName: 'Leclerc', team: 'Ferrari', number: 16, nationality: '🇲🇨', color: '#E80020', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/leclerc.jpg.transform/2col-retina/image.jpg' },
  { id: 'hamilton', firstName: 'Lewis', lastName: 'Hamilton', team: 'Ferrari', number: 44, nationality: '🇬🇧', color: '#E80020', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hamilton.jpg.transform/2col-retina/image.jpg' },
  { id: 'albon', firstName: 'Alexander', lastName: 'Albon', team: 'Williams', number: 23, nationality: '🇹🇭', color: '#64C4FF', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/albon.jpg.transform/2col-retina/image.jpg' },
  { id: 'sainz', firstName: 'Carlos', lastName: 'Sainz', team: 'Williams', number: 55, nationality: '🇪🇸', color: '#64C4FF', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/sainz.jpg.transform/2col-retina/image.jpg' },
  { id: 'lawson', firstName: 'Liam', lastName: 'Lawson', team: 'Racing Bulls', number: 30, nationality: '🇳🇿', color: '#6692FF', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/lawson.jpg.transform/2col-retina/image.jpg' },
  { id: 'hadjar', firstName: 'Isack', lastName: 'Hadjar', team: 'Racing Bulls', number: 6, nationality: '🇫🇷', color: '#6692FF', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2025Drivers/hadjar.jpg.transform/2col-retina/image.jpg' },
  { id: 'stroll', firstName: 'Lance', lastName: 'Stroll', team: 'Aston Martin', number: 18, nationality: '🇨🇦', color: '#229971', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/stroll.jpg.transform/2col-retina/image.jpg' },
  { id: 'alonso', firstName: 'Fernando', lastName: 'Alonso', team: 'Aston Martin', number: 14, nationality: '🇪🇸', color: '#229971', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/alonso.jpg.transform/2col-retina/image.jpg' },
  { id: 'ocon', firstName: 'Esteban', lastName: 'Ocon', team: 'Haas F1 Team', number: 31, nationality: '🇫🇷', color: '#B6BABD', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/ocon.jpg.transform/2col-retina/image.jpg' },
  { id: 'bearman', firstName: 'Oliver', lastName: 'Bearman', team: 'Haas F1 Team', number: 87, nationality: '🇬🇧', color: '#B6BABD', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/bearman.jpg.transform/2col-retina/image.jpg' },
  { id: 'hulkenberg', firstName: 'Nico', lastName: 'Hulkenberg', team: 'Kick Sauber', number: 27, nationality: '🇩🇪', color: '#52E252', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hulkenberg.jpg.transform/2col-retina/image.jpg' },
  { id: 'bortoleto', firstName: 'Gabriel', lastName: 'Bortoleto', team: 'Kick Sauber', number: 5, nationality: '🇧🇷', color: '#52E252', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2025Drivers/bortoleto.jpg.transform/2col-retina/image.jpg' },
  { id: 'gasly', firstName: 'Pierre', lastName: 'Gasly', team: 'Alpine', number: 10, nationality: '🇫🇷', color: '#0093CC', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/gasly.jpg.transform/2col-retina/image.jpg' },
  { id: 'colapinto', firstName: 'Franco', lastName: 'Colapinto', team: 'Alpine', number: 43, nationality: '🇦🇷', color: '#0093CC', image: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/colapinto.jpg.transform/2col-retina/image.jpg' },
];

export const TRACKS: Track[] = [
  { id: 1, round: 1, name: "Australia", country: "Melbourne", flag: "🇦🇺", month: "MAR", dates: "06-08" },
  { id: 2, round: 2, name: "China", country: "Shanghai", flag: "🇨🇳", month: "MAR", dates: "13-15" },
  { id: 3, round: 3, name: "Japan", country: "Suzuka", flag: "🇯🇵", month: "MAR", dates: "27-29" },
  { id: 4, round: 4, name: "Bahrain", country: "Sakhir", flag: "🇧🇭", month: "APR", dates: "10-12" },
  { id: 5, round: 5, name: "Saudi Arabia", country: "Jeddah", flag: "🇸🇦", month: "APR", dates: "17-19" },
  { id: 6, round: 6, name: "Miami", country: "Miami", flag: "🇺🇸", month: "MAY", dates: "01-03" },
  { id: 7, round: 7, name: "Canada", country: "Montreal", flag: "🇨🇦", month: "MAY", dates: "22-24" },
  { id: 8, round: 8, name: "Monaco", country: "Monaco", flag: "🇲🇨", month: "JUN", dates: "05-07" },
  { id: 9, round: 9, name: "Spain", country: "Barcelona", flag: "🇪🇸", month: "JUN", dates: "12-14" },
  { id: 10, round: 10, name: "Austria", country: "Spielberg", flag: "🇦🇹", month: "JUN", dates: "26-28" },
  { id: 11, round: 11, name: "Great Britain", country: "Silverstone", flag: "🇬🇧", month: "JUL", dates: "03-05" },
  { id: 12, round: 12, name: "Belgium", country: "Spa-Francorchamps", flag: "🇧🇪", month: "JUL", dates: "17-19" },
  { id: 13, round: 13, name: "Hungary", country: "Budapest", flag: "🇭🇺", month: "JUL", dates: "24-26" },
  { id: 14, round: 14, name: "Netherlands", country: "Zandvoort", flag: "🇳🇱", month: "AUG", dates: "21-23" },
  { id: 15, round: 15, name: "Italy", country: "Monza", flag: "🇮🇹", month: "SEP", dates: "04-06" },
  { id: 16, round: 16, name: "Spain", country: "Madrid", flag: "🇪🇸", month: "SEP", dates: "11-13" },
  { id: 17, round: 17, name: "Azerbaijan", country: "Baku", flag: "🇦🇿", month: "SEP", dates: "24-26" },
  { id: 18, round: 18, name: "Singapore", country: "Singapore", flag: "🇸🇬", month: "OCT", dates: "09-11" },
  { id: 19, round: 19, name: "United States", country: "Austin", flag: "🇺🇸", month: "OCT", dates: "23-25" },
  { id: 20, round: 20, name: "Mexico", country: "Mexico City", flag: "🇲🇽", month: "OCT", dates: "30-01" },
  { id: 21, round: 21, name: "Brazil", country: "São Paulo", flag: "🇧🇷", month: "NOV", dates: "06-08" },
  { id: 22, round: 22, name: "Las Vegas", country: "Las Vegas", flag: "🇺🇸", month: "NOV", dates: "19-21" },
  { id: 23, round: 23, name: "Qatar", country: "Lusail", flag: "🇶🇦", month: "NOV", dates: "27-29" },
  { id: 24, round: 24, name: "Abu Dhabi", country: "Yas Island", flag: "🇦🇪", month: "DEC", dates: "04-06" },
];

export const WILDCARDS = [
  "Car Damage (Simulation)",
  "ABS Off",
  "Traction Control Off",
  "Brake Assist Off",
  "Manual Gears Only",
  "Cockpit View Only",
  "Steering Assist Off",
  "Manual DRS",
  "Manual ERS",
  "Strict Track Limits",
  "Dynamic Weather",
  "No Racing Line"
];
