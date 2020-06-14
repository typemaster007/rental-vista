# Assignment - 2 Rental Vista

Date Created: 31 May 2020  
Last Modification Date: 14 Jun 2020

## Author

| Name            | Banner ID | Dal Email              |
| --------------- | --------- | ---------------------- |
| Fruitwala Sahil | B00844489 | sahil.fruitwala@dal.ca |

## Demo Website Link: https://rentalvista.herokuapp.com/

### Demo

![Website Demo](gif/website.gif)

## Description

I have created four pages of main feature and one 404 page. Four pages are Langing Page, List of houses page, Edit Profile page and Blog Page. Moreover, when user will try to access any url which is not implemented yet, he/she will be redirected to 404 page.

## How to install and run on local system

To run this repo on local system need to do following tasks:

1. Install stable version of Node.js - a javascript runtime environment
2. Install stable version of Node Package Manager(npm)
3. clong repository from terminal using command `git clone https://github.com/SahilFruitwala/rental-vista.git`
4. open terminal or command prompt in cloned repository folder
5. run `npm install` in terminal
6. run `npm run start` and open `localhost:3000` to see application


## Nevagations in website

I have created five pages and those can be accessed by method given below:

1. For home-page / landing-page click on **RentalVista logo/button**.
2. To see list of houses click on **House** on navigation bar.
3. For edit profile page click on **Login** button. It will show you a button which can lead one to edit profile page.
4. Blog can be seen using clicking **Blog** on navigation bar.
5. If user enters any wrong path or url application will lead it to 404 page.

## Deployment

For deployment I tried deploying using heroku dashboard in previous project but I could not do it. So, this time, I have used heroku CLI for deployment using buildpack property as suggested by [Mark Hall](https://github.com/mars/create-react-app-buildpack)[1] in his github repository which is also suddested method of heroku platform.  

### Note

To make application compatible with Internet Explorer and Microsoft Edge, I have used Polyfill[2] *CDN* and *react-app-polyfill* npm package which is suggested on github issues for of **create-react-app** repository[3].

### Acknowledgement & Appriciations for sources I used

1. All of illustrations on langing page is taken from [Undraw](https://undraw.co/) website. Which has saved a lot of time by providing good customizable illustrations.
2. I have used some icons provided by [Font Awesome](https://fontawesome.com/start).
3. [Placeholder](https://placeholder.com/) website saved my time by providing a fixed size images with color options.
4. Most helpful resource was [React-Bootstrap](https://react-bootstrap.github.io/) and [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) library and documentation. I have used some styles and code from Bootstrap[4] documentation and modify it for my own purpose.  

### References

[1] Hall, M., 2020. Mars/Create-React-App-Buildpack. [online] GitHub. Available at: <https://github.com/mars/create-react-app-buildpack> [Accessed 14 June 2020].  
[2] "Polyfill.io", Cdn.polyfill.io, 2020. [Online]. Available: https://cdn.polyfill.io/v3/. [Accessed: 14- Jun- 2020].    
[3] "Create react app is not loaded (not working) in internet explorer 11 browser · Issue #7084 · facebook/create-react-app", GitHub, 2020. [Online]. Available: https://github.com/facebook/create-react-app/issues/7084. [Accessed: 14- Jun- 2020].  
[4] "Introduction", Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.5/getting-started/introduction/. [Accessed: 13- Jun- 2020].
