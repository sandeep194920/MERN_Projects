## Deployed Apps

These projects might not be in the order, but the order in which these were done were shown in each URL of the project. For example, Accordion was done after Tours app.

#### useState Projects

1. [Show Hide People](https://1-show-hide-people-app.netlify.app/) `Unit Tests implemented`
2. [Reviews App](https://2-reviews-app.netlify.app/)
3. [Accordion](https://4-accordion-questions-app.netlify.app/)

#### useEffect Projects

4. [Tours App](https://3-tours-app.netlify.app/) `Express API implemented`
5. [Menu App](https://5-menu-app.netlify.app/)

#### How to deploy to Netlify

- Each folder in this repo is a react app that we have deployed in this page
- `cd project_folder`. Example, `cd 1_show_hide_people`
- `npm run build`
- Make sure /build is removed in .gitignore. Otherwise this cannot be pushed to git
- git add, commit and push this build
- Go to [Netlify site](https://app.netlify.com/start) and choose Github
- Select MERN_Projects
- Base directory - project/build. Example, `1_show_hide_people/build` or `2_tours_app/front-end/build`
- Build command - `npm install`
- Click on Deploy Site
