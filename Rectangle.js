class Rectangle {
    constructor(w,h) {
        this.width = +w;
        this.height = +h;
    }

    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }

    getArea(){
        return this.width*this.height;
    }

    getPerimeter(){
        return 2*(this.width+this.height);
    }

    draw(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.rect(0,50,this.width*50,this.height*50);
        pen.fillStyle = 'red';
        pen.fill();
        pen.closePath();
    }
}
