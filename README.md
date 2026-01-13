# Generador de Rectángulos Aleatorios - Reto M4

Esta aplicación web permite dibujar rectángulos de dimensiones fijas (50x25 px) en posiciones aleatorias dentro de un lienzo HTML5. Ha sido desarrollada cumpliendo con los requerimientos de Programación Orientada a Objetos (POO) y con un diseño visual moderno.

## Requerimientos Implementados

- **Clase `Rectangulo`**: Modela el objeto a dibujar con su respectivo constructor para inicializar coordenadas y dimensiones.
- **Clase `Canvas`**: Administra el lienzo HTML y contiene el método `dibujarRectangulo(rect)`, el cual recibe una instancia de la clase `Rectangulo`.
- **Lógica Aleatoria**: Genera coordenadas `x` e `y` asegurando que el rectángulo siempre aparezca completamente dentro del área del lienzo.
- **Estructura de Archivos**: Separación clara de responsabilidades con archivos independientes para HTML, CSS y JS.

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y elemento `<canvas>`.
- **CSS3**: Diseño premium con glassmorphism, gradientes y tipografía moderna (Inter).
- **JavaScript (Vanilla)**: Lógica de negocio basada en clases (ES6+).

## Cómo Utilizar

1. Abre el archivo `index.html` en cualquier navegador web moderno.
2. Haz clic en el botón **"DIBUJAR"**.
3. Observa cómo aparece un nuevo rectángulo negro en una posición aleatoria.

## Estructura del Proyecto

```text
├── index.html    # Estructura principal y canvas
├── css/
│   └── style.css # Estilos y diseño visual
├── js/
│   └── script.js # Lógica de clases y eventos
└── assets/
    └── documents/
        ├── implementation_plan.md # Plan técnico
        └── walkthrough.md        # Guía de desarrollo
```
# Reto-Modulo-4
