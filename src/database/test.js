const Database = require('./db.js')
const createProffy =require('./createProffy')

Database.then(async (db) => {
    //inserir dados
     proffyValue = {
         name:'Jean Fraga' ,
         avatar:'https://lh3.googleusercontent.com/KtbtHeRtArvhw5lkzHJ-mV1w4O5rrDisGFTuBT0ALgM_88mWyKRvKIqgJJgsYh_m7a4aoP9spE4l8r6_YIXouEq9NCH28oPcuQ8ReTAks3dBVHnHtt2IwUrr3kqOoqPwWNvwxvwvtWbrFe-hRlQ-KChvFijnLzLms9ZLGXCCbWtED6Dg2wle4fSrpytKbE3KfzyWVIEFfuiMyTH3fzM_aMlDEUDrf7-2XCwW5aSjxlvXAdQlXxRqBytCpd1vEVbrB1ZleATTcFJdJ3TgJkfaJ6TeMXonFp8fcmRxVXlBr6P7LSB3mCOLolCPoaFo8b90ZIL2zTnW49b3oDV7_k06yU2edeNFsYf1UV7GGWtd7AgnytRyucLmDfdM4Guk4Ro2yi1kd6BnhkHr18QVgBugixgm-BNp76_OyouMyTFeC3ANaBMDH95NqFgFbxY7ntE0d0hGPYBxBME9sEzF29Hx3MSKjoLAjsa35gVhZys6mhGAAb4JuWrREZalthO8L7KgzDXbWi0FWC8Q1RkHdcpGuuDM1SGeYfcSLWhYXlyWKvdI2yPr5cvudGsNyO3zbVYp6u8upnO7eKOJaInNw8ung5e2f2blL4h8yrimPwqsYMYzfgM4rreWLfHJIoCl1GlEhrJQ-ErhQMGAL3hXXExJCEIUuqHCLvVKI8IvxEuh1pD1GxzSwXAB6-Js4nrOpA=w888-h1923-no?authuser=0' ,
         whatsapp:'(22) 9 98702012' , 
         bio:'Desenvolvedor Web' ,
     }

     classValue = {
         subject: 1 ,
         cost: '20',
        // o proffy ID vai vim pelo banco de dados
     }

     classScheduleValues = [
         //class_id virá pelo banco de dados após cadastrar a class
         {
             weekday: 1,
             time_from: 720,
             time_to:1220
         },
         {
            weekday: 0,
            time_from: 520,
            time_to:1220  
         }
     ]

     //await createProffy(db,{proffyValue, classValue, classScheduleValues})

    //consultar dados

    //todos os proffys
     const selectedProffys = await db.all("SELECT * FROM proffys")
     //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffys_id = proffys.id)
        WHERE classes.proffys_id =  10 ;
    `)
     //console.log(selectClassesAndProffys)
    
     //o horário que a pesoa trabalha.EX: é das 8h - 18h
     //o horário do time_from (8h) prescisa ser menor ou igual ao horário solicitado
     //o time_to precisa ser acima 
    const selectClassesSchedules = await db.all(`
        SELECT classes_schedule.*
        FROM classes_schedule
        WHERE classes_schedule.class_id =  "2" 
        AND classes_schedule.weekday = "0"
        AND classes_schedule.time_from <= "520"
        AND classes_schedule.time_to > "520"
       
    `)
    console.log(selectClassesSchedules)

})