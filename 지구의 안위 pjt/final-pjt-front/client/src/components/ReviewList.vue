<template>
  <div
    class="review-list"
    style="display: flex; flex-direction: column; align-items: center"
  >
    <!-- <h3>Article List</h3> -->
    <div class="w-50">
      <hr />
      <div style="display: flex; justify-content: space-between">
        <h5>작성자</h5>
        <h5>제목</h5>
        <h5>평점</h5>
      </div>
      <ReviewListItem
        v-for="review in reviews"
        :key="review.id"
        :review="review"
        style="display: flex; justify-content: space-between"
      />
    </div>
  </div>
</template>

<script>
import ReviewListItem from "@/components/ReviewListItem";

export default {
  name: "ReviewList",
  components: {
    ReviewListItem,
  },
  computed: {
    reviews() {
      return this.$store.state.reviews;
    },
  },
};
</script>

<style>
.review-list {
  text-align: start;
}
</style>
