import { env } from './EnvironmentConfig'

export const APP_NAME = 'StarWars';
export const API_BASE_URL = env.API_ENDPOINT_URL
export const APP_PREFIX_PATH = '/app';
export const AUTH_PREFIX_PATH = '/auth';

export const THEME_CONFIG = {
	navCollapsed: false,
	locale: 'en',
	topNavColor: '#3e82f7',
	headerNavColor: '#ffffff',
	mobileNav: false
};
