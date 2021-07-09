;( async () => {
	let response = await request('/balance', 'GET')
	let tr = document.createElement('tr')
	let total = document.createElement('td')
	let totalEX = document.createElement('td')
	let totalIn = document.createElement('td')

	total.textContent = response.totalMoney
	totalEX.textContent = response.totalExpanse
	totalIn.textContent = response.totalIncome

	tr.append(totalEX)
	tr.append(totalIn)
	tr.append(total)

	table.append(tr)

} )()
