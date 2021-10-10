# SpaceX Rocket launches

This is a web service by which users can see launched rockets information of SpaceX. Users can also be able to search rockets details by name. Also they can filter data by

1. By Launch Date
   i. Last Week
   ii. Last Month
   iii. Last Year
2. By Launch Status ( Failure, Success )
3. Is it upcoming?

## Prerequisites

> \*\*use node

## Installation

To run this project into your environment

```
git clone https://github.com/anwarhossain1/spacex-technext.git
cd spacex-technext
npm install
yarn start or npm start
```

## Technical Choices

- **React**- React has been used into this application because of making this application fast, scalable, and simple. It works only on user interfaces in the application. Also data can be changed without reloading the page.
- **React-Redux**- For using Provider and some hooks.
- **Redux Toolkit**- Redux toolkit is a tiny little tool that makes redux more easy to implement and also by it, state management of the functional component of the project has been maintained.
- **Axios**- Data fetch is a most important role into a web service. Here, for data fetching from the _API_, **Axios** has been used.
- **MaterialUI**- MaterialUI has been used to design.

###### API

- **SpaceX API**- This API has been used to collect launched rockets data.

###### Testing

- **JEST**- For unit testing and accessing **DOM**, JEST has been used. It is often good enough for testing React components.
- **React Testing Library**- For Tesing React components without relying on their implementation details.

###### Project Architechture

#### `src/`

This folder contains all the necessary folders and files of the application.

#### `src/components`

For accessing all the reusable components from a specific location.

#### `src/redux/store`

Contains store of the project.

#### `src/redux/features`

This folder contains reducers, action creators as slices.

## Trade-offs

No trade-offs have been made into the project.

#### I might do differently if I were to spend additional time on the project

1. **Testing**- I would add extra effort of mine to the project to make it more TDD(Test-driven development) friendly.
2. **UI/UX**- I would try to make the ui more atractive and ux more user friendly.
