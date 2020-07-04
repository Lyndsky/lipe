function dado() {
    let i = 1;
    fetch("https://reqres.in/api/users").then(res => res.json()).then(dados => {
        for(dado of Object.values(dados)) {
            fetch(`https://reqres.in/api/users/${i}`).then(res => res.json()).then(dados => {
                //Create tbody
                const getTbody = document.querySelector("tbody");
                const createTr = document.createElement("tr");
                const createTh = document.createElement("th");
                createTh.setAttribute("scope", "row");
                const createTextTh = document.createTextNode((i++ - 6));
                createTh.appendChild(createTextTh);
                createTr.appendChild(createTh);
                getTbody.appendChild(createTr);
                for(let j = 1; j < 6; j++) {
                    const createTd = document.createElement("td");
                    const createTextTd = document.createTextNode("");
                    if (j == 1) {
                        createTextTd.textContent = Object.values(dados)[0].id;
                    } else if (j == 2) {
                        createTextTd.textContent = Object.values(dados)[0].email;
                    } else if (j == 3) {
                        createTextTd.textContent = Object.values(dados)[0].first_name;
                    } else if (j == 4) {
                        createTextTd.textContent = Object.values(dados)[0].last_name;
                    }
                    else{
                        const createLink = document.createElement("a");
                        createLink.style.transition = "0.3s ease-in";

                        const createIcon = document.createElement("i");
                        createIcon.setAttribute("class", "fab fa-buromobelexperte");

                        if (Object.values(dados)[0].first_name.length < 5) {
                            const createIcon = document.createElement("i");
                            createIcon.setAttribute("class", "fas fa-apple-alt");
                            createTd.appendChild(createIcon);
                        } else {
                            createLink.setAttribute("href", Object.values(dados)[0].avatar);
                            createLink.setAttribute("class", "avatar");

                            const createIcon = document.createElement("i");
                            createIcon.setAttribute("class", "fab fa-apple");

                            createIcon.style.fontSize = "30px";
                            createTd.appendChild(createIcon);
                        }

                        createLink.appendChild(createIcon);
                        createTd.appendChild(createLink);
                    }  

                    createTd.appendChild(createTextTd);
                    createTr.appendChild(createTd);
                    getTbody.appendChild(createTr);
                }
            } );
            i++;
        }
    } );
}

dado();
