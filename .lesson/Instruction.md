# ⚒️ Exercice #11 - Fetch API


## Objectifs du projet
Utiliser l'API Fetch en JavaScript pour interroger l'API **Restcountries** fournissant des informations sur les pays du monde.

Vu que ce projet se construit from scratch, vous pouvez développer en local puis le mettre ici une fois que vous finissez.


## Instructions

1. ### Interface Utilisateur
   
- Créez une page HTML simple avec un bouton "Afficher la liste des pays".
- Prévoyez un espace sous le bouton pour afficher la liste des pays.

2. ### Requête à l'API 
- Utilisez l'API Fetch pour interroger l'API “Restcountries” (Endpoint : https://restcountries.com/v3.1/all).
- Utilisez la méthode `.then()` pour gérer la réponse de l'API.

3. ### Affichage des Résultats
   
- Affichez simplement la liste des cartes qui contiennent le nom et drapeau de tous les pays renvoyés par l'API.
- Vous trouverez le template des cartes dans le fichier DOC dans google classroom.

4. ### Gestion des Erreurs

- Affichez un message d'erreur simple à la place de la liste des pays en cas d'échec de la requête.
- Utilisez la méthode `.catch()` pour capturer l’erreur.