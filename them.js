const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-gray-900', 'bg-[#F4F7FF]'];
let colorIndex = 0;

document.getElementById('theme-btn').addEventListener('click', function () {
    const body = document.getElementById('body');

    body.classList.remove(...colors);

    body.classList.add(colors[colorIndex]);

    colorIndex = (colorIndex + 1) % colors.length;
});
