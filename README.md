# Todo code test

Checkout the repository and start the application using `npm run start`

The test uses standard React hooks and contexts. The only other dependancy is the latest `react-router`, the documentation can be found at `https://reactrouter.com/en/main/start/tutorial`

Tasks

- Under `context/state.js`, implement a useEffect hook to fetch data from the API.
- Under `components/TodoList`, implement some simple styles for the list of Todo's in the sidebar
- Under `app.js`, add a new route to show the TodoAdd component when the user clicks on the "Add Todo" button
- Under `components/TodoList`, implement the function to add a new Todo item
- Under `context/state.js`, find the bug in the `useTodoItem` hook that's preventing users from viewing all of the todo items