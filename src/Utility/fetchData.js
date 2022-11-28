export const exerciseOption = {
    // method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    // headers: {
    //     'X-RapidAPI-Host' : 'exercisedb.p.rapidapi.com',
    //     'X-RapidAPI-Key' : '60462f7e47msh993a03f5841437ap10932djsnf8c9859f311d'
    //     // process.env.REACT_APP_RAPID_API_KEY
    // }
     method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '60462f7e47msh993a03f5841437ap10932djsnf8c9859f311d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '60462f7e47msh993a03f5841437ap10932djsnf8c9859f311d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}


export const fetchData = async (url, options) =>{
    const response = await fetch (url, options)
    const data = await response.json();
    return data;
}