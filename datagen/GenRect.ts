
var gCanvas:HTMLCanvasElement;
var gCtx:CanvasRenderingContext2D|null;

function initCanvas(width:number, height:number){

}

function genRect(){

}

function save(filePath:string, buff:ArrayBuffer){
    (window as any).fs.save(filePath,buff);
}

async function saveAsJpg(filePath:string){
    let blob:Blob = await new Promise(resolve=> gCanvas.toBlob((blob)=>resolve(blob!),'image/jpg',0.8) );
    let buffer = await blob.arrayBuffer();
    save(filePath, buffer)
    /*
    const url = gCanvas.toDataURL('image/jpg', 0.8);
    // remove Base64 stuff from the Image
    const base64Data = url.replace(/^data:image\/png;base64,/, "");
    fs.writeFile(filePath, base64Data, 'base64', () =>{
        console.log('end:',filePath);
    });    
    */
}

export function init(canvas:HTMLCanvasElement){
    gCanvas = canvas;
    let ctx = gCtx = gCanvas.getContext('2d');
    let width = gCanvas.width;
    let height = gCanvas.height;
    ctx?.clearRect(0,0,width,height);
    ctx!.fillStyle='red';
    ctx?.rect(10,10,20,10);
    ctx?.fill();
    saveAsJpg('../out/test.jpg')
}