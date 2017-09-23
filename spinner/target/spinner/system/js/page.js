/**
 * Created by FANGZI on 6/19/2017.
 * 纯页面js实现分页效果
 */
function initPagination(pno,tableID,pageID){
    var itable = document.getElementById(tableID);
    var num = $("#"+tableID+">tbody").find("tr").length;//表格所有行数(所有记录数)
    var totalPage = 0;//总页数
    var pageSize = 10;//每页显示行数
    //总共分几页
    if(num/pageSize > parseInt(num/pageSize)){
        totalPage=parseInt(num/pageSize)+1;
    }else{
        totalPage=parseInt(num/pageSize);
    }
    var currentPage = pno;//当前页数
    var lastPage = totalPage;//最后一页
    var startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31
    var endRow = currentPage * pageSize;//结束显示的行   40
    endRow = (endRow > num)? num : endRow;
    //遍历显示数据实现分页
    for(var i=1;i<(num+1);i++){
        var irow = itable.rows[i];
        if(i>=startRow && i<=endRow){
            irow.style.display = "";
        }else{
            irow.style.display = "none";
        }
    }
    var tempStr = "<ul class='pagination' style='margin: 0px;'>";
    if(currentPage>1){
        tempStr += "<li><a href='javascript:void(0);' onclick=\"initPagination("+(currentPage-1)+",'"+tableID+"','"+pageID+"');\">&laquo;</a></li>";
    }else{
        tempStr += "<li class='disabled'><a>&laquo;</a></li>";
    }
    if (currentPage - 1 >= 4) {//前面至少4页
        tempStr += "<li><a href='javascript:void(0);' onclick=\"initPagination("+1+",'"+tableID+"','"+pageID+"');\">1</a></li>";//第一页
        tempStr += "<li class=\"" + "disabled" + "\"><span>...</span></li>";//省略号
        if (currentPage == lastPage) {//如果是最后一页
            tempStr += "<li><a href='javascript:void(0);' onclick=\"initPagination("+(currentPage-3)+",'"+tableID+"','"+pageID+"');\">"+(currentPage-3)+"</a></li>";//前三页
        }
        tempStr += "<li><a href='javascript:void(0);' onclick=\"initPagination("+(currentPage-2)+",'"+tableID+"','"+pageID+"');\">"+(currentPage-2)+"</a></li>";//前二页
        tempStr += "<li><a href='javascript:void(0);' onclick=\"initPagination("+(currentPage-1)+",'"+tableID+"','"+pageID+"');\">"+(currentPage-1)+"</a></li>";//前一页
    } else {
        for (var i = 1; i < currentPage; i++) {
            tempStr += "<li><a href='javascript:void(0);' onclick=\"initPagination("+i+",'"+tableID+"','"+pageID+"');\">"+i+"</a></li>";//前面不超过4页把前面的都显示出来
        }
    }
    tempStr += "<li class=\"active\"><a href='javascript:void(0);' onclick=\"initPagination("+currentPage+",'"+tableID+"','"+pageID+"');\">"+currentPage+"</a></li>";//加上当前页码
    if (lastPage - currentPage >= 4) {//后面至少4页
        tempStr += "<li><a href='javascript:void(0);' onclick=\"initPagination("+(currentPage+1)+",'"+tableID+"','"+pageID+"');\">(currentPage+1)</a></li>";//后一页
        tempStr += "<li><a href='javascript:void(0);' onclick=\"initPagination("+(currentPage+2)+",'"+tableID+"','"+pageID+"');\">"+(currentPage+2)+"</a></li>";//后二页
        if (currentPage == 1) {//如果是第一页
            tempStr += "<li><a href='javascript:void(0);' onclick=\"initPagination("+(currentPage+3)+",'"+tableID+"','"+pageID+"');\">"+(currentPage+3)+"</a></li>";//第三页
        }
        tempStr += "<li class=\"" + "disabled" + "\"><span>...</span></li>";//省略号
        tempStr += "<li><a href='javascript:void(0);' onclick=\"initPagination("+lastPage+",'"+tableID+"','"+pageID+"');\">"+lastPage+"</a></li>";//最后页
    } else {
        for (var i = currentPage + 1; i <= lastPage; i++) {
            tempStr += "<li><a href='javascript:void(0);' onclick=\"initPagination("+i+",'"+tableID+"','"+pageID+"');\">"+i+"</a></li>";//后面不超过4页把后面的都显示出来
        }
    }
    if(currentPage<totalPage){
        tempStr +="<li><a href='javascript:void(0);' onclick=\"initPagination("+(currentPage+1)+",'"+tableID+"','"+pageID+"');\" >&raquo;</a></li>";
    }else{
        tempStr += "<li class='disabled'><a>&raquo;</a></li>";
    }
    tempStr += "</ul>";
    document.getElementById(pageID).innerHTML = tempStr;
}