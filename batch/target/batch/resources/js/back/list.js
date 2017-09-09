

/**
 * 修改当前页码，调用后台重新查询
 */
function changeCurrentPage(currentPage) {
    $("#currentPage").val(currentPage);
    $("#mainForm").submit();
}