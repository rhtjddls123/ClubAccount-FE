import { AUTH_SEARCH_PARAMS } from "../constants/constants";

export type AuthPageSearchParams = (typeof AUTH_SEARCH_PARAMS)[keyof typeof AUTH_SEARCH_PARAMS];
