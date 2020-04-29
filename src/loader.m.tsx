import m from 'mithril';

export interface ILoaderAttrs {
    type?: string;
    text?: string;
    iconname?: string;
};

export const Loader: m.Component<ILoaderAttrs> = {

    view({attrs}: m.Vnode<ILoaderAttrs>) {
        const {type, text, iconname} = attrs;

        if(type && type === 'overlay') {
            return (
                <article class="loader loader--overlay">
                    <p class="loader__spinner">
                        <i class={`${iconname || 'fab fa-cuttlefish'} fa-spin`}></i><br />
                        {text || 'Daten werden geladen...'}
                    </p>
                </article>
            );
        }
        return (
            <article class="loader">
                <p class="loader__spinner">
                    <i class={`${iconname || 'fab fa-cuttlefish'} fa-spin`}></i>
                </p>
                <p class="loader__text">
                    {text || 'Daten werden geladen...'}
                </p>
            </article>
        );
    }
};

export default Loader;