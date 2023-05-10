import { IComponent, KeysOfIComponentData } from "../../type/dynamic-rendering.interfaces";

import { flattenDeep, map } from 'lodash'

export const recursiveSearchJS = (array: IComponent[], property: KeysOfIComponentData, value: string) => {
    const matches: IComponent[] = [];

    const search = (array: IComponent[]) => {
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

export const recursiveSearchLodach = (array: IComponent[], property: KeysOfIComponentData, value: string): IComponent[] => {
    return flattenDeep(map(array, (component: IComponent) => {
        const isEmbeddedComponent: boolean = !!component['data']['embeddedView'] && component['data']['embeddedView'].length > 0;
        if (component.data[property] === value) {
            return component;
        } else if (isEmbeddedComponent) {
            return recursiveSearchLodach(component['data']['embeddedView'] as IComponent[], property, value);
        } else {
            return [] as IComponent[];
        }
    }))
}



