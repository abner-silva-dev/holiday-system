type SizeKeys = 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'bigDesktop';

const sizes: Record<SizeKeys, string> = {
  mobile: '35em', // 560px / 16
  tablet: '48em', // 768px / 16
  laptop: '90em', // 1400px / 16
  desktop: '120em', // 1920px / 16 = 120
  bigDesktop: '160em', // 1200px / 16 = 1200
};

export const media: Record<SizeKeys, string> = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(max-width: ${sizes.desktop})`,
  bigDesktop: `(min-width: ${sizes.bigDesktop})`,
};
