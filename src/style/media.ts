type SizeKeys = 'mobile' | 'smallTablet' | 'tablet' | 'landscape' | 'desktop';

// const sizes: Record<SizeKeys, string> = {
//   mobile: '35em', // 560px / 16
//   tablet: '48em', // 768px / 16
//   laptop: '90em', // 1400px / 16
//   desktop: '120em', // 1920px / 16 = 120
//   bigDesktop: '160em', // 1200px / 16 = 1200
// };

const sizes: Record<SizeKeys, string> = {
  mobile: '34em', // 560px / 16
  smallTablet: '44em', // 560px / 16
  tablet: '59em', // 768px / 16
  landscape: '75em', // 1400px / 16
  desktop: '84em', // 1920px / 16 = 120
  // bigDesktop: '160em', // 1200px / 16 = 1200
};
export const media: Record<SizeKeys, string> = {
  mobile: `(max-width: ${sizes.mobile})`,
  smallTablet: `(max-width: ${sizes.smallTablet})`,
  tablet: `(max-width: ${sizes.tablet})`,
  landscape: `(max-width: ${sizes.landscape})`,
  desktop: `(max-width: ${sizes.desktop})`,
};
