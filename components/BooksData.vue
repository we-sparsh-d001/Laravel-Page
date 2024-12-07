<template>
  <div data-aos="fade-up" class="book">
    <UCard  class="bg-gray-50 hover:shadow-lg transition-all duration-200 lg:h-[330px] h-max md:h-max sm:h-max">
      <NuxtLink :to="'/articles/' +result.bookId"><h4 class="md:ml-0 lg:ml-0 ml-2"><span class="text-xl    hover:text-gray-400">{{result.bookTitle}}</span></h4></NuxtLink>
      <div class="lg:flex sm:flex  mt-5    ">
      <img :src="result.bookImage" class="w-[100px] h-[100px] lg:mb-0 mb-5 lg:m-0 m-auto sm:m-0  ">
      <div class="*:mb-2 ml-3">
        <h4><span class="text-sm font-bold">Book Author:-</span><span class="text-xs">{{result.bookAuthors[0]}},{{result.bookAuthors[1]}}</span></h4>
        <p><span class="text-sm font-bold">Published Date:-</span><span class="text-xs">{{result.bookPublishDate}}</span></p>
        <h4><span class="text-sm font-bold">Descritption:-</span><span class="text-xs">{{result.bookShortDesc}}<NuxtLink :to="'/articles/' +result.bookId"><span class="text-green-400">Read More...</span></NuxtLink></span></h4>

      </div>
      </div>
    </UCard>
  </div>

</template>

<script setup>
const result=defineProps(['bookAuthors','bookTitle','bookShortDesc','bookLongDesc','bookImage','bookPublishDate','bookIsbn','bookId','bookPageCount'])


const {isDarkmode,toggleDarkmode}=useDark();
</script>


<style scoped>


.spanBook{
  border-radius: 5px;
  font-size: x-large;
}
.heading{
  width: 100%;
  margin: auto;
  margin-top: 20px;
  background: linear-gradient(130deg,black,lightseagreen);
  text-align: center;
  ;
  color: whitesmoke;
}


</style>
