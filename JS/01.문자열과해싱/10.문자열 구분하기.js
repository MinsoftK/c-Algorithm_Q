function solution(s) {
	let answer, i;
	for (i = 0; i < s[0].length; i++) {
		let hash = new Map();
		let flag = true;
		for (let j = 0; j < s.length; j++) {
			let x = s[j].substring(0, i + 1);
			if (hash.has(x)) {
				flag = false;
				break;
			}
			hash.set(x, 1);
		}
		if (flag) break;
	}
	console.log('j', j);
	answer = i + 1;
	return answer;
}

console.log(solution(['seeasue', 'sesseysu', 'semeas']));
// console.log(solution(['ackky', 'kabck', 'yokkcs']));
// console.log(solution(['longlong', 'longtong', 'longbig']));
