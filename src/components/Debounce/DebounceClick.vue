<template>
    <div>
        <button class="bg-primary" @click.prevent="handleClick">
            <slot />
        </button>
        <div>clicked: {{ counter }}</div>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        timer: {
            type: Number,
            default: 300,
        },
    },
    data: () => ({
        timeOut: null,
        counter: 0,
    }),
    methods: {
        handleClick() {
            this.counter += 1;
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                this.$emit("click");
            }, this.timer);
        },
    },
};
</script>
<style></style>
