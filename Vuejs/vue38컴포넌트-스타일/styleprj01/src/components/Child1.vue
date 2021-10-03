<style scoped>
.main {
    border: 1px solid black;
    background-color: yellow;
}
</style>
<template>
    <div class="main">
        {{ msg }}
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            msg: "Child1.안녕하세요"
        };
    }
};
</script>