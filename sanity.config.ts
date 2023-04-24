import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from '@/sanity/schemas';

const config = defineConfig({
  projectId: '0468wj5x',
  dataset: 'production',
  title: 'Cheen Restaurant Website',
  apiVersion: '2023-04-24',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
