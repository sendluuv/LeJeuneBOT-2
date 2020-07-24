const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

let prefix = "!"

client.login(config.token)

client.on("ready", () => {
    console.log("Connecté !")
    client.user.setStatus("online")
    client.user.setActivity("!help : commandes", {type : 3})
})

client.on("message", message => {
    if(message.content === prefix + "insta") {
        message.reply("https://www.instagram.com/de.la.fuentes/")
    }

    if(message.content === prefix + "youtube") {
        message.reply("https://www.youtube.com/c/LordKrisy")
    }

    if(message.content === prefix + "twitter") {
        message.reply("https://twitter.com/LordKrisy")
    }

    if(message.content === prefix + "twitch") {
        message.reply("https://www.twitch.tv/lordkrisy")
    }

    if(message.content === prefix + "don") {
        message.reply("https://streamlabs.com/lordkrisy/tip")
    }

    if(message.content === prefix + "playlist") {
        message.reply("\nSpotify : https://open.spotify.com/playlist/6OP8oOZDRJ6L7H9Snrt6Dp?si=i_d05glRS2WWRhaH-g4m1Q\nDeezer : https://www.deezer.com/fr/playlist/7928361682")
    }

//#region !help
    if(message.content === prefix + "help") {
        message.delete()

        let embed = new Discord.MessageEmbed()

        .setColor("#F8CACB")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setTitle("Voici toutes les commandes disponibles :")
        .setDescription("!insta\n!twitter\n!youtube\n!twitch\n!don\n!playlist")
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`Commande exécutée par ${message.author.username}`)
        .setTimestamp()

        message.channel.send(embed)
    }
//#endregion
})