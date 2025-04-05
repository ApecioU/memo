import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { getGithubLastEdit } from 'fumadocs-core/server';

export default async function Layout({ children }: { children: ReactNode }) {
  const time = await getGithubLastEdit({
    owner: 'ApecioU',
    repo: 'memo',
    path: `content/docs/${source.pageTree.current.path}`,
  });

  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions}
      lastUpdate={new Date(time)}
    >
      {children}
    </DocsLayout>
  );
}