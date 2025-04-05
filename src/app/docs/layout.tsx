import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  const currentPage = source.getCurrentPage();
  const path = currentPage?.file.path;

  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
      
      <div className="mt-4 text-sm text-muted-foreground">
        Last updated: {new Date(currentPage?.data.lastModified ?? '').toLocaleDateString()}
      </div>
    </DocsLayout>
  );
}