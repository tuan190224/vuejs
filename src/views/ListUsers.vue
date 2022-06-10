<script setup>
import DebounceClick from "@/components/Debounce/DebounceClick.vue";
</script>

<template>
    <div class="card" style="height: calc(100vh - 143px)">
        <div>
            <span class="p-input-icon-right">
                <InputText
                    @change="
                        {
                            changeIcon();
                            searchValue();
                        }
                    "
                    type="text"
                    v-model="value2"
                />
                <i :class="[spinner]" />
            </span>
            <DebounceClick />
        </div>
        <DataTable :value="customers" :scrollable="true" scrollHeight="flex">
            <Column field="id" header="Id"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column
                field="representative.name"
                header="Representative"
            ></Column>
            <Column field="status" header="Status"></Column>
        </DataTable>
    </div>
</template>
<script>
import { CustomerService } from "./obj";

export default {
    data() {
        return {
            customers: CustomerService.data,
            spinner: "pi pi-search",
            search: "pi pi-search",
            value2: "",
            changeIcon() {
                const set = setInterval(() => {
                    this.spinner = "pi pi-spin pi-spinner";
                    this.spinner = this.search;
                }, 300);
            },
            searchValue() {
                this.customers = CustomerService.data.map((i) => {
                    const a = i.id + "";

                    if (a.search(this.value2 + "") > -1) {
                        return i;
                    }
                });
            },
        };

        // },
        // customerService: null,
        // created() {
        //     this.customerService = new CustomerService();
        // },
        // mounted() {
        //     this.customerService
        //          .getCustomersLarge()
        //          .then((data) => (this.customers = data));
    },
};
</script>
