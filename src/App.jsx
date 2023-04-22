import './app.css';

import { images } from './assets';

const { imgPlcHldr, male, cake, syringe, owner, pin, facebook, whatsapp, instagram } = images;

function App() {
	return (
		<>
			<main className="container">
				<div className="img-container">
					<img src={imgPlcHldr} alt="Pet Img" />
				</div>

				<div className="cintaExtravio">
					<strong>EXTRAVIADA</strong>
				</div>

				<div className="info-container">
					<div className="info-name">
						<span> &nbsp; </span>
						<p>Chloë</p>
						<img src={male} alt="male sign" />
					</div>
					<div className="info-text info-birth">
						<img src={cake} alt="cake icon" />
						<p>23/3/2018</p>
					</div>
					<div className="info-text info-castity">
						<img src={syringe} alt="syringe icon" />
						<p>Castrada / Medicada</p>
					</div>
					<div className="info-text info-owner">
						<img src={owner} alt="owner icon" />
						<strong>Julian Arregui</strong>
					</div>

					<div className="info-text info-location">
						<img src={pin} alt="pin icon" />
						<p>
							<strong>Mercedes, Soriano</strong>
						</p>
					</div>
				</div>
				<div className="redes-container">
					<img src={facebook} alt="Facebook Logo" />
					<img src={whatsapp} alt="Whatsapp Logo" />
					<img src={instagram} alt="Instagram Logo" />
				</div>
			</main>
		</>
	);
}

export default App;
