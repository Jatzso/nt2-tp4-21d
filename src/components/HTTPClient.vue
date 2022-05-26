<template>

<div class="bg-light border-top">
  <div class="btn-group my-3"> 
<button type="button" class="btn btn-primary" @click="getXMLHTTPRequest()">XHR</button>
<button type="button" class="btn btn-secondary" @click="getFetch()">Fecth</button>
<button type="button" class="btn btn-success" @click="getAxios()">Axios</button>
<button class="btn btn-danger" @click="users = []">Clear</button>
  </div>
<table class="table table-hover" v-if="this.users.length">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user,index) in users" :key="index">
      <td>{{ user.name }}</td>
      <td>{{ user.email}}</td>
      <td>{{ user.telephoneNumber }}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>

  export default  {
    name: 'src-components-http-client',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://628e5e53a339dfef87ad1064.mockapi.io/Users',
        users: []
      }
    },
    methods: {
      getXMLHTTPRequest(){
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200){
            let data = JSON.parse(xhr.response)
            this.users = data
          }
          else {
            console.error('Error en XHR status:', xhr.status)
          }
        })
        xhr.send()
      },

     async getFetch(){
       /*  fetch(this.url)
          .then(response => response.json())
          .then(respuesta => {
            //console.log(respuesta)
            this.users = respuesta
          })
          .catch( error => console.error('Error en Fetch:', error))*/
       try {
          let response = await fetch(this.url)
          let respuesta = await response.json()
          //console.log(respuesta)
          this.users = respuesta
        }
        catch(error) {
          console.error('Error en Fetch:', error)
        }
     },
       async getAxios(){
          let {data:respuesta} = await this.axios(this.url)
          this.users = respuesta
        }
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-http-client {

  }
</style>
