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

    @property(cc.Label)
    label: cc.Label = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    recorderManager: Object = null;

    start () {


        if(window.wx == undefined || !window.wx){
            window['wx']={
                getRecorderManager:function(){
                    return { onStart:()=>{},
                    onPause:()=>{},
                    onStop:()=>{},
                    stop:()=>{},
                    start:()=>{},
                    onFrameRecorded:()=>{}};
                }
            }
        }
        this.recorderManager = wx.getRecorderManager();
        // console.log(wx)
        this.node.on(cc.Node.EventType.TOUCH_START,function(){
            this.started();
        },this)
        this.node.on(cc.Node.EventType.TOUCH_END,function(){
            this.recorderManager.stop();
        },this)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(){
            this.recorderManager.stop();
        },this)
        this.recorderManager.onStart(() => {
            this.label.string = "开始中"
            console.log('recorder start')
        })
        this.recorderManager.onPause(() => {
            this.label.string = "已暂停"
        console.log('recorder pause')
        })
        this.recorderManager.onStop((res) => {
            this.label.string = "已结束"
        console.log('recorder stop', res)
        const { tempFilePath,duration,fileSize } = res;
            
        })
        this.recorderManager.onFrameRecorded((res) => {
            this.label.string = "已达到最大大小"
        const { frameBuffer } = res
        console.log('frameBuffer.byteLength', frameBuffer.byteLength)
        })
    
            
    }
    started(){
        const options = {
            duration: 10000,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 192000,
            format: 'aac',
            // frameSize: 50
            }
        this.recorderManager.start(options);
    }
    // update (dt) {}
}
