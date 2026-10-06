// Kopiert die Web-App-Dateien nach www/ – von dort übernimmt Capacitor sie in die Android-App.
import { cpSync, mkdirSync, rmSync } from 'node:fs';

const FILES = ['index.html', 'manifest.webmanifest', 'sw.js', 'icon.svg', 'icon-192.png', 'icon-512.png'];
rmSync('www', { recursive: true, force: true });
mkdirSync('www');
for (const f of FILES) cpSync(f, `www/${f}`);
console.log(`www/ mit ${FILES.length} Dateien erstellt`);
