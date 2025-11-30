# Système de Vérification par Email

## Vue d'ensemble

Ce système implémente une vérification par email avec code à 6 chiffres lors de l'inscription d'un utilisateur. L'utilisateur doit saisir le code reçu pour activer son compte.

## Fonctionnalités

### Frontend (Angular)
- **Page de vérification** : Interface moderne pour saisir le code de vérification
- **Redirection automatique** : Après inscription, redirection vers la page de vérification
- **Gestion des erreurs** : Messages d'erreur clairs et informatifs
- **Bouton de renvoi** : Possibilité de demander un nouveau code
- **Design responsive** : Interface adaptée mobile et desktop
- **Animations** : Transitions fluides et feedback visuel

### Backend (Spring Boot)
- **Génération de codes** : Codes aléatoires à 6 chiffres
- **Expiration automatique** : Codes valides 24 heures
- **Stockage sécurisé** : Base de données avec gestion des états
- **API RESTful** : Endpoints pour vérification et renvoi
- **Validation** : Vérification des données d'entrée

## Architecture

### Composants Frontend
```
src/app/email-verification/
├── email-verification.component.ts    # Logique du composant
├── email-verification.component.html  # Template HTML
└── email-verification.component.css   # Styles CSS
```

### Composants Backend
```
src/main/java/com/example/project/
├── entite/
│   └── EmailVerification.java         # Entité JPA
├── request/
│   ├── EmailVerificationRequest.java  # DTO vérification
│   └── ResendVerificationRequest.java # DTO renvoi
├── repository/
│   └── EmailVerificationRepository.java # Interface JPA
├── service/
│   └── EmailVerificationService.java  # Logique métier
└── control/
    └── AuthController.java            # Contrôleur REST
```

## API Endpoints

### 1. Enregistrement (modifié)
```
POST /api/auth/register
Body: { username, email, password }
Response: { message, success, userId }
```
- Génère automatiquement un code de vérification
- Affiche le code dans la console du backend (simulation)

### 2. Vérification d'email
```
POST /api/auth/verify-email
Body: { email, verificationCode }
Response: "Email verified successfully!" ou "Invalid or expired verification code!"
```

### 3. Renvoi de code
```
POST /api/auth/resend-verification
Body: { email }
Response: "New verification code sent successfully!"
```

## Flux d'utilisation

1. **Inscription** : L'utilisateur crée un compte
2. **Génération** : Le backend génère un code de vérification
3. **Redirection** : L'utilisateur est redirigé vers la page de vérification
4. **Saisie** : L'utilisateur saisit le code reçu
5. **Vérification** : Le backend valide le code
6. **Activation** : Le compte est activé et l'utilisateur peut se connecter

## Configuration

### Base de données
Le système crée automatiquement la table `email_verification` avec :
- `id` : Identifiant unique
- `email` : Adresse email de l'utilisateur
- `verification_code` : Code à 6 chiffres
- `expiry_date` : Date d'expiration (24h)
- `used` : Statut d'utilisation
- `created_at` : Date de création

### Paramètres
- **Longueur du code** : 6 chiffres
- **Durée de validité** : 24 heures
- **Format** : Chiffres uniquement (0-9)

## Test et développement

### Fichier de test
`test-email-verification.html` permet de tester toutes les fonctionnalités :
1. Création de compte
2. Vérification d'email
3. Renvoi de code

### Console backend
Les codes de vérification sont affichés dans la console du backend :
```
=== EMAIL VERIFICATION CODE ===
Email: test@example.com
Code: 123456
Expires: 2024-01-15T10:30:00
===============================
```

## Sécurité

- **Codes uniques** : Un seul code actif par email
- **Expiration automatique** : Suppression des codes expirés
- **Validation** : Vérification des données d'entrée
- **CORS** : Configuration appropriée pour le développement

## Améliorations futures

### Envoi d'emails réels
Remplacer la simulation par un vrai service d'envoi d'emails :
```java
// Dans EmailVerificationService
@Autowired
private JavaMailSender emailSender;

private void sendVerificationEmail(String email, String code) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo(email);
    message.setSubject("Code de vérification");
    message.setText("Votre code de vérification est : " + code);
    emailSender.send(message);
}
```

### Templates d'emails
Utiliser Thymeleaf pour des emails HTML personnalisés.

### Limitation de taux
Ajouter une limitation pour éviter le spam de codes.

### Notifications push
Intégrer des notifications en temps réel.

## Démarrage rapide

1. **Backend** : Démarrer Spring Boot sur le port 8082
2. **Frontend** : Démarrer Angular avec `npm start`
3. **Test** : Ouvrir `test-email-verification.html` dans le navigateur
4. **Vérification** : Suivre le flux d'inscription → vérification

## Dépannage

### Erreurs communes
- **Port 8082** : Vérifier que le backend est démarré
- **Base de données** : Vérifier la connexion H2/MySQL
- **CORS** : Vérifier la configuration des origines autorisées

### Logs
Vérifier la console du backend pour :
- Codes de vérification générés
- Erreurs de validation
- Problèmes de base de données
