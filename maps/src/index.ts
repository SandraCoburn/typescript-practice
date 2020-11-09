import { User } from './User';
import { Company } from './Company';

import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
// pass the class name as an argument so if you have more instances of cCustomMap you'll use other classnames
const customMap = new CustomMap('map');
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
