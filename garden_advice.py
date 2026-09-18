# GApp - Gardening Advice Application


def get_user_input():
    """
    Ask the user to enter the current season and plant type.
    The input is converted to lowercase to make comparisons easier.
    """
    season = input(
        "Enter the season (summer, winter, spring, autumn): "
    ).strip().lower()

    plant_type = input(
        "Enter the plant type (flower or vegetable): "
    ).strip().lower()

    return season, plant_type


def get_season_advice(season):
    """
    Return gardening advice based on the selected season.
    """

    season_advice = {
        "summer": (
            "Water your plants regularly and provide some shade."
        ),
        "winter": (
            "Protect your plants from frost with covers."
        ),
        "spring": (
            "Prepare the soil and start planting new plants."
        ),
        "autumn": (
            "Remove dead leaves and prepare plants for colder weather."
        ),
    }

    return season_advice.get(
        season,
        "No advice for this season."
    )


def get_plant_advice(plant_type):
    """
    Return gardening advice based on the selected plant type.
    """

    plant_advice = {
        "flower": (
            "Use fertiliser to encourage blooms."
        ),
        "vegetable": (
            "Keep an eye out for pests!"
        ),
    }

    return plant_advice.get(
        plant_type,
        "No advice for this type of plant."
    )


def recommend_plants(season):
    """
    Recommend plants that are suitable for the selected season.
    """

    plant_recommendations = {
        "summer": [
            "Sunflowers",
            "Tomatoes",
            "Peppers",
        ],
        "winter": [
            "Spinach",
            "Broccoli",
            "Cabbage",
        ],
        "spring": [
            "Petunias",
            "Carrots",
            "Lettuce",
        ],
        "autumn": [
            "Pansies",
            "Onions",
            "Beetroot",
        ],
    }

    return plant_recommendations.get(
        season,
        []
    )


def display_advice(season, plant_type):
    """
    Generate and display gardening advice and plant recommendations.
    """

    # Get advice based on the entered season.
    season_advice = get_season_advice(season)

    # Get advice based on the entered plant type.
    plant_advice = get_plant_advice(plant_type)

    # Get recommended plants for the season.
    recommended_plants = recommend_plants(season)

    # Combine the gardening advice.
    advice = season_advice + "\n" + plant_advice

    print("\n--- Gardening Advice ---")
    print(advice)

    # Display plant recommendations if the season is recognised.
    if recommended_plants:
        print("\nRecommended plants for", season + ":")

        for plant in recommended_plants:
            print("-", plant)
    else:
        print(
            "\nNo plant recommendations available "
            "for this season."
        )


def main():
    """
    Main function used to run the gardening application.
    """

    # Ask the user for the season and plant type.
    season, plant_type = get_user_input()

    # Display gardening advice.
    display_advice(season, plant_type)


# Run the program.
# if __name__ == "__main__":
main()
