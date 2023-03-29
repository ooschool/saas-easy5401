// filter click function
filterList = [];

$('.filter__item').click(function () { 
    $(this).toggleClass('filter__item--active');
    toggleArrayItem(filterList ,$(this).attr('value'))
    console.log(filterList);
    filterSenarios(filterList);
});

function toggleArrayItem(a, v) {
    var i = a.indexOf(v); //indexOf 訓找陣列中是否有重複值，有則回傳陣列位置，無責回傳-1
    if (i === -1)
        a.push(v); //沒有出現，push加入陣列
    else
        a.splice(i,1); //有出現，splice將重複值移除
}

function filterSenarios(a){
    var content = '篩選自：';
    var num = 1 ;
    if (a.length === 0){
        $('.filter__text').html('所有結果')
    } else {
        a.forEach(i => {
            if (num < a.length) { //最後一個值不用“, ”
                content = content + i +', ';
                num ++;
            } else {
                content = content + i
                num = 0;
            }
            
        }); 
        $('.filter__text').html(content + '的結果');
    }
    
}
