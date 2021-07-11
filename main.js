transformers_array = [];


function Submit()
{
    var decepticons = [];

    for(var j=1; j<=4; j++; ){
       var decepticons_item =document.getElementById("name of the decepticon_"+i).value;
       decepticons.push(decepticons_item);
    }
    console.log(decepticons);
    document.getElementById("display_array_D").innerHTML = decepticons;
}

function save_array(){
    var transformer_1 = document.getElementById("name of the transformer_1").value;
    
    var transformer_2 = document.getElementById("name of the transformer_2").value;

    var transformer_3 = document.getElementById("name of the transformer_3").value;

    var transformer_4 = document.getElementById("name of the transformer_4").value;

    transformers_array.push(transformer_1);
    
    transformers_array.push(transformer_2);

    transformers_array.push(transformer_3);
    
    transformers_array.push(transformer_4);

    console.log(transformers_array);

    document.getElementById("display_array").innerHTML = transformers_array;
    
    document.getElementById("submit_button").style.display = "none";

    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    transformers_array.sort();
    console.log(transformers_array);

    document.getElementById("display_array").innerHTML = transformers_array;

}

    