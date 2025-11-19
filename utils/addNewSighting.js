import path from 'node:path'
import fs from 'node:fs/promises'
import {getData} from '../utils/getData.js'


export async function addNewSighting(){
    try{
        const sightings = await getData()
        sightings.push(newSightings)
        const pathJSON = path.join('data', 'data.json')
        await fs.writeFile(pathJSON, JSON.stringify(sightings, null, 2), 'utf8')
    }
    catch(e){
        throw new Error('Something went wrong')
    }

}