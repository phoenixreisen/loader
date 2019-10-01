const Loader = {
    view(vnode) {
        const { type, text, iconname } = vnode.attrs;

        if(type && type === 'overlay') {
            return (
                <article class="initial-loader-overlay">
                    <p class="initial-loader-overlay__spinner">
                        <i class={`fas ${iconname || 'fa-spinner'} fa-spin`}></i><br />
                        { text || 'Daten werden geladen...' }
                    </p>
                </article>
            );
        }
        return (
            <article class="initial-loader">
                <p class="initial-loader__spinner">
                    <i class={`fas ${iconname || 'fa-spinner'} fa-spin`}></i>
                </p>
                <p class="initial-loader__text">
                    { text || 'Daten werden geladen...' }
                </p>
            </article>
        );
    }
};

if(typeof module !== 'undefined') {
    module.exports = Loader;
}