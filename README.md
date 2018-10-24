# MyReads Project

## Project Overview

In the MyReads project, you'll see a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

The App has a Home Page and a Search Page. In this application, the home page displays a list of "shelves" (i.e. categories), each of which contains a number of books. Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The App also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

For my "above and beyond" feature on this project, I added some text that shows the search count.

## Installation Instructions

* To install this application, go to this URL : [https://github.com/DavidJenness/nanodegree-project6]
* From the "Clone or Download" dropdown, select "Download Zip"
* Use your favorite unzip utility to decompress the zip to a directory of your choosing.
* Next use your terminal window (Mac) or Command Prompt (PC) to go to that directory where you unizipped the files.
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms. These are the only terms that will return hits from the search cache:

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Referenced Materias

In addition to the Udacity Videos, I used some of the videos provided by Udacity Project Coaches including:

* [Webinar: Tutorial Requests: FEND Project 6 - Walk Through (SHORT) by Ryan Waite - YouTube](https://www.youtube.com/watch?v=N8bU1oWlLwY&feature=youtu.be)
* [Webinar: My Reads / React Zoom Study Session w/ Doug Brown [Project Coach]  - YouTube](https://www.youtube.com/watch?v=OcL7-7cRpkQ&feature=youtu.be)

