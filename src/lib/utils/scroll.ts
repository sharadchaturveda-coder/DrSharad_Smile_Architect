export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string
) => {
  e.preventDefault();
  const targetId = href.startsWith('#') ? href.substring(1) : href;
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
