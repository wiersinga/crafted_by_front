<template>
    <div class="relative">
        <iframe class="top-0 left-0 w-auto mx-auto"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
        </iframe>
    </div>
</template>

<style>

</style>

<script>
export default {
  data() {
    return {
      address: '',
      location: null
    }
  },
  methods: {
    async getLocation() {
      const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=YOUR_API_KEY`;
      const geocodingResponse = await fetch(geocodingUrl);
      const geocodingData = await geocodingResponse.json();
      
      if (geocodingData.results.length > 0) {
        const location = geocodingData.results[0].geometry.location;
        this.location = location;
      }
    }
  }
}

</script>