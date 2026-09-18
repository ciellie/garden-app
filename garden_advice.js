// GApp - Gardening Advice Application


function getUserInput() {
    // Ask the user to enter the current season.
    let season = prompt(
        "Enter the season (summer, winter, spring, autumn):"
    );

    // Ask the user to enter the plant type.
    let plantType = prompt(
        "Enter the plant type (flower or vegetable):"
    );

    // Remove extra spaces and convert input to lowercase.
    season = season.trim().toLowerCase();
    plantType = plantType.trim().toLowerCase();

    return {
        season: season,
        plantType: plantType
    };
}


function getSeasonAdvice(season) {
    // Store advice for each season in an object.
    const seasonAdvice = {
        summer: "Water your plants regularly and provide some shade.",
        winter: "Protect your plants from frost with covers.",
        spring: "Prepare the soil and start planting new plants.",
        autumn: "Remove dead leaves and prepare plants for colder weather."
    };

    // Return the advice if the season exists.
    if (seasonAdvice[season]) {
        return seasonAdvice[season];
    }

    return "No advice for this season.";
}


function getPlantAdvice(plantType) {
    // Store advice for different plant types in an object.
    const plantAdvice = {
        flower: "Use fertiliser to encourage blooms.",
        vegetable: "Keep an eye out for pests!"
    };

    // Return advice if the plant type exists.
    if (plantAdvice[plantType]) {
        return plantAdvice[plantType];
    }

    return "No advice for this type of plant.";
}


function recommendPlants(season) {
    // Store recommended plants for each season.
    const plantRecommendations = {
        summer: [
            "Sunflowers",
            "Tomatoes",
            "Peppers"
        ],

        winter: [
            "Spinach",
            "Broccoli",
            "Cabbage"
        ],

        spring: [
            "Petunias",
            "Carrots",
            "Lettuce"
        ],

        autumn: [
            "Pansies",
            "Onions",
            "Beetroot"
        ]
    };

    // Return the plant recommendations for the season.
    if (plantRecommendations[season]) {
        return plantRecommendations[season];
    }

    return [];
}


function displayAdvice(season, plantType) {
    // Get advice based on the selected season.
    const seasonAdvice = getSeasonAdvice(season);

    // Get advice based on the selected plant type.
    const plantAdvice = getPlantAdvice(plantType);

    // Get recommended plants for the season.
    const recommendedPlants = recommendPlants(season);

    // Combine the advice.
    const advice =
        seasonAdvice + "\n" +
        plantAdvice;

    console.log("--- Gardening Advice ---");
    console.log(advice);

    // Display recommended plants.
    if (recommendedPlants.length > 0) {
        console.log(
            "\nRecommended plants for " + season + ":"
        );

        for (let plant of recommendedPlants) {
            console.log("- " + plant);
        }
    } else {
        console.log(
            "\nNo plant recommendations available for this season."
        );
    }
}


function main() {
    // Get the user's input.
    const userInput = getUserInput();

    // Display the gardening advice.
    displayAdvice(
        userInput.season,
        userInput.plantType
    );
}


// Run the application.
main();