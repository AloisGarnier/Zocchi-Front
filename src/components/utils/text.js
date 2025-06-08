import React from "react";

let texts = {}

texts.title = ["Zocchi", "Zocchi"]
texts.charSheet = ["Fiche de personnage", "Character sheet"]
// Presentation
texts.createchar = ["Fiches de personnage", "Character sheets"]
texts.foes = ["Combat et ennemis", "Fight and foes"]
texts.objects = ["Inventaire et quêtes", "Inventory and quests"]
texts.maps = [ "Cartes interactives", "Interactive maps"]
texts.other = [" Et bien d'autres choses...", " And much more to come..."]
texts.signupjoin = ["Inscrivez-vous !", "Sign up to join !"]
texts.welcome = ["Bienvenue, ", "Welcome, "]
// Menu principal
texts.about = ["Présentation", "About"]
texts.mentionslegales = ["Mentions légales", "Legal disclaimer"]
texts.news = ["Nouveautés", "News"]
texts.account = ["Mon compte", "My account"]
texts.campaigns = ["Mes campagnes", "My campaigns"]
texts.newcampaign = ["Nouvelle campagne", "New campaign"]
texts.joincampaign = ["Rejoindre une campagne", "Join campaign"]
texts.accountparam = ["Paramètres de compte", "Account options"]
texts.connection = ["Connexion", "Log in"]
texts.accountcreate = ["Créer un compte", "Sign up"]
texts.deconnexion = ["Déconnexion", "Log out"]
texts.help = ["Aide", "Help"]
// Menu campagne
texts.char = ["Personnages", "Characters"]
texts.index = ["Index", "Index"]
texts.events = ["Événements", "Events"]
texts.lieux = ["Lieux", "Locations"]
texts.combat = ["Combat", "Fight"]
texts.dice = ["Lancer de dés", "Roll the dice"]
texts.options = ["Paramètres", "Options"]
// Campagnes
texts.search = ["Rechercher", "Search"]
texts.create = ["Créer", "Create"]
texts.join = ["Rejoindre", "Join"]
texts.askdm = ["Demandez au maître du jeu le code à 5 caractères de la campagne que vous souhaitez rejoindre"]
texts.code = ["Code", "Code"]
texts.charName = ["Le nom de votre personnage", "Your character's name"]
texts.createnewcampaign = ["Créez une nouvelle campagne dont vous êtes le maître du jeu", "Create a new campaign in which you are the dungeon master"]
texts.name = ["Nom", "Name"]
texts.joincampaign1 = ["Vous souhaitez rejoindre la campagne \"", "Do you want to join the campaign \""]
texts.joincampaign2 = ["\" gérée par ", "\" whose dungeon master(s) is(are) "]
texts.joincampaign3 = [" ?", "?"]
texts.connectoncampaign = ["Vous jouez actuellement à la campagne : ", "You are currently playing campaign: "]
texts.campaignname = ["Nom de la campagne : ", "Campaign name: "]
texts.dungeonmaster = ["Maître du jeu", "Dungeon master"]
// Gestion campagnes
texts.player = ["Joueur", "Player"]
texts.character = ["Personnage", "Character"]
texts.remove = ["Supprimer", "Remove"]
// Connexion
texts.connexion = ["Se connecter", "Login"]
texts.validate = ["Valider", "Connect"]
texts.username = ["Pseudo", "Username"]
texts.email = ["Adresse mail", "E-mail address"]
texts.password = ["Mot de passe", "Password"]
texts.alreadyaccount = ["Vous avez déjà un compte ?", "You already have an account"]
texts.wantcreateaccount = ["Vous souhaitez en créer un ?", "You want to create an account"]
texts.wronglogin = ["Ce compte n'existe pas", "This account doesn't exist"]
// Fiche personnage
texts.creationperso = ["Création de personnage", "Sheet template"]
texts.details = ["Détails", "Details"]
texts.elements = ["Éléments", "Items"]
texts.label = ["Titre", "Label"]
texts.labeltooltip = ["Titre fixe", "Fix label"]
texts.textfield = ["Texte", "Text"]
texts.textfieldtooltip = ["Champ de texte", "Text field"]
texts.texttofill = ["A remplir par les joueurs", "To fill by players"]
texts.largetextfield = ["Texte étendu", "Texte area"]
texts.numfield = ["Num", "Num"]
texts.numfieldtooltip = ["Champ numérique", "Numeric field"]
texts.numfieldbonustooltip = ["Champ numérique avec bonus", "Numeric field with bonus"]
texts.numfieldovertooltip = ["Champ numérique avec maximum", "Numeric field with maximum"]
texts.formulatooltip = ["Dépend d'autres champs", "Depends on other fields"]
texts.fieldname = ["Libellé", "Field name"]
texts.nameposition = ["Position du libellé", "Position of the name"]
texts.bonusposition = ["Position du bonus", "Position of the bonus"]
texts.top = ["Haut", "Top"]
texts.left = ["Gauche", "Left"]
texts.bottom = ["Bas", "Bottom"]
texts.right = ["Droite", "Right"]
texts.size = ["Taille", "Size"]
texts.large = ["Grand", "Large"]
texts.medium = ["Moyen", "Medium"]
texts.small = ["Petit", "Small"]
texts.position = ["Position", "Position"]
texts.center = ["Centré", "Center"]
texts.visibility = ["Visibilité", "Visibility"]
texts.onlyme = ["MJ", "DMs only"]
texts.playertoo = ["Joueur", "Player too"]
texts.everybody = ["Tous", "Everybody"]
texts.list = ["Liste", "List"]
texts.simplelist = ["Liste déroulante", "Option list"]
texts.category = ["Catégorie", "Category"]
// Index / Catégories
texts.newcategory = ["Créer une nouvelle catégorie", "Create a new category"]
// Longs textes
texts.presentation=[
    <div>
        <div>
            Vous jouez à Donjons & Dragons, Warhammer 40000, l'Appel de Cthulhu ou n'importe quel autre jeu de rôle sur table et... 
            vous en avez marre de calculer les mêmes dégâts en boucle ? 
            Votre Maître du Jeu se perd sans arrêt dans son Excel illisible ? 
            Vous oubliez toujours que l'Armure du Démon Entravé vous confère un bonus de 3 en vitesse et en agilité ?
        </div>
        <div class="my-3">
            <strong>Alors cette appli s'occupe de tout, sauf des Bières et des Pizzas !</strong>
        </div>
    </div>, 
    <div>
        <div>
            You're playing Dungeons & Dragons, Warhammer 40000, Cthulhu or any other roleplay game and... 
            you're fed up with damage computing? 
            Your dungeon master keeps getting lost in humongous data? 
            You're always forgetting that your armour gives extra 3 points in agility?
        </div>
        <div class="my-3">
            <strong>Then this app will take care of everything but Beers and Pretzels!</strong>
        </div>
    </div>]

export function displayText(key, language) {
    if(language.toLowerCase() == "fr") {
        return texts[key] ? (texts[key][0]??"") : ""
    }
    return texts[key] ? (texts[key][1]??"") : ""
}