/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */

import {environment} from '../environments/environment';

const ConfigDevelopment = {
  appName: 'app_name',
  endPoints: {
    api:  'https://jsonplaceholder.typicode.com'
  }
};

const ConfigProduction = {
  appName: 'app_name',
  endPoints: {
    api:  'https://jsonplaceholder.typicode.com'
  }
};

export const ApplicationConfig = environment.production ? ConfigProduction : ConfigDevelopment;
