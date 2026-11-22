import fs from 'fs/promises';
import path from 'path';
export async function downloadFile(url, filename) {
     const response = await fetch(url);
     if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
   
     const buffer = Buffer.from(await response.arrayBuffer());
     const filePath = path.join(process.cwd(), filename);
   
     await fs.writeFile(filePath, buffer);
     console.log(`Saved to ${filePath}`);
   }