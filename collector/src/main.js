/** ***************************************************************************************************
 * 모듈명  : main.js
 * 내 용   : 센서데이터집적서버 메인
 * 수정이력
 * ---------------------------------------------------------------------------------------------------
 * 수정자            수정내용                수정일
 * ---------------------------------------------------------------------------------------------------
 * 강병채            최초작성                2022/04/24
 *****************************************************************************************************/

const cron =require("node-cron");
import {getOpenApiFineDustData} from "./dataserver/OpenApiFineDust";
import {updateData} from './database/repository/fineDustRepository'

cron.schedule('*/1 * * * *', function () {
    console.log(new Date() + ' : job started.' );

    const findDustData = getOpenApiFineDustData();
    findDustData.then(r => {
        const result = updateData(r);
        result.then().catch();
    });

}, undefined).start();
