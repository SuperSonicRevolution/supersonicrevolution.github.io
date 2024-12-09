import player  from '../../assets/player.json' with  { type: "json"};
new Vue({
    el: '#playerList',
    data: {
        player: player,
        name:'',
        displayName:'',
        avatar:'',
        youtube:'',
        twitch:'',
        tag:'',
        introduction:'',
        goodAtSonicGames:'',
        goodAtOtherGames:'',
        joinedStreamingHistory:'',
        classicVideoSections:'',
        message:'',
    },
    methods:{
        getID(id){
            this.name = player[id].name;
            this.displayName = player[id].displayName;
            this.avatar = "assets/"+player[id].avatar;
            this.youtube = player[id].links.youtube
            this.twitch = player[id].links.twitch
            this.tags = player[id].tag
            this.introduction = player[id].introduction
            this.goodAtSonicGames = player[id].goodAtSonicGames
            this.goodAtOtherGames = player[id].goodAtOtherGames
            this.joinedStreamingHistory = player[id].joinedStreamingHistory
            this.classicVideoSections = player[id].classicVideoSections
            this.message = player[id].message
        }
    }
});



// import events  from '../../assets/events.json' with  { type: "json"};
// new Vue({
//     el: '#carouselPV',
//     data: {
//         events: events
//     }
// });

$(function(){
    var len = 60; // 超過60個字以"..."取代
    $(".card-text").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});
