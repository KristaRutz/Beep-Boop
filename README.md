# Beep Boop

## By Krista Rutz.  _Last updated: 01/24/2020_

This web application takes a number from a user and returns a range of numbers from 0 to the user inputted number, with some exciting exceptions.

### Description

This web application allows the user to enter a number from 0 to 1000. It then prints a list of the numbers from 0 to the user's chosen number, inclusive. However, certain rules replace numbers containing the digits 1, 2, or 3 with _"Beep!"_, _"Boop!"_, and _"I'm sorry, Dave. I'm afraid I can't do that."_, respectively.

### Objectives
Your code will be reviewed for the following objectives:

- JavaScript business logic and user interface logic are separate.  
- Variable names are descriptive and use lower camel case (e.g. myVariableExample).
- Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools.
- Application implements a loop and works as expected.
- All previous objectives have been met.
- Logic is broken down into "plain English" specs, listed in README.
- Project is in a presentable, portfolio-quality state.
- Required functionality is in place by Friday deadline.
- Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.
#### PAST Standards
- Commits are made regularly with clear messages that finish the phrase "It will…".
- Project README that includes, bare minimum:
  - author name
  - program name
  - detailed setup instructions
  - description
  - copyright and license information

### Specifications
<details>
  <summary>Expand specs for this project</summary>

* **Spec**: The program returns an error message when the inputted number is out of range.
  * **Input**: "-4"
  * **Output**: "Value must be greater than or equal to 0."  
  
* **Spec**: The program returns a range of numbers from 0 to the users inputted number
  * **Input**: "4"
  * **Output**: "0, 1, 2, 3, 4"
* **Spec**: The program can be re-used to show new results
  * **Input**: "4" => GO , "2" => GO
  * **Output**: "0, 1, 2, 3, 4" => "0, 1, 2"
* **Spec**: The program returns "I'm sorry Dave, I'm afraid I can't do that" in place of numbers that contain the digit "3"
  * **Input**: "4"
  * **Output**: "0, 1, 2, "I'm sorry Dave, I'm afraid I can't do that", 4"
* **Spec**: The program returns "Boop!" in place of numbers that contain the digit "2"
  * **Input**: "4"
  * **Output**: "0, 1, "Boop!", "I'm sorry Dave, I'm afraid I can't do that", 4"
* **Spec**: The program returns "Beep!" in place of numbers that contain the digit "1"
  * **Input**: "4"
  * **Output**: "0, "Beep!", "Boop!", "I'm sorry Dave, I'm afraid I can't do that", 4"
* **Spec**: The program allows the user to reset the form
  * **Input**: Clicks reset
  * **Output**: Form is reset and the output display is empty
* **Spec**: The program will allow the user to enter "game mode"
  * **Input**: Toggle Game mode
  * **Output**: User will be prompted to select the correct next value in the sequence, with a point score.
</details>

### Usage and Licensing

Photo via <a href="https://www.goodfreephotos.com/">Good Free Photos</a>
https://www.pxfuel.com/en/free-photo-eiupq
https://pixabay.com/illustrations/robot-computer-technology-clipart-3743431/
