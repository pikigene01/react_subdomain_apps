export const apihost = "http://127.0.0.1:8000/";
const riskcurb_prefix = "api/";
export const sockethost = "http://localhost:5000";

export const registerapi = `${riskcurb_prefix}register`;
export const loginapi = `${riskcurb_prefix}login`;
export const changepasswordapi = `${riskcurb_prefix}changePassword/user`;
export const createAppUrl = `${riskcurb_prefix}create/user/app`;
export const getDataSites = `${riskcurb_prefix}get/data/app`;
export const getSubscriptions = `${riskcurb_prefix}subscriptions/get`;
export const saveProfile = `${riskcurb_prefix}profile/save`;
export const getProfile = `${riskcurb_prefix}profile/get`;
export const checkSiteName = `${riskcurb_prefix}check/sitenameavailability`;
