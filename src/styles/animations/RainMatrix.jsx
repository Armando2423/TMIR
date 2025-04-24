/**
 * 
 * @param {HTMLCanvasElement} canvas - The canvas element.
 * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context
 * @returns {Function} Animation loop function
 */

const getThemeColors = () => {
    const styles = getComputedStyle(document.body);
    return {
        background: styles.getPropertyValue('--bckMatirx').trim(),
        textColor: styles.getPropertyValue('--txt-matrix').trim()
    };
};


export const matrixRain = (canvas, ctx) => {
    const columns = Math.floor(canvas.width / 10);
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height;
    }

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+[]{}|;:,.<>?';

    return () => {
        const styles = getThemeColors();
        ctx.fillStyle = styles.background + '0D'; // 0D = transparent
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = styles.textColor;
        ctx.font = '27.5px monospace ';

        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i] += .6;
        }
    };
};
