import { IComponent, KeysOfIComponentData } from "../../type/dynamic-rendering.interfaces";

function recursiveSearchJS(array: IComponent[], property: KeysOfIComponentData, value: string) {
    const matches: IComponent[] = [];

    function search(array: IComponent[]) {
        if (array.length < 1) return;

        array.forEach((component) => {

            if (component['data'][property] === value) {
                matches.push(component);
            }

            const isEmbeddedComponent: boolean = !!component['data']['embeddedView'] && component['data']['embeddedView'].length > 0;

            if (isEmbeddedComponent) {
                search(component['data']['embeddedView'] as IComponent[])
            }
        })
    }

    search(array)
    return matches;
}

export default recursiveSearchJS;