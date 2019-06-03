var monthList = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
function NumberDayPerMonth(month, year) {

	if(month == 1 && AnneeBissextileVrai(year)){
		return 29;
	}
	return monthList[month]
}
function countDaySinceJanuary(month, year){	

	var nbJour = 0;
	var cptMois;
	for(cptMois = 0; cptMois < month; cptMois ++) {
		
		nbJour += monthList[cptMois];
	}

	if(AnneeBissextileVrai(year) && month > 1){
		nbJour ++;
	}
	return nbJour
}
function AnneeBissextileVrai(year){
	if (year < 4) return false
	
	return year % 400 == 0 || (year % 100 !=0 && year % 4 == 0)
}
function CountDaySinceYear(year){
	var calculDayPerYear = 0
	
	for(var i = 2000; i < year;i++)
		if (AnneeBissextileVrai(i)){calculDayPerYear = calculDayPerYear+366}
		else  {calculDayPerYear = calculDayPerYear+365}
	
	return calculDayPerYear
}
function checkTable(){
	var check =	document.getElementById('check')
	if (check && typeof check != 'undefined'){
		check.parentNode.removeChild(check)
	}
}
