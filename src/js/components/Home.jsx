

function Temporizador({ segundos }) {
	const hrs = Math.floor(segundos / 3600);
	const mins = Math.floor((segundos % 3600) / 60);
	const secs = segundos % 60;
	const format = (n) => String(n).padStart(2, '0');
	return (
    	<div className="temporizador">
			<span className="digito">{format(hrs)}</span>
			<span className="separador">:</span>
			<span className="digito">{format(mins)}</span>
			<span className="separador">:</span>
			<span className="digito">{format(secs)}</span>
    	</div>
	);
}
export default Temporizador;