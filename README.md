# Jonathan Daniel Portfolio

A mature, editorial Next.js portfolio for Jonathan Daniel — Full Stack Software Developer / Product Designer.

## Included
- Homepage with Jonathan's portrait
- Dedicated Projects navigation and `/projects` page
- Shewhead Shoes case study populated from the supplied Figma export
- Smart Brain case study placeholder based on the supplied resume
- Future-project placeholder
- About, skills, experience, education/courses and contact
- Downloadable resume
- `/admin` browser-based draft project manager with image upload preview
- Responsive desktop/mobile styling

## Run locally
`npm install` then `npm run dev` and open `http://localhost:3000`.

## Vercel
Push this folder to GitHub and import the repository into Vercel. Vercel will detect the Next.js app.

## Adding projects
The `/admin` screen currently stores drafts in browser local storage so the upload workflow can be tested immediately. For real cross-device publishing, connect it to persistent database/image storage in the next build (e.g. Supabase). Production projects can also be added directly under `public/projects/<slug>/` and `data/site.ts` until that connection is made.
