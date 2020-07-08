function dado() {
    fetch("https://reqres.in/api/users").then(res => res.json()).then(dados => {
        const dadosData = dados.data;
        for (let i = 0; i < dadosData.length; i++) {
            const getTbody = document.querySelector("tbody");
            const createTr = document.createElement("tr");
            
            for(let j = 1; j < 6; j++) {
                const createTd = document.createElement("td");
                const createTextTd = document.createTextNode("");
                let allDados = dados.data[i];

                if (j == 1) {
                    createTextTd.textContent = allDados.id;
                } else if (j == 2) {
                    createTextTd.textContent = allDados.email;
                } else if (j == 3) {
                    createTextTd.textContent = allDados.first_name;
                } else if (j == 4) {
                    createTextTd.textContent = allDados.last_name;
                } else {
                    const createLink = document.createElement("a");
  
                    const createIcon = document.createElement("i");
                    createIcon.setAttribute("class", "fab fa-buromobelexperte");

                    if (allDados.first_name.length < 5) {
                        const createIcon = document.createElement("i");
                        createIcon.setAttribute("class", "fas fa-apple-alt");
                        createTd.appendChild(createIcon);
                    } else {
                        createLink.setAttribute("href", allDados.avatar);
                        createLink.setAttribute("class", "avatar");

                        const createIcon = document.createElement("i");
                        createIcon.setAttribute("class", "fab fa-apple");

                        createTd.appendChild(createIcon);
                    }

                    createLink.appendChild(createIcon);
                    createTd.appendChild(createLink);
                }
                createTd.appendChild(createTextTd);
                createTr.appendChild(createTd);
                getTbody.appendChild(createTr);
            }    
        }
    } );
}

dado();