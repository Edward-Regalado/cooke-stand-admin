# Lab: 37 - React I

## React, Next.js & TailwindCSS

### Overview

React is great! And though it does A LOT, it’s not a full framework. In other words, many common tasks are not handled out of the box by React. So it’s up to us devs to make some decisions about how to use React in combination with other tools.

One great “stack” is to use Next.js (which builds on top of React) and style with Tailwind.

Your job is to create a Cookie Stand Admin app using Next.js and style using Tailwind CSS.

### Feature Tasks and Requirements

- The spec for lab is screen shot of Cookie Stand Admin Version 1
- pages/Index.js should…
    - Have <Head> component with page title set to **Cookie Stand Admin**
    - Have a header component that matches spec.
    - Have a <main> component containing <form> and a placeholder component showing JSON string of last created Cookie Stand.
    - Have a <footer> component that matches spec.
- Style app using TailwindCSS utility classes.

### Implementation Notes

- npx create-next-app –example with-tailwindcss cookie-stand-admin
- strip out unused files
    - Won’t break if they get left in, but a good practice to remove stuff you’re not using.
- Pro tip: Tailwind CSS Extension Pack

#### User Acceptance Tests

No testing required.

### Configuration

Create cookie-stand-admin repository in Github

Use the folder created by create-next-app as the root of your project’s git repository.

Refer to Lab Submission Instructions for detailed instructions.

### Stretch Goals

- Refactor to move components to own functions.
- Refactor to move components to own files.
- Add more styling
- Link to another page within the app

# Lab: 38 - React II

## Cookie Stand Admin Version 2

## Overview

Your job is to continue work on Cookie Stand Admin app using Next.js and style using Tailwind CSS.

### Feature Tasks and Requirements

- The `specs` for lab are screen shots Cookie Stand Admin Version 2 and Cookie Stand Admin No Stands
pages/Index.js should return top level component <CookieStandAdmin>
- <CookieStandAdmin> details…
    - Have a <Head> component.
    - Have a custom <Header> component that matches spec.
    - Have a <main> component.
    - Within <main> have custom <CreateForm> and <ReportTable> components.
    - Have a custom <Footer> component that matches spec.
    - Import time slot data from supplied data.js file.

- <Head> should set page title Cookie Stand Admin
- <Header> component should have Next <Link> to overview page.
- <CreateForm> component details…
    - Receive an `onCreate` function to be called when form is submitted.
    -`onCreate` should be passed argument object representing new cookie stand.
    - Object should have location property.
    - Object should have hourly_sales property with hard coded [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

- <ReportTable> details…
    - should receive `hours` on props that is an array cookie stand hours of operation.
    - should receive `reports` on props that is an array all cookie stand objects.
    - If `reports` is empty then render <h2>No Cookie Stands Available</h2>
    - If `reports` is not empty then render a table with thead,tbody and tfoot components.
    - Component should render to match spec.
    - Component is responsible for tallying totals for each cookie stand as well as all cookie stands per hourly slot.

- <Footer> component details…
    - Should receive reports array on props.
    - Should display X Locations World Wide where X is number of cookie stands.

- <Header>,<Footer>,<CreateForm> and <ReportTable> should each be in own file inside top level components folder.
- Those components should be imported into Index.js
- Overview page details…
- should live in pages/overview.js
- should render <Link href="/"><a>Return to Main page</a></Link>
- Style all components using TailwindCSS utility classes to match spec.


## Implementation Notes

- Continue work in cookie-stand-admin repository
- **IMPORTANT** Complete version 1 tasks before moving to version 2 features.
- Pro tip: Tailwind CSS Extension Pack

### User Acceptance Tests
No testing required.

## Configuration

Continue work in **cookie-stand-admin** repository in Github

Refer to Lab Submission Instructions for detailed instructions.

### Stretch Goals

- Flesh out **Overview** page to do more
- Remove hard coding from <CreateForm> and properly calculate hourly sales per cookie stand.
- Add delete icons.
    - Pro Tip: Heroicons
- Really stretch out and make delete icons functional.
- Persist Cookie Stand data.

## Collab & Credit

- Kevin Henry, Anthony Williams
