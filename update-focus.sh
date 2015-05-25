cd ../focus
git pull
npm install
gulp build
cd ../focus-components
git pull
npm install
gulp build
cd ../Eta/site
cp ../../focus/dist/*.{js,css} vendor/
cp ../../focus-components/dist/js/focus-components.js vendor/
cp ../../focus-components/dist/css/focus-components.css vendor/
cp ../../focus-components/dist/img/* app/assets/img/