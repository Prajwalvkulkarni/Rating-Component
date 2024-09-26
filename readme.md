# **Rating Component**

This project is a simple, interactive 1-5 star rating component built using HTML, CSS, and JavaScript. 
It provides the ability to rate a service or product by clicking on stars, with a dynamic visual feedback based on user interaction.

### Features
- 1-5 Star Rating: Users can click on any star (from 1 to 5) to give their rating.
- Interactive Hover Effect: The stars will turn yellow/golden based on color u set up to the level hovered, even if the user has already given their rating.
- Live Rating Count: Once a star is clicked, the rating count is updated below the star container to reflect the user's selection.
  
#### **How It Works**

_HTML Structure_:
1. The HTML provides the basic structure with a heading, a container for stars, and a rating count. 
2. Each star has an idx attribute to identify its position in the rating (from 1 to 5).

_CSS for Layout and Styling_:
1. The stars are styled using Flexbox to evenly distribute them within their container. 
2. Initially, all stars are set to gray (color: grey), and when hovered or clicked, the stars turn gold (color: gold).
3. The page uses a flexbox layout to ensure the entire rating component is perfectly centered both horizontally and vertically on the page.
4. The parent_container is given a height of 100vh to fill the full viewport, and Flexbox properties like justify-content and align-items are used to center the component in the middle of the page.

_JavaScript Interaction_:
1. JavaScript listens for click and hover events on each star to dynamically change the color based on the user's interactions. 
2. Once a star is clicked, the corresponding rating is displayed and remains in view.
