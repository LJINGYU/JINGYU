/**
 * Created by Bertram on 2017/4/14.
 */
/**
 * ueditor配置板块和自定义上传
 * @param id 显示ueditor组件的
 * @param heightid ueditor显示的高度
 * @param basePath 上下文
 */
function uploadImage(id,height,basePath) {
    var editor = new UE.ui.Editor({initialFrameHeight:height,initialFrameWidth:'100%',scaleEnabled:true});
    editor.render(id);
    UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
    UE.Editor.prototype.getActionUrl=function(action){
        if (action == 'uploadimage' ||action == 'uploadscrawl' || action == 'uploadimage') {
            return basePath + "editor/upload";
        } else if(action =='uploadvideo') {

        } else if(action == 'listimage'){

        } else{
            return this._bkGetActionUrl.call(this, action);
        }
    }
}
