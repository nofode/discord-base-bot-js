export function Service({ eventName, name = 'Forever', active = false, only = false, execute }) {
    return {
        eventName,
        name,
        active,
        only,
        execute
    }
}