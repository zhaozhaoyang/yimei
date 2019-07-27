<template>
    <div>
        <Box>
            <template v-slot:box>
                <h1>111111</h1>
            </template>
            <h2>456456</h2>            
            <template v-slot:box2>
                <h1>222222</h1>
            </template>
            <h2>456456</h2>
        </Box>
    </div>
</template>
<script>
import Box from '@/components/box.vue'
export default {
    components:{Box}
}
</script>