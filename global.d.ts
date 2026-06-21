export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NODE_ENV: 'development' | 'production' | 'test';
			NEXT_PUBLIC_API_NAM: string;
			NEXT_PUBLIC_APP_URL: string;
			NEXT_PUBLIC_APP_NAME: string;
		}
	}
}
