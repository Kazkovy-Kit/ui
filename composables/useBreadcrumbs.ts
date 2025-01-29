import type {RouteLocationRaw} from "#vue-router";

type Breadcrumb = {
    id: string
    title: string,
    to?: RouteLocationRaw | undefined | null
}
//@todo Design better use DX
export const useBreadcrumbs = () => {
    const base = [
        {id: '_', title: 'general.dashboard', to: {name: 'index'}},
    ];
    const breadcrumbs = useState<Breadcrumb[]>('breadcrumbs', () => {
        return base
    })

    function pushBreadcrumb(breadcrumb: Breadcrumb) {
        breadcrumbs.value.push(breadcrumb)
    }

    function pushToBase(list: Breadcrumb[]) {
        breadcrumbs.value = [
            ...base,
            ...list
        ]
    }

    function resetToBase() {
        breadcrumbs.value = base
    }

    function popBreadcrumb(breadcrumb: Breadcrumb) {
        breadcrumbs.value = breadcrumbs.value.filter((bc) => bc.id !== breadcrumb.id)
    }

    return {
        breadcrumbs,
        pushBreadcrumb,
        popBreadcrumb,
        resetToBase
    }
}