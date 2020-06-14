# Rental Vista

    Assignment - 2

    Date Created: 3 Jun 2020
    Last Modification Date: 14 Jun 2020

## Author

| Name            | Banner ID | Dal Email              |
| --------------- | --------- | ---------------------- |
| Sahil Fruitwala | B00844489 | sahil.fruitwala@dal.ca |

### Demo Website Link: https://rentalvista.herokuapp.com/

### Github Repository Link: https://github.com/SahilFruitwala/rental-vista

### Demo

![Website Demo](gif/website.gif)

---

## Content

I have created four pages of the main feature and one 404 pages. Four pages are Landing Page, List of houses page, Edit Profile page and Blog Page. Moreover, when the user will try to access any URL which is not implemented yet, he/she will be redirected to the 404 page.

## How to install and run on a local system

To run this project on a local system need to do the following tasks:

1. Install a stable version of Node.js - a javascript runtime environment
2. Install a stable version of Node Package Manager(npm)
3. Clone repository from the terminal using command `git clone https://github.com/SahilFruitwala/rental-vista.git`
4. open terminal or command prompt in the cloned repository folder
5. run `npm install` in terminal
6. run `npm run start` and open localhost:3000 to see the application

## Navigation in website

I have created five pages and those can be accessed by method given below:

1. For home-page / landing-page click on **RentalVista logo/button**.
2. To see a list of houses click on **House** on the navigation bar.
3. For the edit profile page click on the **Login** button. It will show you a button that can lead one to edit the profile page.
4. The blog can be seen using clicking **Blog** on the navigation bar.
5. If a user enters any wrong path or URL application will lead it to a **404 page**.

### Link of Pages

1. [Landing Page](https://rentalvista.herokuapp.com/)
2. [Houses](https://rentalvista.herokuapp.com/house)
3. [Blog](https://rentalvista.herokuapp.com/blog)
4. [Edit Profile](https://rentalvista.herokuapp.com/edit)
5. [404](https://rentalvista.herokuapp.com/404)

## Deployment

For deployment, I tried deploying using the Heroku dashboard in the previous project but I could not do it. So, this time, I have used Heroku CLI for deployment using buildpack property as suggested by [Mark Hall](https://github.com/mars/create-react-app-buildpack)[1] in his Github repository which is also suggested method of the Heroku platform.

To deploy and view application, I have used following commands:

1. `heroku create rentalvista --buildpack mars/create-react-app`
2. `git push heroku master`
3. `heroku open`

### Used Frameworks & Library

For creating web application I have used **[ReactJS](https://reactjs.org/)** front-end libary that is created and open sourced by Facebook. In addition to this, I have used following libraries:

1. [react-bootstrap](https://reacttraining.com/react-router/web/guides/quick-start) - CSS library (derived from bootstrap framework) used for better customization and responsiveness
2. [react-router-dom](https://react-bootstrap.github.io/) - navigate between different pages of the website
3. [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) - used for icons

### Used Tools

I have listed all the tools and platform used, from creating to the deployment process:

1. [Visual Studio Code](https://code.visualstudio.com/) - to write and manage code.
2. [Git](https://git-scm.com/) - for version control
3. [Chrome](https://www.google.com/chrome/) & [Firefox](https://www.mozilla.org/en-US/firefox/new/) - debug and test application
4. [Heroku](https://www.heroku.com/) - for deployment of website
5. [Github](https://github.com/) - to house and maintain repository/project

---

### Choosing fonts and colours

According to Google Design [2], **Robot** font would be well applicable for long projects which in my case, is a web application. As per WebsiteBulderExpert[3] website, the main two colours on my website are for impulse shoppers which is suitable for my purpose.

### Note

To make an application compatible with Internet Explorer and Microsoft Edge, I have used Polyfill[4] _CDN_ and _react-app-polyfill_ npm package which is suggested on GitHub issues for of **create-react-app** repository[5].

### Acknowledgement & Appreciations for sources I used

1. All of the illustrations on the landing page are taken from the [Undraw](https://undraw.co/) website. Which has saved a lot of time by providing good customizable illustrations?
2. I have used some icons provided by [Font Awesome](https://fontawesome.com/start).
3. [Placeholder](https://placeholder.com/) website saved my time by providing fixed-size images with colour options.
4. The most helpful resource was [React-Bootstrap](https://react-bootstrap.github.io/) and [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) library and documentation. I have used some styles and code from Bootstrap[6] documentation and modify it for my purpose.
5. For design inspiration, I have used [Dribbble](https://dribbble.com/) which is a website where designer showcase their designs [7].

---

### References

[1] Hall, M., 2020. Mars/Create-React-App-Buildpack. [online] GitHub. Available at: <https://github.com/mars/create-react-app-buildpack> [Accessed 14 June 2020].  
[2] "Choosing Web Fonts: A Beginner’s Guide - Library - Google Design", Google Design, 2020. [Online]. Available: https://design.google/library/choosing-web-fonts-beginners-guide/. [Accessed: 14- Jun- 2020].  
[3] "How to Choose Good Website Color Schemes (June 2020)", Website Builder Expert, 2020. [Online]. Available: https://www.websitebuilderexpert.com/designing-websites/how-to-choose-color-for-your-website/. [Accessed: 10- Jun- 2020].  
[4] "Polyfill.io", Cdn.polyfill.io, 2020. [Online]. Available: https://cdn.polyfill.io/v3/. [Accessed: 14- Jun- 2020].  
[5] "Create react app is not loaded (not working) in internet explorer 11 browser · Issue #7084 · facebook/create-react-app", GitHub, 2020. [Online]. Available: https://github.com/facebook/create-react-app/issues/7084. [Accessed: 14- Jun- 2020].  
[6] "Introduction", Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.5/getting-started/introduction/. [Accessed: 13- Jun- 2020].  
[7] "Dribbble - Discover the World’s Top Designers & Creative Professionals", Dribbble.com, 2020. [Online]. Available: https://dribbble.com/. [Accessed: 10- Jun- 2020].
