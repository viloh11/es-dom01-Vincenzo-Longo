# ESERCIZIO 1

## Crea un oggetto persona con le seguenti caratteristiche:
- nome
- cognome
- età
- un metodo che permetta di salutare

# ESERCIZIO 2

## Crea un oggetto rubrica con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
- mostrare tutti i contatti dell’agenda
- mostrare un singolo contatto
- eliminare un contatto dall’agenda
- aggiungere un nuovo contatto
- modificare un contatto esistente  

Suggerimento:
let rubrica = {
  'contacts': [
      {'nome': 'Angela', 'telefono': '3331111111'},
      {'nome': 'Annalisa', 'telefono': '3332222222'},
      {'nome': 'Paola', 'telefono': '3333333333'},
      {'nome': 'Emilia', 'telefono': '3334444444'}
  ],
  ...
}

# ESERCIZIO 3

## Lavora con il DOM:
- crea una pagina HTML con 3 paragrafi e 3 bottoni. 
- Il primo bottone dovrà cambiare il colore del testo dei paragrafi in modo casuale.
ogni paragrafo dovrà avere un colore diverso. 
= il secondo dovrà rendere il testo dei paragrafi in grassetto. 
- il terzo dovrà far scomparire e ricomparire i paragrafi.

TIPS:
ricordati della proprietà display: none in CSS!
i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come.

# ESERCIZIO 4

## Crea un file html con le seguenti caratteristiche:
- un input per il titolo
- una textarea per inserire un paragrafo
- un bottone per creare l’articolo
- Al click sul bottone, crea un articolo popolato dai valori prelevati dai due input

- inserire nell’articolo anche la data di pubblicazione tramite questa istruzione → Date - JavaScript | MDN
let date = new Date();
let formatDate = date.toLocaleDateString()


### EXTRA:
- fai in modo che, cliccando sul bottone crea articolo, se titolo o paragrafo sono vuoti, esca un alert che informi l’utente del problema
- fai in modo che, una volta creato l’articolo, gli input vengano puliti
