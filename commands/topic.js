module.exports = {
    name: 'topic',
    description: "this sends a topic question!",
    execute(message, args){
        const topicChoice = Math.floor((Math.random() * 8) + 1);
        if(topicChoice == 1){
            var topic = "At what age would you consider someone to be old?";
        } else if(topicChoice == 2){
            var topic = "How did you get your name? Do you know the meaning of your name?";
        } else if(topicChoice == 3){
            var topic = "What did you do on your most recent birthday?";
        } else if(topicChoice == 4){
            var topic = "Do you shower in the morning or evening?";
        } else if(topicChoice == 5){
            var topic = "What's the longest you have gone without sleep?";
        } else if(topicChoice == 6){
            var topic = "Do you believe in fate?";
        } else if(topicChoice == 7){
            var topic = "What is the first thing you think of in the morning?";
        } else if(topicChoice == 8){
            var topic = "How long does it take for you to get ready in the morning?";
        }
        message.channel.send(topic);
    }
}