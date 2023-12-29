let width = screen.width;
let height = screen.height;

document.getElementById('size').innerHTML = `Size: ${width} X ${height}`;
document.getElementById('asize').innerHTML = `Availabel size: ${screen.availWidth} X ${screen.availHeight}`;
document.getElementById('color').innerHTML = `Screen color depth: ${screen.colorDepth}`;
document.getElementById('pixel').innerHTML = `Screen pixel depth: ${screen.pixelDepth}`;
