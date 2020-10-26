cd ./packages
rm -rf app
npx create-react-app app --use-npm --template file:./template
cd app
cat env >> .env
rm env
npm run start
