<template>
  <div class="d-flex">
    <div class="genre p-5">
      <h3>장르별 추천영화</h3>
      <select class="form-select w-25 ms-4" aria-label="Default select example" v-model="selectedGenre">
        <option selected disabled>장르를 선택해주세요</option>
        <option v-for="genre in genre_list" :key="genre.id" :value="genre.id">{{genre.name}}</option>
      </select>
    </div>
    <div class="list" v-if="selectedGenre">
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li
            v-for="(group, index) in grouped_movies"
            :key="index"
            :data-bs-target="'#myCarousel'"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div
            v-for="(group, index) in grouped_movies"
            :key="index"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <div class="row">
              <div
                v-for="movie in group"
                :key="movie.id"
                class="movie col-md-3"
              >
                <router-link :to="{name: 'moviedetail', params: { id:movie.id.toString() }}">
                  <img
                    :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                    alt="Movie Poster"
                    style="height: 550px"
                  />
                </router-link>
                <h5>{{movie.original_title}}</h5>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">이전</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">다음</span>
        </a>
      </div>
    </div>
    <div class="all" v-if="!selectedGenre"><MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/></div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "MovieView",
  components: {
    MovieCard,
  },
  data() {
    return {
      selectedGenre: null,
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
    genre_list() {
      return this.$store.state.genres;
    },
    selected_genre_movies() {
      const selected_genre = this.selectedGenre;
      return this.movies.filter((movie) => movie.genres.includes(selected_genre));
    },
    grouped_movies() {
      const groups = [];
      const chunkSize = 4;
      for (let i = 0; i < this.selected_genre_movies.length; i += chunkSize) {
        groups.push(this.selected_genre_movies.slice(i, i + chunkSize));
      }
      return groups;
    },
    // selected_genre_movies() {
    //   if (this.selectedGenre) {
    //     return this.movies.filter((movie) => movie.genres.includes(this.selectedGenre));
    //   } else {
    //     return [];
    //   }
    // },
    // grouped_movies() {
    //   const groupSize = 4;
    //   const movies = this.selected_genre_movies;
    //   const result = [];

    //   for (let i = 0; i < movies.length; i += groupSize) {
    //     const group = movies.slice(i, i + groupSize);
    //     result.push(group);
    //   }

      // return result;
    // },
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies");
    },
    getGenres() {
      this.$store.dispatch("getGenres");
    },
    selected(event) {
      const selected_genre = Number(event.target.value);
      this.selectedGenre = selected_genre;
    },
  },
  created() {
    this.getMovies();
    this.getGenres();
  },
};
</script>

<style scoped>
.d-flex {
  flex-direction: column;
}
.list {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
}
.genre {
  display: flex;
  justify-content: center;
}
.carousel-item img {
  object-fit: cover;
  height: 450px;
}
.all {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.movie:hover {
  transform: scale(1.04);
  /* border: 2px solid #F288AF; */
  color: #00B969;
}
</style>