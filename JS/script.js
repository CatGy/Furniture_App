
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

registerElements("green_arm_chair", "chair_model", "green_arm_chair");
registerElements("mustard_arm_chair", "chair_model", "mustard_arm_chair");
registerElements("purple_arm_chair", "chair_model", "purple_arm_chair");


registerElements("burgundy_sofa", "sofa_model", "burgundy_sofa");
registerElements("beige_sofa", "sofa_model", "beige_sofa");
registerElements("orange_sofa", "sofa_model", "orange_sofa");

registerElements("black_bean_bag", "bean_bag_model", "black_bean_bag");
registerElements("white_bean_bag", "bean_bag_model", "white_bean_bag");
registerElements("fushia_bean_bag", "bean_bag_model", "fushia_bean_bag");