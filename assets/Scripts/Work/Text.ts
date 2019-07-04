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

    @property(cc.Prefab)
    labelText:cc.Prefab = null;

    labelNode: cc.Node = null;
    nullNode: cc.Node = null;
    newLabelNode : cc.Node = null;
    labelOK: boolean = false;
    // LIFE-CYCLE CALLBACKS:

    labelWidth: Number = 0;
    // onLoad () {}

    start () {
        
        this.labelNode = cc.instantiate(this.labelText);
        
        // this.node.addComponent("Text");
        
        this.labelNode.x = 0;
        this.labelNode.y = 0;
        
        this.nullNode = this.labelNode.getChildByName("null");
        
        
        this.newLabelNode = this.nullNode.getChildByName("newlab");
        let nullX = (this.nullNode.width/2);
        this.newLabelNode.x = nullX;
        this.nullNode.x = -nullX;
        this.setLabel('66666666');
        this.labelNode.setParent(this.node);
        var timeCallback = function (dt) {
            this.nullNode.width = 0;
          }
        this.scheduleOnce(timeCallback, 0.001);
        setTimeout(()=>{
            this.setOk();
        },2000)

    }
    setOk(){
        this.labelOK = true;
        this.labelWidth = this.labelNode.width;
        cc.tween(this.nullNode)
            .to(1, {width: this.labelWidth},{easing:'quadInOut'})
            .call(() => { console.log('This is a callback'); })
            .start();
    }
    setLabel(str:string){
        this.labelNode.getComponent(cc.Label).string = str;
        this.newLabelNode.getComponent(cc.Label).string = str;
    }

    update (dt) {
        
        // if(this.labelOK&& (this.nullNode.width <= this.labelWidth)){
        //     console.log(dt)
        //     this.nullNode.width += 5;
        // }
        // rr.width = 0;
    }
}
