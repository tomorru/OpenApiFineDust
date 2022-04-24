/** ***************************************************************************************************
 * 모듈명  : OpenApiFineDust.js
 * 내 용   : 센서데이터 openapi이용 request
 * 수정이력
 * ---------------------------------------------------------------------------------------------------
 * 수정자            수정내용                수정일
 * ---------------------------------------------------------------------------------------------------
 * 강병채            최초작성                2022/04/24
 *****************************************************************************************************/

const config = require("../../config/system-config.json")
const axios = require('axios');

export async function getOpenApiFineDustData() {
    let queryParams = config.url_data_or_kr + "?" + encodeURIComponent("serviceKey") + "=" + config.apikey_data_or_kr;
    queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("100"); /* */
    queryParams += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
    queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/
    queryParams += '&' + encodeURIComponent('stationName') + '=' + encodeURIComponent('종로구'); /* */
    queryParams += '&' + encodeURIComponent('dataTerm') + '=' + encodeURIComponent('DAILY'); /* */
    queryParams += '&' + encodeURIComponent('ver') + '=' + encodeURIComponent('1.0'); /* */
    let response;

    try {
        response = await axios.get(queryParams);
    } catch (error) {
        console.error(error);
    }

    return response.data.response.body.items;
}
