cd ..
rm -rf project-tra
npx create-react-app project-tra --use-npm --template file:./the-react-app/packages/template
cd project-tra
cat env >> .env
rm env
npm run start
