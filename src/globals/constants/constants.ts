export const signinText = {
  Heading: 'Sign-in',
  subHeading: 'Welcome back! ',
  textLog: 'Want to create an account?',
  textLink: 'Signup',
  placeHolders: {
    email: 'Enter Email',
    password: 'Enter password',
  },
  submitButton: 'Submit',
  validation: {
    alertEmail: 'Enter a valid email address',
    alertPassword:
      'Password must include at least one special character: #, $, *, or %',
    alertPasswordLength: 'Password must be at least 6 characters long',
  },
  loading: "loading...",
  loginFailed: 'Login failed'
};

export const signupText = {
  Heading: 'Sign-up',
  subHeading: 'Create your account...',
  textLog: 'Already have an account?',
  textLink: 'Login',
  radio: {
    male: 'Male',
    female: 'Female',
    other: 'Other',
  },
  placeHolders: {
    name: 'Name',
    email: 'Email',
    number: 'Number',
    place: 'Place',
    gender: 'Gender',
    password: 'Password',
  },
  submitButton: 'Submit',
  validation: {
    nameLength: 'Name must be at least 3 characters long',
    validEmail: 'Enter a valid email address',
    validNumber: 'Enter a valid 10-digit phone number',
    specialCharPassword: 'Password must include at least one special character',
    passwordLength: 'Password must be at least 6 characters long',
    placeLength: 'Place must be at least 3 characters long',
  },
  signUpFailedAlert: 'Signup Failed',
  signingUp: 'Signing Up...'
};

export const profileText = {
  alertLogoutSelect: 'Logged out',
  alertLogoutConfirm: 'Are you sure, you want to log out?',
  notAvailable: 'N/A',
  Heading: 'Your Profile',
  logoutButton: 'Logout',
  logOutFailed: 'Logout Failed',
  selectImage: 'Select Image',
  chooseOption: 'Choose an option'
};

export const favoriteFoodsText = {
  loadingFavs: "Loading favorites…"
}

export const alertText = {
  unfilledDetails: 'Please fill all fields',
};

export const columnWrapperStyles = { justifyContent: 'space-between' };

export const homeText = {
  Heading1: 'Still Hungry?',
  Heading2: 'We got you served!',
  placeholderSearch: 'Search',
  Heading3: "Get the best on Foody's",
};

export const navbarText = {
  Heading: "Welcome to Foody's!",
};

export const addFoodText = {
  cameraPermission: "Camera Permission",
  permissionMessage: "App needs access to your camera",
  ok: "OK",
  cancel: "Cancel",
  alertError: 'Error',
  alertFillAllFields: "Please Fill All Fields.",
  alertEntervalidRating: 'Please enter a rating between 0 and 5',
  success: 'Success',
  foodAdded: 'Food added successfully!',
  placeHolders: {
    title: "Title",
    rating: "Rating (0-5)",
    ingredients: "Ingredients (comma separated)",
    steps: "Steps (new line separated)",
  },
  imageHandling: {
    chooseOption: 'Choose an option',
    selectImage: 'Select Image',
    camera: 'Camera',
    gallery: 'Gallery',
    cancel: 'Cancel',
  }
}

export const theme = {
  boxColorOverPage: '#F8F8F8',
  inputBoxColor: '#C0C0C0',
  themePrimaryOrange: '#FF7722',
  themeSecondaryBlack: '#2c3e50',
  choiceThemeRadio: '#007BFF',
  homeTheme: '#FDF6EC',
  starRating: '#fbbf24',
  cardColor: 'white',
  vegColor: 'green',
  nonvegColor: '#dc3545',
  activeVeg: '#e6ffe6',
  activeNonVeg: '#ffe6e6',
  whiteText: '#fff',
  shadowColor: '#888',
  greenDot: '🟢',
  redDot: '🔴',
  color000: '#000',
  color333: '#333',
  color444: '#444',
  color555: '#555',
  buttonBG: 'rgba(0,0,0,0.4)',
};

export const stringConstants = {
  veg: 'Veg',
  nonVeg: 'Non-Veg',
};

export const gradientColors = ['#fff1cc', '#fa9420', '#dd6a00'];

export const HeadingColorGradient = ['#fdbb2d', '#fa9420', '#e96443'];

export const imageBgGradient = ['rgba(0,0,0,0.4)', 'transparent'];

export const vegColor = 'green';
export const nonvegColor = '#dc3545';
export const allColor = '#ffff08'

export const cancel = 'cancel';
export const ok = 'ok';

export const color000 = '#000';
export const color333 = '#333';
export const color444 = '#444';
export const color555 = '#555';
export const color999 = '#999';

export const white = 'white';

export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const numberRegex = /^\d{10}$/;
export const namePlaceRegex = /^[a-zA-Z\s]{3,}$/;
export const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
