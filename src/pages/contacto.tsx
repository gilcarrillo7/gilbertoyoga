import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import axios from "axios";
import { navigate } from "gatsby";

const CloseButton = ({ onClick }: { onClick: () => void }) => (
	<button
		className={`absolute 2xl:mr-16 xl:mr-12 lg:mr-8 sm:mr-0 mr-2 right-0 top-2 sm:top-4 w-9 h-12 focus:outline-none bg-transparent transition duration-200 ease-in-out z-30 text-black`}
		onClick={onClick}
	>
		<span className="sr-only">Menu</span>
		<span
			aria-hidden="true"
			className={`block absolute h-1 w-7 bg-black transform transition duration-500 ease-in-out rotate-45`}
		></span>
		<span
			aria-hidden="true"
			className={`block absolute h-1 w-7 bg-black transform  transition duration-500 ease-in-out -rotate-45`}
		></span>
	</button>
);

const BotonSiguiente = ({
	text,
	action,
	type = "button",
}: {
	text: string;
	action: () => void;
	type?: "button" | "submit" | "reset";
}) => (
	<button
		onClick={action}
		type={type}
		className="border bg-black border-black text-white rounded-lg p-1 mt-4 w-36 text-base"
	>
		{text}
	</button>
);

const DivQuestion = (props: {
	children: boolean | React.ReactFragment | React.ReactPortal | React.ReactNode;
	curr?: boolean;
	prev?: boolean;
	next?: boolean;
}) => {
	const { curr = false, prev = false, next = false } = props;
	return (
		<div
			className={`${curr ? "!left-0 !top-1/2 !opacity-100" : ""} ${
				prev ? "!left-0 !-top-[150%] !opacity-100" : ""
			} ${
				next ? "!left-0 !top-[150%] !opacity-100" : ""
			} absolute -left-[200%] top-[150%] -translate-y-1/2 font-light opacity-0 transition-all duration-1000 ease-in-out -mt-16 sm:mt-0 w-full flex justify-center`}
		>
			<div className="flex flex-col items-center w-full sm:w-1/2 gap-2">
				{props.children}
			</div>
		</div>
	);
};

const Contacto = () => {
	/*
	useEffect(() => {
		const lazyApp = import("firebase/firebase");

		Promise.all([lazyApp]).then(([firebase]) => {
			getFirebase(firebase).analytics().logEvent("Contacto Visitado");
		});
	}, []);*/
	const inputClass =
		"bg-transparent text-black !border-b !border-b-black !outline-none text-center w-4/5 md:w-1/2 placeholder:text-black";
	const [currpregunta, setCurrpregunta] = useState(1);
	const [progress, setProgress] = useState(0);
	const [transiting, setTransiting] = useState(false);
	const [error, setError] = useState(true);
	const [errorMail, setErrorMail] = useState(false);
	const [focused, setFocused] = useState(false);

	const inputNombre = useRef(null);
	const inputMail = useRef(null);

	const [formulario, handleFormulario] = useState({
		nombre: "",
		mail: "",
		comentarios: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		var str = e.target.value;

		handleFormulario({
			...formulario,
			[e.target.name]: e.target.value,
		});

		if (str.trim() === "") {
			setError(true);
			return;
		} else {
			setError(false);
		}
	};
	const handleMail = (e: ChangeEvent<HTMLInputElement>) => {
		var str = e.target.value;
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		handleFormulario({
			...formulario,
			[e.target.name]: e.target.value,
		});

		if (str.trim() === "") {
			setError(true);
			return;
		}
		if (!re.test(String(str).toLowerCase())) {
			setErrorMail(true);
			return;
		}

		setError(false);
		setErrorMail(false);
	};

	const validateString = (str: string) => {
		if (str.trim() === "") {
			return;
		}
		setCurrpregunta(currpregunta + 1);
	};
	const validateMail = (str: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (str.trim() === "") {
			setError(true);
			return;
		}
		if (!re.test(String(str).toLowerCase())) {
			setErrorMail(true);
			return;
		}
		setError(false);
		setErrorMail(false);
		setCurrpregunta(currpregunta + 1);
	};

	const [serverState, setServerState] = useState<{
		submitting: boolean;
		status: boolean | null;
		msg: string;
	}>({
		submitting: false,
		status: null,
		msg: "",
	});
	const handleServerResponse = (ok: boolean, msg: string) => {
		setServerState({
			submitting: true,
			status: ok,
			msg: msg,
		});
	};
	const handleOnSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const form = event.target as unknown as HTMLFormElement;
		setServerState({
			submitting: true,
			status: null,
			msg: "",
		});

		axios({
			method: "post",
			url: "",
			data: new FormData(form),
		})
			.then((r) => {
				handleServerResponse(true, "OK!");
			})
			.catch((r) => {
				handleServerResponse(false, r.response.data.error);
			});
	};

	useEffect(() => {
		setError(true);
		setErrorMail(false);
		setTransiting(true);
		setTimeout(function () {
			setTransiting(false);
		}, 1600);
	}, [currpregunta]);

	useEffect(() => {
		let percentage = 0;
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (formulario.nombre.trim() !== "") percentage += 35;
		if (
			formulario.mail.trim() !== "" &&
			re.test(String(formulario.mail.trim()).toLowerCase())
		)
			percentage += 35;
		if (formulario.comentarios.trim() !== "") percentage += 30;

		setProgress(percentage);
	}, [formulario]);

	return (
		<div className="w-screen h-screen fixed bg-yellow text-black overflow-hidden text-xl sm:text-2xl font-light">
			<div className="fixed relative container">
				<CloseButton
					onClick={() => {
						navigate(-1);
					}}
				/>
			</div>

			{serverState.status ? (
				<div className="fixed relative w-screen h-screen">
					<div className="w-full h-full flex items-center justify-center text-center">
						<div>
							<h1>!Muchas gracias por tu mensaje!</h1>
							<p className="p-2 font-bold">
								Pronto me pondré en contacto contigo.
							</p>
							<p className="p-3">Namasté</p>
							<BotonSiguiente text={"Volver"} action={() => navigate(-1)} />
						</div>
					</div>
				</div>
			) : (
				<>
					{currpregunta === 1 ? (
						<p className="absolute left-1/2 -translate-x-1/2 top-4 text-3xl sm:text-5xl font-medium">
							¡Hola!
						</p>
					) : null}
					<form className="w-full" onSubmit={handleOnSubmit}>
						<DivQuestion curr={currpregunta === 1} prev={currpregunta === 2}>
							<label className="font-medium" htmlFor="nombre">
								1. ¿Cuál es tu nombre?
							</label>
							<input
								type="text"
								aria-label="NombreContacto"
								placeholder={"Escribe aquí tu respuesta"}
								className={inputClass}
								ref={inputNombre}
								name="nombre"
								onChange={handleChange}
								onFocus={() => setFocused(true)}
								onBlur={() => setFocused(false)}
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										const target = e.target as HTMLTextAreaElement;
										validateString(target.value);
									}
								}}
							/>
							{!error && (
								<BotonSiguiente
									action={() => setCurrpregunta(2)}
									text="Aceptar"
								/>
							)}
						</DivQuestion>
						<DivQuestion
							curr={currpregunta === 2}
							prev={currpregunta === 3}
							next={currpregunta === 1}
						>
							<label className="font-medium" htmlFor="mail">
								2. ¿Cuál es tu correo electrónico?
							</label>
							<input
								className={inputClass}
								type="mail"
								aria-label="Mail"
								placeholder={"nombre@ejemplo.com"}
								ref={inputMail}
								name="mail"
								onChange={handleMail}
								onFocus={() => setFocused(true)}
								onBlur={() => setFocused(false)}
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										const target = e.target as HTMLTextAreaElement;
										validateString(target.value);
									}
								}}
							/>
							{errorMail && (
								<p className="text-xs text-red">Formato de correo incorrecto</p>
							)}
							{!(error || errorMail) && (
								<BotonSiguiente
									action={() => setCurrpregunta(3)}
									text="Aceptar"
								/>
							)}
						</DivQuestion>
						<DivQuestion
							curr={currpregunta === 3}
							prev={currpregunta === 4}
							next={currpregunta === 2}
						>
							<label htmlFor="comentarios">
								3. Escribe tu mensaje, por favor.
							</label>
							<textarea
								className={`${inputClass}`}
								rows={3}
								aria-label="comentarios"
								placeholder={"Hola"}
								ref={inputMail}
								name="comentarios"
								onChange={handleChange}
								onFocus={() => setFocused(true)}
								onBlur={() => setFocused(false)}
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										const target = e.target as HTMLTextAreaElement;
										validateMail(target.value);
									}
								}}
							></textarea>

							{!error && progress === 100 && (
								<BotonSiguiente
									action={() => {}}
									text={serverState.submitting ? "Enviando" : "Enviar"}
									type="submit"
								/>
							)}
						</DivQuestion>
						{/* <DivQuestion
							curr={currpregunta === 4}
							prev={currpregunta === 5}
							next={currpregunta === 3}
						>
							<label htmlFor="compania">4. Nombre de la compañía</label>
							<input
								className={inputClass}
								type="text"
								aria-label="Ayuda"
								placeholder={"Escribe aquí tu respuesta"}
								ref={inputCompania}
								name="compania"
								onChange={handleChange}
								onFocus={() => setFocused(true)}
								onBlur={() => setFocused(false)}
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										const target = e.target as HTMLTextAreaElement;
										validateString(target.value);
									}
								}}
							/>
							{!error && (
								<BotonSiguiente
									text="Aceptar"
									action={() => setCurrpregunta(5)}
								/>
							)}
						</DivQuestion>
						<DivQuestion
							curr={currpregunta === 5}
							prev={currpregunta === 6}
							next={currpregunta === 4}
						>
							<label htmlFor="pregunta">5. ¿Cómo podemos ayudarte?</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									aria-label="animacionvideo"
									name="pregunta"
									value="animacionvideo"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-black rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									Animación y vídeo
								</div>
							</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									name="pregunta"
									aria-label="branding"
									value="branding"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-black rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									Branding
								</div>
							</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									name="pregunta"
									value="campanasdecomunicacion"
									aria-label="campanasdecomunicacion"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-black rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									Campañas de comunicación
								</div>
							</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									name="pregunta"
									value="desarrolloweb"
									aria-label="desarrolloweb"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-black rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									Desarrollo web
								</div>
							</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									name="pregunta"
									value="estrategia"
									aria-label="estrategia"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-black rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									Estrategia
								</div>
							</label>
							<label className="w-4/5 sm:w-1/2">
								<input
									type="radio"
									name="pregunta"
									value="otros"
									aria-label="otros"
									onChange={handleChangeRadio}
									className="hidden peer"
								/>
								<div className="flex items-center cursor-pointer border border-black rounded-md hover:border-tvyellow py-1 text-lg mb-1 peer-checked:bg-tvyellow peer-checked:border-tvyellow peer-checked:text-black justify-center">
									Otros
								</div>
							</label>
							{progress === 100 && (
								<BotonSiguiente
									action={() => {}}
									text={serverState.submitting ? "Enviando" : "Enviar"}
									type="submit"
								/>
							)}
						</DivQuestion> */}
					</form>
					{!focused && (
						<div className="container flex absolute bottom-24 sm:bottom-16">
							<div className="flex flex-col w-44 mr-8 text-sm font-light">
								<p className="mb-1">{progress}% completado</p>
								{/** Progreso */}
								<div className="relative">
									<div className="border border-black rounded-lg h-2 z-0"></div>
									<div className="absolute left-0 top-0 w-full w-44">
										{progress === 0 && (
											<div className={`z-10 bg-black rounded-lg h-2 w-0`}></div>
										)}
										{progress === 30 && (
											<div
												className={`z-10 bg-black rounded-lg h-2 w-1/3`}
											></div>
										)}
										{progress === 35 && (
											<div
												className={`z-10 bg-black rounded-lg h-2 w-[35%]`}
											></div>
										)}
										{progress === 60 && (
											<div
												className={`z-10 bg-black rounded-lg h-2 w-3/5`}
											></div>
										)}
										{progress === 70 && (
											<div
												className={`z-10 bg-black rounded-lg h-2 w-[70%]`}
											></div>
										)}
										{progress === 100 && (
											<div
												className={`z-10 bg-black rounded-lg h-2 w-full`}
											></div>
										)}
									</div>
								</div>
							</div>
							{currpregunta < 5 && (
								<button
									className="bg-transparent border border-black w-8 h-8 flex items-center justify-center rounded-lg mr-1"
									onClick={() => {
										setCurrpregunta(currpregunta + 1);
									}}
									disabled={transiting}
								>
									▼
								</button>
							)}
							{currpregunta > 1 && (
								<button
									className="bg-transparent border border-black w-8 h-8 flex items-center justify-center rounded-lg"
									onClick={() => {
										setCurrpregunta(currpregunta - 1);
									}}
									disabled={transiting}
								>
									▲
								</button>
							)}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Contacto;

export const Head = () => <title>Gilberto Yoga - Contacto</title>;
