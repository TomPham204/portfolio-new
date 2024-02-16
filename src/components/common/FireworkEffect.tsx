interface FireworkEffectProps {
	isShow: boolean;
}

const FireworkEffect = (props: FireworkEffectProps) => {
	return (
		<span
			id="firework-wrapper"
			className={
				"overflow-hidden scrollbar-hide" +
				(props.isShow ? " block" : " hidden")
			}
		>
			<div className="firework"></div>
			<div className="firework"></div>
			<div className="firework"></div>
			<div className="firework"></div>
			<div className="firework"></div>
			<div className="firework"></div>
		</span>
	);
};

export default FireworkEffect;
