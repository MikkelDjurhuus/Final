
import { bus } from '@/main';
export default {
    props: ["settings"],
    methods: {
        Close() {
            bus.$emit('settings-close');
        }
    }
}