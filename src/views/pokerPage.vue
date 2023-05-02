<template>
  <div class="flex-col">
    Welcome to my poker room!
    <div>Money: {{ money }}$</div>
    <div>
      {{ enemyValue }}
    </div>
    <form>
      <fieldset>
        <legend class="mb-7">
          Please select your preferred contact method:
        </legend>
        <div class="mb-7">
          <label for="contactChoice1" class="m-5">
            <input
              type="radio"
              id="contactChoice1"
              name="contact"
              value="email"
            />
            Stone</label
          >
          <label for="contactChoice2" class="m-5">
            <input
              type="radio"
              id="contactChoice2"
              name="contact"
              value="phone"
            />
            Paper</label
          >
          <label for="contactChoice3" class="m-5">
            <input
              type="radio"
              id="contactChoice3"
              name="contact"
              value="mail"
            />
            Scissors</label
          >
        </div>
        <div class="mb-7">
          <button type="button" v-on:click="generateAnswer">Submit</button>
        </div>
        <div v-if="answer">{{ answer }}</div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 300,
      enemyValue: 'You will lose ha-ha',
      answer: '',
    };
  },
  methods: {
    generateAnswer() {
      if (this.money <= 0) {
        this.answer = 'ha-ha, get out';
        return;
      }
      const randomValue = this.getRandomInt();
      if (randomValue === 0) this.answer = 'rematch!!!';
      if (randomValue === 1) {
        this.answer = 'i lose!!!';
        this.money -= 50;
      }
      if (randomValue === 2) {
        this.answer = 'i win!!!';
        this.money += 50;
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * 3);
    },
  },
};
</script>
