# Super Galactic Age Calculator

#### TDD with JavaScript Independent Project for Epicodus; November 15, 2019

#### By Courtney Schild

## Description

This is an application that determine's a user's age based on a planet's solar years.

The following are the number of days in each planet's year:
* 88 Earth days in a Mercury year
* 225 Earth days in a Venus year
* 687 Earth days in a Mars year
* 4,380 Earth days in a Jupiter year

The program will use the following calculation to determine a user's age in Earth days:

**user's age x 365**

The program will use the following calculation to determine a user's age on a planet:

**user's age in Earth days / number of Earth days in a planet's year**

The program will use the following calculation to determine how many years a user has left to live on a planet:

**( user's average life expectancy in Earth days / number of Earth days in a planet's year ) - ( user's age in Earth days / number of Earth days in a planet's year )**

## Specs

<!-- This is another way to write out specs:
 * Spec:
  * Input:
  * Output:  -->

| Behavior (Our program should handle:) | Example Input (When it receives:) | Example Output (It should return:) |
| ----------- | ----------- | ----------- |
| The program should return a user's age in Earth days. | Age on Earth: 30 | Age (in days) on Earth: 10,950 |
| The program should return a user's age in Mercury years. | Age on Earth: 30 | Age on Mercury: 124 |
| The program should return a user's age in Venus years. | Age on Earth: 30 | Age on Venus: 48 |
| The program should return a user's age in Mars years. | Age on Earth: 30 | Age on Mars: 15 |
| The program should return a user's age in Jupiter years. | Age on Earth: 30 | Age on Jupiter: 2 |
| The program should return how many years a user has left to live on Mercury. | Average life expectancy on Earth: 78 | Mercury days left to live: 199 |
| The program should return how many years a user has left to live on Venus. | Average life expectancy on Earth: 78 | Venus days left to live: 77 |
| The program should return how many years a user has left to live on Mars. | Average life expectancy on Earth: 78 | Mars days left to live: 25 |
| The program should return how many years a user has left to live on Jupiter. | Average life expectancy on Earth: 78 | Jupiter days left to live: 4 |
| If a user has already surpassed the average life expectancy, the program should return how many years they have lived past the life expectancy. | Age on Earth: 93 | Earth days lived past average live expectancy: 15 |

## Setup/Installation Requirements

This webpage may be viewed on any web browser and edited by following the instructions below to clone or download the repository to your computer.

**Click [here](https://courtschmort.github.io/super-galactic-age-calculator-independent-project/) to open the GitHub Pages website.**

###### From GitHub
1. Click the **Clone or download** dropdown button.
2. Within the dropdown, click the **Download ZIP** button.

###### From the command-line interface (CLI)
1. To change the directory, type `cd Desktop` after the command prompt.
2. To clone the repository to your Desktop, type `git clone https://github.com/courtschmort/super-galactic-age-calculator-independent-project.git` after the command prompt. (This web URL can be located within the **Clone or download** dropdown button in GitHub.)

###### Also from the CLI
3. Type `npm install` to install the dependencies in the local node_modules folder.
4. Type `npm run build` (or `npm build`) to run custom scripts specified in package.json, or `npm run start` to do the same and use live reloading on a web development server at http://localhost:8080/.

For more information about cloning repositories available on GitHub, click [here](https://help.github.com/en/articles/which-remote-url-should-i-use).

## Known Bugs

There are no known bugs at this time.

## Support and Contact Details

If you have any questions, please email me at courtneyschild@gmail.com.

Find me on LinkedIn and GitHub:

* [Connect with me](https://www.linkedin.com/in/courtneyschild/) on LinkedIn
* [Follow me](https://github.com/courtschmort) or [watch this repository](https://github.com/courtschmort/super-galactic-age-calculator-independent-project.git) on GitHub

## Product Roadmap

In the future, I plan to include the following key features:
* UI
* Calculate birthdate rather than age

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery
* markdown
* Markdown

## License

This website is licensed under the MIT license.

Copyright &copy; 2019 **Courtney Schild**
