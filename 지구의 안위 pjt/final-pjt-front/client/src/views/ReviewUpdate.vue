<!-- views/CreateView.vue -->
<template>
  <b-container v-if="review" role="group" class="p-5 article-form">
    <h1>{{ review.movie_title }}</h1>
    <h6>지구의 안위를 위해 경험을 나눕니다</h6>
    <fieldset class="rate">
      <input type="radio" id="rating10" name="rating" value="5" v-model="score"/><label
        for="rating10"
        title="5"
      ></label>
      <input type="radio" id="rating9" name="rating" value="4.5" v-model="score"/><label
        class="half"
        for="rating9"
        title="4.5"
      ></label>
      <input type="radio" id="rating8" name="rating" value="4" v-model="score" /><label
        for="rating8"
        title="4"
      ></label>
      <input type="radio" id="rating7" name="rating" value="3.5" v-model="score" /><label
        class="half"
        for="rating7"
        title="3.5"
      ></label>
      <input type="radio" id="rating6" name="rating" value="3" v-model="score" /><label
        for="rating6"
        title="3"
      ></label>
      <input type="radio" id="rating5" name="rating" value="2.5" v-model="score" /><label
        class="half"
        for="rating5"
        title="2.5"
      ></label>
      <input type="radio" id="rating4" name="rating" value="2" v-model="score" /><label
        for="rating4"
        title="2"
      ></label>
      <input type="radio" id="rating3" name="rating" value="1.5"  v-model="score"/><label
        class="half"
        for="rating3"
        title="1.5"
      ></label>
      <input type="radio" id="rating2" name="rating" value="1" v-model="score" /><label
        for="rating2"
        title="1"
      ></label>
      <input type="radio" id="rating1" name="rating" value="0.5"  v-model="score"/><label
        class="half"
        for="rating1"
        title="0.5"
      ></label>
    </fieldset>
    <b-row class="m-4">
      <label style="text-align: start" for="input-title"
        >이 영화는 _______ (이)다.</label
      >
      <b-form-input
        id="input-title"
        :placeholder="this.review.title"
        v-model="title"
        trim
      >
      </b-form-input>
    </b-row>
    <b-row class="m-4">
      <label style="text-align: start" for="input-content">{{
        review.question1
      }}</label>
      <b-form-input
        id="input-content"
        :placeholder="this.review.content1"
        v-model="content1"
        trim
      >
      </b-form-input>
    </b-row>
    <b-row class="m-4">
      <label style="text-align: start" for="input-content">{{
        review.question2
      }}</label>
      <b-form-input
        id="input-content"
        :placeholder="this.review.content2"
        v-model="content2"
        trim
      >
      </b-form-input>
    </b-row>
    <b-row class="m-4">
      <label style="text-align: start" for="input-content">
      그 외 나누고 싶은 말</label>
      <b-form-input
        id="input-content"
        :placeholder="this.review.content3"
        v-model="content3"
        trim
      >
      </b-form-input>
    </b-row>
    <b-button variant="outline-success" @click="updateReview">나누기</b-button>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ReviewUpdate",
  components: {},
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: null,
      content1: null,
      content2: null,
      content3: "",
      review: null,
      score: null,
    };
  },
  methods: {
    updateReview() {
      const title = this.title;
      const content1 = this.content1;
      const content2 = this.content2;
      const content3 = this.content3;
      const score = parseInt(this.score);
      const question1 = this.review.question1
      const question2 = this.review.question2
      const movie = this.review.movie

      if (!score) {
        alert("별점을 선택해주세요")
        return;
      }
      if (!title) {
        alert("제목을 입력해주세요");
        return;
      } else if ((!content1) | (!content2)) {
        alert("내용을 입력해주세요");
        return;
      } 
      axios({
        method: "put",
        url: `http://127.0.0.1:8000/movies/reviews/${this.id}/`,
        data: { title, content1, content2, content3, score, movie, question1, question2},
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then((res) => {
          console.log(res)
          this.$router.push({ name: "reviewview" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getReview() {
      axios
        .get(`http://127.0.0.1:8000/movies/reviews/${this.id}/`)
        .then((response) => {
          this.review = response.data;
          this.title = this.review.title;
          this.content1 = this.review.content1;
          this.content2 = this.review.content2;
          this.content3 = this.review.content3;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getReview();
  },
};
</script>

<style>
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
.rate {
  display: inline-block;
  border: 0;
  margin-right: 15px;
}
.rate > input {
  display: none;
}
.rate > label {
  float: right;
  color: #ddd;
}
.rate > label:before {
  display: inline-block;
  font-size: 1rem;
  padding: 0.3rem 0.2rem;
  margin: 0;
  cursor: pointer;
  font-family: FontAwesome;
  content: "\f005 ";
}
.rate .half:before {
  content: "\f089 ";
  position: absolute;
  padding-right: 0;
}
.rate input:checked ~ label,
.rate label:hover,
.rate label:hover ~ label {
  color: orange !important;
}
.rate input:checked + .rate label:hover,
.rate input input:checked ~ label:hover,
.rate input:checked ~ .rate label:hover ~ label,
.rate label:hover ~ input:checked ~ label {
  color: orange !important;
}
</style>