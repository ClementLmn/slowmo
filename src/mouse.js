import map from './map';

let _size = 5;
let _diam = 50;
class Mouse{

    static get x() { 
        return _x; 
    }

    static get y() { 
        return _y; 
    }

    static get speed() { 
        return _speed; 
    }

    static get dX() { 
        return _dX; 
    }

    static get dY() { 
        return _dY; 
    }

    static get velX() { 
        return _velX; 
    }

    static get velY() { 
        return _velY; 
    }

    constructor(){
        this.x = 0;
        this.y = 0;
        this.velX = 0;
        this.velY = 0;
        this.dX = 0;
        this.dY = 0;
        this.speed = 0;
    }

    update(canvas){
        
    }

    draw(ctx){
        // 82 - 0 /  0 - 120
        
        const hueValue = map(this.speed, 0, 250, 82, 0);
        const color = `hsl(${hueValue}, 100%, 40%)`;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI*2, true); 
        ctx.closePath();
        ctx.fill();
        console.log(this.speed);
        
    }
}

export default Mouse;