// Object Creation

let person = {
    fullname : 'Ahmar',
    age : '23'
};

let rectangle = {
    length : 25,
    breadth : 10,

    area : function(){
        console.log(this.length * this.breadth);
    }
};

rectangle.area();

// Factory Function : Object Creation Method

function createSquare(){
    let square = {
        side : 5,

        areaSq : function(){
            console.log(this.side * this.side);
        }
    };
    return square;
}

let square1 = createSquare();

square1.areaSq();


// Constructor Function

function createCuboid(length,breadth,height){
    let cuboid = {
        length : length,
        breadth : breadth,
        height : height,

        volumeCuboid : function(){
            console.log(this.length * this.breadth * this.height);
        }
    };
    return cuboid;
}

let cuboid1 = createCuboid(10,2,5);

cuboid1.volumeCuboid();

function Rectangular(){
    this.length = 1,
    this.breadth = 2,

    this.areaRct = function(){
        console.log('use of new keyword');
    }
}

let rc1 = new Rectangular();
rc1.areaRct();


// For-in Loop
let rctt = {
    lngth : 2,
    brdth : 1
};

for(let key in rctt){
    console.log(key ,' : ', rctt[key]);
}
