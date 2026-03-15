export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CxS3ILR9.js",app:"_app/immutable/entry/app.CZ0gLcgG.js",imports:["_app/immutable/entry/start.CxS3ILR9.js","_app/immutable/chunks/BYfTocVY.js","_app/immutable/chunks/BeFerO9a.js","_app/immutable/chunks/DQeumS2J.js","_app/immutable/entry/app.CZ0gLcgG.js","_app/immutable/chunks/iQgj07hF.js","_app/immutable/chunks/BeFerO9a.js","_app/immutable/chunks/orjXS6Kl.js","_app/immutable/chunks/CgR_MMky.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DQeumS2J.js","_app/immutable/chunks/DyjxpZQG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
