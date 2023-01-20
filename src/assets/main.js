const API = 'https://covid-193.p.rapidapi.com/statistics'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd0e97fe36msh39db050d80f29dbp1aab53jsn75f8e7d4ea9a',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

 (async () => {
     try {
         const covid = await fetchData(API);
         let view = `
     ${covid.response.map(covids => `
       <div class="group relative">
         <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
           <p class="w-full">${covids.response.population} ${covids.cases.new} </p>
         </div>
         <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
             <span aria-hidden="true" class="absolute inset-0"></span>
             ${covids.response.deaths.total}
           </h3>
         </div>
       </div>
     `).slice(0,4).join('')}
     `;
         content.innerHTML = view;
        
     } catch (error) {
         console.error(error)
     }
 })();

fetchData(API);