import {dbController} from './dbController'

const prompt: string = "CREATE TYPE status_enum AS ENUM ('pending', 'approved', 'rejected'); " +
    "CREATE TABLE Role (roleId SERIAL PRIMARY KEY, roleName VARCHAR(50) UNIQUE NOT NULL); " +
    'CREATE TABLE "User" (userId SERIAL PRIMARY KEY, username VARCHAR(100) UNIQUE NOT NULL, ' +
    "password VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE NOT NULL, firstname VARCHAR(255) NOT NULL," +
    "lastname VARCHAR(255) NOT NULL, roleId INT REFERENCES Role(roleId)); " +
    "CREATE TABLE ReportStatus (statusId SERIAL PRIMARY KEY, status status_enum); " +
    'CREATE TABLE Report (reportId SERIAL PRIMARY KEY, studentId INT REFERENCES "User"(userId), ' +
    "submissionDate timestamp NOT NULL, reportContent JSON NOT NULL, statusId INT REFERENCES ReportStatus(statusId));" +
    "CREATE TABLE UserReport (userReportId SERIAL PRIMARY KEY, mentorReviewerId INT, studentId INT, " +
    'CONSTRAINT fk_mentor_reviewer FOREIGN KEY (mentorReviewerId) REFERENCES "User"(userId), ' +
    'CONSTRAINT fk_student FOREIGN KEY (studentId) REFERENCES "User"(userId)); ' +
    "CREATE OR REPLACE FUNCTION check_mentor_reviewer_role() RETURNS TRIGGER AS $$ BEGIN " +
    'IF NOT EXISTS (SELECT 1 FROM "User" WHERE userId = NEW.mentorReviewerId ' +
    "AND roleId IN (SELECT roleId FROM Role WHERE roleName IN ('mentor', 'reviewer'))) THEN " +
    "RAISE EXCEPTION 'Mentor/Reviewer does not have the correct role'; END IF; RETURN NEW; END; " +
    "$$ LANGUAGE plpgsql; " +
    "CREATE OR REPLACE FUNCTION check_student_role() RETURNS TRIGGER AS $$ BEGIN " +
    'IF NOT EXISTS (SELECT 1 FROM "User" WHERE userId = NEW.studentId ' +
    "AND roleId IN (SELECT roleId FROM Role WHERE roleName = 'student')) THEN " +
    "RAISE EXCEPTION 'Student does not have the correct role'; END IF; RETURN NEW; END; " +
    "$$ LANGUAGE plpgsql; " +
    "CREATE TRIGGER trigger_check_mentor_reviewer_role BEFORE INSERT OR UPDATE ON UserReport " +
    "FOR EACH ROW EXECUTE FUNCTION check_mentor_reviewer_role(); " +
    "CREATE TRIGGER trigger_check_student_role BEFORE INSERT OR UPDATE ON UserReport " +
    "FOR EACH ROW EXECUTE FUNCTION check_student_role();";

export function initDB(){
    return new Promise((resolve, reject)=>{
        dbController(prompt).then((res)=>{
            resolve(res)
        }).catch((rej)=>(
            reject(rej)
        ))
    })
}
