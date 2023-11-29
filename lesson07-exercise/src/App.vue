<script setup>
import { ref } from "vue";

const accordion = ref(0);
</script>

<template>
  <div class="mt-5 m-0 row justify-content-center">
    <div class="col-6">
      <div class="btn-group-vertical w-100" role="group">
        <button @click="accordion = 1" type="button" class="btn btn-primary">
          Accordion #1
        </button>
        <div class="border p-3" v-if="accordion == 1">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ipsa
            corrupti iusto nemo? Eius, soluta. Consequuntur officiis voluptatem
            eaque culpa accusantium tenetur hic unde. Necessitatibus non minus
            quae, facilis mollitia eum omnis inventore consequatur sint qui quia
            dolorum veniam temporibus quaerat rem, similique natus, culpa
            repellat. Asperiores iure aspernatur odit.
          </p>
        </div>
        <button @click="accordion = 2" type="button" class="btn btn-primary">
          Accordion #2
        </button>
        <div class="border p-3" v-if="accordion == 2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ipsa
            corrupti iusto nemo? Eius, soluta. Consequuntur officiis voluptatem
            eaque culpa accusantium tenetur hic unde. Necessitatibus non minus
            quae, facilis mollitia eum omnis inventore consequatur sint qui quia
            dolorum veniam temporibus quaerat rem, similique natus, culpa
            repellat. Asperiores iure aspernatur odit.
          </p>
        </div>
        <button @click="accordion = 3" type="button" class="btn btn-primary">
          Accordion #3
        </button>
        <div class="border p-3" v-if="accordion == 3">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ipsa
            corrupti iusto nemo? Eius, soluta. Consequuntur officiis voluptatem
            eaque culpa accusantium tenetur hic unde. Necessitatibus non minus
            quae, facilis mollitia eum omnis inventore consequatur sint qui quia
            dolorum veniam temporibus quaerat rem, similique natus, culpa
            repellat. Asperiores iure aspernatur odit.
          </p>
        </div>
        <button @click="accordion = 4" type="button" class="btn btn-primary">
          Accordion #4
        </button>
        <div class="border p-3" v-if="accordion == 4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ipsa
            corrupti iusto nemo? Eius, soluta. Consequuntur officiis voluptatem
            eaque culpa accusantium tenetur hic unde. Necessitatibus non minus
            quae, facilis mollitia eum omnis inventore consequatur sint qui quia
            dolorum veniam temporibus quaerat rem, similique natus, culpa
            repellat. Asperiores iure aspernatur odit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
