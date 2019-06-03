//on commence par le calcul du nombre de jours
//a partie du 01012000 jusqu'au mois/année à afficher
//1ere fonction Bissextile renvoi boleen
//boucle calculant le nombre de  jours par année sur un ecart donné
var button = document.getElementById('button-go')
button.addEventListener('click',function(){
	checkTable()
	
	var month = document.getElementById('month').selectedIndex;
	var year = document.getElementById('year').value	
	var bodyElt =document.querySelector('section')
	var tableCont = document.createElement('table')
	tableCont.id = 'check'
	bodyElt.appendChild(tableCont)

	function calc(){
		var jourTot = (CountDaySinceYear(year))
		var tot = countDaySinceJanuary(month,year)
		var calcul = ((jourTot + tot)%7)-2
		if(calcul == -1){
			calcul = 6
		}else if(calcul == -2){
			calcul = 5
		}
		return calcul
	}
	var calcul = calc()

			
	function createDayWeek(){
		var ligneSem = document.createElement('tr');
		tableCont.appendChild(ligneSem);
		var tabsem = ['lun','mar','mer','jeu','ven','sam','dim']
		for(let i =0; i < tabsem.length;i++){
			var caseJour = document.createElement('td')
			ligneSem.appendChild(caseJour)
			caseJour.textContent = tabsem[i]		
		}
	}
	createDayWeek()
		
	function findDayBegin(){	
		var nbCaseTot = 0;
		var ligneBlanc = document.createElement('tr')
		tableCont.appendChild(ligneBlanc);
		for(let i = 0 ; i < calcul ; i++){			
			var bodyElt =document.querySelector('section')
			var caseBlanc = document.createElement('td')
			ligneBlanc.appendChild(caseBlanc)
			caseBlanc.textContent = 1
			caseBlanc.classList.add('white')
			nbCaseTot ++
		}
		return nbCaseTot
	 }
	nbCaseTot = findDayBegin()


	function viewCalendar(){
		var nombreJourParMois = NumberDayPerMonth(month,year)
		var ligneCourante = document.createElement('tr')
		tableCont.appendChild(ligneCourante);
		//boucle permettant l'affichage du calendrier
		for(let i = 1 ; i <= nombreJourParMois ; i++){		
			if(nbCaseTot % 7 == 0) {
				var ligneCourante = document.createElement('tr')
				tableCont.appendChild(ligneCourante);
			}
		var caseCourante = document.createElement('td')
		ligneCourante.appendChild(caseCourante)
		caseCourante.textContent = i
		nbCaseTot ++
		}
	}
	viewCalendar()
})//Fin de l'addEventListener







