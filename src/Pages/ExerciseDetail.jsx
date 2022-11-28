import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'

import {exerciseOption,fetchData, youtubeOption} from '../Utility/fetchData'
import SimilarExercises from '../Components/SimilarExercises'
import ExerciseVideos from '../Components/ExerciseVideos'
import Detail from '../Components/Detail'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);

      const {id} =  useParams();
      console.log(id)

  useEffect(()=>{
    const fetchExercisesData = async () =>{
        const exerciseDBURL = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailData = await fetchData(`${exerciseDBURL}/exercises/exercise/${id}`, exerciseOption);
        setExerciseDetail(exerciseDetailData);
        console.log(exerciseDetailData);

      const ExerciseVideosData = await fetchData(`${youtubeSearchURL}/search?query=${exerciseDetailData.name}`,
       youtubeOption);
      setExerciseVideos(ExerciseVideosData.contents);

      const targetExercisesData = await fetchData(`${exerciseDBURL}/exercises/target/${exerciseDetailData.target}`, exerciseOption);
      setTargetMuscleExercises(targetExercisesData);
    
      const equipmentExercisesData = await fetchData(`${exerciseDBURL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOption);
      setEquipmentExercises(equipmentExercisesData);
     }; 
    fetchExercisesData();
  },[id]);


  return (
    <Box>
      <Detail  exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail