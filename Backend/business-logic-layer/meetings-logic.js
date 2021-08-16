const dal = require("../data-access-layer/dal");

async function getAllTeamsAsync() {
    const sql = "SELECT * FROM teams";
    const teams = await dal.executeAsync(sql);
    return teams;
}



async function getMeetingPerTeamAsync(teamId) {
    const sql = `SELECT M.*, name FROM meetings AS M JOIN teams AS T
     ON M.teamId = T.teamId WHERE M.teamId = ${teamId}`;
    const movies = await dal.executeAsync(sql);
    return movies;
}

async function addMeetingAsync(meetings) {
    const sql = "INSERT INTO meetings VALUES(DEFAULT, ?, ?, ?, ?, ?)"; 
    const info = await dal.executeAsync(sql, [meetings.teamId, meetings.startTime, meetings.endTime, meetings.meetingRoom, meetings.description ]);
    meetings.meetingId = info.insertId; 
    return meetings;
}

module.exports = {
    getAllTeamsAsync,
    getMeetingPerTeamAsync,
    addMeetingAsync
};
