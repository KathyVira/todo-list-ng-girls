# TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# todo-list-ng-girls" 

Commit all your changes by runing this command in your project directory.

		git add -A && git commit -m "My Masege"


Run the following command to connect your code to your repository. 
make sure to replace the {YOUR_USERNAME} and {YOUR_REPO} with your github username and repository name.


		git remote add origin https://github.com/KathyVira/todo-list-ng-girls.git

		git push -u origin master


git remote add origin https://github.com/{YOUR_USERNAME}/{YOUR_REPO}.git



{YOUR_USERNAME} = KathyVira
{YOUR_REPO} = todo-list-ng-girls

git remote add origin https://github.com/KathyVira/todo-list-ng-girls.git




Deploying to GitHub Pages

First install angular-cli-ghpages.


		npm i -g angular-cli-ghpages
Then 

simply run:


		ng build --prod --base-href="./[your-repo-name]"

		

angular-cli-ghpages --dir=dist/todo-list
??

 ./[your-repo-name] is a placeholder for your github repository name. 
So if you project has the name https://github.com/myname/ng-girls the value has to be: 
--base-href="./ng-girls" ... on other Operating Systems it might be also "/ng-girls/"


Your app will be available at https://[your-GH-username].github.io/[repo-name]/


For more information see https://github.com/angular-schule/angular-cli-ghpages.

git add -A && git commit -m "07.03.2020"
git push -u origin master
