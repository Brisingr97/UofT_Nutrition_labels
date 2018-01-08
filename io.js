var requirements;
var button_event;
var food_item_1;
var food_item_2;
var total_cals_1;
var total_cals_2;
var effect;
$(document).ready(function () {
    total_cals_1 = food_item_1.nutrients[1].amount ;
    total_cals_2 = food_item_2.nutrients[1].amount ;
    var text_input_1 = $('#text_input_1');
    var text_input_2 = $('#text_input_2');
    var text_input_3 = $('#text_input_3');
    var text_input_4 = $('#text_input_4');
    button_event = $('#button_event');
    button_event.click(function () {
        text_input_1 = parseInt(text_input_1.val())
        text_input_2 = parseInt(text_input_2.val())
        text_input_3 = parseInt(text_input_3.val())
        console.log(text_input_1 + ' ' + text_input_2 + ' ' + text_input_3 + ' ' + text_input_4.val());
        requirements = 10 * text_input_1 + 6.25 * text_input_2 - 5 * text_input_3 - 161
        if ((text_input_4.val())[0] == 'm' || (text_input_4.val())[0] == 'M') {
            requirements = requirements + 166;
        }
        requirements = (1.4 * requirements).toFixed(1);
        var bmi = text_input_1*10000/(text_input_2*text_input_2)
        console.log(requirements);
        var net_kilometers_1 = ((total_cals_1*1.22)/text_input_1)
        var net_kilometers_2 = ((total_cals_2*1.22)/text_input_1)
        if(isNaN(text_input_1)==false)
      {   
        if(bmi>=25){
            document.getElementById('precursor').innerHTML = "Less than ";
        }  
        if(bmi<=20){
            document.getElementById('precursor').innerHTML = "More than ";
        }
        document.getElementById('daily_requirements').innerHTML = requirements + ' calories needed daily.';
        
        document.getElementById('football_number_1').innerHTML = "You can walk "+net_kilometers_1.toFixed(1) + ' Km with this meal';
       document.getElementById('football_number_2').innerHTML = net_kilometers_2.toFixed(1) + ' Km with this meal';}
    console.log(((total_cals_1*1.22)/text_input_1)*1000/109.7);
    var elem = document.getElementById("myBar");
    var elem_2 = document.getElementById("myBar_2");
    console.log(elem);
    elem.style.width = (100*net_kilometers_1/43) + '%'; 
    elem_2.style.width = (100*net_kilometers_2/43) + '%'; 
});
   
    
});
$.getJSON("effects.json", function (my_json) {
    effect = my_json.food[0];
    console.log('1');
});
$.getJSON("foodfacts.json", function (json) {
    food_item_1 = json.food[0];
    food_item_2 = json.food[1];
   // console.log(food_item_1);
    document.getElementById("fi1").innerHTML = food_item_1.name;
    document.getElementById("fi2").innerHTML = food_item_2.name;
});

