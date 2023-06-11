<template>
  <div>
    <div class="film-content-box">
      <div
        class="title_vote"
        style="display: flex; width: 100%; justify-content: space-between"
      >
        <div
          class="in_left"
          style="display: flex; flex-direction: row; text-align: start"
        >
          <h1>{{ movie.original_title }}</h1>
          <div class="ms-3 mt-3">
            <h3>{{ genre }}</h3>

            <!-- <h6>
              {{ movie.vote_count }}명을 통해 {{ movie.vote_average }}의 평점을
              기록했어요. <br> {{ movie.popularity }}명의 관객수를 기록했어요.

            </h6> -->
          </div>
        </div>

        <div
          class="center"
          style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            justify-content: flex-end;
            text-align: end;
          "
        ></div>
        <div v-if="movie.id" class="in_right">
          <button v-if="isLike" class="btn btn-outline-danger mt-3 me-2" @click="zzim">
            안볼래요
          </button>
          <button v-else class="btn btn-outline-danger mt-3 me-2" @click="zzim">
            볼래요
          </button>
          <router-link
            :to="{ name: 'reviewcreate', params: { id: movie.id.toString() } }"
          >
            <button class="btn btn-outline-success mt-3">
              리뷰 작성하러 가기
            </button>
          </router-link>
        </div>
      </div>
      <div>
        <iframe
          width="1158"
          height="650"
          :src="movie.trailer_path"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <br />
        <br />
        <h2 style="color: darkgray"><strong>프로그램 노트</strong></h2>
        <h2>{{ movie.overview }}</h2>
      </div>
      <div class="box1 mt-3">
        <div class="carousel">
          <transition name="fade" mode="out-in">
            <img
              :key="currentIndex"
              :src="getCurrentImgSrc()"
              alt="Carousel Image"
              class="carousel-image"
            />
          </transition>
        </div>
        <div class="currentIndex">{{ currentIndex + 1 }}</div>
        <div class="arrow-button right-arrow" @click="nextImage">
          &#8250;&#8250;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetail",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    user() {
      return this.$store.state.userinfo;
    },
    isLike() {
      return this.movie.like_user.includes(this.user.id)
    },
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    },
  },
  data() {
    return {
      movie: {},
      currentIndex: 0,
      genreList: [
        "플라스틱",
        "동물권",
        "멸종 저항",
        "종말",
        "문명의 이기",
        "공존",
        "에코밥상",
        "기후위기",
      ],
      genre: null,
    };
  },
  methods: {
    zzim() {
      if (this.isLogin) {
        axios({
          method: "post",
          url: `http://127.0.0.1:8000/movies/${this.id}/${this.user.id}/likes/`,
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }).then(() => {
          this.$store.dispatch('getMovies')
          this.getMovie()
        }).catch((err) => {
          console.log(err)
        })
      } else {
        alert('로그인이 필요한 페이지입니다...')
        this.$router.push({ name: 'login' })
      }
    },
    getMovie() {
      axios
        .get(`http://127.0.0.1:8000/movies/${this.id}`)
        .then((response) => {
          this.movie = response.data;
          const genres = this.movie.genres;
          const genreNames = genres.map((idx) => this.genreList[idx - 1]);
          this.genre = genreNames.join(",");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getCurrentImgSrc() {
      if (this.currentIndex === 0 || !this.movie.backdrop_path) {
        return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
      } else {
        return `https://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`;
      }
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % 2;
    },
  },
  created() {
    this.getMovie();
  },
};
</script>

<style scoped>
.box1 {
  width: 100%;
  max-width: 1200px;
  height: 500px;
  margin: auto;
  overflow: hidden;
  position: relative;
  background-color: black;
  border: 1px solid black;
}

.currentIndex {
  position: absolute;
  bottom: 0%;
  right: 10px;
  color: white;
}

.carousel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-image {
  width: auto;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.arrow-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  padding: 5px;
  color: white;
}

.right-arrow {
  right: 10px;
  font-size: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.film-content-box {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
  padding: 20px;
  align-items: flex-start;
}

.film-content-box h1 {
  font-size: 50px;
  margin-bottom: 10px;
  font-weight: bold;
  color: green;
}

.film-content-box h2 {
  font-size: 20px;
  margin-bottom: 10px;
  text-align: left;
}

.film-content-box p {
  font-size: 18px;
  margin-bottom: 5px;
}

/* 반응형 스타일 */
@media (max-width: 768px) {
  .box1 {
    width: 100%;
    height: 300px;
  }

  .currentIndex {
    font-size: 12px;
  }

  .right-arrow {
    font-size: 20px;
  }

  .film-content-box {
    width: 100%;
    max-width: 768px;
    font-size: 14px;
  }

  .film-content-box h1 {
    font-size: 18px;
  }

  .film-content-box h2 {
    font-size: 14px;
  }

  .film-content-box p {
    font-size: 12px;
  }
}
</style>
