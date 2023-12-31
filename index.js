const app = require("express")();
app.listen(8080);
app.get("/message", (req, res) => {
    const messages = [
      "إن من ورائكم زمان صبر للمتمسك فيه أجر خمسين شهيدًا منكم",
      "لا تزال طائفة من أمتي قائمة بأمر الله لا يضرهم من خذلهم أو خالفهم حتى يأتي أمر الله وهم ظاهرون على الناس",
      "اعبد الله كأنك تراه فإن لم تكن تراه فإنه يراك",
      "إن الله يحب معالي الأمور ويكره سفسافها",
      "من كانت الآخرة همه جعل الله غناه في قلبه وجمع له شمله وأتته الدنيا وهي راغمة ومن كانت الدنيا همه جعل الله فقره بين عينيه وفرق عليه شمله ولم يأته من الدنيا إلا ما قدر له",
      "والذي نفسي بيده لتأمرن بالمعروف ولتنهون عن المنكر أو ليوشكن الله أن يبعث عليكم عقابا منه ثم تدعونه فلا يستجاب لكم",
      "يا معشر المهاجرين خصال خمس إن ابتليتم بهن، ونزلن بكم وأعوذ بالله أن تدركوهن: لم تظهر الفاحشة في قوم قط حتى يعلنوا بها إلا فشا فيهم الطاعون والأوجاع التي لم تكن في أسلافهم، ولم ينقصوا المكيال والميزان إلا أخذوا بالسنين وشدة المؤنة وجور السلطان، ولم يمنعوا زكاة أموالهم إلا منعوا القطر من السماء، ولولا البهائم لم يمطروا، ولا نقضوا عهد الله وعهد رسوله إلا سلط عليهم عدوا من غيرهم، فيأخذ بعض ما في أيديهم، وما لم تحكم أئمتهم بكتاب الله إلا جُعل بأسهم بينهم",
      //"",
      //"",
      //""
    ];
    const random = Math.floor(Math.random() * messages.length);
    res.status(200).send({
        text: messages[random]
    });
});
