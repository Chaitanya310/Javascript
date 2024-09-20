interface Rectangle{
    h:number,
    w: number,
}

interface ColorRectangle extends Rectangle{
    color:string;
}

const colRect:ColorRectangle={
        
    h:20,
    w:20,
    color:'Blue',
};

console.log(colRect);
