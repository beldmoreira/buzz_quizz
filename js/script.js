const API ="https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
const firstScreen = document.querySelector(".first-screen");
const lastScreen = document.querySelector(".last-screen");

const CreateQuizz=()=>{
lastScreen.classList.remove("hidden");
firstScreen.classList.add("hidden");
}

function getQuizzes(){
    const promise= axios.get(API)
    promise.then(
        function success (result){
        for(let i= 0; i < result.data.length;i++){
            buildingQuizzLayout(result.data[i])
        }
            console.log(result)
        }
    )
    promise.catch(function error(fault){
            console.log(fault)
        }
    )
}

function getOneQuizz(quizzId){
    const promise = axios.get(`API/${quizzId}`)
    promise.then(
        function success (result){
            console.log(result)
        }
    )
    promise.catch(function error(){
        console.log()
    }
)

}

function checkingQuizzesExistence (){
    const idSerial = localStorage.getItem("Ids");
    const idDiserial = JSON.parse(idSerial);
    if(idDiserial!==null){
        if(idDiserial.length>0){
            const addMore = document.querySelector('.space-added');
            const myQuizzes=document.querySelector(".upper-box");
            const withoutQuizzes = document.querySelector('.without-quizzes');
            const creatingQuizzesButton = document.querySelector('.creation-button');
            withoutQuizzes.classList.add('hidden');
            creatingQuizzesButton.classList.add('hidden');
            myQuizzes.classList.add('blank-space');
            myQuizzes.innerHTML='';
            addMore.innerHTML=`<div class="upper-part">
            <h2>Seus Quizzes</h2>
            <img class="add-button" onclick="createQuizz()" src="assets/Frame 1.svg" alt="add-button">
            </div>
            `
            for(let i=0; i<idDiserial.length;i++){
                const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idDiserial[i]}`);
                    promise.then((response)=>{
                    ownQuizzes.innerHTML +=` 
                    <div class="myQuizzesArea">
                        <div onclick="accessQuizz(${idDiserial[i]})" class='visualize-quizz' style='background-image: 
                        linear-gradient(to top, black, transparent), url(${response.data.image})'> 
                        <p>${response.data.title}</p>
                        </div>
                        <div class="settings-quizz">
                            <svg width="25" height="24" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.88672 14.1253L8.17537 14.1107L17.536 4.83956C17.9033 4.47221 18.1055 3.98435 18.1055 3.4654C18.1055 2.94645 17.9033 2.45859 17.536 2.09124L15.9947 0.54993C15.26 -0.184768 13.9781 -0.18088 13.2493 0.547015L3.88672 9.82015V14.1253V14.1253ZM14.6205 1.92409L16.1647 3.46248L14.6127 4.99991L13.0714 3.45957L14.6205 1.92409ZM5.83036 10.6306L11.6905 4.82595L13.2318 6.36726L7.37265 12.17L5.83036 12.1749V10.6306Z" fill="white"/>
                                <path d="M1.94365 18H15.5492C16.6211 18 17.4928 17.1283 17.4928 16.0564V7.6326L15.5492 9.57625V16.0564H5.01266C4.98739 16.0564 4.96115 16.0661 4.93589 16.0661C4.90382 16.0661 4.87175 16.0573 4.8387 16.0564H1.94365V2.45085H8.59771L10.5414 0.507202H1.94365C0.871725 0.507202 0 1.37893 0 2.45085V16.0564C0 17.1283 0.871725 18 1.94365 18Z" fill="white"/>
                            </svg>
                            <svg width="25" height="28" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.846 8.03845C6.03982 8.03845 6.22569 8.11544 6.36274 8.25249C6.49978 8.38954 6.57677 8.57541 6.57677 8.76922V17.5385C6.57677 17.7323 6.49978 17.9181 6.36274 18.0552C6.22569 18.1922 6.03982 18.2692 5.846 18.2692C5.65219 18.2692 5.46632 18.1922 5.32927 18.0552C5.19223 17.9181 5.11523 17.7323 5.11523 17.5385V8.76922C5.11523 8.57541 5.19223 8.38954 5.32927 8.25249C5.46632 8.11544 5.65219 8.03845 5.846 8.03845ZM9.49985 8.03845C9.69366 8.03845 9.87954 8.11544 10.0166 8.25249C10.1536 8.38954 10.2306 8.57541 10.2306 8.76922V17.5385C10.2306 17.7323 10.1536 17.9181 10.0166 18.0552C9.87954 18.1922 9.69366 18.2692 9.49985 18.2692C9.30604 18.2692 9.12016 18.1922 8.98312 18.0552C8.84607 17.9181 8.76908 17.7323 8.76908 17.5385V8.76922C8.76908 8.57541 8.84607 8.38954 8.98312 8.25249C9.12016 8.11544 9.30604 8.03845 9.49985 8.03845ZM13.8845 8.76922C13.8845 8.57541 13.8075 8.38954 13.6704 8.25249C13.5334 8.11544 13.3475 8.03845 13.1537 8.03845C12.9599 8.03845 12.774 8.11544 12.637 8.25249C12.4999 8.38954 12.4229 8.57541 12.4229 8.76922V17.5385C12.4229 17.7323 12.4999 17.9181 12.637 18.0552C12.774 18.1922 12.9599 18.2692 13.1537 18.2692C13.3475 18.2692 13.5334 18.1922 13.6704 18.0552C13.8075 17.9181 13.8845 17.7323 13.8845 17.5385V8.76922Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 4.38462C19 4.77224 18.846 5.14399 18.5719 5.41808C18.2978 5.69217 17.9261 5.84615 17.5385 5.84615H16.8077V19C16.8077 19.7752 16.4997 20.5187 15.9515 21.0669C15.4034 21.6151 14.6599 21.9231 13.8846 21.9231H5.11538C4.34014 21.9231 3.59664 21.6151 3.04846 21.0669C2.50027 20.5187 2.19231 19.7752 2.19231 19V5.84615H1.46154C1.07391 5.84615 0.702166 5.69217 0.428075 5.41808C0.153983 5.14399 0 4.77224 0 4.38462V2.92308C0 2.53545 0.153983 2.1637 0.428075 1.88961C0.702166 1.61552 1.07391 1.46154 1.46154 1.46154H6.57692C6.57692 1.07391 6.73091 0.702166 7.005 0.428075C7.27909 0.153983 7.65084 0 8.03846 0L10.9615 0C11.3492 0 11.7209 0.153983 11.995 0.428075C12.2691 0.702166 12.4231 1.07391 12.4231 1.46154H17.5385C17.9261 1.46154 18.2978 1.61552 18.5719 1.88961C18.846 2.1637 19 2.53545 19 2.92308V4.38462ZM3.82631 5.84615L3.65385 5.93238V19C3.65385 19.3876 3.80783 19.7594 4.08192 20.0335C4.35601 20.3076 4.72776 20.4615 5.11538 20.4615H13.8846C14.2722 20.4615 14.644 20.3076 14.9181 20.0335C15.1922 19.7594 15.3462 19.3876 15.3462 19V5.93238L15.1737 5.84615H3.82631ZM1.46154 4.38462V2.92308H17.5385V4.38462H1.46154Z" fill="white"/>
                            </svg>
                        </div>
                    </div>`  
                     });
                     promise.catch((response)=>{
                         console.log("Erro - Seus Quizzes");
                     });   
            }
        }
        
    }

}
checkingQuizzesExistence();
  
function buildingQuizzLayout(quizz){
    const card = document.createElement("div"); 
    const quizzImage = `<img class="quizz-image" src ="${quizz.image}">`;
    const colorChanges = `<div class ="color-changes"> </div>`;
    card.setAttribute("data-identifier","quizz-card");
    card.classList.add("quizz-card");
    const title = `<p class ="quizzes-titles font">${quizz.title}</p>`;
    let quizzSpace = document.querySelector(".quizzes");
    card.innerHTML= `${colorChanges} ${quizzImage} ${title} `;
    card.onclick = function (){
        // startquizz(quizz.id)
    }
    quizzSpace.appendChild(card);

    setTimeout(()=>{
        // document.querySelector(".loading-screen").classList.add("hidden");
        document.querySelector(".first-screen").classList.remove("hidden");
    }, 1000);

}
function storeKey(id, key){
    let gettingKey = localStorage.getItem('key')
    let keys;
    if(gettingKey == null){
        keys = {}
    }
    else{
        keys = JSON.parse(gettingKey)
    }
    keys[id] = key 
    const keysStr = JSON.stringify(keys)
    localStorage.setItem('key',keysStr)
}

getQuizzes();