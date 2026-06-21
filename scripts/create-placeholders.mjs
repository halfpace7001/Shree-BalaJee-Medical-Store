// Run: node scripts/create-placeholders.mjs
// Creates placeholder images in public/images/
// Replace these with your actual store photos

import { createCanvas } from 'canvas';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const images = [
  { name: 'shop-front', label: 'Store Front', color: '#3B82F6', bg: '#EFF6FF' },
  { name: 'shelves-ayurvedic', label: 'Ayurvedic Products', color: '#10B981', bg: '#ECFDF5' },
  { name: 'shelves-medicines', label: 'Medicine Shelves', color: '#6366F1', bg: '#EEF2FF' },
  { name: 'shelves-corner', label: 'Health Products', color: '#14B8A6', bg: '#F0FDFA' },
  { name: 'team', label: 'Our Team', color: '#F59E0B', bg: '#FFFBEB' },
  { name: 'interior', label: 'Store Interior', color: '#8B5CF6', bg: '#F5F3FF' },
  { name: 'flag-ceremony', label: 'Republic Day', color: '#EF4444', bg: '#FEF2F2' },
  { name: 'shelves-full', label: 'Full Shelf View', color: '#EC4899', bg: '#FDF2F8' },
];

mkdirSync('./public/images', { recursive: true });

// Create a simple colored SVG placeholder for each image
for (const img of images) {
  const svg = `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="${img.bg}"/>
  <rect x="150" y="130" width="100" height="100" rx="20" fill="${img.color}" opacity="0.3"/>
  <text x="200" y="190" font-family="Arial" font-size="40" text-anchor="middle" fill="${img.color}">🏥</text>
  <text x="200" y="270" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="${img.color}">${img.label}</text>
  <text x="200" y="295" font-family="Arial" font-size="12" text-anchor="middle" fill="#9CA3AF">Replace with your photo</text>
</svg>`;

  writeFileSync(`./public/images/${img.name}.svg`, svg);
  console.log(`Created: public/images/${img.name}.svg`);
}

console.log('\nDone! Replace SVG files with your actual JPG photos using the same filenames.');
