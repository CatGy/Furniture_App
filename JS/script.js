
// simple change model
/*document.getElementById("change-colour").addEventListener("click", function() {
    document.getElementById("model").src = "/models/teal.glb";
});*/

function registerElements(elemId, elemModel, glb)
{
    document.getElementById(elemId).addEventListener("click", function() {
        console.log("CLICKED")
        document.getElementById(elemModel).src = `models/${glb}.glb`;
    });
}

registerElements("sofa_black", "arm_chair_model", "green_arm_chair");
registerElements("sofa_white", "arm_chair_model", "mustard_arm_chair");
registerElements("sofa_fushia", "arm_chair_model", "purple_arm_chair");


registerElements("brown_sofa", "sofa_model", "teal_arm_chair");
registerElements("sofa_white", "sofa_model", "brown_sofa");
registerElements("sofa_fushia", "sofa_model", "Burgundy_leather_sofa");

registerElements("chair_teal", "chair_model", "teal_arm_chair");
registerElements("sofa_white", "sofa_model", "brown_sofa");
registerElements("sofa_fushia", "sofa_model", "Burgundy_leather_sofa");