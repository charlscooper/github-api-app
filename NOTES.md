# Notes

> ## Requirements

---

single page application.
connects to github api to retrieve data (such as search and filters)
consider acessability for ui

> ## UI

---

- counts for stars, forks, likes and issues per repository.
- Links to the repository and the author should be visible
- a detailed view whereby we will be able to read the README details. <- show contents of readme
- search feature and filters

> ## Source / Version Control

---

publish to public GIT repo:

- small incremental commits
- do NOT 'SQUASH & MERGE'
  README:
- deatil installation process
  NO JQUERY

> ## Stack

---

React - typescript and complies to html5
fetch
github
tailwind - css
components shadcd - ease of use offer control (easy to modify) and ownership over components [built of RADIXUI]
vite - for easy project setup

> ## Steps

---

1. setup project git
2. create new vite project
3. install dependancies - tailwind
   ^ 30 mins
4. fetch from api
   ^ 30 mins
5. begin ui creation
   - create components ~ install shadcn components
   - create a design
   - create a layout
   - create a search bar
   - create a filter section
   - create a view section for the retrieved data
    ^ 1hr
6. add react context to handle state management
   ^ 30 mins
7. add search functionality
8. add results table view
 ^ 1hr

What i would add in future:

- table display for results
- filters
- search for multiple repos and display list to chose from
- add a loading screen between data transitions
- clean up ui to make more user friendly
- refactor code to make more readable
- create some tests to atleast check the happy path