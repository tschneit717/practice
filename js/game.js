var user = prompt("You enter the tavern late at night and only see a few patrons in the bar. The bartender can be seen cleaning out a glass, and doesn't acknowledge you entering the room. Do you SIT down? Or do you ORDER a drink? Maybe even TALK to a patron?").toUpperCase();
    switch(user) {
        case 'TALK':
            console.log("You approach the man sitting at the end of the bar and tell him \"Hello friend! Might you know where I can find some work?\" The man does not respond. He is unconscious due to excessive drinking.");
            var shove = prompt("Do you attempt to shove the man awake?").toUpperCase();
                if (shove === 'YES' || shove === 'NO') {
                    console.log("You end up deciding not to shove the man. That would be rude.");
                } else {
                    console.log("The man passes gas in his sleep.");
                    }
            break;
        case 'SIT':
            console.log("You sit down at a nearby table and no one pays you any mind.");
            break;
        case 'ORDER':
            console.log("You approach the bartender and ask for an ale. \"That will be 5 gold,\" he says.")
            var order = prompt("Do you buy a drink? Yes/No?").toUpperCase();
            var money = prompt("Do you have money to buy a drink?").toUpperCase();
            if (order === 'YES' && money === 'YES') {
                console.log("You roll a few coins across the bar and he turns around to fill up an ale for you.");}
            else {
                console.log("You simply stare blindly at the bartender.")
                }
            break;
        default:
            console.log("Everyone in the bar notices you and you start to feel that you are super awkward.");
        }