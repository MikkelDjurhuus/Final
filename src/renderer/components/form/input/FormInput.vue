<template>
    <component :is="'input-'+data.type" :data="data" :template="template">
    </component>
</template>

<script>
import InputCluster from './InputCluster'
import InputDatePicker from './InputDatePicker'
import InputSelect from './InputSelect'
import InputRadioSelect from './InputRadioSelect'
import InputRadio from './InputRadio'
import InputSelectCategory from './InputSelectCategory'
import InputSelectRadioGroup from './InputSelectRadioGroup'
import InputText from './InputText'
import InputTextArea from './InputTextArea'
import InputUpload from './InputUpload'
export default {
    props: ["data", "template"],
    components:{
        "input-cluster":InputCluster,
        "input-datepicker":InputDatePicker,
        "input-select":InputSelect,
        "input-radio-select":InputRadioSelect,
        "input-radio":InputRadio,
        "input-select-category":InputSelectCategory,
        "input-select-radiogroup":InputSelectRadioGroup,
        "input-text":InputText,
        "input-textarea":InputTextArea,
        "input-upload":InputUpload
    }
}
</script>

<style>

</style>

