type SizeKeys = 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'bigDesktop';

const sizes: Record<SizeKeys, string> = {
  mobile: '30em', // 480px / 16
  tablet: '48em', // 768px / 16
  laptop: '64em', // 1024px / 16
  desktop: '75em', // 1200px / 16 = 1200
  bigDesktop: '160em', // 1200px / 16 = 1200
};

export const media: Record<SizeKeys, string> = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(max-width: ${sizes.desktop})`,
  bigDesktop: `(min-width: ${sizes.bigDesktop})`,
};
