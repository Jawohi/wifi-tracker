<script>
import Vue from "vue";
import Component from "vue-class-component";

// Define the component in class-style
@Component
export default class TrackingData_Class extends Vue {
  // Class properties will be component data


  // Methods will be component methods
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}


@Component
export default class Clients extends Vue{
    mac  = ''   //MAC Address
    x = 0.0   //X coord
    y = 0.0  // y coord
    acc = 0.0 // Accurarcy 
}

@Component
export default class Tracker extends Vue{
    name = '' // Name of the Tracker
    x = 0.0 // X coord
    y = 0.0 // y coord
}

@Component
export default class Room extends Vue{
    x=0.0 //x dimension of room
    y=0.0 //y dimension of room
}

</script>
