// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Milianor',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'pt-br': {
          label: 'Português Brasileiro',
          lang: 'pt-BR',
        },
      },
      social: {
        github: 'https://github.com/maxmx03',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            {
              label: 'Example Guide',
              slug: 'guides/example',
              translations: {
                en: 'guides',
                'pt-BR': 'Guias',
              },
            },
          ],
        },
        {
          label: 'Learn Lua',
          translations: {
            'pt-BR': 'Curso de Lua',
          },
          items: [
            {
              label: 'First Steps',
              translations: {
                'pt-BR': 'Primeiros Passos',
              },
              autogenerate: { directory: 'lua/primeiros-passos' },
            },
            {
              label: 'Basics',
              translations: {
                'pt-BR': 'Conceitos Básicos',
              },
              autogenerate: { directory: 'lua/conceitos-basicos' },
            },
          ],
        },
      ],
    }),
    markdoc(),
  ],
});
