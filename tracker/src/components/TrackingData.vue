<template>
  <div id="TrackingData">
    {{ data }}
  </div>
</template>


<script>
export default {
  name: "TrackingData",
  data() {
    return {
      data: {}
    };
  },
  beforeMount() {
    this.getName()
    .then(function(dida){
        console.log(dida);  //gibt mir das JSON Object aus nachdem das "promise" erfüllt wurde
    });    
   
  },
  methods: {
    async getName() {
      const res = await fetch("http://localhost/device-tracker-backend-master/track.php");
      const data = await res.json();
      this.data = data;  // gibt Data an das data object der component
      return data;  // Funktion muss data retour geben damit man damit was machen kann
    }
  }
};
</script>
