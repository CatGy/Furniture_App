
// simple change model (TO CREATE 3 MODELS WITH DIF COLORS)
document.getElementById("change-colour").addEventListener("click", function() {
    document.getElementById("model").src = "/models/teal_arm_chair.glb";
});

// example with showing content
document.getElementById("change-colour").addEventListener("click", function() {
    document.getElementById("model-info").style.display = "block";
});

// example with multiple models
var myModels = ["/models/mustard_arm_chair.glb", "/models/purple_arm_chair", "/models/teal_arm_chair.glb",]
var counter = 0;
document.getElementById("change-colour").addEventListener("click", function() {
    counter++;
    if (counter==3) { 
        counter = 0;
    }
    document.getElementById("model").src = myModels[counter];
});
