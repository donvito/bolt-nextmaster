import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, ...props }: LinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Handle client-side navigation here if needed
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}