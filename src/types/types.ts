import { AUTH_SEARCH_PARAMS, PARAMS_IDS } from "../constants/constants";

export type AuthPageSearchParams = (typeof AUTH_SEARCH_PARAMS)[keyof typeof AUTH_SEARCH_PARAMS];

export type ParamsIds = (typeof PARAMS_IDS)[keyof typeof PARAMS_IDS];
