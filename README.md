
# Devfinder

A simple Github user search app using GitHub API.


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) 
[![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)

![Preview Image](https://via.placeholder.com/300x200)



## Features


- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- Persist theme with localStorage



The GitHub users API endpoint is `https://api.github.com/users/:username`. So, if you wanted to search for the Octocat profile, you'd be able to make a request to `https://api.github.com/users/octocat`.

### Expected behaviour

On first load, show the profile information for `404diaby` (me).

Display an error message, if no user is found when a new search is made.
If a GitHub user hasn't added their name, show their username where the name would be without the @ symbol and again below with the @ symbol.
If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added.

If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added.
Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the @ symbol and link to the company page on GitHub. For Octocat, with @github being returned for the company, this would lead to a URL of `https://github.com/github`.

## Getting Started

### Installation

Clone the project

* `git clone https://github.com/your-username/github-user-search.git`

Go to the project directory

* `cd my-project`


### Usage

* Open the application in your web browser: `http://localhost:XXXX`
* Search for GitHub users by their username
* Switch between light and dark themes


## Preview

![Preview Image](https://via.placeholder.com/300x200) k
![Preview Image](https://via.placeholder.com/300x200)



## Future Plans

*A roadmap or future plans for features and improvements to the application.*


- responsive: View the optimal layout for the app depending on their device's screen size
- &#x2705; 
- more modern js
- favicon
- comments
- optimization et performance
- accesibilité
- image preview on readme
- end user guide ?
- Have the correct color scheme chosen for them based on their computer preferences.
- look other rreadme and add somme info and inspiration


These are just a few ideas to get you started. Remember to prioritize features based on user needs and feedback. Good luck with your project!



## Social Links

[![portfolio](https://img.shields.io/badge/my_portfolio-FF7B00?style=for-the-badge&logo=ko-fi&logoColor=white)](https://diaby-mamadou.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mamadou-diaby-107351231/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/404diaby)
## Demo

You can try out the TodoList App demo here: 

[![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTcuNTYyNTI2NzAyODgwODYiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAxMTcuNTYyNTI2NzAyODgwODYgMzUiPjxyZWN0IHdpZHRoPSI1NS4wOTM3NjE0NDQwOTE4IiBoZWlnaHQ9IjM1IiBmaWxsPSIjMzFDNEYzIi8+PHJlY3QgeD0iNTUuMDkzNzYxNDQ0MDkxOCIgd2lkdGg9IjYyLjQ2ODc2NTI1ODc4OTA2IiBoZWlnaHQ9IjM1IiBmaWxsPSIjMzg5QUQ1Ii8+PHRleHQgeD0iMjcuNTQ2ODgwNzIyMDQ1OSIgeT0iMjEuNSIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9IidSb2JvdG8nLCBzYW5zLXNlcmlmIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMiI+SE9TVDwvdGV4dD48dGV4dCB4PSI4Ni4zMjgxNDQwNzM0ODYzMyIgeT0iMjEuNSIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9IidNb250c2VycmF0Jywgc2Fucy1zZXJpZiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjkwMCIgbGV0dGVyLXNwYWNpbmc9IjIiPkhFUkU8L3RleHQ+PC9zdmc+)](https://github-user-search-ten-green.vercel.app/)
