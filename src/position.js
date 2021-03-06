const _directions=["north","east","south","west","north"];
const randomDirection=function() {
  let index=generateRandomNumberBetween(0,_directions.length);
  return _directions[index];
}
const generateRandomPosition=function(maxX,maxY) {
  let x=generateRandomNumberBetween(0,maxX);
  let y=generateRandomNumberBetween(0,maxY);
  let direction=randomDirection();
  return new Position(x,y,direction);
}
const Position=function(x,y,direction) {
  this.x=x;
  this.y=y;
  this.direction=direction;
}

const actions={};
actions.east=(x,y)=>[x+1,y];
actions.west=(x,y)=>[x-1,y];
actions.north=(x,y)=>[x,y-1];
actions.south=(x,y)=>[x,y+1];

Position.prototype={
  next=function() {
    let nextCoord=actions[this.direction](this.x,this.y);
    return new Position(nextCoord[0],nextCoord[1],this.direction);
  },
  turnLeft=function() {
    let currentIndex=_directions.lastIndexOf(this.direction);
    let newDirection=_directions[currentIndex-1];
    return new Position(this.x,this.y,newDirection);
  },
  turnRight=function() {
    let currentIndex=_directions.indexOf(this.direction);
    let newDirection=_directions[currentIndex+1];
    return new Position(this.x,this.y,newDirection);
  },
  isSameCoordAs=function(other) {
    return this.x==other.x && this.y==other.y;
  },
  getCoord=function() {
    return [this.x,this.y];
  },
  getX=function(){return this.x;},
  getY=function(){return this.y;},
  goNorth=function(){
    return new Position(this.x,this.y,"north");
  },
  goEast=function(){
    return new Position(this.x,this.y,"east");
  },
  goSouth=function(){
    return new Position(this.x,this.y,"south");
  },
  goWest=function(){
    return new Position(this.x,this.y,"west");
  },
  getDirection=function(){
    return this.direction;
  }
}
