import axios from 'axios'
import { ITVMazeData } from '../entity/TVMazeData'


const tvmazeBaseURL: string = 'http://api.tvmaze.com/search/shows?q='

export const getTVMazeData = (
  serachWords: string,
  afterTVMazeDataFetchComplete: (errorMsg: string, tvMazeData: ITVMazeData[]) => void): void => {

  console.log(serachWords)
  const pResult = axios.get(`${tvmazeBaseURL}${serachWords}`)

  pResult.then(p => afterTVMazeDataFetchComplete('', p.data)).catch(err => afterTVMazeDataFetchComplete(err, []))
}
