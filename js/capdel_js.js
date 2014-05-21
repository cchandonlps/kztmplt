
function surligne(champ, erreur) {
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifTel(champ) {
	var cp = parseInt(champ.value);
   if( isNaN(cp) || champ.value.length < 10 ) {
      surligne(champ, true); 
      return false;
   }
   else {
      surligne(champ, false);
      return true;
   }
}
function verifMail(champ) {
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value)) {
      surligne(champ, true); 
      return false;
   }
   else {
      surligne(champ, false);
      return true;
   }
}
function verifChamptxt(champ) {
   if(champ.value == "") {
      surligne(champ, true);
      return false;
   }
   else {
      surligne(champ, false);
      return true;
   }
}
function verifSelect(champ) {
   if(champ.selectedIndex == 0) {
      surligne(champ, true);
      return false;
   }
   else {
      surligne(champ, false);
      return true;
   }
}

// Recherche actualités
function clearChamps(c) {
	if( c.value=="Recherche" || c.value=="Entrez votre E-mail" ) {
		c.value="";
	}
	surligne(c, false);
}

function verifRecherche(f) {
	 if(f.recherche.value == "" || f.recherche.value =="Recherche" ) return true;
	 else return true;
}

function verifNews(f) {
	document.getElementById('erreurmsg').innerHTML = "";
	document.getElementById('bt_submit').disabled = true;
	document.getElementById('erreurmsg').style.display = "none";
	 var mailOk = verifMail(f.email);
	 if( mailOk )
      return true;
   else
   {
	   document.getElementById('erreurmsg').innerHTML += '- Vous devez saisir une adresse email valide '; 
      //alert("Veuillez remplir correctement tous les champs");
	  document.getElementById('erreurmsg').style.display = "block";
	  document.getElementById('bt_submit').disabled = false;
      return false;
   }
}
function verifContact(f) {
	document.getElementById('erreurmsg').innerHTML = "";
	document.getElementById('bt_submit').disabled = true;
	document.getElementById('erreurmsg').style.display = "none";
	var messageOk = verifChamptxt(f.message);
	var objetOk = verifChamptxt(f.objet);
	var mailOk = verifMail(f.email);
	var telOk = verifTel(f.telephone);
	var paysOk = verifSelect(f.pays);
	var villeOk = verifChamptxt(f.ville);
	var activiteOk = verifChamptxt(f.activite);
	var societeOk = verifChamptxt(f.societe);
	var prenomOk = verifChamptxt(f.prenom);
	var nomOk = verifChamptxt(f.nom);
	var civiliteOk = verifSelect(f.civilite);
	 if( messageOk && objetOk && mailOk && telOk && paysOk && villeOk && activiteOk && societeOk && prenomOk && nomOk && civiliteOk )
      return true;
   else
   {
	   document.getElementById('erreurmsg').innerHTML += "Veuillez remplir correctement tous les champs : ";
	   if(!civiliteOk ) document.getElementById('erreurmsg').innerHTML += "- Civilité ";
	   if(!nomOk ) document.getElementById('erreurmsg').innerHTML += "- Nom ";
	   if(!prenomOk ) document.getElementById('erreurmsg').innerHTML += "- Prénom ";
	   if(!societeOk ) document.getElementById('erreurmsg').innerHTML += "- Société ";
	   if(!activiteOk ) document.getElementById('erreurmsg').innerHTML += "- Activité ";
	   if(!villeOk ) document.getElementById('erreurmsg').innerHTML += "- Ville ";
	   if(!paysOk ) document.getElementById('erreurmsg').innerHTML += "- Pays ";
	   if(!telOk ) document.getElementById('erreurmsg').innerHTML += '- Vous devez saisir un numéro de téléphone valide '; 
	   if(!mailOk ) document.getElementById('erreurmsg').innerHTML += '- Vous devez saisir une adresse email valide '; 
	   if(!objetOk ) document.getElementById('erreurmsg').innerHTML += "- Objet ";
	   if(!messageOk ) document.getElementById('erreurmsg').innerHTML += "- Message ";
      //alert("Veuillez remplir correctement tous les champs");
	  document.getElementById('erreurmsg').style.display = "block";
	  document.getElementById('bt_submit').disabled = false;
      return false;
   }
}
//---------------------------------------------- ONGLETS RESEAU COLLECTE----------------------------

function affOnglet(num){
	if( num ==1 ) {
		document.getElementById('res_o2').style.display='none';
		document.getElementById('res_o1').style.display='block';
	} else {
		document.getElementById('res_o2').style.display='block';
		document.getElementById('res_o1').style.display='none';
	}
}

