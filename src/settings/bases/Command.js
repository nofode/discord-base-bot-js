export function Command({ dev, name, category = null, description, type = 1, execute }) {
    const { name: devName, development = true, active = true } = dev;

    return {
        dev: {
            name: devName,
            development,
            active
        },
        name,
        category,
        description,
        type,
        execute
    };
}
