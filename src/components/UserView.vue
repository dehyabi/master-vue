<template>
    <h1>Hello, {{ name }}</h1>
    <h1>Your are {{ roleId }}</h1>
</template>
<script>
export default {
    props: ["name", "roleId"]
}
</script>