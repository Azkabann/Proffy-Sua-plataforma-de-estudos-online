module.exports = async function(db, {proffyValue, classValue, classScheduleValues }) {
    //inserir dados na table teachers
    /*cada inserção de dados demora um certo tempo para
    ser executada por isso deve se usar o ".then()" */
    //eu digo: db rode uma coisa pra mim
    //db diz: olha, eu vou tentar, se eu conseguir dai então faço tanana tanana tanana
    // codigo da conversa a cima: db.run().then()... para evitar isso use "await"
    //MAS PARA SE USAR O "await" numa funça o nome dela deve ser precedida de "async"
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffys_id = insertedProffy.lastID

    //inserir dados na table classes

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffys_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffys_id}"
            );
    `)

    const class_id = insertedClass.lastID

    //inserir dados na tabela class_schedule
    //o map faz a mesma coisa do forEach
    //o forEach não se faz return
    //no map se faz o return
    const insertedAllClassesScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO classes_schedule(
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );

        `)
    })

    //Aqui vamos executar todos os db.run() das class_schedules
    await Promise.all(insertedAllClassesScheduleValues)
}