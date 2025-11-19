import {getData} from '../utils/getData.js'
import {sendResponse} from '../utils/sendResponse.js'
import {parseJSONBody} from '../utils/parseJSONBody.js'

async function handleGet(res){
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)

}

async function handlePost(req, res){
    const rawBody = await parseJSONBody(req)
    console.log(rawBody)

}

export {handleGet, handlePost}