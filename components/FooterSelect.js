export default function FooterSelect() {

    return (
        <form onSubmit={function(evento) {
            console.log(evento);
            }}>
            <select id="country">
                <option value="/" selected>United States</option>
                <option value="/br">Brazil</option>
            </select>
        </form>
    )
}