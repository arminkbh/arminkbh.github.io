let dehydrates = document.getElementById("dehydrates")
let protein = document.getElementById("protein")
let vegetables = document.getElementById("Vegetables")
let text = document.querySelector("#OutputText")
let seasonings = document.querySelector("#Seasons")

function change() {
    if (dehydrates.value == "NONE" && protein.value == "NONE"
        && vegetables.value == "NONE" ) {
        text.innerHTML = "Eat air, what are we supposed to cook with nothing..."
    }
    else if (dehydrates.value == "RICE" && protein.value == "BEANS") {
        text.innerHTML = `
        <h2>Rice and beans!</h2>
        The rice:<br>1) Take some rice and put it in a decent big saucepan.
        \n<br>2) Pour some water, the water should be twice as much as the rice
        <br>3) Boil the water <br>4) When you can see the water level be
        kind of close to the rice level set the temperature 
        on medium-high about 6/10 and put a kitchen-towel over 
        the lid and put the lid on the saucepan
        and let it be like that until the water is gone
        <br><br>
        The beans:<br><br>
        1) Take a new small saucepan, and put your beans in there.
        <br>2) Pour some water that should fill about 40% of the saucepan<br>
        3) Boil the water.<br>
        4) You can manually take one bean and taste it. <br>
        If it's too hard, cook it longer. <br><br>
        There is no "time" on how long to cook the beans so <br>
        you have to manually test if they're good enough.`
    }
    else if (dehydrates.value == "RICE") {
        text.innerHTML = `The only thing you can make with rice is rice...
        <br> So here you go:
        <br><br>
        <h3>The rice:</h3>1) Take some rice and put it in a decent big saucepan.
        \n<br>2) Pour some water, the water should be twice as much as the rice
        <br>3) Boil the water <br>4) When you can see the water level be
        kind of close to the rice level set the temperature 
        on medium-high about 6/10 and put a kitchen-towel over 
        the lid and put the lid on the saucepan
        and let it be like that until the water is gone
        <br><br>`
    }
    else if (dehydrates.value == "NOODLES") {
        let noodles_recipe = `
            <br><br>
            <h3>Noodles</h3>
            1) Dont put the noodles in yet. <br>
            2) Pour in the water, the water level 
            should be about 45% of the saucepan.<br>
            3) Let it boil, when it has started to boil put in the 
            Noodles and the oil and all the seasonings you want. 
            Let it boil for 2 minutes
            <br> 4) When it has boiled for about 2 minutes, Lower the temperature
            to about 6/10<br>
            5) While it's resting, mix the oils and the seasoning and whatever
            you want with the noodles. <br>`
        if (protein.value == "NONE") {
            text.innerHTML = noodles_recipe + 
            `6) And voilá, enjoy :)
            <br><br> By the way, my little brother Kamran wrote this recipe!`
        } else if (protein.value == "CHICKEN") {
            text.innerHTML = noodles_recipe + `
            <h3>The chicken: </h3>
            1) Slice the chicken to thinn slices <br>
            2) Put some oil in a saucepan, put the chicken slices in the saucepan and coo
            k the food so it's not raw anymore <br>
            3) Put the seasonings/spices that you want in the chicken slices.
            <h2>And voilá, Noodles & Chicken</h2>
            `
        }
    }
    else if (dehydrates.value == "BREAD" && protein.value == "BEANS") {
        text.innerHTML = `
        <h2>Brittish toast & beans</h2>
        <h4> The bread: </h4>
        1)Take up a small pan and put some oil in it, and put the temperature to medium-high about
        7/10<br>
        2) Put the bread(s) in the pan and stir it in the oil until you feel like
        it's roasted enough<br>
        3) Take out the bread and now you're done with the bread.<br>
        Lets move on to the beans
        <h4> The beans: </h4>
        1) Take a new small saucepan, and put your beans in there.
        <br>2) Pour some water that should fill about 40% of the saucepan<br>
        3) Boil the water.<br>
        4) You can manually take one bean and taste it. <br>
        If it's too hard, cook it longer. <br><br>
        There is no "time" on how long to cook the beans so <br>
        you have to manually test if they're good enough.
        <br><br>
        And as always, <h3>Voilá</h3>`
    }
    else if (seasonings.value == "SOY" && vegetables.value == "CUCUMBER") {
        text.innerHTML = `
        Suprisingly we do have a recipe for these ingredients, somehow.
        <br> Anyways, here you go, a really simple recipe:
        <h2>Chinese Cucumber with Soy (sauce)</h2>
        1) Cut your cucumber into thin slices.
        <br><br>2) Put it in a small bowl.<br><br>
        3) Put some soy sauce in the bowl.<br><br>
        4) Mix it for a little bit.
        <h4> And boom, a super simple recipe </h4>
        `;
    }

    else {
        text.innerHTML = `We do not have this recipe.
        But we will add something to these as fast as possible!`
    }
}

document.getElementById("outputButton1A").addEventListener("click", change)
