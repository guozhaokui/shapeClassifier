var gCanvas;
var gCtx;
function initCanvas(width, height) {
}
function genRect() {
}
function save(filePath, buff) {
    window.fs.save(filePath, buff);
}
async function saveAsJpg(filePath) {
    let blob = await new Promise(resolve => gCanvas.toBlob((blob) => resolve(blob), 'image/jpg', 0.8));
    let buffer = await blob.arrayBuffer();
    save(filePath, buffer);
    /*
    const url = gCanvas.toDataURL('image/jpg', 0.8);
    // remove Base64 stuff from the Image
    const base64Data = url.replace(/^data:image\/png;base64,/, "");
    fs.writeFile(filePath, base64Data, 'base64', () =>{
        console.log('end:',filePath);
    });
    */
}
export function init(canvas) {
    gCanvas = canvas;
    gCtx = gCanvas.getContext('2d');
    saveAsJpg('./test.jpg')
}
