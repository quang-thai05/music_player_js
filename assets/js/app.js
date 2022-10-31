const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
   songs: [
      {
         name: "Nevada",
         singer: "Vicetone",
         path: "./assets/music/song1.mp3",
         image: "./assets/img/images.jpg",
      },
      {
         name: "SummerTime",
         singer: "K-391",
         path: "./assets/music/song2.mp3",
         image: "./assets/img/images.jpg",
      },
      {
         name: "Monody",
         singer: "TheFatRat",
         path: "./assets/music/song3.mp3",
         image: "./assets/img/images.jpg",
      },
      {
         name: "Reality",
         singer: "Lost Frequencies",
         path: "./assets/music/song4.mp3",
         image: "./assets/img/images.jpg",
      },
      {
         name: "Ngày khác lạ",
         singer: "Đen Vâu",
         path: "./assets/music/song5.mp3",
         image: "./assets/img/images.jpg",
      },
      {
         name: "Lemon tree",
         singer: "Fools Garden",
         path: "./assets/music/song6.mp3",
         image: "./assets/img/images.jpg",
      },
      {
         name: "Sugar",
         singer: "Maroon 5",
         path: "./assets/music/song7.mp3",
         image: "./assets/img/images.jpg",
      },
      {
         name: "My Love",
         singer: "Westlife",
         path: "./assets/music/song8.mp3",
         image: "./assets/img/images.jpg",
      },
      {
         name: "Attetion",
         singer: "Charlie Puth",
         path: "./assets/music/song9.mp3",
         image: "./assets/img/images.jpg",
      },
      {
         name: "Monster",
         singer: "Katie sky",
         path: "./assets/music/song10.mp3",
         image: "./assets/img/images.jpg",
      },
   ],
   render: function () {
      const htmls = this.songs.map((song) => {
         return;
         `
            <div class="song">
               <div class="thumb"
                  style="background-image: url('${song.image}');">
               </div>
               <div class="body">
                  <h3 class="title">${song.name}</h3>
                  <p class="author">${song.singer}</p>
               </div>
               <div class="option">
                  <i class="fas fa-ellipsis-h"></i>
               </div>
            </div>
         `;
      });
      $(".playlist").innerHTML = htmls.join("");
   },
   handleEvents: function (event) {
      document.onscroll = function () {
      };
   },
   start: function () {
      this.handleEvents();

      this.render();
   },
};

app.start();
