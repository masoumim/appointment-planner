# Appointment Planner
A simple web app that lets you add contacts and appointments.

App Link: https://appointment-planner-five.vercel.app/

# Project technical details:

**Language:** Node.js / JavaScript

**Framework:** [Next.js 13](https://nextjs.org)

**Styling:** Flexbox / CSS Grid

**Deployment platform:** [Vercel](https://vercel.com)


# Project info:
This multi-page web app project demonstrates a few key aspects of the Next.js 13 framework. Next.js is slowly beginning to phase out it's 'pages router' in favor of the newer 'app router'. This project uses this newer app router along with some of it's features. Firstly, the app router itself represents a different way of structuring Next projects whereby routing, route segments and route paths are derived from the project's folder structure. The root folder is now called 'app' and new route segments can be created by nesting folders inside this app folder. In order to expose a route, a page.js file must be present in a nested folder. This allows developers to populate and 'colocate' many files related to a single route / component in one single subfolder while only having a single file (pages.js) be exposed as a route segment. This works well and it is the approach I took with this project.

# Server Component / Client Component design pattern:
This new design pattern allows for explicitly indicating a component's place in the render process. By default all components are Server components which means they are rendered and processed on the server-side. Client components are rendered on the client-side and are specified as a Client component by including 'use client' at the top most part of a component file. Additionally, a Server component can "become" a Client component if it is imported into a Client component. The idea is to try and keep as much of a project's components as Server components if at all possible. The rules of Server / Client components lend themselves to this design pattern:

1. A Server component can freely import and render any client component.
2. A Client component can not import and render a Server component.
3. A Server component can only be passed to a Client component as a prop.

This approach creates a natural tendency to utilize Server components "higher up" on the component tree for tasks that are server related such as fetching data, making API calls and so forth. From there, a Server component can then import and render a Client component and pass it's fetched data along so that the Client can render it. The idea is to aim to have the top of the component tree populated by data-fetching Server components and have the Client components father down, ideally as leafs on the tree.

# Persisting State between app routes
In order to persist state data between the different routes of the app, I utilized the [React Context](https://react.dev/learn/passing-data-deeply-with-context) feature. This feature helps not only with persisting state data between different routes but also helps to reduce "prop drilling" in which state data is passed down multiple components as a prop until it is finally used by some component way down at the bottom of the tree. This allows for seemingly "global" state objects that can be used in any component regardless of it's location in relation to the state data. Although this feature is extremely useful, and necessary in this particular project, it becomes obvious very quickly that this feature can become cumbersome if many state objects are being added to a single context and accessed frequently, especially in a larger scale, more complex web app. I used it in this project sparingly and implementing it was straight forward.
