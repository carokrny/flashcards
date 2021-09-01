# Flashcards 

React frontend application for creating flashcard quizzes associated with different topics.

## Table of Contents 
* [Introduction](#introduction)
* [Technologies](#technologies)
* [Set Up](#set-up)
* [Documentation](#documentation)
    * [State](#state)
    * [Components](#components)
    * [Routes](#routes)
    * [Tests](#tests)
* [Sources](#sources)

## Intruduction 

This front-end app allows a user to create flashcard quizzes assocaited with different topics. 

The user can add new topics (e.g., History, Math). The user can add new quizzes assocaited with the existing topics (e.g., Calculus under the Math topic). When creating a new quiz, the user can add as many flashcards as they want, and input a front-side text (e.g., a question) and a back-side text (e.g., an answer). 

The user can navigate between different topics and quizzes to study! Flashcards are initially rendered face up, and the user can view the back with a click. 

## Technologies 

* `react` v. 17.0.1
* `redux` v. 4.0.5
* `react-dom` v. 17.0.1
* `react-redux` v. 7.2.2
* `react-router-dom` v. 5.2.0
* `@reduxjs/toolkit` v. 1.5.0
* `react-scripts` v. 4.0.2
* `jest` v. 26.6.0
* `react-test-renderer` v. 17.0.2
* `uuid` v. 8.3.2
* `npm` v. 7.21.1

## Set Up

Live site hosted by Netlify at ADD SITE

Or, install locally and run `npm start` in the project root and the app will be available on port 3000.

## Documentation

### State

The app's state is totally normalized, with slices for topics, quizzes, and cards. The state has been split into 3 Redux slices, created with Redux Toolkit: 

- `topicsSlice` maintains topics for quizzes. 
    - Each topic has a unique topic id, topic name, icon, and any associated quizzes. 
    - Topics slice has actions for adding a new topic and adding a quiz to an existing topic.
    - Topics slice has an associated selector for grabbing the topics object, where topics can be keyed by their unique id. 

- `quizzesSlice` maintains quizzes which contain flashcards ("cards"). 
    - Each quiz has a unique quiz id, quiz name, topic id for the topic it is associated with, and any associated cards. 
    - Quiz slice has an action for adding a new quiz. 
    - Quiz slice has an associated selector for grabbing the quizzes object, where quizzes are keyed by their unique id.

- `cardsSlice` maintains two-sided flashcards. 
    - Each card has a unique card id, a front side with a question, and a back side with an answer. 
    - Cards slice has an action for adding a new card. 
    - Cards slice has an associated selector for grabbing the cards object, where cards are keyed by their unique id.

### Components

- `<NewTopicsForm />` functional component that renders a form for creating a new topic. 
    - User can create a new topics by providing text input for the new topic's name and a selection of an icon from a dropdown menu. Component automatically generates a unique id using uuidv4. 
    - Upon form submission, dispatches an add topic action to update the state with the new topic. 
    - Has no props.

- `<NewQuizForm />` functional component that renders a form for creating a new quiz. 
    - Takes user input for the new quiz's name and selection of an associated topic from a dropdown menu and automatically generates a unique id using uuidv4.
    - Upon form submission, dispatches a thunk creator, and the thunk dispatches an action to update the assocaited topics slice of state with with the new quiz's id and a second action to update the quizzes slice of state with the new quiz. 
    Has no props. 

- `<Topics />` functional component that renders all the topics in the system. 
    - User can click on a topic and will be routed to the associated `<Topic>`.
    - Has no props.

- `<Topic />` functional component that renders all the quizzes assocaited with a topic. 
    - User can click on a quiz and will be routes to the assocaited `<Quiz>`.
    - Has no props.

- `<Quizzes />` functional component that renders all the quizzes in the system. 
    - User can click on a quiz and will be routes to the assocaited `<Quiz>`.
    - Has no props.

- `<Quiz />` functional component that renders all the cards assocaited with a quiz. 
    - User can click on a card and the card will flip to the other side. 
    - Has no props. 

- `<Card />` functional component that renders a card assocaited with a quiz, initially rendered front-side up. 
    - User can click on a card and the card will flip to the other side. 
    - receives `id` as a prop from `<Quiz />` to render correct card. 

### Routes

- `/new-topic` – form to create a new topic, `<NewTopicForm />`
- `/topics` – index of all topics, `<Topics />`
- `/topics/:topicId` – page for an individual topic, `<Topic />`
- `/new-quiz` – form to create a new quiz, `<NewQuizForm />`
- `/quizzes` – index of all quizzes, `<Quizzes />`
- `/quizzes/:quizId` – page for an individual quiz, `<Quiz>`

### Tests 

Install locally an run `npm test` to run all tests with Jest. 

Contains unit tests for `topicsSlice`, `quizzesSlice`, `cardsSlice`, `NewTopicForm`, and `NewQuizForm`.

## Future Development 

Will build out backend so that the user doesn't lose their quizzes on each page refresh. 

## Sources

This app was created as part of [Codecademy's Fullstack Engineer](https://www.codecademy.com/learn) curriculum. Starter code was provided by Codecademy, including icons.