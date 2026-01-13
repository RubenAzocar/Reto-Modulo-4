# Drawing App Implementation Plan

The objective is to create a web application that draws rectangles on a canvas at random positions when a button is clicked. The application will be built using HTML, CSS, and vanilla JavaScript, following Object-Oriented Programming (OOP) principles.

## Proposed Changes

### Logic & Classes

#### [script.js](file:///c:/Users/ruben/Desktop/Curso%20Fullstack%20Talento%20Digital/Codigos_ejemplos/ejercicicos_en_clases/Reto%20Modulo%204/js/script.js)
- **`Rectangulo` class**:
  - Constructor: Receives `x`, `y`, `width`, and `height`.
  - Properties: `x`, `y`, `width` (50), `height` (25).
- **`Canvas` class**:
  - Constructor: Receives the canvas element ID.
  - Method `dibujarRectangulo(rectangulo)`: Draws a black rectangle based on the passed object.

### UI & Styling

#### [index.html](file:///c:/Users/ruben/Desktop/Curso%20Fullstack%20Talento%20Digital/Codigos_ejemplos/ejercicicos_en_clases/Reto%20Modulo%204/index.html)
- `canvas` element with a specified ID.
- `button` with text "DIBUJAR".

#### [css/style.css](file:///c:/Users/ruben/Desktop/Curso%20Fullstack%20Talento%20Digital/Codigos_ejemplos/ejercicicos_en_clases/Reto%20Modulo%204/css/style.css)
- Modern, clean layout with glassmorphism.

## Verification Plan
- Manual UI verification by clicking the "DIBUJAR" button.
- Confirming rectangles are 50x25 and within canvas bounds.
