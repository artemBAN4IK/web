function Grade() {
    const students = [
        { name: "Артём", grade: 4 },
        { name: "Игорь", grade: 3 },
        { name: "Ярослав", grade: 4 },
        { name: "Богдан", grade: 5 },
        { name: "Денис", grade: 2 },
        { name: "Мария", grade: 4 }
    ]
    let sumGrades = 0;
    console.log("Студенты с оценкой выше 3:");
    for (let i = 0; i < students.length; i++) {
        sumGrades += students[i].grade;
        if (students[i].grade > 3) {
            console.log(students[i].name, students[i].grade);
        }
    }
    const averageGrade = sumGrades / students.length;
    console.log("Средний балл:", averageGrade.toFixed(4));
}

Grade();
