export interface Roles { 
  screener?: boolean;
  nurse?: boolean;
  admin?: boolean;
  giveaway?: boolean; 
  tester?: boolean;
  vaccine?: boolean;
  covidTester?: boolean;
  infractionReviewer?: boolean;
}

export interface User {
  uid: string;
  email: string;
  roles: Roles;
  photoURL?: string;
  displayName?: string;
  myCustomData?: string;
  emailVerified: boolean;
}