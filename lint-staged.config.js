module.exports = {
  "*.{ts,tsx}": [
    "npx prettier --write",
    "npx eslint --fix",
    () => "tsc --skipLibCheck --noEmit", 
  ],
}