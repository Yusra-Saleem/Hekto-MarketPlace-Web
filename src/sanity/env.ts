// env.ts
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = '2023-05-03'; // Use the latest API version

// Optional: Add validation
if (!projectId || !dataset || !apiVersion ) {
  throw new Error(
    'Missing environment variables. Check your .env.local file and ensure all required variables are set.'
  );
}
