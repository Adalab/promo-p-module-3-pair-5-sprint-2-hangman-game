import '../styles/components/loading.scss';

function Loading (props) {
    if (props.loading === true) {
        console.log("is loading...")
        return <span className="loading">Cargando...</span>
    } else {
        return null
    };
}

export default Loading;