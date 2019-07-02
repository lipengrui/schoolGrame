// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;


@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:
    gq1: object = {
        w:0,
        h:0,
        x:0,
        y:0
    };
    tiledGroups: cc.TiledObjectGroup[] = null;
    nullAnim: cc.Animation = null;
    nullNode: cc.Node = null;

    onLoad () {
        let titledMap =this.getComponent(cc.TiledMap);
        this.tiledGroups = titledMap.getObjectGroup("mapObj");
        let point =this.tiledGroups.getObjects()[0];
        this.gq1.w = point.height;
        this.gq1.h = point.height;
        this.gq1.x = point.x;
        this.gq1.y = point.y;
        
    }

    start () {
        this.nullNode = cc.find("Canvas/map/null");
        this.nullNode.active = false;
        this.nullAnim = cc.find("Canvas/map/null").getComponent(cc.Animation);
        this.nullAnim.on("stop",function(type,state){
            if(state.name == 'TanB'){
                this.active = false;
            }else if(state.name == "Tan"){
                this.active = true;
            }
        },this.nullNode)
        this.node.on(cc.Node.EventType.TOUCH_END,(e)=>{
            // console.log(this.tiledGroups.getObjects()[0])
            let point = {x:0,y:0,w:0,h:0};
            point.x = e.touch._point.x/this.node.scaleX;
            point.y = e.touch._point.y/this.node.scaleY;
            // console.log(point.x/this.node.scaleX,point.y/this.node.scaleY,"===",this.gq1.x,this.gq1.y)
            if(this.ifCrash(this.gq1,point) && this.nullNode.active == false){
                this.nullNode.active = true;
                console.log(1231)
                this.nullAnim.play("Tan");
            }
        })
    }
    ifCrash(tag,point){
        if(point.x >=Number(tag.x) && point.x<=Number(tag.x)+Number(tag.w)
        && point.y <=Number(tag.y) && point.y>=Number(tag.y)-Number(tag.h)){
            return true;
        }else{
            return false;
        }
    }
    // update (dt) {}
}
