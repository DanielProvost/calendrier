/*
function NumberDayPerMonth(month,year){
	nbreJours = 0
	if((month =='janvier') || (month == 'mars') || (month == 'mai') || (month == 'juillet') || (month == 'aout') || (month == 'octobre') || (month == 'decembre')) {
		console.log('le nombre de jours est 31')
		nbreJours = 31
	}else if((month == 'avril') || (month == 'juin') || (month == 'septembre') || (month == 'novembre')) {
		console.log('le nombre de jours est 30')
		nbreJours = 30
	}else if(month =='fevrier'){
		if((((year % 4) == 0) && ((year % 100) != 0)) || (((year % 400)== 0))){
			console.log('le nombre de jours est de 29')
			nbreJours = 29
		}else{
			console.log('le nombre de jours est 28')
			nbreJours = 28
		}
		
	}	
	return nbreJours
		

}
NumberDayPerMonth('fevrier','2000')
var nombreJourParMois = NumberDayPerMonth('fevrier','2003')
console.log(nombreJourParMois)





function AnnéeBissextileVrai(year){
	if (year < 4) return false
	
	return year % 400 == 0 || (year % 100 !=0 && year % 4 == 0)
}
function CompterJoursDepuisAnnée(fromYear, toYear){
	var calculDayPerYear = 0
	
	for(var i = fromYear; i < toYear;i++)
		if (AnnéeBissextileVrai(i)){calculDayPerYear = calculDayPerYear+366}
		else  {calculDayPerYear = calculDayPerYear+365}
	
	return calculDayPerYear
}
console.log(CompterJoursDepuisAnnée(2000,2013))
var jourTot = (CompterJoursDepuisAnnée(2000,2013))

function countDaySinceJanuary(month,year){
	nbredeJourstot = 0
	if(month == 'janvier'){
		nbredeJourstot = 0
	}else if (month == 'fevrier'){
		nbredeJourstot = 31	
	}else if (month == 'mars'){
		nbredeJourstot = 59
	}else if (month == 'avril'){
		nbredeJourstot = 90
	}else if(month == 'mai'){
		nbredeJourstot = 120
	}else if(month == 'juin'){
		nbredeJourstot = 151
	}else if(month == 'juillet'){
		nbredeJourstot = 181
	}else if(month == 'aout'){
		nbredeJourstot = 212
	}else if(month == 'septembre'){
		nbredeJourstot = 243
	}else if (month == 'octobre'){
		nbredeJourstot = 273
	}else if (month == 'novembre'){
		nbredeJourstot = 304
	}else if (month == 'decembre'){
		nbredeJourstot = 334
	}
	
	if((((year % 4) == 0) && ((year % 100) != 0)) || (((year % 400)== 0))){
		nbredeJourstot = nbredeJourstot +1
	}
	return nbredeJourstot
}
var tot = countDaySinceJanuary('fevrier','2013')
console.log(tot)

var calcul = (jourTot + tot)%7
console.log(calcul)
*/
//ici var calcul
for(let i = 0 ; i < 6 ; i++){
var bodyElt =document.querySelector('section')
var table = document.createElement('td')
bodyElt.appendChild(table)
table.textContent = 1
}


//ici var nombreJourParMois = NumberDayPerMonth('fevrier','2003')

for(let i = 1 ; i < 30 ; i++){
var bodyElt =document.querySelector('section')
var table = document.createElement('td')
bodyElt.appendChild(table)
table.textContent = i
}






