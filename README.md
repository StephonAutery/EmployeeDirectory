# Employee Directory

[<img src="https://img.shields.io/badge/Stephon_Autery-let's_begin_here_...-goldenrod.svg" target="_blank">](http://stephonautery.com) [<img src="https://img.shields.io/badge/license-MIT-blue.svg">](https://opensource.org/licenses/MIT) [<img src="https://img.shields.io/badge/_ES_-_6_-green.svg">](http://www.ecma-international.org/ecma-262/6.0/) [<img src=https://img.shields.io/badge/_path_-_7.1.0_-green.svg>](https://www.npmjs.com/package/path) [<img src=https://img.shields.io/badge/_express_-_4.16.4-pink.svg>](https://www.npmjs.com/package/fs-extra) [<img src=https://img.shields.io/badge/_MongoDB_-4.2.6_-orange.svg>](https://www.mongodb.com/company) [<img src=https://img.shields.io/badge/_JSON-RFC_8259_-brown.svg>](https://www.npmjs.com/package/console.table) [<img src=https://img.shields.io/badge/React-v16.13.1_-blue.svg>](https://www.npmjs.com/package/console.table) [<img src=https://img.shields.io/badge/Node-v12.16.3_-darkgreen.svg>](https://www.npmjs.com/package/console.table)

An employee directory with React. The user is able to view their entire employee directory at once for quick access to employee information. The 'fire me' button allows for drastic action.

## site picture
![Site](/public/images/employee-directory-image.PNG)


## code Snippet
This is a REACT application. Below is the code that filters users by searching the entire employee name for the search string entered. Search results are immediately returned to the screen with each key press by use of the .setState method of the react component containing this code.

```javaScript

  filterEmployees = (name, employee) => {
    let employeesFilterd = [];
    if (name !== "") {
      employeesFilterd = employee.filter(person => ((person.firstName.toLowerCase() + person.lastName.toLowerCase()).includes(name.toLowerCase())));
    }

    this.setState({
      searching: false,
      employees: employeesFilterd
    })
  };

```
## dependencies
MongoDB\
Express\
React\
Node.js

## Employee Directory on GitHub
[Employee Directory on GitHub](https://github.com/StephonAutery/EmployeeDirectory)

## Employee Directory deployed app on GitHub
[Employee Directory on GitHub](https://github.com/StephonAutery/EmployeeDirectory)

## contributors
- Stephon Autery
- Hannah Folk
- Kerwin Hy

## Stephon Autery
![StephonAutery](/public/images/stephon-headshot-garden.jpg)

[Stephon Autery on GitHub](https://github.com/StephonAutery/a-fitness-tracker)

[Stephon Autery on LinkedIn](https://github.com/StephonAutery/a-fitness-tracker)