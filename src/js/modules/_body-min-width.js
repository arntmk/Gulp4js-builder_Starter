/* eslint wrap-iife: ["error", "any"] */

// ===Adaptive-body-min-width===
const screenViewport = function () {
	(() => {
		const { width } = window.screen;
		const oldViewport = document.querySelector('meta[name="viewport"]');
		const viewport = document.createElement('meta');
		viewport.setAttribute('name', 'viewport');
		viewport.setAttribute('content', `width=${width <= 319.98 ? '319.98' : 'device-width'}`);
		document.head.replaceChild(viewport, oldViewport);
	})();
};
screenViewport();
