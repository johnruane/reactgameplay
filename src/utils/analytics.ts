// Google Analytics 4 Measurement ID
export const GA_MEASUREMENT_ID = 'G-8JW6NEM2TN';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
  }
}

// Use the global gtag function with safety check
const gtag = (...args: Parameters<Window['gtag']>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Game-specific tracking
export const trackGameStart = (gameName: string) => {
  trackEvent('game_start', 'Games', gameName);
};

export const trackGameComplete = (gameName: string, score?: number) => {
  trackEvent('game_complete', 'Games', gameName, score);
};

export const trackGameRestart = (gameName: string) => {
  trackEvent('game_restart', 'Games', gameName);
};

export const trackGameQuit = (gameName: string) => {
  trackEvent('game_quit', 'Games', gameName);
};

// Button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'Button', `${buttonName}_${location}`);
};

// Navigation
export const trackNavigation = (from: string, to: string) => {
  trackEvent('navigation', 'User', `${from}_to_${to}`);
};
