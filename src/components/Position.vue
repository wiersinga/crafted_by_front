<!-- <template>
    <div class="relative">
        <iframe class="top-0 left-0 w-auto mx-auto"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
        </iframe>
    </div>
</template> -->
<template>
  <div>
    <div id="map" style="height: 200px;"></div>
  </div>
</template>

<script setup>
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { onMounted, toRef,watch } from 'vue';
import {useAddressStore} from "@/stores/address";
const storeAddress = useAddressStore();

const address = toRef(storeAddress, 'address');
// const formattedAddress = '';

onMounted(() => {
  storeAddress.fetchAddressArtist('9b6a3aca-b27f-459c-8765-02a7e5054164');
});

watch(address, (newValue) => {
  const formattedAddress = `${newValue.street}, ${newValue.ZIPCode} ${newValue.city}, ${newValue.countryCode}`;
  console.log('test address',formattedAddress);
  fetchCoordinates(formattedAddress);
});


const fetchCoordinates = async () => {
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: "68, rue des vollandes, 1207 Genève, CH",
        format: 'json',
        limit: 1
      }
    });
    console.log(response.data)
    if (response.data && response.data.length > 0) {
      const { lat, lon } = response.data[0];
      showMap(lat, lon);
    } else {
      console.error('No coordinates found for the address.');
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
  }
};


const showMap = (latitude, longitude) => {
  const map = L.map('map').setView([latitude, longitude], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  L.marker([latitude, longitude]).addTo(map)
    .bindPopup('Ton artisan se trouve ICI!')
    .openPopup();
};

onMounted(fetchCoordinates);
// export default {
//   mounted() {
//     this.fetchCoordinates();
//   },
//   methods: {
//     async fetchCoordinates() {
//       const address = {
//         street: "39, avenue Nath Pelletier",
//         ZIPCode: "17897",
//         city: "Lemaitre",
//         countryCode: "CZ"
//       };
//       const formattedAddress = `${address.street}, ${address.ZIPCode} ${address.city}, ${address.countryCode}`;
//       try {
//         const response = await axios.get('https://nominatim.openstreetmap.org/search', {
//           params: {
//             q: formattedAddress,
//             format: 'json',
//             limit: 1
//           }
//         });
//         if (response.data && response.data.length > 0) {
//           const { lat, lon } = response.data[0];
//           this.showMap(lat, lon);
//         } else {
//           console.error('No coordinates found for the address.');
//         }
//       } catch (error) {
//         console.error('Error fetching coordinates:', error);
//       }
//     },
//     showMap(latitude, longitude) {
//       const map = L.map('map').setView([latitude, longitude], 13);
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '© OpenStreetMap contributors'
//       }).addTo(map);
//       L.marker([latitude, longitude]).addTo(map)
//         .bindPopup('Your Location')
//         .openPopup();
//     }
//   }
// };
</script>

<style>
#map {
  width: 100%;
}
</style>

<!-- <script>
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

</script> -->