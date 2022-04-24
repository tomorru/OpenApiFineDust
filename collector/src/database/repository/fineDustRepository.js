/** ***************************************************************************************************
 * 모듈명  : fineDustRepository.js
 * 내 용   : 센서데이터 데이터베이스 저장
 * 수정이력
 * ---------------------------------------------------------------------------------------------------
 * 수정자            수정내용                수정일
 * ---------------------------------------------------------------------------------------------------
 * 강병채            최초작성                2022/04/24
 *****************************************************************************************************/

import pool from '../connect/mariadb'

async function insert(conn, rec) {
    const dataTime = rec["dataTime"]==null?null:'\'' + rec["dataTime"] + '\'';
    const so2Grade = rec["so2Grade"]==null?null:'\'' + rec["so2Grade"] + '\'';
    const coFlag = rec["coFlag"]==null?null:'\'' + rec["coFlag"] + '\'';
    const khaiValue = rec["khaiValue"]==null?null:'\'' + rec["khaiValue"] + '\'';
    const so2Value = rec["so2Value"]==null?null:'\'' + rec["so2Value"] + '\'';
    const coValue = rec["coValue"]==null?null:'\'' + rec["coValue"] + '\'';
    const pm25Flag = rec["pm25Flag"]==null?null:'\'' + rec["pm25Flag"] + '\'';
    const pm10Flag = rec["pm10Flag"]==null?null:'\'' + rec["pm10Flag"] + '\'';
    const pm10Value = rec["pm10Value"]==null?null:'\'' + rec["pm10Value"] + '\'';
    const o3Grade = rec["o3Grade"]==null?null:'\'' + rec["o3Grade"] + '\'';
    const khaiGrade = rec["khaiGrade"]==null?null:'\'' + rec["khaiGrade"] + '\'';
    const pm25Value = rec["pm25Value"]==null?null:'\'' + rec["pm25Value"] + '\'';
    const no2Flag = rec["no2Flag"]==null?null: '\'' + rec["no2Flag"] + '\'';
    const no2Grade = rec["no2Grade"]==null?null:'\'' + rec["no2Grade"] + '\'';
    const o3Flag = rec["o3Flag"]==null?null:'\'' + rec["o3Flag"] + '\'';
    const pm25Grade = rec["pm25Grade"]==null?null:'\'' + rec["pm25Grade"] + '\'';
    const so2Flag = rec["so2Flag"]==null?null:'\'' + rec["so2Flag"] + '\'';
    const coGrade = rec["coGrade"]==null?null:'\'' + rec["coGrade"] + '\'';
    const no2Value = rec["no2Value"]==null?null:'\'' + rec["no2Value"] + '\'';
    const pm10Grade = rec["pm10Grade"]==null?null:'\'' + rec["pm10Grade"] + '\'';
    const o3Value = rec["o3Value"]==null?null:'\'' + rec["o3Value"] + '\'';
    // try {
        conn.query('INSERT INTO FINE_DUST(    ' +
            '    so2Grade, ' +
            '    coFlag , ' +
            '    khaiValue , ' +
            '    so2Value , ' +
            '    coValue , ' +
            '    pm25Flag ,' +
            '    pm10Flag , ' +
            '    pm10Value , ' +
            '    o3Grade , ' +
            '    khaiGrade , ' +
            '    pm25Value , ' +
            '    no2Flag , ' +
            '    no2Grade , ' +
            '    o3Flag , ' +
            '    pm25Grade , ' +
            '    so2Flag , ' +
            '    dataTime , ' +
            '    coGrade , ' +
            '    no2Value , ' +
            '    pm10Grade , ' +
            '    o3Value ) VALUES( ' +
            so2Grade + ',' +
            coFlag + ',' +
            khaiValue + ',' +
            so2Value + ',' +
            coValue + ',' +
            pm25Flag + ',' +
            pm10Flag + ',' +
            pm10Value + ',' +
            o3Grade + ',' +
            khaiGrade + ',' +
            pm25Value + ',' +
            no2Flag + ',' +
            no2Grade + ',' +
            o3Flag + ',' +
            pm25Grade + ',' +
            so2Flag + ',' +
            dataTime + ',' +
            coGrade + ',' +
            no2Value + ',' +
            pm10Grade + ',' +
            o3Value + ')');
}

async function select(conn, rec)
{
    const dataTime = '\'' + rec["dataTime"] + '\'';
    const recs = await conn.query('SELECT dataTime FROM FINE_DUST WHERE dataTime = ' + dataTime);

    if ( recs != null && recs.length >0 && recs[0]["dataTime"].length) {
        return true;
    } else {
        return false;
    }
}

export async function updateData(records) {
    const conn = await pool.getConnection();
    for (const rec of records) {
        const selected = await select(conn, rec);
        if ( !selected ) {
            await insert(conn, rec);
        }
    }
    await conn.release();

    return records.length;
}

