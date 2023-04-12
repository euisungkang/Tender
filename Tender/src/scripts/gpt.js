const fs = require('fs')

let { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OpenAPIKey,
});
const openai = new OpenAIApi(configuration);

async function generateCocktails(weather, mood) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Give me 2 cocktails for " + weather + " when I'm feeling " + mood + " in JSON format with key as cocktail name. Give me step-by-step instructions as an array, ingredients as an array, and why you chose it for each.",
        temperature: 0.7,
        max_tokens: 700
    })

    console.log(response.data.choices[0].text)
    console.log(response.data.usage)

    fs.writeFileSync('output.json', response.data.choices[0].text, 'utf8', err => {
        if (err)
            console.error(err)
    })
}

//generateCocktails(rainy, sad)

module.exports = {
    generateCocktails : generateCocktails
}