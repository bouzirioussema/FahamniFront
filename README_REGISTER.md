# Ajout du champ Username dans le composant Register

## Modifications apportées

### Frontend (Angular)

1. **RegisterComponent** (`register.component.ts`)
   - Ajout du champ `username: string = ''`
   - Validation que le username n'est pas vide
   - Mise à jour de l'appel à `authService.register()` avec le username

2. **Template HTML** (`register.component.html`)
   - Ajout du champ input pour le username
   - Mise à jour de la validation du bouton submit

3. **CSS** (`register.component.css`)
   - Design moderne avec gradient de couleurs
   - Animations et effets de transition
   - Design responsive
   - États de focus et validation

4. **AuthService** (`AuthService.ts`)
   - Mise à jour de la méthode `register()` pour accepter le username

### Backend (Spring Boot)

1. **RegisterRequest** (`RegisterRequest.java`)
   - Nouvelle classe avec validation des champs
   - Username: 3-20 caractères
   - Email: validation email
   - Password: minimum 6 caractères

2. **AuthController** (`AuthController.java`)
   - Nouvelle méthode `POST /api/auth/register`
   - Vérification de l'unicité du username et email
   - Création d'un nouvel utilisateur avec le rôle STUDENT par défaut

3. **UserRepository** (`UserRepository.java`)
   - Ajout de la méthode `findByUsername(String username)`

## Test de l'implémentation

### 1. Démarrer le backend Spring Boot
```bash
cd Edustage_Spring-main
mvn spring-boot:run
```
Le backend sera accessible sur `http://localhost:8089`

### 2. Démarrer le frontend Angular
```bash
cd Edustag_Angluar-main
npm start
```
Le frontend sera accessible sur `http://localhost:4200`

### 3. Tester l'enregistrement
1. Aller sur `http://localhost:4200/register`
2. Remplir le formulaire avec :
   - Username: testuser
   - Email: test@example.com
   - Password: password123
   - Confirm Password: password123
3. Cliquer sur "Register"
4. Vérifier que l'utilisateur est créé avec succès

### 4. Vérifier la base de données
L'utilisateur devrait être créé avec :
- Username: testuser
- Email: test@example.com
- Role: STUDENT
- Password: encodé avec BCrypt

## Fonctionnalités ajoutées

- ✅ Champ username obligatoire
- ✅ Validation de l'unicité du username
- ✅ Validation de l'unicité de l'email
- ✅ Design moderne et responsive
- ✅ Animations et transitions
- ✅ Gestion des erreurs et succès
- ✅ Intégration complète frontend/backend

## Structure de l'API

### POST /api/auth/register
**Request Body:**
```json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
```

**Response:**
- Succès: `200 OK` avec message "User registered successfully!"
- Erreur: `400 Bad Request` avec message d'erreur approprié

## Notes techniques

- Le username doit être unique dans la base de données
- L'email doit être unique dans la base de données
- Le password est automatiquement encodé avec BCrypt
- Le rôle par défaut est STUDENT
- Validation côté client et serveur
