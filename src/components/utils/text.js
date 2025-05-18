import React from "react";

let texts = {}

texts.title = ["Zocchi", "Zocchi"]
texts.charSheet = ["Fiche de personnage", "Character sheet"]
// Presentation
texts.welcome = ["Bienvenue sur Zocchi !", "Welcome to Zocchi!"]
texts.createchar = [" Créez vos fiches de personnages librement ou utilisez des modèles préexistants", " Create your own character sheets or use templates"]
texts.foes = [" Imaginez des ennemis hauts en couleur", " Imagine flamboyant foes"]
texts.createevent = [" Notez tout ce qui arrive à votre bande d'aventuriers", " Write down every step of your journey"]
texts.objects = [ " Inventoriez votre équipement, vos récompenses de quête, etc.", " List all the objects you collect: pieces of equipment, treasures, magical items and so on "]
texts.fight = [" Améliorez vos combats grâce à un simulateur paramétrable", " Improve fights thanks to the customizable simulator"]
texts.maps = [" Concevez des cartes interactives pour fluidifier les déplacements de vos personnages", " Design interactive maps to make your travels smoother"]
texts.other = [" Et bien d'autres choses...", " And much more to come..."]
texts.becomedm = ["Vous êtes le Maître du Jeu d'une nouvelle campagne ?", "You are the Dungeon Master of a new campaign"]
texts.joincampaign = ["Vous souhaitez rejoindre une campagne existante ?", "You want to join an existing campaign"]
texts.infopricing = ["Vous voulez en apprendre plus sur les avantages Premium ?", "You want to know more about Premium features"]
texts.create = ["Créez !", "Create!"]
texts.join = ["Rejoignez !", "Join!"]
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
texts.events = ["Événements", "Events"]
texts.lieux = ["Lieux", "Locations"]
texts.combat = ["Combat", "Fight"]
texts.dice = ["Lancer de dés", "Roll the dice"]
// Campagnes
texts.search = ["Rechercher", "Search"]
texts.askdm = ["Demandez au maître du jeu le code à 5 caractères de la campagne que vous souhaitez rejoindre"]
texts.code = ["Code", "Code"]
texts.charName = ["Le nom de votre personnage", "Your character's name"]
texts.createnewcampaign = ["Créez une nouvelle campagne dont vous êtes le maître du jeu", "Create a new campaign in which you are the dungeon master"]
texts.name = ["Nom", "Name"]
texts.joincampaign1 = ["Vous souhaitez rejoindre la campagne \"", "Do you want to join the \""]
texts.joincampaign2 = ["\" gérée par ", "\" whose dungeon master is "]
texts.joincampaign3 = [" ?", "?"]
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
texts.label = ["Texte fixe", "Label"]
texts.labeltooltip = ["Texte fixe", "Label"]
texts.textfield = ["Champ de texte", "Text field"]
texts.textfieldtooltip = ["Champ de texte", "Text field"]
texts.texttofill = ["A remplir par les joueurs", "To fill by players"]
texts.numfield = ["Num", "Num"]
texts.numfieldtooltip = ["Champ numérique", "Numeric field"]
texts.numfieldbonustooltip = ["Champ numérique avec bonus", "Numeric field with bonus"]
texts.fieldname = ["Libellé", "Field name"]
texts.nameposition = ["Position du libellé", "Position of the name"]
texts.bonusposition = ["Position du bonus", "Position of the bonus"]
texts.top = ["Haut", "Top"]
texts.left = ["Gauche", "Left"]
texts.bottom = ["Bas", "Bottom"]
texts.right = ["Droite", "Right"]
// Longs textes
texts.presentation=[
    <div>
        <p>
            Vous jouez à Donjons & Dragons, Warhammer 40000, l'Appel de Cthulhu ou n'importe quel autre jeu de rôle sur table et... 
            vous en avez marre de calculer les mêmes dégâts en boucle ? 
            Votre Maître du Jeu se perd dans son Excel illisible ? 
            Vous oubliez toujours que telle armure vous confère un bonus de 3 en esquive ?
        </p>
        <strong>
            Alors Zocchi sera d'une aide précieuse pour vos parties endiablées !
        </strong>
    </div>, 
    <div>
        <p>
            You're playing Dungeons & Dragons, Warhammer 40000, Cthulhu or any other roleplay game and... 
            you're fed up with damage computing? 
            Your dungeon master keeps getting lost in humongous data? 
            You're always forgetting that your armour gives extra 3 points in agility?
        </p>
        <strong>
            Then Zocchi is made for you!
        </strong>
    </div>]

export function displayText(key, language) {
    if(language.toLowerCase() == "fr") {
        return texts[key] ? (texts[key][0]??"") : ""
    }
    return texts[key] ? (texts[key][1]??"") : ""
}