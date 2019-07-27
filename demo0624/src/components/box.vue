<template>
    <div>
        <p>我是组件</p>
        <div style="color:red">
            <slot></slot>
        </div>  
        <slot name="box"></slot>
              
        <slot name="box2"></slot>
    </div>
</template>
<script>
export default {
    
}
</script>