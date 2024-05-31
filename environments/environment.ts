// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { AngularFireModule } from '@angular/fire/compat';
import { environment as env } from 'src/environments/environment';

// Explicitly specify type of environment object


// Now you can use environment.firebase without TypeScript errors

export const environment = {
  production: false,
  apiKey: "AIzaSyDaBsLM3Lo_Y-XFuJg4PerKhnskr9C6erk",
  authDomain: "project-23b43.firebaseapp.com",
  projectId: "project-23b43",
  storageBucket: "project-23b43.appspot.com",
  messagingSenderId: "324191553647",
  appId: "1:324191553647:web:5eeae990259246443c259a"
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
