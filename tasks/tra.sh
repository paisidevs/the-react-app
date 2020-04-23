cd ..
rm -rf project-tra
npx create-react-app project-tra --template file:./the-react-app/packages/template
cd project-tra
touch .env
echo BROWSER="google chrome" > .env
echo SKIP_PREFLIGHT_CHECK=true >> .env
yarn start
