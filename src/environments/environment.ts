// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/firestore-grafica/us-central1',
  firebase: {
    apiKey: 'AIzaSyDp7dN73ICrxNe8LFrQR_Xl71jIc1uoRmQ',
    authDomain: 'firestore-grafica.firebaseapp.com',
    databaseURL: 'https://firestore-grafica.firebaseio.com',
    projectId: 'firestore-grafica',
    storageBucket: 'firestore-grafica.appspot.com',
    messagingSenderId: '66843363918',
    appId: '1:66843363918:web:1eb42e48ff340b2c5d911f'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
