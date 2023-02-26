const currentDate = document.querySelector(".current-month");
daysTag = document.querySelector(".days")
prevNextIcon = document.querySelectorAll(".icons i");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth(),
currDate = date.getDate();

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const renderCalendar = () =>{ 
    let firstDayofMonth = new Date(currYear,currMonth,1).getDay(),
    lastDayofMonth = new Date(currYear,currMonth + 1,0).getDay(),
    firstDateofPrevMonth = new Date(currYear,currMonth,0).getDate(),
    lastDateofMonth = new Date(currYear,currMonth + 1,0).getDate();
    let litag = '';
    
    for (let i=firstDayofMonth ; i>0 ; i--){
        litag += `<li class="inactive">${firstDateofPrevMonth-i+1}</li>`;
    }
    for (let i=1 ; i <= lastDateofMonth; i++){
        if(i==currDate){
            litag += `<li class="active">${i}</li>`;
        }else{
            litag += `<li>${i}</li>`;
        }
    }
    for (let i=1 ; lastDayofMonth<6 ; lastDayofMonth++){
        litag += `<li class="inactive">${i}</li>`;
        i++;
    }
    currentDate.innerHTML =`${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = litag;
    
}



renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click',() => {
        if(icon.id == "prev"){
            currMonth -= 1;
            if (currMonth < 0){
                currMonth = 11;
                currYear -=1 ;
            }
        }else{
            currMonth += 1;
            if (currMonth > 11){
                currMonth = 0;
                currYear += 1 ;
            }
        }
        renderCalendar();
    })
})
