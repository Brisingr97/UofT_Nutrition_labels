var bansal_1;
var bansal_2;

$(document).ready(function () {


    //find the net calories and then tell them that it's equal to NumberXbigmacs(picture)
    //find the amount of sugar and compare it to donuts
    //protein and Salmon
    //vitamins and brocolli. find a function() which compares two food items.
    bansal_1 =
        ((food_item_1.nutrients[14].amount * 81.2)
            + (food_item_1.nutrients[4].amount * 2.4)
            + (food_item_1.nutrients[0].amount * 42.8)
            + (food_item_1.nutrients[5].amount * 0.7)
            + (food_item_1.nutrients[8].amount * 30)
        ) / (
            (96.6) * Math.pow(
                Math.pow(food_item_1.nutrients[14].amount, 2)
                + Math.pow(food_item_1.nutrients[4].amount, 2)
                + Math.pow(food_item_1.nutrients[0].amount, 2)
                + Math.pow(food_item_1.nutrients[5].amount, 2)
                + Math.pow(food_item_1.nutrients[8].amount, 2)
                , 0.5)
        );
    bansal_2 =
        ((food_item_2.nutrients[14].amount * 81.2)
            + (food_item_2.nutrients[4].amount * 2.4)
            + (food_item_2.nutrients[0].amount * 42.8)
            + (food_item_2.nutrients[5].amount * 0.7)
            + (food_item_2.nutrients[8].amount * 30)
        ) / (
            (96.6) * Math.pow(
                Math.pow(food_item_2.nutrients[14].amount, 2)
                + Math.pow(food_item_2.nutrients[4].amount, 2)
                + Math.pow(food_item_2.nutrients[0].amount, 2)
                + Math.pow(food_item_2.nutrients[5].amount, 2)
                + Math.pow(food_item_2.nutrients[8].amount, 2)
                , 0.5)
        );
    // console.log(bansal_2);
    //console.log(bansal_1);



    document.getElementById('one_c').innerHTML = total_cals_1;
    document.getElementById('two_c').innerHTML = total_cals_2;
    document.getElementById('big_mac_number').innerHTML = (total_cals_1 / 563).toFixed(1);
    document.getElementById('big_mac_number_2').innerHTML = (total_cals_2 / 563).toFixed(1);
    document.getElementById('donut_number').innerHTML = (food_item_1.nutrients[9].amount / 11).toFixed(1);
    document.getElementById('donut_number_2').innerHTML = (food_item_2.nutrients[9].amount / 11).toFixed(1);
    document.getElementById('brocolli_number').innerHTML = (bansal_1).toFixed(1);
    document.getElementById('brocolli_number_2').innerHTML = (bansal_2).toFixed(1);
    document.getElementById('salmon_number_1').innerHTML = (food_item_1.nutrients[6].amount / 80).toFixed(1);
    document.getElementById('salmon_number_2').innerHTML = (food_item_2.nutrients[6].amount / 80).toFixed(1);
    
    //console.log((bansal_1));
    var my_dynamic_array = [];
    //iterate over food items and find high concentration of items
    var list_element_1 = document.getElementById("list_1");
    var list_element_2 = document.getElementById("list_2");

    for (i = 0; i < food_item_1.nutrients.length; i++) {
        var temporary = document.createElement('li');
        console.log(i);
        if (food_item_1.nutrients[i].percent >= 20) {
            //high conc
            console.log(food_item_1.nutrients[i].percent)
            if (effect.nutrients[i].optional == "good") {
                //include in green list
                temporary.style.color = "green";
                temporary.appendChild(document.createTextNode(effect.nutrients[i].effect));
                list_element_1.appendChild(temporary);


            }
            else {
                temporary.style.color = "red";
                temporary.appendChild(document.createTextNode(effect.nutrients[i].effect));
                list_element_1.appendChild(temporary);


            }
        }
        temporary = document.createElement('li');
       // console.log(i);
        if (food_item_2.nutrients[i].percent >= 20) {
            //high conc
            if (effect.nutrients[i].optional == "good") {
                //include in green list
                temporary.style.color = "green";
                temporary.appendChild(document.createTextNode(effect.nutrients[i].effect));
                list_element_2.appendChild(temporary);


            }
            else {
                temporary.style.color = "red";
                temporary.appendChild(document.createTextNode(effect.nutrients[i].effect));
                list_element_2.appendChild(temporary);


            }
        }



    }

});
