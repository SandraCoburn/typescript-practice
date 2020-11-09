import { User } from './User';
// import { Company } from './Company';
// import { googlemaps } from 'googlemaps';
import { CustomMap } from './CustomMap';

const user = new User();
// pass the class name as an argument so if you have more instances of cCustomMap you'll use other classnames
const customMap = new CustomMap('map');
customMap.addUserMarker(user);
