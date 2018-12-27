<template>
    <k-field :input="uid" v-bind="$props" :counter="counterOptions" class="k-markdown-field">
        <k-input ref="input" :id="_uid" v-bind="$props" type="markdown" theme="field" v-on="$listeners"/>
    </k-field>
</template>

<script>
export default {
    extends: 'k-textarea-field',
    props: {
        font: String,
        modals: Boolean,
        blank: Boolean,
        invisibles: Boolean,
        kirbytags: Array,
    }
};
</script>

<style lang="scss">
    @import '../../assets/css/styles.scss'
</style>
