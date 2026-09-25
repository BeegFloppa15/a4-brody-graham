Assignment 4 - Components
===

Due: September 25th, by 1:59 PM.

For this assignment you will re-implement the client side portion of *either* A2 or A3 using either React or Svelte components. If you choose A3 you only need to use components for the data display / updating; you can leave your login UI as is.

[Svelte Tutorial](https://github.com/cs-4241-26a/cs-4241-26a.github.io/blob/main/using.svelte.md)  
[React Tutorial](https://github.com/cs-4241-26a/cs-4241-26a.github.io/blob/main/using.react.md)  

This project can be implemented on any hosting service (Glitch, DigitalOcean, Heroku etc.), however, you must include all files in your GitHub repo so that the course staff can view them.

Deliverables
---

Do the following to complete this assignment:

1. Implement your project with the above requirements.
3. Test your project to make sure that when someone goes to your main page on Render/Heroku/etc., it displays correctly.
4. Ensure that your project has the proper naming scheme `a4-firstname-lastname` so we can find it.
5. Fork this repository and modify the README to the specifications below. Be sure to add *all* project files.
6. Create and submit a Pull Request to the original repo. Name the pull request using the following template: `a4-firstname-lastname`.

Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

## Math Maker - A Simple Math Quiz App

Hosted at: https://a4-brody-graham.onrender.com

For assignment 4, I ported my math maker app from assignment 3 to have the main game page use React with a few components. The Login, Register, and Modify Profile pages are still static HTML, but the main game page uses react for displaying the player's stats, updating the displayed problem, and displaying the "Correct/Incorrect" Banners.

While I enjoy using react and I think it could be very helpful for designing front end web apps, trying to integrate it into an existing project with an existing HTML/JS front ended up being diffifcult. I needed to refactor all of my Front End JS to modify react state variables instead of storing elements with `getelementbyID`. I also found it difficult to get the production build of the app working with Vite-Express as it mixed both static HTML pages with react pages.
