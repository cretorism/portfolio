// Function to generate 3D moving triangles
function generateTriangles() {
    const triangleContainer = document.getElementById("triangle-container");

    // Generate 100 random triangles
    for (let i = 0; i < 100; i++) {
        const triangle = document.createElement("div");
        triangle.classList.add("triangle");
        
        // Randomize size, position, and rotation
        const size = Math.random() * 40 + 10;  // between 10px and 50px
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const rotation = Math.random() * 360;
        const delay = Math.random() * 5 + 's';
        
        // Apply styles
        triangle.style.width = `${size}px`;
        triangle.style.height = `${size}px`;
        triangle.style.left = `${x}px`;
        triangle.style.top = `${y}px`;
        triangle.style.animationDelay = delay;
        triangle.style.transform = `rotate(${rotation}deg)`;

        // Apply random colors
        const colors = ['#ff69b4', '#00bcd4', '#ff9800', '#673ab7', '#4caf50'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        triangle.style.borderBottom = `solid ${size / 2}px transparent`;
        triangle.style.borderLeft = `solid ${size / 2}px ${color}`;

        triangleContainer.appendChild(triangle);
    }
}

// Call function to generate triangles
generateTriangles();

// CSS Animation for triangles
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .triangle {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        animation: move 10s infinite ease-in-out;
    }

    @keyframes move {
        0% {
            transform: translate3d(0, 0, 0);
        }
        50% {
            transform: translate3d(${Math.random() * 500}px, ${Math.random() * 500}px, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }
`;
document.head.appendChild(styleSheet);
