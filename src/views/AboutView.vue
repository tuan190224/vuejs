<script setup>
import Btn1 from "@/components/btn/Btn1.vue";
</script>
<template>
    <div id="app" class="about flex flex-column">
        <h1>This is an about page</h1>

        <h5 class="font-bold">Tên công ty</h5>
        <div class="grid p-fluid">
            <div class="col-12 md:col-12">
                <InputText class="border-round-2xl" placeholder="Tên" />
            </div>
        </div>

        <h5 class="font-bold">Người đại diện</h5>
        <div class="grid p-fluid">
            <div class="col-12 md:col-12">
                <InputText class="border-round-2xl" placeholder="Tên" />
            </div>
        </div>
        <h5 class="font-bold">Số điện thoại</h5>
        <div class="grid p-fluid">
            <div class="col-12 md:col-12">
                <InputText
                    class="border-round-2xl"
                    placeholder="Số điện thoại"
                />
            </div>
        </div>

        <div class="pass w-full">
            <h5 class="font-bold">Nhâp Lại mật khẩu</h5>
            <Password
                :class="'w-full'"
                v-bind:input-class="'border-round-2xl w-full'"
                v-model="oldPass"
                toggleMask
                placeholder="Mật khẩu"
            ></Password>
        </div>
        <div>
            <h5 class="font-bold">Nhâp Lại mật khẩu</h5>
            <Password
                :class="'w-full'"
                v-bind:input-class="'border-round-2xl  w-full'"
                v-model="newPass"
                toggleMask
                placeholder="Mật khẩu"
            ></Password>
        </div>
        <div>
            <h5 class="font-bold">Nhâp Lại mật khẩu</h5>
            <Password
                :class="'w-full'"
                v-bind:input-class="'border-round-2xl w-full'"
                v-model="reNewPass"
                toggleMask
                placeholder="Mật khẩu"
            ></Password>
        </div>
        <Button @click="hidden = !hidden">{{ hidden ? "on" : "off" }} </Button>
        <Button v-model="a" :class="{ Dnone: hidden }">{{ a }}</Button>
    </div>

    <Btn1 />
</template>

<script>
const app = {
    data() {
        return {
            name: "abc",
            count: 1,
            oldPass: "",
            newPass: "",
            reNewPass: "",
            hidden: false,
            a: 2,
        };
    },
    beforeUpdate() {},
};
export default app;
</script>

<style>
@media (min-width: 1024px) {
    .about {
    }
    .Dnone {
        display: none;
    }
}
</style>
