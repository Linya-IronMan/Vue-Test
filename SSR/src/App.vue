<template>
    <div id="app">
        <div class="demo" @click="onclick">
            一段内容
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onclick() {
            console.log('click!!')
        }
    }
}
</script>

<style>
.demo {
    width: 300;
    height: 300px;
    background-color: orange;
}

</style>
