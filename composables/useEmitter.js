import mitt from "mitt";

const emitter = mitt()

export default function useEmitter() {
    return {
        $on: emitter.on,
        $emit: emitter.emit
    }
}