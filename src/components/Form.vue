<template>

  <div class="jumbotron py-20 mx-5">
  <vue-form :state="formstate" @submit.prevent="submit()">
    
    <!--Name Field-->
    <validate tag="div">
      <label for="name">Nombre: </label>
      <input class="form-control" type="text" id="name" name="name" 
      v-model="model.name" required minlength="5" maxlength="15"/>
      
      <field-messages class="mt-3" name="name" show="$dirty">
        <div class="alert alert-danger" slot="required">Name is a required field</div>
        <div class="alert alert-danger" slot="minlength">Minimum charcters 3</div>
      </field-messages>
    </validate>
    
    <!--Age Field-->
    <validate tag="div">
      <label for="age">Age: </label>
      <input class="form-control" type="number" id="age" name="age" 
      v-model.number="model.age" required :min="minAge" :max="maxAge"/>
      
      <field-messages class="mt-3" name="age" show="$dirty">
        <div class="alert alert-danger" slot="required">Age is a required field</div>
        <div class="alert alert-danger" slot="min">Minimum age 18</div>
        <div class="alert alert-danger" slot="max">Maximum age 120</div>
      </field-messages>
    </validate>
    
    <!--Email Field-->
    <validate tag="div">
      <label for="email">Email: </label>
      <input class="form-control" type="email" id="email" name="email" 
      v-model="model.email" required />
      
      <field-messages class="mt-3" name="email" show="$dirty">
        <div class="alert alert-danger" slot="required">Email is a required field</div>
        <div class="alert alert-danger" slot="email"> Invalid email</div>
      </field-messages>
    </validate>
    

    <button class="btn btn-success mt-3" :disabled="formstate.$invalid">Submit</button>
  </vue-form>
  <br>
  <table class="table table-hover" v-if="registros.length">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(registro,index) in registros" :key=index>
      <th scope="row"> {{ index + 1 }}</th>
      <td> {{ registro.name }}</td>
      <td> {{ registro.age }} </td>
      <td> {{ registro.email }} </td>
    </tr>
  </tbody>
</table>
  </div>

</template>

<script>

  export default  {
    name: 'src-components-form',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate:{},
        model: this.resetForm(),
        minAge: 18,
        maxAge: 120,
        registros: [],
        
      }
    },
    methods: {
      submit(){
        let registro = this.model
        this.registros.push(registro)
        this.model = this.resetForm()
        this.formstate._reset()
        
        
      },
      resetForm(){
        return{
          name: null,
          age: null,
          email: null,
        }
        
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-form {

  }

  label{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 25px;
    font-style: italic;
  }
</style>
