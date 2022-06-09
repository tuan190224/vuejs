

<template>
  <div class="about flex flex-column  ">
    <h1>This is an about page</h1>


      <h5 class="font-bold">Tên công ty</h5>
        <div class="grid  p-fluid">
             <div class="col-12 md:col-12 ">
              <InputText class="border-round-2xl" placeholder="Tên" />
            </div>
        </div>

        <h5 class="font-bold">Người đại diện</h5>
        <div class="grid  p-fluid">
             <div class="col-12 md:col-12 ">
              <InputText class="border-round-2xl" placeholder="Tên" />
            </div>
        </div>
        <h5 class="font-bold">Số điện thoại</h5>
        <div class="grid  p-fluid">
             <div class="col-12 md:col-12 ">
              <InputText class="border-round-2xl" placeholder="Số điện thoại" />
            </div>
        </div>
         
        <div class="pass w-full">
          <h5 class="font-bold">Nhâp Lại mật khẩu</h5>
       <Password :class="'w-full'" v-bind:input-class="'border-round-2xl w-full'" v-model="oldPass" toggleMask placeholder="Mật khẩu"></Password>
       </div>
       <div>
          <h5 class="font-bold">Nhâp Lại mật khẩu</h5>
       <Password :class="'w-full'" v-bind:input-class=" 'border-round-2xl  w-full'" v-model="newPass" toggleMask placeholder="Mật khẩu"></Password>
       </div>
       <div>
          <h5 class="font-bold">Nhâp Lại mật khẩu</h5>
       <Password :class="'w-full'" v-bind:input-class="'border-round-2xl w-full'" v-model="reNewPass" toggleMask placeholder="Mật khẩu"></Password>
       </div>
       
  </div>

  
</template>

<script>


export default{
  data() {
    return {
      name: 'abc',
      count: 0,
      oldPass:'',
      newPass:'',
      reNewPass: ''
    }
  }
}


</script>


<style>
@media (min-width: 1024px) {
  .about {
    
    
    
  }
}

</style>
