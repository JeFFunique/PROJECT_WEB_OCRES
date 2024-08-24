# Dashboard de cryptomonnaies

## Description
Ce projet est un dashboard de cryptomonnaies les affichant sous la forme de différents widgets et graphiques avec une actualisation temps réel.

## Fonctionnalités

- Affichage d'un ensemble de cryptos avec données temps réel
- Rechercher une crypto particulière
- Sélectionner une crypto et voir son cours sur les 6 derniers mois sous la forme d'un graphique en temps réel

## Technologies
- ReactJS
- NodeJS
- ExpressJS
- MongoDB(database)

## Utilisation

### Affichage widgets cryptos

On peut voir ici un ensemble de widgets qui affichent les données de différentes cryptos avec possibilité d'en rechercher une particulière.
![image](https://github.com/user-attachments/assets/f88f30bc-ea62-4ac9-967c-6247af4a223c)

### Graphique temps réel
On peut voir ici qu'en sélectionnant une crypto, le cours de la crypto sélectionnée sur la dernière année apparaît graphiquement actualisable en temps réel pour le graphique de gauche. Pour celui de droite, on a juste stocké un ensemble de valeurs de cryptos dans une database MongoDB avec une api restful CRUD pour ajouter, supprimer, update ses données de crypto,etc.... et fait une répartition générale de la valeur des cryptos avec ces données. 
![image](https://github.com/user-attachments/assets/05dd3a76-6972-4d87-8956-2c5b2464e167)









