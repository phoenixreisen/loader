const Loader = {
    view(vnode) {
        const { type, text, iconname } = vnode.attrs;

        if(type && type === 'overlay') {
            return (
                <article class="loader loader--overlay">
                    <p class="loader__spinner">
                        <i class={`fas ${iconname || 'fa-spinner'} fa-spin`}></i><br />
                        { text || 'Daten werden geladen...' }
                    </p>
                </article>
            );
        }
        return (
            <article class="loader">
                <p class="loader__spinner">
                    <i class={`fas ${iconname || 'fa-spinner'} fa-spin`}></i>
                </p>
                <p class="loader__text">
                    { text || 'Daten werden geladen...' }
                </p>
            </article>
        );
    }
};

if(typeof module !== 'undefined') {
    module.exports = Loader;
}