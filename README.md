# React Component Essentials

## Why Components?

### Reusable Building Block

- Create small building blocks and compose the UI from them.
- Reuse a building block in different parts of the UI (e.g., a reusable button).

### Related Code Lives Together

- Related HTML & JS (and possibly CSS) code is stored together.
- Since JS influences the output, storing JS + HTML together makes sense.

### Separation of Concerns

- Different components handle different data & logic.
- Vastly simplifies the process of working on complex apps.

## Describe The Target UI With JSX

- **JSX**: JavaScript Syntax Extension.
- Used to describe & create HTML elements in JavaScript in a declarative way.

## Component Functions Must Follow Two Rules

1. **Name Starts With Uppercase Character**

   - The function name must start with an uppercase character.
   - Multi-word names should be written in PascalCase.
   - It's recommended to pick a name that describes the UI building block.

2. **Returns “Renderable” Content**
   - The function must return a value that can be rendered by React.
   - In most cases, return JSX.

## More Prop Syntaxes

### Passing a Single Prop Object

- If data is already organized as a JavaScript object, pass that object as a single prop:
  ```jsx
  <CoreConcept concept={CORE_CONCEPTS[0]} />
  ```
- In the component:
  ```jsx
  export default function CoreConcept({ concept }) {
    // Use concept.title, concept.description etc.
    // Or destructure the concept object: const { title, description, image } = concept;
  }
  ```

### Grouping Received Props Into a Single Object

- Pass multiple props and group them into a single object via JavaScript's "Rest Property" syntax:
  ```jsx
  export default function CoreConcept({ ...concept }) {
    // ...concept groups multiple values into a single object
    // Use concept.title, concept.description etc.
    // Or destructure the concept object: const { title, description, image } = concept;
  }
  ```

### Default Prop Values

- Set a default value for optional props:
  ```jsx
  export default function Button({ caption, type = "submit" }) {
    // caption has no default value, type has a default value of "submit"
  }
  ```

## ‘children’ Prop vs ‘Attribute Props’

### Using ‘children’

- For components that take a single piece of renderable content (like normal HTML):

  ```jsx
  <TabButton>Components</TabButton>;

  function TabButton({ children }) {
    return <button>{children}</button>;
  }
  ```

### Using Attributes

- For components that require multiple pieces of information:

  ```jsx
  <TabButton label="Components" />;

  function TabButton(props) {
    return <button>{props.label}</button>;
  }
  ```

## Rules of Hooks

1. **Only call Hooks inside of Component Functions.**
2. **Only call Hooks on the top level.**

### Manage State

- Manage data & tell React to re-execute a component function via `React.useState()` Hook:
  ```jsx
  const [CurrentStateValue, StateUpdatingFunction] =
    useState(InitialStateValue);
  ```
