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

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
        let e1 = cc.instantiate(this.labelText);
        
        // this.node.addComponent("Text");
        
        e1.x = 0;
        e1.y = 0;
        
        let e1Null = e1.getChildByName("null");
        
        
        let newlab = e1Null.getChildByName("newlab");
        let nullX = (e1Null.width/2);
        newlab.x = nullX;
        e1Null.x = -nullX;
        e1.setParent(this.node);
        
        // e1Null.setPosition(,e1Null.y)
        setInterval(function(){
            e1.string = "123123"
            e1Null.width+= 10;
        },300)
        console.log(e1,e1Null)
        // e1Null.schedule(function() {
        //     // 这里的 this 指向 component
        //    console.log(111)
        //    console.log(this)
        // }, 3 );
    }

    // update (dt) {}
}
