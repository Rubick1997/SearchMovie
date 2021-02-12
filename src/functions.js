export const formatDate = (string) => {
	if (string === "") {
		return null;
	} else {
		let options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(string).toLocaleDateString([], options);
	}
};

export const fullDate = (string) => {
	let options = { year: "numeric", month: "numeric", day: "numeric" };
	return new Date(string).toLocaleDateString([], options);
};

export const getYear = (string) => {
	return new Date(string).getFullYear();
};


export const convertTime = (num) => {
	if (num > 60) {
		let hours = Math.floor(num / 60);
		let min = Math.ceil((num / 60 - hours) * 60);
		return hours + "h " + min + "m";
	} else if (num === 60 || Number.isInteger(num / 60)) {
		let hours = num / 60;
		return hours + "h";
	} else {
		for (let i in num) {
			return num[i] + "m";
		}
	}
};
