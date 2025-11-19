import {getData} from '../utils/getData.js'
import {sendResponse} from '../utils/sendResponse.js'
import {parseJSONBody} from '../utils/parseJSONBody.js'
import {addNewFighting} from '../utils/addNewFighting.js'


async function handleGet(res){
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)

}

async function handlePost(req, res){
    try{
    const parsedBody = await parseJSONBody(req)
    console.log(parsedBody)
    await addNewFighting (parsedBody)
    sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody))}
    catch(e){
        sendResponse(res, 400, 'application/json', JSON.stringify(parsedBody))

    }
}

export {handleGet, handlePost}