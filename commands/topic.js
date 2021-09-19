module.exports = {
    name: 'topic',
    description: "this sends a topic question!",
    execute(message, args){
        const topicChoice = Math.floor((Math.random() * 100) + 1);
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
        } else if(topicChoice == 9){
            var topic = "How would you know if you were in love?";
        } else if(topicChoice == 10){
            var topic = "Do you like to plan things out or be spontaneous?";
        } else if(topicChoice == 11){
            var topic = "What is one thing you would change about your home?";
        } else if(topicChoice == 12){
            var topic = "What weird food combinations do you like?";
        } else if(topicChoice == 13){
            var topic = "What movies have you re-watched the most number of times?";
        } else if(topicChoice == 14){
            var topic = "What is the last dream that you remember?";
        } else if(topicChoice == 15){
            var topic = "Have you read anything good recently?";
        } else if(topicChoice == 16){
            var topic = "What do you miss most about being a kid?";
        } else if(topicChoice == 17){
            var topic = "If you could only eat one food for the rest of your life, what would it be?";
        } else if(topicChoice == 18){
            var topic = "If you were the opposite gender for one day, what would you do?";
        } else if(topicChoice == 19){
            var topic = "What is the best thing about school/work?";
        } else if(topicChoice == 20){
            var topic = "What is your favorite smell?";
        } else if(topicChoice == 21){
            var topic = "What accomplishment are you most proud of?";
        } else if(topicChoice == 22){
            var topic = "Are you a pessimist or an optimist?";
        } else if(topicChoice == 23){
            var topic = "What countries have traveled to?";
        } else if(topicChoice == 24){
            var topic = "Describe your perfect man/woman.";
        } else if(topicChoice == 25){
            var topic = "What is your favorite holiday?";
        } else if(topicChoice == 26){
            var topic = "What is a short/long term goal of yours?";
        } else if(topicChoice == 27){
            var topic = "What are some things you shouldn't say at work?";
        } else if(topicChoice == 28){
            var topic = "When you were younger, what did you want to be when you grew up?";
        } else if(topicChoice == 29){
            var topic = "Tell me about your dream house.";
        } else if(topicChoice == 30){
            var topic = "How often do you use your phone?";
        } else if(topicChoice == 31){
            var topic = "Do you play any sports?";
        } else if(topicChoice == 32){
            var topic = "What is one of the top things on your bucket list?";
        } else if(topicChoice == 33){
            var topic = "What kind of old person do you want to grow up to become?";
        } else if(topicChoice == 34){
            var topic = "What is your biggest fear?";
        } else if(topicChoice == 35){
            var topic = "Describe your perfect first date.";
        } else if(topicChoice == 36){
            var topic = "Would you be willing to reduce your life span by 10 years to become rich or famous?";
        } else if(topicChoice == 37){
            var topic = "Do you keep a journal?";
        } else if(topicChoice == 38){
            var topic = "Would you rather have to sit all day or stand all day?";
        } else if(topicChoice == 39){
            var topic = "What is your favorite thing about winter?";
        } else if(topicChoice == 40){
            var topic = "If you knew you couldn't fail, what would you do?";
        } else if(topicChoice == 41){
            var topic = "Where do you work?";
        } else if(topicChoice == 42){
            var topic = "What is your favorite sports team?";
        } else if(topicChoice == 43){
            var topic = "What was the biggest thing you have ever won?";
        } else if(topicChoice == 44){
            var topic = "What is the worst movie that you've seen?";
        } else if(topicChoice == 45){
            var topic = "Would you rather lose an arm or a leg?";
        } else if(topicChoice == 46){
            var topic = "Do you have any vacation plans coming up?";
        } else if(topicChoice == 47){
            var topic = "What did you do last weekend?";
        } else if(topicChoice == 48){
            var topic = "What would you be doing if you were not here right now?";
        } else if(topicChoice == 49){
            var topic = "Who is the most famous person you have met?";
        } else if(topicChoice == 50){
            var topic = "Do you recycle?";
        } else if(topicChoice == 51){
            var topic = "What is the least favorite thing about this week?";
        } else if(topicChoice == 52){
            var topic = "What is your favorite home cooked dish?";
        } else if(topicChoice == 53){
            var topic = "What do you do to stay in shape?";
        } else if(topicChoice == 54){
            var topic = "What is your favorite candy?";
        } else if(topicChoice == 55){
            var topic = "What is your favorite store in the mall?";
        } else if(topicChoice == 56){
            var topic = "What are some things that you shouldn't say at a funeral?";
        } else if(topicChoice == 57){
            var topic = "Where is your favorite place to shop?";
        } else if(topicChoice == 58){
            var topic = "What would motivate you to run a marathon?";
        } else if(topicChoice == 59){
            var topic = "Are you a clean or messy?";
        } else if(topicChoice == 60){
            var topic = "What's better, having high expectations or having low expectations?";
        } else if(topicChoice == 61){
            var topic = "What do you carry in your purse/wallet?";
        } else if(topicChoice == 62){
            var topic = "What is something new that you've learned in the past week?";
        } else if(topicChoice == 63){
            var topic = "If you could choose your last meal, what would it be?";
        } else if(topicChoice == 64){
            var topic = "Do you believe in love at first sight?";
        } else if(topicChoice == 65){
            var topic = "Would you rather go without junk food for a year or go without TV for a year?";
        } else if(topicChoice == 66){
            var topic = "If you knew that you only had a year left to live, what would you do?";
        } else if(topicChoice == 67){
            var topic = "What's the first thing you notice about a guy/girl";
        } else if(topicChoice == 68){
            var topic = "Do you like to cook?";
        } else if(topicChoice == 69){
            var topic = "What is the last thing you do before you go to sleep?";
        } else if(topicChoice == 70){
            var topic = "If you won $1 million playing the lottery, what would you do?";
        } else if(topicChoice == 71){
            var topic = "What is your favorite drink?";
        } else if(topicChoice == 72){
            var topic = "If you could start any business, what would it be?";
        } else if(topicChoice == 73){
            var topic = "What are some things that you shouldn't say during a marriage proposal?";
        } else if(topicChoice == 74){
            var topic = "What do you usually eat in the morning?";
        } else if(topicChoice == 75){
            var topic = "Would you rather be the smartest moron or dumbest genius?";
        } else if(topicChoice == 76){
            var topic = "Are you scared of dying?";
        } else if(topicChoice == 77){
            var topic = "What do you do in your spare time?";
        } else if(topicChoice == 78){
            var topic = "What is your favorite season?";
        } else if(topicChoice == 79){
            var topic = "Would you rather be stuck in a house with someone you hate or be stuck in a house alone?";
        } else if(topicChoice == 80){
            var topic = "Do you like to dance or sing?";
        } else if(topicChoice == 81){
            var topic = "What is the longest amount of time that you've slept for?";
        } else if(topicChoice == 82){
            var topic = "What is the longest that you've gone without doing laundry?";
        } else if(topicChoice == 83){
            var topic = "What is your favorite hangout spot?";
        } else if(topicChoice == 84){
            var topic = "How have you changed since you were younger?";
        } else if(topicChoice == 85){
            var topic = "Do you have any pets?";
        } else if(topicChoice == 86){
            var topic = "What's your ideal way to celebrate your birthday?";
        } else if(topicChoice == 87){
            var topic = "What is your preferred method of contacting someone (e-mail, phone, text...)?";
        } else if(topicChoice == 88){
            var topic = "What’s one of your worst habits?";
        } else if(topicChoice == 89){
            var topic = "What was your favorite children's book?";
        } else if(topicChoice == 90){
            var topic = "If you were given three wishes, what would you wish for?";
        } else if(topicChoice == 91){
            var topic = "If you where asked to teach a class, what class would you teach?";
        } else if(topicChoice == 92){
            var topic = "If you could meet anybody in history, past or present, who would it be?";
        } else if(topicChoice == 93){
            var topic = "What's in your fridge?";
        } else if(topicChoice == 94){
            var topic = "What are you most worried about right now?";
        } else if(topicChoice == 95){
            var topic = "What is the longest that you've stayed awake for?";
        } else if(topicChoice == 96){
            var topic = "What is your favorite song of all time?";
        } else if(topicChoice == 97){
            var topic = "What is one thing that you can not live without?";
        } else if(topicChoice == 98){
            var topic = "If you could choose to have any single super power, what would you pick?";
        } else if(topicChoice == 99){
            var topic = "How do you like your eggs cooked?";
        } else if(topicChoice == 100){
            var topic = "What is your favorite meal of the day?";
        } else if(topicChoice == 101){
            var topic = "If you found $100 on the ground, what would you do with it?";
        } else if(topicChoice == 102){
            var topic = "What motivates you?";
        } else if(topicChoice == 103){
            var topic = "What was your least favorite subject in school?";
        } else if(topicChoice == 104){
            var topic = "If you were stuck on a deserted island, what 3 things would you want to have with you?";
        }
        
        message.channel.startTyping();
        setTimeout(() => {  message.channel.send(topic); }, 1000);
        message.channel.stopTyping();
        //message.channel.send(topic);
    }
}