let input = document.getElementById("mainInput");
let output = document.getElementById("mainOutput");
const SL = document.getElementById("SelectLang");
console.log("Javascript loaded succesfully")

function ReplaceListeners(a) {
    try {
        input.removeEventListener("input", TranslateBrittish);
        input.removeEventListener("input", TranslateGen);
    }catch {console.log("Error, move on")}
    input.addEventListener("input", a)
}

function TranslateBrittish() {
    const words = {
        "a" : "one perticular",
        "you're" : "thou is", "while" : "whilst",
        "nothing" : "null", "you are" : "thou is",
        "monkey" : "homosapien's past ancestors",
        "am i right" : "innit", "the" : "thay",
        "im" : "thee is", "i'm" : "thee is",
        "bottle of water" : "bo'o wa'a",
        "want" : "has a will", "me" : "thee",
        "mine" : "thine", "your" : "thy",
        "yours" : "thy", "dad" : "father", "mom" : "mother",
        "gray" : "grey", "fucking" : "bloody", "my" : "thine",
        "africa" : "old colony of the motherland",
        "bro" : "brother", "fuck" : "blood",
        "shit" : "waste of the creature", "american english" : "American language",
        "fries" : "chips", "chips" : "crisps",
        "bag" : "local package", "lil" : "little",
        "saturday" : "sa'atay", "you" : "thou", "a lot" : "a lo'a",
        "much" : "greatly", "many" : "great value", "how" : "in what scenario",
        "are" : "is", "population" : "amount of society in the country",
        "better" : "a greater liking",
        "brittain" : "the motherland", "why" : "for what purpose",
        "dumb" : "mad", "uk" : "the motherland", "fat" : "greater than average amount of size",
        "caseoh" : "fatass byatch", "look like" : "has an appearance greatly recognizable to",
        "like" : "have a good liking to", "likes" : "has a good liking to", 
        "minor" : "child with age not greater than 18",
        "minors" : "children with age not greater than 18",
        "i love" : "I have a great liking to", 
        "you love" : "thy has a great liking to",
        "loves" : "has a great liking to",
        "they love" : "they have a great liking to",
        "love" : "a great liking", "weird" : "odd",
        "english" : "the language of the motherland",
        "good" : "lovely", "pretty" : "lovely", "random" : "unpredictable choice",
        "ma'am" : "madame", "today" : "this current day", 
        "just" : "exclusively", "gimme" : "hand me thay", "give me" : "hand me thay",
        "money" : "riches", "pants" : "pantiloons", 
        "give" : "hand", "country" : "nation", "bigger" : "greater",
        "larger" : "greater", "israel" : "FALESTIN 🦅", 
        "crazy" : "odd", "won't" : "will not", "wont" : "will not",
        "would" : "perchance", "could" : "perchance", 
        "mafia" : "leader of a wanted and illegal gang", 
        "not" : "incertainly", "queen" : "feminime royal leader of one nation",
        "king" : "manly royal leader of one nation", "dictator" : "leader of one nation",
        "tho" : "thoughtly", "though" : "thoughtable", "i" : "thee",
        "am" : "is", "nice" : "spectacular", "good" : "spectacular", 
        "gang" : "illegal communitygroup", "nah" : "certainly not",
        "snitch" : "one who tells about one's partners mistakes",
        "snitching" : "telling about one's partners mistakes",
        "now" : "this current moment", "kill" : "take the live",
        "killer" : "a one who takes one or more lives",
        "away" : "anywhere except this area", "goated" : "one who is greatly spectacular",
        "urm" : "uhm", "eh" : "uhm", "little" : "small", "soccer" : "football",
        "go" : "move", "gay" : "homosexual", "when" : "in which time",
        "gonna" : "boundfull to", "going to" : "boundfull to", "she" : "she",
        "her" : "her", "him" : "him", "those" : "thays", "know" : "recognize",
        "who" : "which person", "knows" : "recognizes", "bros" : "brothers",
        "goes" : "moves", "going": "moving", "dont" : "inrecommended to perform"
    };
    let result = input.value;

    for (const [key, value] of Object.entries(words)) {
        let REG = new RegExp(`\\b${key}\\b`, "gi")
        result = result.replace(REG, value)
    }
    output.value = result.charAt(0).toUpperCase() + result.slice(1);
}

function TranslateGen() {
    const words = {
        "he" : "blud", "she" : "bludski", "uncle" : "unc", "dont move" : "ENGLISH OR SPANISH!",
        "don't move" : "ENGLISH OR SPANISH", "crazy" : "delulu", "i swear" : "no cap", "ass" : "gyatt", 
        "leader" : "alpha", "weak" : "beta", "bum" : "gyatt", "y'all" : "guys",
        "because" : "cuz", "why" : "y", "are" : "r", "you're" : "ur",
        "oh my god" : "omg", "old" : "boomer", "careless" : "nonchalant",
        "cool" : "lit", "charm" : "rizz", "charisma" : "rizz",
        "charmer" : "rizzler", "player" : "rizzler", "good" : "bussin'",
        "independent" : "sigma", "dominant" : "sigma", "what the hell" : "what the sigma",
        "wth" : "what the sigma", "what" : "what the sigma", "your" : "yo",
        "looking good" : "mewer", "extra training" : "winter arc",
        "steal" : "fanum tax", "tax" : "fanum tax", "weird" : "sus", "suspicious" : "sus",
        "a lie" : "cap", "liar" : "capper", "lying" : "capping", "not lying" : "no cap",
        "truth" : "no cap", "points" : "aura", "point" : "aura", "irritated" : "salty",
        "bitter" : "salty", "newbie" : "noob", "loser" : "noob", "inexperienced" : "noob",
        "new" : "noob", "okay" : "bet", "sure" : "bet", "throw" : "yeet", "amazing" : "lit",
        "impressive" : "lit", "to be honest" : "tbh", "honestly" : "low key", 
        "hoe" : "bop", "delusional" : "delulu", "caring" : "chalant", 
        "spit it out" : "just put the fries in the bag", "disgust" : "ick", "ew" : "ick",
        "embarassing" : "cringe", "embarassed" : "cringed", "enemy" : "opp",
        "bad" : "L", "daring" : "savage", "bold" : "savage", "negative" : "L", 
        "lose" : "L", "loss" : "L", "best friend" : "bff", "friend" : "bro",
        "good friend" : "pookie", "unique" : "hits different", "special" : "hits different",
        "not gonna lie" : "ngl", "first" : "OG", "early" : "OG", "experienced" : "OG",
        "show off" : "flex", "boast" : "flex", "best" : "GOAT", "wow" : "sheesh",
        "very" : "mad", "super" : "mad", "much" : "mad", "strong" : "chad",
        "attractive" : "chad alpha", "hotter" : "mog", "extremely bad" : "dog water",
        "talk" : "yap", "talking" : "yapping", "true" : "real", "you" : "u",
        "ok" : "k", "okay" : "k", "delicious" : "bussin'", "buddy" : "pookie", 
        "girlfriend" : "gf", "confused" : "bamboozled", "little" : "lil'",
        "small" : "lil'", "his" : "bluds", "her" : "bludskis"
    };

    let out = input.value;
    for (const [key, value] of Object.entries(words)) {
        let REG = new RegExp(`\\b${key}\\b`, "gi");
        out = out.replace(REG, value);
    }
    output.value = out.charAt(0).toUpperCase() + out.slice(1);
}


function GangstaBritish() {
    const words = {
        "ay" : "oi", "friend" : "bro", "this is" : "this",
        "family" : "blood", "families" : "bloods", "enemy" : "opp", "enemies" : "opps",
        "okay" : "aight", "ok" : "aight", "dissing" : "roasting", "diss" : "roast",
        "trouble" : "beef", "argument" : "beef", "lure" : "bait", "fake" : "pagan",
        "lots of" : "bare", "a lot" : "bare", "money" : "ps", "scared" : "shook",
        "nervous" : "shook", "bank card" : "square", "gun" : "strap", "car" : "whip",
        "stuff" : "type shi'", "thing" : "type shi'", "you know" : "type shi'"
    }
    let Val = input.value;
    for (const [key, value] of Object.entries(words)) {
        let regex = new RegExp(`\\b${key}\\b`, "gi");
        Val = Val.replace(regex, value);
    }
    output.value = Val.charAt(0).toUpperCase() + Val.slice(1);
}

function SetLang() {
    if (SL.value == "BRITISH") {
        ReplaceListeners(TranslateBrittish);
    } else if (SL.value == "GEN") {
        ReplaceListeners(TranslateGen);
    } else if (SL.value == "BG") {
        ReplaceListeners(GangstaBritish)
    }
}
SetLang();
SL.addEventListener("change", SetLang);