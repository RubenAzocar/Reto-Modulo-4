/**
 * Clase que representa un Rectángulo
 */
class Rectangulo {
    /**
     * @param {number} x - Coordenada X
     * @param {number} y - Coordenada Y
     * @param {number} ancho - Ancho del rectángulo
     * @param {number} alto - Alto del rectángulo
     */
    constructor(x, y, ancho, alto) {
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
    }
}

/**
 * Clase que representa el Lienzo (Canvas)
 */
class Canvas {
    /**
     * @param {string} canvasId - El ID del elemento canvas en el HTML
     */
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
    }

    /**
     * Dibuja un objeto de la clase Rectangulo sobre el lienzo
     * @param {Rectangulo} rect - Instancia de la clase Rectangulo
     */
    dibujarRectangulo(rect) {
        this.context.fillStyle = 'black';
        this.context.fillRect(rect.x, rect.y, rect.ancho, rect.alto);
    }

    /**
     * Obtiene dimensiones del lienzo
     */
    get dimensiones() {
        return {
            ancho: this.canvas.width,
            alto: this.canvas.height
        };
    }
}

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    const miLienzo = new Canvas('lienzo');
    const botonDibujar = document.getElementById('btnDibujar');

    botonDibujar.addEventListener('click', () => {
        const rectAncho = 50;
        const rectAlto = 25;

        // Obtener dimensiones del lienzo para calcular coordenadas aleatorias seguras
        const { ancho, alto } = miLienzo.dimensiones;

        // Math.random() * (max - min) + min
        // Aseguramos que el rectángulo no se salga de los bordes
        const randomX = Math.floor(Math.random() * (ancho - rectAncho));
        const randomY = Math.floor(Math.random() * (alto - rectAlto));

        // Crear instancia de Rectangulo
        const nuevoRect = new Rectangulo(randomX, randomY, rectAncho, rectAlto);

        // El objeto miLienzo dibuja al objeto nuevoRect
        miLienzo.dibujarRectangulo(nuevoRect);
    });
});
