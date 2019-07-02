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
    animation: cc.Animation = null;
    nullAnim: cc.Animation = null;
    
    onLoad () {
        this.animation = this.node.getComponent(cc.Animation);
        // console.log(cc.find("/Canvas/map/null"))
        this.nullAnim = cc.find("Canvas/map/null").getComponent(cc.Animation);
        this.node.on("click",(e)=>{
            this.nullAnim.play("TanB")
        })
    }

    start () {

    }

    // update (dt) {}
}
