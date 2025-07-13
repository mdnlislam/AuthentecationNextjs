export const HOME_PAGE = "/";
export const PROFILE_PAGE = "/profile";
export const SETTING_PAGE = "/settings";
export const LOGIN_PAGE = "/login";
export const REGISTER_PAGE = "/register";

export const menuItem = [
  { label: "Home", href: HOME_PAGE },
  { label: "Profile", href: PROFILE_PAGE },
  { label: "Settings", href: SETTING_PAGE },
  { label: "Login", href: LOGIN_PAGE },
  { label: "Register", href: REGISTER_PAGE },
];

export const authPagesUrl = [LOGIN_PAGE, REGISTER_PAGE];

export const protectedPagesUrl = [PROFILE_PAGE, SETTING_PAGE];
