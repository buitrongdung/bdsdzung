import { LIST_USER } from "./action-types";

export function list(payload) {
    return {
        type: LIST_USER,
        payload
    }
}