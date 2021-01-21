import * as fs from 'fs';

const jsonFilesFolder = './mock/db';

// Dynamic data
const bundleFile = `${jsonFilesFolder}/bundle.json`;
let bundleObject = {};

// Remove old bundle
if (fs.existsSync(bundleFile)) {
  fs.unlinkSync(bundleFile);
}

// Bundle all files
fs.readdirSync(jsonFilesFolder).forEach((fileName) => {
  const jsonDbFilePath = `${jsonFilesFolder}/${fileName}`;
  const fileObjectContent = JSON.parse(
    fs.readFileSync(jsonDbFilePath, 'utf-8')
  );
  bundleObject = { ...bundleObject, ...fileObjectContent };
});

fs.writeFileSync(bundleFile, JSON.stringify(bundleObject));
