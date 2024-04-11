export const mapStackToImageRoute = (stack: string): string => {
  const imageRoutes: Record<string, string> = stackImage;

  return imageRoutes[stack];
};

const stackImage = {
  HTML: "/logos/html-5.png",
  JavaScript: "/logos/js.png",
  Tailwind: "/logos/tailwind.png",
  React: "/logos/react.png",
  CSS: "/logos/css-3.png",
  Figma: "/logos/figma.png",
  GitHub: "/logos/github.png",
  Git: "/logos/git.png",
  NextJs: "/logos/next-js.png",
  Sass: "/logos/sass.png",
  TypeScript: "/logos/typescript.png",
  Webpack: "/logos/webpack.png",
};
