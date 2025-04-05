import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
* Shared layout configurations
*
* you can customise layouts individually from:
* Home Layout: app/(home)/layout.tsx
* Docs Layout: app/docs/layout.tsx
*/
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img 
          src="/images/favicon.png" 
          alt="Logo" 
          width={24} 
          height={24} 
        />
        Memo
      </>
    ),
  },
  links: [
    {
      text: 'Aaron PESCASIO',
      url: 'https://apescasio.fr',
      active: 'nested-url',
    },
  ],
};
