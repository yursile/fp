function initDetail(index){
    var singleData = dongjian[index-1];
    var html = template('detailTPL', singleData);
    // document.getElementsByClassName('Response')[0].innerHTML = html;
    $(".detailContainer").html(html);
    $(".detailContainer").show();
}



myScroll = new IScroll('.article_box',{scrollbars: true});