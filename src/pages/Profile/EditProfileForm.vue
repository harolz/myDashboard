<template>
  <card>
    <h5 slot="header" class="title">Edit Stock Profile</h5>
      <div class="column">
        <form class="form">
          <h4>Add New Entry</h4>
          <div class="col-md-6 pr-md-1">
            <label>Low</label>
            <input class="form-control" placeholder="Day Lowest Price" type="number" v-model="lowAmount" required>
          </div>
            <div class="col-md-6 pr-md-1">
          <label>High</label>
            <input class="form-control" placeholder="Day Highest Price" type="number" v-model="highAmount" required>
          </div>
          <div class="col-md-6 pr-md-1">
            <label>Volume</label>
            <base-input placeholder="Day Volume" type="number" v-model="volumeAmount" required></base-input>
          </div>
          <div class="col-md-6 pr-md-1">
            <label>Date</label>
            <input class="form-control" placeholder="Date" type="date" v-model="entrydate" required>
          </div>
          <div class="col-md-6 pr-md-1">
            <button class="btn btn-success" v-on:click="addSummary">Add New Entry</button>
            <button class="btn btn-primary" v-on:click="updateSummary">Update</button>
            <button class="btn btn-secondary" v-on:click="deleteSummary">Delete</button>
          </div>
        </form>
      </div>
    <!-- <base-button slot="footer" type="primary" fill>Save</base-button> -->
  </card>
</template>
<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    data () {
      return {
        low: null,
        high: null,
        volume:null,
        date: null,
        lowAmount: null,
        highAmount: null,
        volumeAmount: null,
        entrydate: null
      }
    },
    // created () {
    //   this.fetchData()
    //   this.fillData()
    // },
    // mounted () {
    //   this.fillData()
    // },
    methods: {
      checkForm: function (e) {
      if (this.lowAmount && this.highAmount && this.volumeAmount && this.entrydate) {
        return true;
      }
      e.preventDefault();
      return false;
    },
      addSummary (event) {
        if (this.lowAmount && this.highAmount && this.volumeAmount && this.entrydate) {
        let low = this.lowAmount
        let high = this.highAmount
        let volume = this.volumeAmount
        let today = moment(this.entrydate).format("YYYY-MM-DD")
        event.preventDefault();
        axios.post('http://localhost:5000/summary/aapl', {
          low: low,
          high: high,
          volume: volume,
          date: today
        })
          .then(response => {
            console.log(response.data)
            alert("The Stock Summary has been created!")
          })
          .catch(error => {
            console.log(error)
          })}
      },
      updateSummary (event) {
        if (this.lowAmount && this.highAmount && this.volumeAmount && this.entrydate) {
        let low = this.lowAmount
        let high = this.highAmount
        let volume = this.volumeAmount
        let today = moment(this.entrydate).format('YYYY-MM-DD')
        console.log(this.entrydate)
        event.preventDefault();
        axios.put('http://localhost:5000/summary/aapl', {
          low: low,
          high: high,
          volume: volume,
          date: today
        })
          .then(response => {
            console.log(response.data)
            alert("The Stock Summary has been updated!")
          })
          .catch(error => {
            console.log(error)
          })
      }},
      deleteSummary (event) {
      if(this.entrydate){
      let low = this.lowAmount
      let high = this.highAmount
      let volume = this.volumeAmount
      let today = moment(this.entrydate).format('YYYY-MM-DD')
      console.log(this.entrydate)
      event.preventDefault();
      axios.delete('http://localhost:5000/summary/aapl', {data: {
        low: low,
        high: high,
        volume: volume,
        date: today
      }})
        .then(response => {
          console.log(response.data)
          alert("The Stock Summary has been deleted!")
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
    }
  }
</script>
<style>
</style>
