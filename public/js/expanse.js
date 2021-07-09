async function renderExpanse () {
	let expanse = await request('/expanse', 'GET')
	table.innerHTML = null
	let header = `
	<tr class="table-header">
			<th>N</th>
			<th>Maqsad</th>
			<th>Summa</th>
			<th>Vaqt</th>
			<th>O'chirish</th>
	</tr>`
	table.innerHTML = header
	let i = 1
	for(let inc of expanse) {
		let tr = document.createElement('tr')
		let n = document.createElement('td')
		let purpose = document.createElement('td')
		let cost = document.createElement('td')
		let date = document.createElement('td')
		let buttonWrapper = document.createElement('td')
		let button = document.createElement('button')

		tr.setAttribute('data-id', inc.id)
		button.textContent = 'X'
		n.textContent = i++
		purpose.textContent = inc.purpose
		cost.textContent = '$' + inc.cost
		date.textContent = inc.date

		buttonWrapper.append(button)
		tr.append(n)
		tr.append(purpose)
		tr.append(cost)
		tr.append(date)
		tr.append(buttonWrapper)

		table.append(tr)

		button.onclick = async (event) => {
			let deleted = await request('/expanse', 'DELETE', { id: inc.id })
			renderExpanse()
		}
	}
}



form.onsubmit = async (event) => {
	event.preventDefault()
	let obj = {
		purpose: purpose.value,
		cost: cost.value,
	}

	let response = await request('/expanse', 'POST', obj)
	if(response) {
		renderExpanse()
	}
}

renderExpanse()
