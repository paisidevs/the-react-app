rm -rf app
npx create-react-app app --template file:./packages/the-template
cd app
touch .env
echo SKIP_PREFLIGHT_CHECK=true > .env
yarn start
