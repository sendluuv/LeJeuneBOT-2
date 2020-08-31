const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

let prefix = "?"

client.login(config.token)

client.on("ready", () => {
    console.log("Connecté !")
    client.user.setStatus("online")
    client.user.setActivity("?help : commandes", {type : 3})
})

client.on("message", message => {
    if(message.content === prefix + "insta") {
        message.member.send("Salut à toi l'ami, voici l'insta du Coach K :\n\nhttps://www.instagram.com/de.la.fuentes/")
        message.delete()
    }

    if(message.content === prefix + "youtube") {
        message.member.send("Salut à toi l'ami, voici le YouTube du Coach K :\n\nhttps://www.youtube.com/c/LordKrisy")
        message.delete()
    }

    if(message.content === prefix + "twitter") {
        message.member.send("Salut à toi l'ami, voici le Twitter du Coach K :\n\nhttps://twitter.com/LordKrisy")
        message.delete()
    }

    if(message.content === prefix + "twitch") {
        message.member.send("Salut à toi l'ami, voici le Twitch du Coach K :\n\nhttps://www.twitch.tv/lordkrisy")
        message.delete()
    }

    if(message.content === prefix + "don") {
        message.member.send("Salut à toi l'ami, voici la plateforme grâce à laquelle tu peux faire un don au Coach K :\n\nhttps://streamlabs.com/lordkrisy/tip")
        message.delete()
    }

    if(message.content === prefix + "playlist") {
        message.member.send("Salut à toi l'ami, voici la playlist mise à jour par la communnauté du Discord :\n\nSpotify : https://open.spotify.com/playlist/6OP8oOZDRJ6L7H9Snrt6Dp?si=i_d05glRS2WWRhaH-g4m1Q\nDeezer : https://www.deezer.com/sharedplaylist-7928361682-d136d0ad")
        message.delete()
    }

    if(message.content === prefix + "disco") {
        message.member.send("Voici où tu peux trouver la discographie intégrale (uniquement l’accessible) de Krisy :\n**Weedtape 1,0** , son premier projet sorti officiellement, composé de seulement 2 sons, **Southpark** et **Un beat & d’la weed** :\n\n**Southpark** : https://www.youtube.com/watch?v=wLRTGC5B0Sg\n**Un beat & d’la weed** : https://www.youtube.com/watch?v=64mDn_xa4RM\n\n**Black souag**, un projet sorti le 6 octobre 2012, une tracklist étonnamment bien garni :\n\nhttps://www.datpiff.com/LeBoy-KrisyB-LeBoy-KrisyB-Black-Souag-mixtape.361274.html\n\n**Jouvence**, un projet composé de 2 chapitres, sorti en 2013 :\n\nhttp://www.mediafire.com/file/8cd66uub2kddt6o/Jouvence.zip/file\n\n**Parmi Vous**, un projet sorti le 10 avril 2016, disponible uniquement sur SoundCloud :\n\nhttps://soundcloud.com/lordkrisy/sets/ep-parmi-vous\n\n**Menthe à l’eau**, un projet sorti peu après, c’est-à-dire le 31 juillet 2016, lui est disponible sur YouTube et SounCloud:\n\n**YouTube** : https://www.youtube.com/watch?v=zUQI_hsP8u4&list=PL49HkOBNaUvmiAPY_OPd9VJO5HPUrLSRq\n**SoundCloud** : https://soundcloud.com/lordkrisy/sets/ep-menthe-a-leau\n\n**Paradis d’amour**, sorti le 31 juillet 2017 pour marquer la suite de Menthe à l’eau, mais c’est également le premier de ses projet disponible sur toutes les plateformes :\n\n**Spotify** : https://open.spotify.com/album/69Swc2FWxre1nqutE00Rqw?si=ZpDCLJcySwuoxDpG6S994A\n**Deezer** : https://www.deezer.com/fr/album/136113742\n**Apple Music** : https://music.apple.com/dk/album/paradis-damour/1503654241\n**Tidal** : https://tidal.com/browse/album/134343996")
        message.delete()
    }

    if(message.content === prefix + "help") {
        message.delete()

        let embed = new Discord.MessageEmbed()

        .setColor("#F8CACB")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setTitle("Voici toutes les commandes disponibles :")
        .setDescription("?insta\n?twitter\n?youtube\n?twitch\n?don\n?playlist\n?disco")
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`Commande exécutée par ${message.author.username}`)
        .setTimestamp()

        message.member.send(embed)
    }

    if(mesage.content === prefix + "ANJJ") {
        
    }
})


