Explanation

What happens without preventDefault()?
Without preventDefault(), clicking a link would cause the browser to navigate to the link's href attribute, refreshing the page and reloading the entire content. This is not desired behavior in a single-page application (SPA), where we want to handle navigation dynamically without refreshing the page.

Why is it needed in single-page applications?
In single-page applications, we handle navigation using JavaScript, so we need to prevent the default action of the browser (page reload) when a link is clicked. By calling preventDefault(), we ensure that the page does not reload, and instead, we can change the content or state dynamically without interrupting the user experience.


Observations

What happens when a link is clicked?
When a link is clicked, the click event is triggered, and the associated event handler prevents the default action (page reload). It then changes the active state of the link (adds the "active" class), shows a loading overlay, and simulates a page loading process.

Why does the container event also trigger?
The container event is triggered due to event bubbling. In event bubbling, when an event is triggered on a specific element, it "bubbles" up through its parent elements, triggering any matching event listeners along the way.


What is event bubbling?

Event bubbling is a mechanism in which an event triggered on a specific element (like a button or link) propagates upward to its parent elements. This means that if a parent element has an event listener for the same event type, it will also be triggered. This allows for delegation of events to higher-level elements, making it easier to manage events on dynamically created elements.


Reflection

In this code, state is managed by dynamically adding and removing CSS classes to elements (e.g., toggling the active class on links or adding/removing the dark class for theme changes). Asynchronous behavior is employed through the use of setTimeout() to simulate a page load, showing the loading overlay and then displaying a notification after a delay. Event bubbling allows for the app container’s click event to be triggered even when the click happens on a child element. By using event bubbling, the code can handle a wide range of events in a more generalized and efficient way.
