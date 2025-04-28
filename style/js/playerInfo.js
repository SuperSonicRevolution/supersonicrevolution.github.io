import player  from '../../assets/player.json' with  { type: "json"};
import events  from '../../assets/events.json' with  { type: "json"};

//跑者資料庫
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

//歷屆活動紀錄
new Vue({
    el: '#eventInfo',
    data: {
        events: events,
    },
    methods:{
    }
});

//輪播圖的滑軌
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// 歷屆活動的預設訊息
$(function(){
    var time = new Date();
    var preYear = events.slice().reverse();
    var eventRight = "#v-pills-"+preYear[0].year;
    var eventLeft = "#v-pills-"+preYear[0].year+"-tab";
    $(eventRight).addClass("show");
    $(eventRight).addClass("active");
    $(eventLeft).addClass("active");
});

//跑者資料庫訊息過長刪除
$(function(){
    var len = 50; // 超過50個字以"..."取代
    $(".card-text").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});
