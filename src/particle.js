let _size = 2;
let _diam = 50;
class Particle{

    static get size() { 
        return _size; 
    }

    static set size(value) { 
        _size = value; 
    }

    static get diam() { 
        return _diam; 
    }

    static set diam(value) { 
        _diam = value; 
    }

    constructor(canvas){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random() > 0.5 ? Math.random() : -Math.random();
        this.speedY = Math.random() > 0.5 ? Math.random() : -Math.random();
        this.angleX = Math.random() > 0.5 ? Math.random() : -Math.random();
        this.angleY = Math.random() > 0.5 ? Math.random() : -Math.random();
    }

    move(canvas){
        this.x += this.speedX + this.angleX;
        this.y += this.speedY + this.angleY;

        if(this.x < 0 || this.x > canvas.width){
            let sign = this.x < 0 ? 1 : -1;
            this.angleX = Math.random() * 2 * sign;
            this.speedX = -this.speedX;
        } 
        if(this.y < 0 || this.y > canvas.height){
            let sign = this.y < 0 ? 1 : -1;
            this.angleY = Math.random() * 2 * sign;
            this.speedY = -this.speedY;
        } 
    }

    update(canvas){
        
    }

    toCenter(point){
        if(!point.otherAttraction){
            const pX = point.x;
            const pY = point.y;
            const dX = this.x-pX;
            const dY = this.y-pY;
            const dist = Math.sqrt(dX * dX + dY * dY);
    
            const a = Math.atan2(dY, dX);
            const velocity = dist / 3;
    
            const magnitudeX = Math.random() * -10 * Math.cos(a);
            const magnitudeY = Math.random() * -10 * Math.sin(a);
            
            if(dist > _diam){
                this.x += magnitudeX;
                this.y += magnitudeY;
            }else{
                this.angleY = Math.random() > 0.5 ? Math.random() * 8 : -Math.random() * 8;
                this.angleX = Math.random() > 0.5 ? Math.random() * 8 : -Math.random() * 8;
                this.x += this.speedX + this.angleX;
                this.y += this.speedY + this.angleY;
            }
        }else{
            const pX = point.x; 
            const pY = point.y; 
     
            this.x += this.speedX + this.angleX; 
            this.y += this.speedY + this.angleY; 
     
            if(this.x > pX){ 
                this.angleX = -Math.random() * 10 ; 
            }else{ 
                this.angleX = Math.random() * 10; 
            } 
     
            if(this.y > pY){ 
                this.angleY = -Math.random() * 10; 
            }else{ 
                this.angleY = Math.random() * 10; 
            } 
        }
    }

    toCenterBad(point){ 
        
    } 

    draw(ctx){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x,this.y,Particle.size,Particle.size);
    }
}

export default Particle;